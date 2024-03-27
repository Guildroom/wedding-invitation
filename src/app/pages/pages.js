"use client"
import { useEffect, useState } from "react";
import Music from "./music";
import Wedding from "./wedding";
import Welcome from "./welcome";

export const useAudio = url => {
  const [audio] = useState(typeof Audio !== "undefined" ? new Audio("/videoplayback.m4a"):'');
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    setPlaying(!playing)
  };

  useEffect(() => {
          playing ? audio?.play() : audio?.pause();
      },
      [playing]
  );

  useEffect(() => {
      audio?.addEventListener('ended', () => setPlaying(false));
      return () => {
          audio?.removeEventListener('ended', () => setPlaying(false));
      };
  }, []);

  return [playing, toggle];
};

export default function Pages() {
  const [playing, toggle] = useAudio();
  const [open, setOpen] = useState(false)
  return (
    <main>
      <Music playing={playing} toggle={toggle}/>
      {open? <Wedding/>:<Welcome toggle={toggle} setOpen={setOpen}/> }
    </main>
  );
}
