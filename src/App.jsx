import "./App.css";
import NewsLetter from "./components/NewsLetter";
import About from "./components/About";
import Blog from "./components/Blog";
import MyFooter from "./components/MyFooter";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from './components/Services';
function App() {

  return (
    <>
      <Navbar />
      <HomePage />
      <Services/>
      <About/>
      <Products/>
      <Blog/>
      <NewsLetter/>
      <MyFooter/>
    </>
  );
}
export default App;
