import React from "react"


export default (obj)=> {

    return <div  className="deeds_details">
   
    <div><p>{obj.time_spent}</p></div>
    <div>
        <h3>{obj.job_title}</h3>
        <h4>{obj.job_location}</h4>
        
        <ul>
        {obj.duties.map((duty, index)=> <li key={index}>{duty}</li> )}
        </ul>
    </div>
     </div>
}