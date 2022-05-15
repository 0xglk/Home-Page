import logo from './logo.svg';
import main_img from './feature_imge.jpg';
// import main_img from './shop.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" /> 
      <h3>Cookies Shop</h3>
      <p>Where Cookie Maniacs Gather</p>
      <header className="App-header">
        <img className="main_image" src={main_img} alt="store" />
      </header>
      <footer>Abdullah Almutairi</footer>
    </div>
  );
}

export default App;
