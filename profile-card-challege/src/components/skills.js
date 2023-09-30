const Skill = (props) => {
    const style = {
        backgroundColor: `${props.Skillcolor}`
    }
    return (
        <div className="skill" style={style}>
            <p>{props.skillName} {props.emoji}</p>
        </div>

    )
}

const Skilllist = () => {
    
    return (
            <div className="skills">
                <Skill skillName='HTML + CSS' Skillcolor='#2763EA' emoji={`💪`}/>
                <Skill skillName='C Programming' Skillcolor='#094A87'emoji={`😎`}/>
                <Skill skillName='JavaScript' Skillcolor='#EED91D' emoji={`💪`}/>
                <Skill skillName='React' Skillcolor='#60DAFB' emoji={`💪`}/>
                <Skill skillName='Java' Skillcolor='#262639'emoji={`👍`}/>
                <Skill skillName='Spring Boot' Skillcolor='#6CB43C' emoji='😎'/>
                <Skill skillName='Git + GitHub' Skillcolor='#E84E32' emoji={`🤩`}/>
            </div>    
    )
}

export default Skilllist;
