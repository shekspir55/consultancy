"use client";

import { useState, useEffect } from "react";

export default function WhatWeDo() {
  const fields = [
    "optimize team structure",
    "scale slower",
    "cut costs on servers",
    "cut costs on inefficiency",
    "hire a team"
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
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="text-primary md:text-7xl md:h-[300px] h-[140px] text-6xl font-bold align-bottom flex items-end justify-center mb-5">
      <span className="h-30">We will <br/> {field}</span>
    </div>
  );
}
