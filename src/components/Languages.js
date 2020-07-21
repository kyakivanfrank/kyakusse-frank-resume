import React from "react"
import ProgressBAR from "./ProgressBAR";
import languages_icon from "../resources/icons/languages_icon.png"


export default (data) => {

    return  <section className="deed_section noLeftBorder">

    <div className="deeds_title">
    <img  src={languages_icon} alt="iconr" /><h2>Languages</h2>
    </div>
    {data.languages_spoken.map((obj, index)=> <ProgressBAR key={index} {...obj} /> )}
    </section>  

} 

