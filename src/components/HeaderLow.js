import React from  "react"

export default ({personal_statement, profile_pic})=>{
    

    return<section>
    <div className="container">
        <div><img src={profile_pic} alt="profilepicture"/></div>

    <div>{personal_statement.map((p,index)=> <p key={index}>{p}</p>)}</div>
    </div>
</section>}