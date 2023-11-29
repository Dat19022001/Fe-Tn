import Header from "./components/header";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer";
import AppRouters from "./config/AppRouter";
import Modal from "./components/modal";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
       <ToastContainer className="foo" />
      <Router>
     
        <Header/>
        <AppRouters/>
        <Modal/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
