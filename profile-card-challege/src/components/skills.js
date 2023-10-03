import myData from "./data";

const Skill = ({skillObj}) => {
    const style = {
        backgroundColor: `${skillObj.color}`
    }
    return (
        <div className="skill" style={style}>
            <p>{skillObj.skill} {
                skillObj.level === "Skilled" ? `💪` 
                    : skillObj.level === "intermediate" ? `👍` 
                        : skillObj.level === 'beginner' ? `👶`
                            : ""}</p>
        </div>

    )
}

const SkillList = () => {
    
    return (
            <div className="skills">
                { myData.skills.map((skill) => (
                    <Skill skillObj={skill} key={skill.skill}/>
                ) )}
            </div>
    )
}

export default SkillList;
