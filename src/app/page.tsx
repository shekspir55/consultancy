export default function Home() {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h2 className="text-2xl">
              Engineering, management, qa solutions for small and medium
              software engineering teams.
            </h2>
            <h1 className="text-5xl font-bold">
              We don’t only recommend but we <u>own the results.</u>
            </h1>
            <p className="py-6">PRACTICAL CONSULTING AGENCY</p>
            <a className="btn btn-primary" href="https://cal.com/ruben-k">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M3 9H21M7 3V5M17 3V5M6 12H10V16H6V12ZM6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Book Your Free Consultation
            </a>
          </div>
        </div>
      </div>
      <div className=" bg-base-200 min-h-screen">
        <div className="flex justify-center">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold">Things we can help with.</h2>
            <br />
            <ul className="list-disc font-bold">
              <li>
                Technical Supervision and Code Review
                <ul className="list-decimal ml-10 font-normal">
                  <li>Conducting thorough PR reviews</li>
                  <li>Providing ongoing technical supervision for projects</li>
                  <li>Offering code architecture guidance</li>
                </ul>
              </li>
              <li>
                Project Management Implementation
                <ul className="list-decimal ml-10 font-normal">
                  <li>Setting up and optimizing project management tools</li>
                  <li>Implementing Agile methodologies (e.g., Kanban)</li>
                  <li>Establishing sprint planning and review processes</li>
                </ul>
              </li>
              <li>
                Communication Enhancement
                <ul className="list-decimal ml-10 font-normal">
                  <li>
                    Implementing and structuring team communication platforms
                  </li>
                  <li>Setting up role-based permissions and integrations</li>
                </ul>
              </li>
              <li>
                Documentation and Knowledge Sharing
                <ul className="list-decimal ml-10 font-normal">
                  <li>Implementing collaborative documentation tools</li>
                  <li>Creating centralized knowledge bases</li>
                  <li>Establishing documentation processes</li>
                </ul>
              </li>
              <li>
                Quality Assurance Improvement
                <ul className="list-decimal ml-10 font-normal">
                  <li>Setting up test management systems</li>
                  <li>Creating Product Requirements Documents (PRDs)</li>
                  <li>Developing testing scenarios</li>
                </ul>
              </li>
              <li>
                CI/CD Implementation
                <ul className="list-decimal ml-10 font-normal">
                  <li>
                    Setting up continuous integration and deployment pipelines
                  </li>
                  <li>Implementing automated builds, tests, and deployments</li>
                  <li>Establishing feature flag systems</li>
                </ul>
              </li>
              <li>
                Code Quality Enhancement
                <ul className="list-decimal ml-10 font-normal">
                  <li>Implementing code quality analysis tools</li>
                  <li>Setting up pre-commit hooks and linters</li>
                  <li>Establishing code review guidelines</li>
                </ul>
              </li>
              <li>
                Testing Practices Optimization
                <ul className="list-decimal ml-10 font-normal">
                  <li>Implementing unit and end-to-end testing frameworks</li>
                  <li>Introducing Test-Driven Development (TDD)</li>
                  <li>Setting code coverage requirements</li>
                </ul>
              </li>
              <li>
                Bug Tracking and Monitoring
                <ul className="list-decimal ml-10 font-normal">
                  <li>
                    Implementing bug tracking and user behavior monitoring tools
                  </li>
                  <li>
                    Establishing bug reporting and prioritization processes
                  </li>
                </ul>
              </li>
              <li>
                Employee Engagement and Culture Building
                <ul className="list-decimal ml-10 font-normal">
                  <li>Implementing recognition systems</li>
                  <li>Designing performance review processes</li>
                  <li>Organizing team-building activities</li>
                </ul>
              </li>
              <li>
                Leadership and Management Training
                <ul className="list-decimal ml-10 font-normal">
                  <li>Providing executive coaching</li>
                  <li>Implementing 360-degree feedback systems</li>
                </ul>
              </li>
              <li>
                Organizational Structure Optimization
                <ul className="list-decimal ml-10 font-normal">
                  <li>Defining clear roles and responsibilities</li>
                  <li>Flattening communication structures</li>
                  <li>Creating cross-functional teams</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
