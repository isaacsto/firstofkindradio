type AudioPlayerProps = {
  title: string;
  src: string;
};

export default function AudioPlayer({ title, src }: AudioPlayerProps) {
  return (
    <div className="audio-player">
      <h3>{title}</h3>
      <audio controls src={src} />
    </div>
  );
}