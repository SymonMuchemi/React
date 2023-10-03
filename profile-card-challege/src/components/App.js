import Avatar from './avatar';
import './index.css';
import myData from './data';
import Intro from './intro';
import Skill_list from './skills';

function App() {
  return (
    <div className='card'>
      <Avatar/>
      <Intro description={myData.description}/>
      <Skill_list/>
    </div>
  )
}

export default App;
