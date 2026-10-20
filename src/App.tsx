// import AudioPlayer from "./components/Audioplayer";
// import "./App.css";

// export default function App() {
//   return (
//     <main>
//       <h1>Modern Wulf</h1>
//       <AudioPlayer
//         title="Busted Lips"
//         src="https://d2onzhdb9m7xm6.cloudfront.net/Tracks/BUSTEDLIPSMASTERNEW23.wav"
//       />
//     </main>
//   // )
// }

import Player from "./components/Player";
import { tracks } from "./tracks";
import "./App.css";

export default function App() {
  return (
    <main>
      <h1>Modern Wulf</h1>
      <Player tracks={tracks} />
    </main>
  );
}