import { useEffect, useRef, useState } from "react";
import type { Track } from "../tracks";

export default function Player({ tracks }: { tracks: Track[] }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const shouldPlay = useRef(false);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // after the track changes, start playing it
  useEffect(() => {
    if (shouldPlay.current) {
      audioRef.current?.play().catch((err) => console.error(err));
    }
  }, [current]);

  const playTrack = (i: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (i === current) {
      // same track: toggle play/pause
      if (audio.paused) audio.play();
      else audio.pause();
      return;
    }

    // new track: switch, and let the effect start it
    shouldPlay.current = true;
    setProgress(0);
    setCurrent(i);
  };

  const fmt = (s: number) =>
    `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  return (
    <div className="player">
      <audio
        ref={audioRef}
        src={tracks[current].src}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => current < tracks.length - 1 && playTrack(current + 1)}
      />

      <ul className="tracklist">
        {tracks.map((t, i) => (
          <li key={t.src}>
            <button onClick={() => playTrack(i)}>
                {/* <img src={t.cover} alt="" className="thumb" /> */}
              {i === current && playing ? "❚❚" : "▶"} {t.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="now-playing">
         <img src={tracks[current].cover} alt={tracks[current].title} className="cover" />
        <span>{tracks[current].title}</span>
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={progress}
          onChange={(e) => {
            if (audioRef.current) audioRef.current.currentTime = Number(e.target.value);
          }}
        />
        <span>{fmt(progress)} / {fmt(duration)}</span>
      </div>
    </div>
  );
}