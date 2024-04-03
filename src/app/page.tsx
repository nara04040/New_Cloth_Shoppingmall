"use client";

import { Button } from "@/stories/Button";
import Header from "@/stories/Header";

export default function Home() {
  return (
    <>
      <Header user={{ name: "Jane Doe" }} />
      <Button variant="filled" color="primary" size="sm" children="hi" />
    </>
  );
}
