import "./App.css";
import Header from "./Header";
import Hospital from "./hospital";
import Doctors from "./doctors";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hospital></Hospital>
      <Doctors></Doctors>
      <Contact></Contact>
    </div>
  );
}

export default App;
