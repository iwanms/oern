"use client";

import Profile from "./profile/page";
import dynamic from "next/dynamic";
import Table from "@/components/table/page";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState([]);

  // Dynamically import the component only when needed
  const loadContent = async () => {
    setContent([]);
    // Dynamically load the ContentToAppend component
    const ContentToAppend = await import("@/components/table/page");

    setContent((prevContent) => [
      ...prevContent,
      <ContentToAppend.default key={prevContent.length} />,
    ]);
  };

  const loadContent2 = async () => {
    setContent([]);
    // Dynamically load the ContentToAppend component
    const ContentToAppend = await import("@/components/chart/page");

    setContent((prevContent) => [
      ...prevContent,
      <ContentToAppend.default key={prevContent.length} />,
    ]);
  };
  return (
    <>
      <button onClick={loadContent}>change content</button>
      <button onClick={loadContent2}>change content</button>
      <div id="contentContainer">{content}</div>
    </>
  );
}
