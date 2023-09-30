import Avatar from './avatar';
import './index.css';
import myData from './data';
import Intro from './intro';
import Skilllist from './skills';

function App() {
  return (
    <div className='card'>
      <h1>Profile card challenge</h1>
      <Avatar/>
      <Intro description={myData.description}/>
      <Skilllist/>
    </div>
  )
}

export default App;
