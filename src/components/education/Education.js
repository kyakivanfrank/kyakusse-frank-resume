import React from "react"
import Insitute from "./Insitute";
import education_icon from "../../resources/icons/education_icon.png"



export default (data)=>{


    return <section className="deed_section">
<div className="deeds_title">
<img  src={education_icon} alt="iconr" /><h2>Education</h2>
</div>
 {data.education.map((obj, index) => <Insitute key={index} {...obj} />)}
</section>
}