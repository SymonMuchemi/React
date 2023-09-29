import Avatar from './avatar';
import './index.css';
import myData from './data';
import Intro from './intro';

function App() {
  return (
    <div className='card'>
      <h1>Profile card challenge</h1>
      <Avatar/>
      <Intro description={myData.description}/>
    </div>
  )
}

export default App;
