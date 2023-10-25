
import './App.css';
import Weather from './Weather';

 export default function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather defaultCity="New York"/>
      <footer>
        This product was coded by Olena Lupiy and is {""}
        <a
          href="https://github.com/OlenaLupiy/waether-react-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
      </div>
    </div>
  );
}


