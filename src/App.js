import "./App.css";
import Header from "./Header";
import Hospital from "./hospital";
import Doctors from "./doctors";
import Contact from "./Contact";
import Veterans from "./Veterans";
import Footer from "./Footer";

function App() {
  return (
    <div className="transition-colors duration-300 App dark:bg-black">
      <Header></Header>
      <Hospital></Hospital>
      <Doctors></Doctors>
      <Contact></Contact>
      <Veterans></Veterans>
      <Footer></Footer>
    </div>
  );
}

export default App;
