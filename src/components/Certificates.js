import React from "react"
import certificates_icon from "../resources/icons/certificates_icon.png"


export default (data)=> {


    return <section className="deed_section">
    <div className="deeds_title"><img  src={certificates_icon} alt="iconr" /><h2>Certificates</h2></div>


 {data.certification.map( (obj, index) => <div key={index} className="deeds_details">
<div><p>{obj.time_spent}</p></div>
<div>{obj.certification_name}</div>
</div>
    )}


</section>
}