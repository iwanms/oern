"use client";
import { useState, useEffect } from "react";
import "./clock.scss";

export default function Clock() {
  const [time, setTime] = useState(null); // Start with null to prevent mismatch

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour12: false })); // Only runs on the client
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  if (time === null) {
    return <div>Loading...</div>; // Display loading message until the client renders
  }

  const getCurrentDate = () => {
    const today = new Date();

    // Get year, month, and day
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed, so we add 1
    const day = String(today.getDate()).padStart(2, "0"); // Ensure two digits for day

    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <div className="jam">{time}</div>
      <div className="tanggal">{getCurrentDate()}</div>
    </>
  );
}
