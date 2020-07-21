import React from "react"


export default (obj)=> {

    return <div  className="deeds_details">
    <div><p>{obj.time_spent}</p></div>
    <div>
        <h3>{`${obj.course}, ${obj.study_location}`}</h3>
        <h4>{}</h4>
        
        <ul>
        {obj.achievements.map((achievement, index)=> <li key={index}>{achievement}</li> )}
        </ul>
    </div>
     </div>
}
