import React from "react"
import personal_info_icon from "../resources/icons/personal_info_icon.png"


export default ({ personal_info }) => {

    const { obj1, obj2 } = personal_info;

    return  <section className="deed_section noLeftBorder">
    <div className="deeds_title">
    <img  src={personal_info_icon} alt="iconr" />
    <h2>Personal info</h2>
    </div>
    <div>
        {obj1.map((obj, index)=> <div key={index}>
            <h3>{obj.attribute}</h3>
            <p>{obj.item}</p>
             </div>)}
    </div>
    <div>
        <h3>{obj2.attribute}</h3>
        {obj2.item.map((link, index)=> <p key={index}><a href={link.http} target="_blank" rel="noopener noreferrer">{link.to}</a></p>)}
    </div>

    </section>  

} 