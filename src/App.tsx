import "@matterport/webcomponent";

import "./App.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "matterport-viewer": any;
    }
  }
}

function App() {
  return (
    <>
      <h1>Vite + React + Matterport</h1>
      <matterport-viewer
        m="SxQL3iGyoDo"
        asset-base="assets"
        application-key="3nhn5rm8hmr1x74hsr46t7fud"
      ></matterport-viewer>
    </>
  );
}

export default App;
