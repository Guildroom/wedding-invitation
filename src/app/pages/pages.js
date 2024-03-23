"use client"
import { useEffect, useState } from "react";
import Music from "./music";
import Wedding from "./wedding";
import Welcome from "./welcome";


export default function Pages() {
  const [open, setOpen] = useState(false)
  return (
    <main>
      <Music/>
      {open? <Wedding/>:<Welcome setOpen={setOpen}/> }
    </main>
  );
}
