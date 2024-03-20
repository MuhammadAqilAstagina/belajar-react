import Introduction from "./introduction/introduction";
import Profile from "./introduction/profile";

function App() {
  return (
    <div>
      <Profile />
      <h3>Introduction 1</h3>
      <p>Perkenalan serta belajar di dalam Sesi 1</p>
      <Introduction judul="2" />
      <Introduction judul="3" />
      <Introduction judul="4" />
    </div>
  );
}

export default App;
