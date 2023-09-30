import Avatar from './avatar';
import './index.css';
import myData from './data';
import Intro from './intro';
import Skilllist from './skills';

function App() {
  return (
    <div className='card'>
      <Avatar/>
      <Intro description={myData.description}/>
      <Skilllist/>
    </div>
  )
}

export default App;
