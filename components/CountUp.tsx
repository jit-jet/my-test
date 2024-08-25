"use client"

import { useEffect, useState } from "react";

export default function CountUp()  {
    const [secondsElapsed, setSecondsElapsed] = useState(0);
  
    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsElapsed(prevSeconds => prevSeconds + 1);
        }, 1000);
  
        return () => clearInterval(interval);  // Cleanup interval on component unmount
    }, []);
  
    return (
        <div>
            <h1>Time elapsed: {secondsElapsed} seconds</h1>
        </div>
    );
  };