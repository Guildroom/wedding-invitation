"use client"
import { useEffect, useState } from "react";
import Welcome from "./pages/welcome";
import Wedding from "./pages/wedding";

export default function Home() {

  const [open, setOpen] = useState(false)
  useEffect(() => {

  }, [])

  return (
    <main>
      {open? <Wedding/>:<Welcome setOpen={setOpen}/> }
    </main>
  );
}
