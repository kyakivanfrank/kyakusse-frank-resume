import React from "react"
import hobbies_icon from "../resources/icons/hobbies_icon.png"


export default data => {
    return <section className="deed_section hobbies">
    <div className="deeds_title"><img  src={hobbies_icon} alt="iconr" /><h2>Hobbies & interests</h2></div>

<ul>{data.Hobbies_interests.map((skill, index) => <li key={index}>{skill}</li>)}</ul>
</section>
} 