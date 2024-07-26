"use client";

import { useState, useEffect } from "react";

export default function WhatWeDo() {
  const fields = ["Software engineering", "Project", "QA", "Operations"];

  const [field, setField] = useState(fields[0]);

  useEffect(() => {
    let iterator = 0;
    const interval = setInterval(() => {
      setField(fields[iterator]);

      iterator++;
      if (iterator === fields.length) {
        iterator = 0;
      }
    }, 600);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="block text-primary md:text-9xl md:h-[300px] h-[140px] text-6xl text-center font-bold align-bottom">{field}</div>;
}
