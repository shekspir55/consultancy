import WhatWeDo from "./common/what-we-do";
import Image from "next/image";
import LoveGuaranteed from "./love-guaranteed";
import Logo from "./logo";
import Quiz from "./quiz";
import StructuredData from "./components/StructuredData";

// website url is https://powered-by.love/

export default function Home() {
  const podcastURLs = [
    "https://www.youtube.com/embed/wOBOWZ7I-sM?si=QjOVjj-4DJUcv2ww",
    "https://www.youtube.com/embed/djQ7b6BVkd4?si=PlrK9-XzJtQxAert",
    "https://www.youtube.com/embed/Vr5ou0poKGg?si=1PTdoR50_g1ZFGQA",
    "https://www.youtube.com/embed/0aXFpO5FWlA?si=zExIV5TSctExjdRT",
    "https://www.youtube.com/embed/tm2g1EGnzGc?si=3s7H03bkSuDbNJ31",
    "https://www.youtube.com/embed/b2sAdA_mrXU?si=2bccVoHkTMc77H__",
    "https://www.youtube.com/embed/5tZUVczuvAY?si=VP8RFnq0bd5hY8II",
    "https://www.youtube.com/embed/iy-Eb3KO1kY?si=IskIHKcXCsRmUZtC",
    "https://www.youtube.com/embed/zMEOVp52Rww?si=bdVp086jqiRO_vRq",
    "https://www.youtube.com/embed/uRTBJiGAw1A?si=SUBmHcrvQELOvEKd",
    "https://www.youtube.com/embed/1yzGzf-aU2Y?si=2xGGzkoZ4Zpufjzn"
  ];

  const consultants = [
    {
      name: "Ruben Khachatryan",
      image: "/avatars/ruben.png",
      title:
        "Engineering Management, Soft Skills, Containerization, Documentation consultant",
      years: 12,
    },
    {
      name: "Marta Martirosyan",
      image:
        "https://media.licdn.com/dms/image/v2/C4E03AQHN_kRBVYvoNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1653307850422?e=1734566400&v=beta&t=RVyL31cIpcMbOqlD0CkX2ydNgiWZlmhSBkXXP_bCgbY",
      title: "Project Management, documentation consultant",
    },
    {
      name: "Andranik Khandanyan",
      image: "/avatars/andranik-k.png",
      title:
        "Engineering management, Software architecture, System performance, Backend consultant",
      years: 12,
    },
    {
      name: "Andranik Muradyan",
      image: "/avatars/andranik.png",
      title:
        "Distributed systems, Complex system design, TDD, Functional programming consultant",
      years: 18,
    },
    {
      name: "Norayr Chilingaryan",
      image: "/avatars/norayr.png",
      title:
        "Embedded systems, DevOPS, Linnux, Infarstructure, Open source consultant",
      years: 28,
    },
    {
      name: "Karen Navasardyan",
      image: "/avatars/karen.png",
      title: "Android, IOS, Native mobile architecture consultant",
      years: 10,
    },
    // {
    //   name: "Davit Mkrtychyan",
    //   image:
    //     "https://media.licdn.com/dms/image/v2/C4D03AQHwZEIzpEPAfg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1616346735550?e=1734566400&v=beta&t=zwIQ1H667UWuNfKVxtASZk2rIHi0YN5oeM6uXlRhZwI",
    //   title: "Web editor, Video editor, Web image editor consultant",
    //   years: 5,
    // },
    // {
    //   name: "Artyom Sukiasyan",
    //   image:
    //     "https://media.licdn.com/dms/image/v2/C4E03AQFT-28GAZ6vMQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1635353559312?e=1734566400&v=beta&t=KrFFGuXImS4KKE2TqNC7hLaTt76mdOmQRRSKDd_xYt0",
    //   title: "Code review consultant",
    // },
  ];

  const link = "https://cal.com/ruben-pbl/";

  return (
    <main>
      <div className="">
        <header className="hero bg-base-100 min-h-screen">
          <div className="hero-content text-center">
            <div className="container">
              <Logo className="m-auto" size="140" />
              <h1 className="text-4xl mb-5">
                <WhatWeDo />
                Software Engineering Management Consultancy
              </h1>
              <a
                className="btn btn-neutral mt-10 mb-10 md:btn-lg"
                target="_blank"
                href={link}
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

              <div className="flex justify-center m-5">
                <script
                  type="text/javascript"
                  src="https://widget.clutch.co/static/js/widget.js"
                ></script>{" "}
                <div
                  className="clutch-widget w-[215px]"
                  data-url="https://widget.clutch.co"
                  data-widget-type="14"
                  data-height="50"
                  data-nofollow="true"
                  data-expandifr="true"
                  data-scale="100"
                  data-clutchcompany-id="2439017"
                ></div>
              </div>
            </div>
            {/* <div className="avatar hidden md:flex">
            <img
              src="/ruben.png"
              className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2"
            />
          </div> */}
          </div>
        </header>
        <div className="divider"></div>
        <div className="flex justify-center m-3">
          <div className="container">
            <h2 className="text-5xl text-primary md:text-6xl font-bold mb-10 text-center">
              Our Software Engineering Consulting Services
            </h2>
            <div className="flex flex-col lg:flex-row justify-around lg:space-x-5 space-x-0 space-y-5 lg:space-y-0 mb-5">
              <div className="card bg-slate-50 text-primary-content w-30 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    Startups: non technical and for technical founders
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <ul className="list-decimal">
                    <li>Fractional CTO services</li>
                    <li>Technical Talent Acquisition</li>
                    <li>Strategic Tech Planning</li>
                    <li>Scaling your team efficiently</li>
                    <li>Technical due diligence</li>
                  </ul>
                </div>
              </div>
              <div className="card bg-slate-50 text-primary-content w-30 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    Software development agencies and service providers
                  </h2>
                  <ul className="list-decimal">
                    <li>Technical Team performance optimization</li>
                    <li>Tech Leadership Mentoring</li>
                    <li>Server cost optimization</li>
                    <li>Cost cutting and team optimizations</li>
                    <li>Embedding AI in the development lifecycle</li>
                  </ul>
                </div>
              </div>
              <div className="card bg-slate-50 text-primary-content w-30 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Non technical companies</h2>
                  <ul className="list-decimal">
                    <li>Software proposition and consultancy</li>
                    <li>Open-source alternatives for proprietary software</li>
                    <li>
                      Basic networking and security services / VPN and backup
                      systems
                    </li>
                    <li>Infrastructure setup</li>
                    <li>Build operate transfer models</li>
                  </ul>
                </div>
              </div>
            </div>
            <a
              className="btn btn-block btn-lg btn-primary"
              target="_blank"
              href={link}
            >
              Let's meet and explore your needs
            </a>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <div>
            <div className="flex justify-center text-center">
              <div className="container">
                <div className=" flex  flex-col items-center">
                  <h2 className="text-4xl lg:text-6xl font-bold m-5 text-primary ">
                    Cases
                  </h2>
                  <a
                    href="https://solicy.net/?utm_source=partnerwebsite&utm_medium=PBLConsultancy"
                    target="_blank"
                    className="m-10"
                  >
                    <Image
                      src="/logos/solicy.png"
                      width={200}
                      height={300}
                      alt="Solicy logo"
                    />
                  </a>
                </div>
                <div>
                  <h2 className="text-4xl lg:text-6xl font-bold m-5 text-primary ">
                    Journey
                  </h2>
                  <Image
                    src="/logos/our-journey.png"
                    width={3000}
                    height={300}
                    alt="Our journey logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className=" container m-auto flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-center m-5 text-primary ">
            Experienced Consultants
          </h2>
          <div className="flex md:flex-row justify-around flex-wrap">
            {consultants
              .filter(({ years }) => years)
              .map((consultant) => (
                <div className="card bg-slate-50 w-60 shadow-xl mt-5 m-1">
                  <figure>
                    <Image
                      src={consultant.image}
                      width={500}
                      height={500}
                      alt={consultant.name + " image"}
                      className="grayscale object-cover h-60 w-60"
                    />
                  </figure>
                  <div className="card-body p-5">
                    <h2 className="card-title uppercase">
                      {consultant.name.split(" ").map((n) => (
                        <>
                          {n}
                          <br />
                        </>
                      ))}
                    </h2>
                    <b>{consultant.years} Years of Experience</b>
                    <p className="capitalize">{consultant.title}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* <div className="divider"></div>
        <div className="bg-base-100 flex justify-center">
          <div className="container">
            <div className="space-y-5">
              <h2 className="text-4xl font-bold text-center text-primary ">
                The "No Problem" Challenge:
              </h2>
              <div className="text-left">
                <span>
                  <h1 className="text-xl font-bold text-center p-2"></h1>
                  <div className="font-bold">
                    You claim you don't have issues? Let's put that to the test.
                  </div>
                  <ul className="list-decimal p-5">
                    <li>We'll assess your software processes.</li>
                    <li>If we find issues you agree with, you hire us.</li>
                    <li>If not, we walk away.</li>
                  </ul>
                  <br />
                </span>
              </div>
              <a
                target="_blank"
                href={link}
                className="btn btn-secondary w-full"
              >
                Prove Us Wrong
              </a>
            </div>
          </div>
        </div> */}

        <div className="divider"></div>
        <div className="bg-base-100 flex justify-center m-3">
          <div className="container">
            <div className="space-y-5">
              <h1 className="text-4xl font-bold text-center text-primary ">
                Our Commitment
              </h1>
              <p>
                Juggling stakeholders and sales while managing your engineering
                team? Let us handle the technical details so you can focus on
                what you do best.{" "}
              </p>
              <LoveGuaranteed className="m-auto" size="250" />
              <p>
                Love Guaranteed: Not satisfied after a month? Full refund, no
                questions asked. We are that confident.
              </p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex justify-center">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold block text-center text-primary ">
              Podcasts
            </h2>
            <div className="flex justify-center">
              <a
                className="btn btn-primary m-5"
                href="https://t.me/poweredCommunity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="rounded-full"
                  src="https://cdn4.cdn-telegram.org/file/hrZo7e1juop7H8EdqftbpSWTOc8i89_Tx6shDnLbuRI-YOdYBR0Cb6p1CuMChQPHI74FDQZSbuq7poUcmK87q3s0CpjL62AcNUuXtBisi3bnB4t0pNXAg4UbvSR0pWQFslFsKvL0c1ltIfRmAfaUnCeCEzzSrY2qorGz4_yp5rmaQ2fy05dVQMWndR3e9sXD9Ypzw4HgXUD2CO1b9n_9SayE3VsjOIjN70WcLyqnLG-ItUhoyoLLDpmwEr7MsKq7NHRIacSx_xK4dU6UUbxtNb-aBy8dvcnreedH2yderapXfBwXyLCJ1UdJdvFGFbN0ZfniUM-eLZ1C48wkxsIOLw.jpg"
                  width={30}
                  alt=""
                />
                Join Our Telegram Community
              </a>
            </div>
            <div className="flex flex-wrap justify-center container">
              {podcastURLs.map((podcastURL, index) => (
                <div>
                  <h4 className="text-2xl">Podcast {index}</h4>
                  <iframe
                    key={podcastURL}
                    width="320"
                    height="150"
                    src={podcastURL}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="m-2"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div
          className="flex justify-center align-middle bg-primary min-h-screen"
          id="quiz"
        >
          <Quiz />
        </div>
        <div className="divider"></div>
        <div className="mt-5 mb-5">
          <div className="flex justify-center">
            <div className="max-w-lg">
              <div className="flex justify-center">
                <div className="card w-100 shadow-xl">
                  <div className="card-body ">
                    <h2 className="card-title">Not sure yet?</h2>
                    <p>Schedule a free call or chat with us.</p>
                    <div className="card-actions justify-end">
                      <a className="btn btn-primary" href={link}>
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
                        Let's meet
                      </a>
                      <a
                        className="btn btn-primary"
                        target="_blank"
                        href="https://www.linkedin.com/in/ruben-kh/"
                      >
                        Connect on linkedin
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer bg-primary text-neutral-content items-center p-4">
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
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://www.youtube.com/@Powered.Podcast"
            target="_blank"
            className="link"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 236 236"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current inline"
            >
              <path d="M234.33057,69.79736a23.96369,23.96369,0,0,0-14.50489-16.34619C185.55615,40.28223,130.97949,40.39209,128,40.40771c-2.978-.02392-57.55518-.126-91.8252,13.04346A23.96415,23.96415,0,0,0,21.66992,69.79639C19.083,79.72705,16,97.88574,16,128c0,30.11377,3.083,48.27246,5.66943,58.20264a23.96369,23.96369,0,0,0,14.50489,16.34619c32.80615,12.60693,84.22168,13.04541,91.167,13.04541.6206.00049.69678.00049,1.31738,0,6.95069-.00049,58.36231-.43945,91.16651-13.04541a23.96415,23.96415,0,0,0,14.50488-16.34522C236.917,176.273,240,158.11426,240,128,240,97.88623,236.917,79.72754,234.33057,69.79736Zm-72.11182,61.53076-48,32A3.99967,3.99967,0,0,1,108,160V96a3.99968,3.99968,0,0,1,6.21875-3.32813l48,32a3.99979,3.99979,0,0,1,0,6.65625Z" />
            </svg>
          </a>
          <a
            href="https://t.me/poweredCommunity"
            target="_blank"
            className="link"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current inline"
            >
              <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.3583 9.38244C11.3857 9.787 9.44177 10.6243 6.52657 11.8944C6.05318 12.0827 5.8052 12.2669 5.78263 12.4469C5.74448 12.7513 6.12559 12.8711 6.64455 13.0343C6.71515 13.0565 6.78829 13.0795 6.86327 13.1038C7.37385 13.2698 8.06068 13.464 8.41773 13.4717C8.74161 13.4787 9.1031 13.3452 9.50219 13.0711C12.226 11.2325 13.632 10.3032 13.7202 10.2831C13.7825 10.269 13.8688 10.2512 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9738 10.48C13.9361 10.641 12.4401 12.0318 11.6659 12.7515C11.4246 12.9759 11.2534 13.135 11.2184 13.1714C11.14 13.2528 11.0601 13.3298 10.9833 13.4038C10.509 13.8611 10.1532 14.204 11.003 14.764C11.4114 15.0331 11.7381 15.2556 12.0641 15.4776C12.4201 15.7201 12.7752 15.9619 13.2347 16.2631C13.3517 16.3398 13.4635 16.4195 13.5724 16.4971C13.9867 16.7925 14.3589 17.0579 14.8188 17.0155C15.086 16.991 15.362 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.382 16.6352 8.80081C16.6484 8.66228 16.6318 8.48498 16.6185 8.40715C16.6051 8.32932 16.5773 8.21842 16.4761 8.13633C16.3563 8.03911 16.1714 8.01861 16.0886 8.02C15.7125 8.0267 15.1354 8.22735 12.3583 9.38244Z" />{" "}
            </svg>
          </a>
        </nav>
      </footer>
      <StructuredData />
    </main>
  );
}
