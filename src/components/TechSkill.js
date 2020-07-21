import React from "react"
import ProgressBAR from "./ProgressBAR";
import tech_icon from "../resources/icons/tech_icon.png"


export default (data) => {


    return  <section className="deed_section noLeftBorder">
    
    <div className="deeds_title">
    <img  src={tech_icon} alt="iconr" /><h2>Stack</h2>
    </div>
    {data.TechnicalExpertise.programming_skills.map((obj, index)=> <ProgressBAR key={index} {...obj} /> )}

    <h3 style={{margin: "5px 0"}}>Other relevant skills</h3>
    {data.TechnicalExpertise.otherSkills.map((obj, index)=> <p key={index}>{obj}</p> )}

    </section>  

} 

