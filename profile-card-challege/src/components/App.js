import Avatar from './avatar';
import './index.css';
import myData from './data';
import Intro from './intro';
import SkillList from './skills';

function App() {
  return (
    <div className='card'>
      <Avatar/>
      <Intro description={myData.description}/>
      <SkillList/>
    </div>
  )
}

export default App;
