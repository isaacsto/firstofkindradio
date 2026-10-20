import { useRef, useState } from "react";
import type { Track } from "../tracks";

export default function Player({ tracks }: { tracks: Track[] }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const playTrack = (i: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (i === current) {
      playing ? audio.pause() : audio.play();
      return;
    }
    setCurrent(i);
    audio.src = tracks[i].src;
    audio.play();
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
              {i === current && playing ? "❚❚" : "▶"} {t.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="now-playing">
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