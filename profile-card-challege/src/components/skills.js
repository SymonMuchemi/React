import myData from "./data";

const Skill = ({skillObj}) => {
    const style = {
        backgroundColor: `${skillObj.color}`
    }
    return (
        <div className="skill" style={style}>
            <p>{skillObj.skill} {skillObj.level == "Skilled" ? }</p>
        </div>

    )
}

const Skill_list = () => {
    
    return (
            <div className="skills">
                { myData.skills.map((skillObj) => {
                    <Skill
                } )}
            </div>
    )
}

export default Skill_list;
