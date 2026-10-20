export type Track = {
  title: string;
  src: string;
  cover: string;
};

const CDN = "https://d2onzhdb9m7xm6.cloudfront.net";

export const tracks: Track[] = [
   {
    title: "Busted Lips",
    src: `${CDN}/Tracks/BUSTEDLIPSMASTERNEW23.wav`,
    cover: `${CDN}/Cover/martyr.jpg`,
  },
  // { title: "Next Song", src: `${CDN}/Tracks/next-song.mp3` },
  { 
    title: "Nightmare Girl", 
    src: `${CDN}/Tracks/nightmaregirlmaster_redo.wav`,
    cover: `${CDN}/Cover/NG_cover.jpg`,
  },

];