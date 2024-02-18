import './App.css';
import Likes from './components/Likes'

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sp.webp" alt="surfing" />
            <Likes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
