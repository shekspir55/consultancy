import WhatWeDo from "./common/what-we-do";
import Image from "next/image";
import { Rss, Calendar, Heart, Youtube, Send } from "lucide-react";

import LoveGuaranteed from "./love-guaranteed";
import Logo from "./logo";
import Quiz from "./quiz";
import StructuredData from "./components/StructuredData";
import generatePodcastRssFeed from "./utils/podcast";

// website url is https://powered-by.love/
generatePodcastRssFeed();

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
    "https://www.youtube.com/embed/1yzGzf-aU2Y?si=2xGGzkoZ4Zpufjzn",
    "https://www.youtube.com/embed/_JmrLnbUZoU?si=t7G-nqENBDJvLRxh",
    "https://www.youtube.com/embed/VvkGY74nX5I?si=61C4uPSu3XFkKaQZ",
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

  const cases = [
    {
      name: "Solicy",
      logo: "/logos/solicy.png",
      url: "https://solicy.net/?utm_source=partnerwebsite&utm_medium=PBLConsultancy",
      width: 200,
      height: 70,
    },
    {
      name: "reArmenia",
      logo: "/logos/rearmenia.png",
      url: "https://rearmenia.am",
      width: 200,
      height: 70,
    },
    {
      name: "3n",
      logo: "/logos/3nstartups.png",
      url: "https://3nstartups.com/",
      width: 200,
      height: 70,
    },
    {
      name: "Avromic",
      logo: "/logos/avromic.png",
      url: "https://www.avromic.com/",
      width: 200,
      height: 70,
    },
  ];

  const link = "https://cal.com/ruben-pbl/";

  const spotifyLink = "https://open.spotify.com/show/1bG94ePrMOekUkWVd75x12";
  const applePodcastLink =
    "https://podcasts.apple.com/us/podcast/powered-podcast/id1789508673";
  const youtubeLink = "https://www.youtube.com/@Powered.Podcast";

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
                <Calendar className="h-6 w-6" />
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
                <div className="flex flex-col items-center">
                  <h2 className="text-4xl lg:text-6xl font-bold m-5 text-primary">
                    Cases
                  </h2>
                  <div className="flex flex-wrap justify-center">
                    {cases.map((case_) => (
                      <a
                        href={case_.url}
                        target="_blank"
                        className="m-10"
                        key={case_.name}
                      >
                        <Image
                          className="w-auto h-[70px]"
                          src={case_.logo}
                          width={case_.width}
                          height={case_.height}
                          alt={`${case_.name} logo`}
                        />
                      </a>
                    ))}
                  </div>
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
        <div className="container m-auto flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-center m-5 text-primary ">
            Experienced Consultants
          </h2>
          <div className="flex md:flex-row justify-around flex-wrap">
            {consultants
              .filter(({ years }) => years)
              .map((consultant) => (
                <div
                  className="card bg-slate-50 w-60 shadow-xl mt-5 m-1"
                  key={consultant.name}
                >
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
                        <div key={n}>
                          {n}
                          <br />
                        </div>
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
        <div className="flex justify-center" id="podcast">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold block text-center text-primary ">
              Podcast Feeds
            </h2>
            <div className="flex justify-center m-5 gap-5 w-full flex-wrap">
              <a
                href="/podcast/rss.xml"
                target="_blank"
                className="btn"
                title="RSS Feed"
              >
                <Rss size={24} className="mr-2 text-orange-500" />
                Podcast RSS Feed
              </a>
              <a
                href={spotifyLink}
                target="_blank"
                className="btn"
                title="Spotify"
              >
                <img
                  width={100}
                  src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Black-300x82.png"
                  alt=""
                />
              </a>
              <a
                href={applePodcastLink}
                target="_blank"
                className="btn"
                title="Apple Podcasts"
              >
                <img
                  className="h-[30px]"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Podcasts_%28iOS%29.svg/240px-Podcasts_%28iOS%29.svg.png"
                  alt="Apple Podcasts logo"
                />
                Apple Podcasts
              </a>
              <a
                href={youtubeLink}
                target="_blank"
                className="btn"
                title="YouTube"
              >
                <Youtube size={24} className="mr-2 text-red-500" />
                YouTube
              </a>
            </div>
            <div className="flex justify-center m-5">
              <a
                className="btn btn-secondary"
                href="https://t.me/poweredCommunity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="rounded-full"
                  src="/logos/powered-community.jpg"
                  width={30}
                  height={30}
                  alt="Powered Community Telegram logo"
                />
                Join Our Telegram Community
              </a>
            </div>
            <div className="flex flex-wrap justify-center container">
              {podcastURLs.map((podcastURL, index) => (
                <div key={index}>
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
                    className="m-2 shadow-xl"
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
                        <Calendar className="h-6 w-6" />
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
          <p>LovePowered llc {new Date().getFullYear()}</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href={youtubeLink} target="_blank" className="link">
            <Youtube className="w-8 h-8" />
          </a>
          <a
            href="https://t.me/poweredCommunity"
            target="_blank"
            className="link"
          >
            <Send className="w-8 h-8" />
          </a>
        </nav>
      </footer>
      <StructuredData />
    </main>
  );
}
