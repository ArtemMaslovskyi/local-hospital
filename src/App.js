import "./App.css";
import Header from "./Header";
import Hospital from "./hospital";
import Doctors from "./doctors";
import Contact from "./Contact";
import Veterans from "./Veterans";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hospital></Hospital>
      <Doctors></Doctors>
      <Contact></Contact>
      <Veterans></Veterans>
    </div>
  );
}

export default App;
