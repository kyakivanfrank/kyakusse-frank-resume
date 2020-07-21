import React from "react"
import WorkPiece from "./WorkPiece";
import experience_icon from "../../resources/icons/experience_icon.png"


export default (data)=>{

console.log(data.experience)

    return <section className="deed_section">
<div className="deeds_title">
<img  src={experience_icon} alt="iconr" /><h2>Experience</h2>
</div>
 {data.experience.map((obj, index) => <WorkPiece key={index} {...obj} />
 )}
</section>
}