const Skill = (props) => {
    const style = {
        backgroundColor: `${props.Skillcolor}`
    }
    return (
        <div className="skill" style={style}>
            <p>{props.skillName}</p>
        </div>

    )
}

const Skilllist = () => {
    
    return (
            <div className="skills">
                <Skill skillName='HTML + CSS' Skillcolor='#2763EA'/>
                <Skill skillName='JavaScript' Skillcolor='#EED91D'/>
                <Skill skillName='React' Skillcolor='#60DAFB'/>
                <Skill skillName='Java' Skillcolor='#262639'/>
                <Skill skillName='Spring Boot' Skillcolor='#6CB43C'/>
                <Skill skillName='Git + GitHub' Skillcolor='#E84E32'/>
            </div>    
    )
}

export default Skilllist;
