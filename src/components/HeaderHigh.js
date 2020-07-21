import React from  "react"


export default ( {myName,position} )=>{
    
return <div className="higher">
<div className="darkpatch">
    <h3 style={{ color: "rgba(255, 255, 255, 0.767)"}}>resume</h3>
</div>

<div className="fonty">
<h1>{myName}</h1>
<h2>{position}</h2>
</div>

</div>}