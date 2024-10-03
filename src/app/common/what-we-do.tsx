"use client";

import { useState, useEffect } from "react";
//Move to tracking scripts

import posthog from 'posthog-js'

posthog.init('phc_FgF3J6Moe1mDVa3ed8z19wWaCsqCwrHEVeogJuedHW',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'always'
    }
)

export default function WhatWeDo() {
  const fields = [
    "optimize team structure",
    "scale the team slower",
    "cut costs on servers",
    "increase efficiency",
    "hire and build a tech team",
  ];

  const [field, setField] = useState(fields[0]);

  useEffect(() => {
    let iterator = 0;
    const interval = setInterval(() => {
      setField(fields[iterator]);

      iterator++;
      if (iterator === fields.length) {
        iterator = 0;
      }
    }, 1200);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="text-primary md:text-7xl text-5xl font-bold align-bottom flex items-end justify-center mb-5 min-h-[4lh]">
      <span className="h-30">
        You need to <br /> <div className="min-h-[2lh]">{field}</div>
      </span>
      {fields.map((field) => (
        <div className="hidden">
          You need to<br /> {field}{" "}
        </div>
      ))}
    </div>
  );
}
