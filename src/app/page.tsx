import HardBadge from "./common/hard-badge";
import SoftBadge from "./common/soft-badge";
import WhatWeDo from "./common/what-we-do";

export default function Home() {
  const steps = [
    {
      title: "Getting in touch",
      done: true,
    },
    {
      title: "Agreeing on scope",
      done: true,
    },
    {
      title: "Interviewing team members",
    },
    {
      title: "Identifying",
    },
    {
      title: "Presenting a plan of improvement",
    },
    {
      title: "Prioritizing",
    },
    {
      title: "Implementing",
    },
    {
      title: "Reiterating",
    },
  ];

  return (
    <div>
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content text-center">
          <div className="container">
            <h2 className="text-4xl mb-5">
              <WhatWeDo />
              Software engineering management and consultancy
            </h2>
            <a
              className="btn btn-neutral m-10 md:btn-lg"
              href="https://cal.com/ruben-k"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M3 9H21M7 3V5M17 3V5M6 12H10V16H6V12ZM6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Book Your Free Consultation
            </a>
            <h3>Site is under construction.</h3>
          </div>
          <div className="avatar">
            <img src="/ruben.png" className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2" />
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className=" bg-base-100">
        <div className="max-w-lg mx-auto">
          <div className="container p-3">
            <h2 className="text-5xl md:text-6xl font-bold mb-10">
              Why choose us?
            </h2>

            <p className="">
              Suggestions are not enough: We drive and own the results.
            </p>
            <div className="mt-5 mb-5">
              <h1 className="text-3xl">
                Dedicated to solving your <b>hard problems</b> - doing whatever
                it takes.
              </h1>

              <h1 className="text-3xl md:text-4xl font-bold  text-center m-5">
                <span className="text-5xl brightness-150">love,</span>
                guaranteed❤️
              </h1>

              <p>
                Love Guarantee: Fall in love with our service or it's on us. If
                you're not completely satisfied with our tailored solutions
                within the first month, we'll refund your investment, no
                questions asked. We're that confident in our ability to power
                your success with love.
              </p>
            </div>
            {/* <div className="mt-5 mb-5">
              <h3 className="text-3xl">Personalized for your needs:</h3>
              <p>
                Your engineering team and challenges are unique, and so are our
                solutions. At powered-by.love, we craft tailored strategies that
                fit your specific needs. We're here to empower your success with
                custom-built, love-powered solutions.
              </p>
            </div> */}
            {/* <div className="block">
              <div className="stats max-md:stats-vertical shadow">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-8 w-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Get</div>
                  <div className="stat-value text-primary">12+</div>
                  <div className="stat-desc">
                    year experts help you <br />
                    with your projects
                  </div>
                </div>
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-8 w-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">More than</div>
                  <div className="stat-value text-secondary">80+h</div>
                  <div className="stat-desc">
                    Spent on your projects <br />
                    and team each month
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="divider"></div> */}
      {/* <div className=" bg-base-100 min-h-screen">
        <div className="flex justify-center">
          <div className="max-w-lg p-7">
            <h2 className="text-4xl font-bold">Things we can help with.</h2>
            <br />
            <ul className="list-disc font-bold">
              <li>
                Technical Supervision and Code Review
                <HardBadge />
                <ul className="list-decimal ml-10 font-normal">
                  <li>Conducting thorough PR reviews</li>
                  <li>Providing ongoing technical supervision for projects</li>
                </ul>
              </li>
              <li>
                Project Management Improvement
                <SoftBadge />
                <HardBadge />
                <ul className="list-decimal ml-10 font-normal">
                  <li>Setting up and optimizing project management tools</li>
                  <li>Implementing Agile methodologies (e.g., Kanban)</li>
                  <li>Establishing sprint planning and review processes</li>
                </ul>
              </li>
              <li>
                Communication Enhancement
                <SoftBadge />
                <ul className="list-decimal ml-10 font-normal">
                  <li>
                    Implementing and structuring team communication platforms
                  </li>
                  <li>Setting up role-based permissions and integrations</li>
                </ul>
              </li>
              <li>
                Documentation and Knowledge Sharing
                <HardBadge />
                <ul className="list-decimal ml-10 font-normal">
                  <li>Implementing collaborative documentation tools</li>
                  <li>Creating centralized knowledge bases</li>
                  <li>Establishing documentation processes</li>
                </ul>
              </li>
              <li>
                Product management and Quality Assurance Improvement
                <HardBadge />
                <ul className="list-decimal ml-10 font-normal">
                  <li>Setting up test management systems</li>
                  <li>Creating Product Requirements Documents (PRDs)</li>
                  <li>Developing testing scenarios</li>
                </ul>
              </li>
              <li>
                CI/CD Implementation
                <HardBadge />
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
                <HardBadge />
                <ul className="list-decimal ml-10 font-normal">
                  <li>Implementing code quality analysis tools</li>
                  <li>Setting up pre-commit hooks and linters</li>
                  <li>Establishing code review guidelines</li>
                </ul>
              </li>
              <li>
                Testing Practices Optimization
                <HardBadge />
                <ul className="list-decimal ml-10 font-normal">
                  <li>Implementing unit and end-to-end testing frameworks</li>
                  <li>Introducing Test-Driven Development (TDD)</li>
                  <li>Setting code coverage requirements</li>
                </ul>
              </li>
              <li>
                Bug Tracking and Monitoring
                <HardBadge />
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
                <SoftBadge />
                <ul className="list-decimal ml-10 font-normal">
                  <li>Implementing recognition systems</li>
                  <li>Designing performance review processes</li>
                  <li>Organizing team-building activities</li>
                </ul>
              </li>
              <li>
                Leadership and Management Training
                <SoftBadge />
                <ul className="list-decimal ml-10 font-normal">
                  <li>Providing leadership trainings</li>
                  <li>Implementing 360-degree feedback systems</li>
                </ul>
              </li>
              <li>
                Organizational Structure Optimization
                <SoftBadge />
                <ul className="list-decimal ml-10 font-normal">
                  <li>Defining clear roles and responsibilities</li>
                  <li>Flattening communication structures</li>
                  <li>Creating cross-functional teams</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="divider"></div>
      <div className=" bg-base-100 p-10">
        <div className="flex justify-center">
          <div className="max-w-lg">
            <br />
            <div className="flex justify-center">
              <div className="card bg-base-100 image-full w-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Not sure yet?</h2>
                  <p>Schedule a free call or chat with us.</p>
                  <div className="card-actions justify-end">
                    <a
                      className="btn btn-primary"
                      href="https://www.linkedin.com/in/ruben-kh/"
                    >
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
                      Book Free Consultation
                    </a>
                    <a
                      className="btn btn-primary"
                      href="https://www.linkedin.com/in/ruben-kh/"
                    >
                      Contact via linkedin
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer bg-neutral text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M16.44 3.10156C14.63 3.10156 13.01 3.98156 12 5.33156C10.99 3.98156 9.37 3.10156 7.56 3.10156C4.49 3.10156 2 5.60156 2 8.69156C2 9.88156 2.19 10.9816 2.52 12.0016C4.1 17.0016 8.97 19.9916 11.38 20.8116C11.72 20.9316 12.28 20.9316 12.62 20.8116C15.03 19.9916 19.9 17.0016 21.48 12.0016C21.81 10.9816 22 9.88156 22 8.69156C22 5.60156 19.51 3.10156 16.44 3.10156Z" />
          </svg>
          <p>LovePowered llc {new Date().getFullYear()}</p>
        </aside>
      </footer>
    </div>
  );
}
