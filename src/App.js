import './App.css';
import Likes from './components/Likes'
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sp.webp" alt="surfing" />
            <Likes store={store} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
