"use client";

import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, Mail, XCircle } from "lucide-react";
import Logo from "./logo";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [email, setEmail] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastContent, setToastContent] = useState("");
  const [outcome, setOutcome] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const quizTitle = "PBL Company Assessment Quiz";
  const toastMessage = "Please select at least one option before proceeding.";
  const logoUrl =
    "https://media.licdn.com/dms/image/v2/D4D0BAQF96mDjWzlQHQ/company-logo_100_100/company-logo_100_100/0/1729589831846/poweredby_love_logo?e=1739404800&v=beta&t=DaEEwGAAY-kGOtUtM21r0f7dLnDMN97YJN45c0UZ8TE";
  const bottomImageUrl =
    false &&
    "https://yt3.googleusercontent.com/e0PHBjUX4qzUk12G-1BT9HjAqf5uGiE7fRC5-ntqWTQHsRbz5TMl7yXOUhtjhIc-rIlxrFJAXN8=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj";
  const bottomImageAltText = "Bottom image";
  const toastTimeout = 40000;
  const enterEmailText =
    "Enter your email if you wish to receive quizzes or get tips from us.";

  const outcomes = [
    {
      id: "highPerforming",
      codeName: "Project Quantum ⚡",
      description:
        "Your team shows strong engineering practices! Still, there's always room for optimization.",
      tips: [
        "Consider implementing advanced CI/CD practices",
        "Look into AI-powered code review tools",
        "Experiment with team rotation for knowledge sharing",
        "Invest in advanced monitoring and observability",
        "Consider introducing innovation time",
      ],
      callToAction:
        "Want to explore how to take your high-performing team to the next level? Let's chat!",
    },
    {
      id: "goodWithGaps",
      codeName: "Operation Horizon 🌅",
      description:
        "Your team has solid foundations with some areas for improvement.",
      tips: [
        "Strengthen your code review process",
        "Implement automated testing strategies",
        "Document critical system components",
        "Establish clear team metrics",
        "Regular knowledge sharing sessions",
      ],
      callToAction:
        "Ready to fill these gaps and boost your team's performance? Let's discuss how!",
    },
    {
      id: "needsAttention",
      codeName: "Protocol Genesis ✨",
      description:
        "We've identified several opportunities for improving your team's efficiency.",
      tips: [
        "Start with basic CI/CD implementation",
        "Establish regular code reviews",
        "Create basic documentation structure",
        "Implement agile ceremonies",
        "Set up basic monitoring",
      ],
      callToAction:
        "Want to transform these challenges into opportunities? Let's talk about how we can help!",
    },
    {
      id: "needsSignificantHelp",
      codeName: "Initiative Aurora 💫",
      description:
        "Your team could benefit from a comprehensive review of engineering practices.",
      tips: [
        "Focus on establishing basic development workflows",
        "Start documenting critical processes",
        "Implement basic quality controls",
        "Set up team communication channels",
        "Begin tracking basic metrics",
      ],
      callToAction:
        "Ready to dramatically improve your team's productivity? Let's discuss where to start!",
    },
  ];

  const questions = [
    {
      question: "What's your software team size?",
      options: [
        { text: "1-10 people", id: "small" },
        { text: "10-30 people", id: "medium" },
        { text: "30-100 people", id: "large" },
        { text: "More than 100 people", id: "enterprise" },
      ],
      type: "single",
    },
    {
      question: "What's your team's approach to automated testing?",
      options: [
        {
          text: "Comprehensive testing strategy (TDD, unit tests, integration tests, E2E)",
          id: "highPerforming",
        },
        {
          text: "Some unit tests and integration tests, but not consistent",
          id: "goodWithGaps",
        },
        {
          text: "Basic unit tests, mostly manual testing",
          id: "needsAttention",
        },
        {
          text: "Mainly manual testing or no systematic testing",
          id: "needsSignificantHelp",
        },
      ],
      type: "single", // Can select multiple if they have different types
    },
    {
      question:
        "How many people can maintain your system if key team members leave?",
      options: [
        { text: "More than 3 people per component", id: "highPerforming" },
        { text: "2-3 people per component", id: "goodWithGaps" },
        { text: "Usually just 1 person per component", id: "needsAttention" },
        {
          text: "Critical parts depend on specific individuals",
          id: "needsSignificantHelp",
        },
      ],
      type: "single",
    },
    {
      question: "How often do your features get delayed?",
      options: [
        { text: "Never, we're always on time", id: "highPerforming" },
        { text: "Sometimes, but rarely", id: "goodWithGaps" },
        { text: "Often", id: "needsAttention" },
        { text: "Almost always", id: "needsSignificantHelp" },
      ],
      type: "single",
    },
    {
      question: "How long does it take to deploy a small change to production?",
      options: [
        { text: "Minutes", id: "highPerforming" },
        { text: "Hours", id: "goodWithGaps" },
        { text: "Days", id: "needsAttention" },
        { text: "Weeks or varies greatly", id: "needsSignificantHelp" },
      ],
      type: "single",
    },
    {
      question: "How often do you conduct code reviews?",
      options: [
        { text: "For every change", id: "highPerforming" },
        { text: "For major changes only", id: "goodWithGaps" },
        { text: "Rarely", id: "needsAttention" },
        { text: "When we have time", id: "needsSignificantHelp" },
      ],
      type: "single",
    },
    {
      question:
        "How long does it take for a new team member to start contributing meaningfully?",
      options: [
        { text: "Less than a week", id: "highPerforming" },
        { text: "1-2 weeks", id: "goodWithGaps" },
        { text: "2-4 weeks", id: "needsAttention" },
        { text: "More than a month", id: "needsSignificantHelp" },
      ],
      type: "single",
    },
    {
      question: "Which documentation types do you maintain?",
      options: [
        { text: "Technical architecture docs", id: "" },
        { text: "API documentation", id: "" },
        { text: "PRD and specifications", id: "" },
        { text: "Onboarding documentation", id: "" },
        { text: "Process documentation", id: "" },
      ],
      type: "multiple",
    },
    {
      question: "How do you track team productivity?",
      options: [
        { text: "Clear metrics and regular reviews", id: "highPerforming" },
        { text: "Basic metrics like velocity", id: "goodWithGaps" },
        { text: "Through deadlines met/missed", id: "needsAttention" },
        { text: "We don't track systematically", id: "needsSignificantHelp" },
      ],
      type: "single",
    },
    {
      question: "How do you handle technical debt?",
      options: [
        { text: "Regular dedicated time for refinement", id: "highPerforming" },
        { text: "Address it when it becomes problematic", id: "goodWithGaps" },
        { text: "Only fix when it causes issues", id: "needsAttention" },
        { text: "No systematic approach", id: "needsSignificantHelp" },
      ],
      type: "single",
    },
  ];

  const totalQuestions = questions.length;

  const handleNext = () => {
    const hasSelectedAnswer = selectedAnswers[currentQuestion];

    if (!hasSelectedAnswer) {
      setToastContent(toastMessage);
      setIsToastVisible(true);
      setTimeout(() => {
        setIsToastVisible(false);
      }, toastTimeout);
      return; // Exit early if no answer is selected
    }

    // Proceed to the next question or complete the quiz
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      determineOutcome();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleOptionChange = (questionIndex, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: {
        ...option,
        question: questions[questionIndex].question,
      },
    }));
  };

  const handleCheckboxChange = (questionIndex, option) => {
    setSelectedAnswers((prev) => {
      const currentAnswers = prev[questionIndex] || [];
      if (currentAnswers.map(({ text }) => text).includes(option.text)) {
        return {
          ...prev,
          [questionIndex]: currentAnswers.filter((a) => a.text !== option.text),
        };
      } else {
        return {
          ...prev,
          [questionIndex]: [
            ...currentAnswers,
            { ...option, question: questions[questionIndex].question },
          ],
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const form = { selectedAnswers, email };

    var data = {
      user_id: "nL5U3kggxqAK7DJpq",
      service_id: "service_fv7h0qt",
      template_id: "template_tz5fq2v",
      template_params: {},
      template_params: {
        reply_to: email,
        message: JSON.stringify(form),
        outcome,
      },
    };

    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  // New function to determine the outcome based on selected answers
  const determineOutcome = () => {
    const answers = Object.values(selectedAnswers).reduce((prev, item) => {
      if (Array.isArray(item)) {
        return [...prev, ...item];
      }
      return [...prev, item];
    }, []);

    // Generate score object dynamically from outcomes
    const score = outcomes.reduce((acc, outcome) => {
      acc[outcome.id] = 0; // Initialize each outcome score to 0
      return acc;
    }, {});

    // Calculate scores based on selected answers
    for (let answerIndex in answers) {
      const selectedValue = answers[answerIndex].id;
      if (selectedValue) {
        // Increment score based on the selected id
        score[selectedValue] = (score[selectedValue] || 0) + 1;
      }
    }

    // Determine the highest score outcome
    const highestScore = Math.max(...Object.values(score));
    const result = Object.keys(score).find(
      (key) => score[key] === highestScore
    );

    const outcome = outcomes.find((outcome) => outcome.id === result) || {
      description: "No outcome found.",
      tips: [],
      callToAction: "",
    };
    debugger;
    setOutcome(outcome);
  };

  return (
    <div className="flex flex-col justify-center">
      {isToastVisible && (
        <div
          className="toast toast-bottom toast-end z-50 cursor-pointer p-0 md:p-3"
          onClick={() => setIsToastVisible(false)}
        >
          <div className="alert alert-success">
            <span>{toastContent}</span>
          </div>
        </div>
      )}
      <div className="card bg-base-100 shadow-xl m-3">
        <div className="card-body">
          <header className="flex items-center justify-between mb-6">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-2">
                <Logo size="60" className="m-auto"/>
              </div>
            </div>
            <h1 className="card-title text-3xl font-bold text-center flex-grow pl-5">
              {quizTitle} ({currentQuestion + 1}/{totalQuestions})
            </h1>
          </header>
          <progress
            className="progress progress-primary w-full mb-6"
            value={((currentQuestion + 1) * 100) / totalQuestions}
            max="100"
          ></progress>
          {!quizCompleted ? (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">
                {questions[currentQuestion].question}
              </h2>
              <div className="space-y-2">
                {questions[currentQuestion].options.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    {questions[currentQuestion].type === "single" ? (
                      <input
                        type="radio"
                        className="radio radio-primary"
                        checked={
                          selectedAnswers[currentQuestion]?.text === option.text
                        }
                        onChange={() =>
                          handleOptionChange(currentQuestion, option)
                        }
                      />
                    ) : (
                      <>
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary"
                          checked={selectedAnswers[currentQuestion]
                            ?.map(({ text }) => text)
                            ?.includes(option.text)}
                          onChange={() =>
                            handleCheckboxChange(currentQuestion, option)
                          }
                        />
                      </>
                    )}
                    <span>{option.text}</span>
                  </label>
                ))}
              </div>
            </div>
          ) : !formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h1 className="text-lg">
                Codename:{" "}
                <span className="text-3xl font-semibold">
                  {outcome.codeName}
                </span>
              </h1>
              <h2 className="text-xl">{outcome.description}</h2>
              <ul className="list-disc p-5">
                {outcome.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
              <p>{outcome.callToAction}</p>
              <div className="form-control">
                <label className="input flex items-center gap-2 input-bordered">
                  <span>
                    <Mail className="h-5 w-5" />
                  </span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="grow"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
              </div>
              <p>We respect your privacy. No spam, ever.</p>
              <button type="submit" className="btn btn-primary w-full">
                Get Your Custom Action Plan
              </button>
            </form>
          ) : (
            <h1 className="text-2xl">
              <Check className="inline text-success" />
              The quiz has been submitted, we will contact you soon.
            </h1>
          )}
          {!quizCompleted && (
            <div className="card-actions justify-between mt-6">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="btn btn-outline btn-primary"
              >
                <ChevronLeft className="mr-2" />
                Previous
              </button>
              <button onClick={handleNext} className="btn btn-primary">
                {currentQuestion === totalQuestions - 1 ? "Finish" : "Next"}
                <ChevronRight className="ml-2" />
              </button>
            </div>
          )}
        </div>
        {bottomImageUrl ? (
          <figure>
            <img
              src={bottomImageUrl}
              alt={bottomImageAltText}
              className="w-full h-auto"
            />
          </figure>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
