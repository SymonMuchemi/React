import myData from "./data";

const Skill = ({skill, color, level}) => {
    const style = {
        backgroundColor: `${color}`
    }
    return (
        <div className="skill" style={style}>
            <p>{skill} 
            {level === "Skilled" && "💪"}
            {level === "intermediate" && "👍"}
            {level === "beginner" && "👶"}
            </p>
        </div>

    )
}

const SkillList = () => {
    
    return (
            <div className="skills">
                { myData.skills.map((skill) => (
                    <Skill skill={skill.skill} color={skill.color} level={skill.level} key={skill.skill}/>
                ) )}
            </div>
    )
}

export default SkillList;
