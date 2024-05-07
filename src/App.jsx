import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimRoutes from "./components/AnimRoutes";



const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <AnimRoutes />
      </Router>
    </>
  );
};

export default App;