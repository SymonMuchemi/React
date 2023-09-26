import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
        <Profile name="Symon" lastName="Powell">
            <h3>This is a personal profile</h3>
        </Profile>
        <Profile name="Jordan" lastName="Spark">
            <h3>This is another profile</h3>
        </Profile>
    </div>
  );
}

export default App;
