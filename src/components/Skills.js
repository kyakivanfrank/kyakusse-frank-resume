import React from "react"
import skills_icon from "../resources/icons/skills_icon.png"


export default (data) => {


    return  <section className="deed_section noLeftBorder">
    
    <div className="deeds_title">
    <img  src={skills_icon} alt="iconr" />
    <h2>skills</h2>
    </div>
    <ul>
{data.skills.map((obj, index)=> <li key={index}> {obj}</li>)}

    </ul>

    </section>  

} 