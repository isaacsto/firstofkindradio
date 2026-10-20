export type Track = {
  title: string;
  src: string;
};

const CDN = "https://d2onzhdb9m7xm6.cloudfront.net";

export const tracks: Track[] = [
  { title: "Busted Lips", src: `${CDN}/Tracks/BUSTEDLIPSMASTERNEW23.wav` },
  // { title: "Next Song", src: `${CDN}/Tracks/next-song.mp3` },
  { title: "Nightmare Girl", src: `${CDN}/Tracks/nightmaregirlmaster_redo.wav ` },
];