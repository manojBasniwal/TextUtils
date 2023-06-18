// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
function App() {
  return (
<>
<Navbar/>
<div className="container my-3">
<TextForm heading="Enter the text to analyze below"/>
<About/>
</div>
</>
  );
}

export default App;
