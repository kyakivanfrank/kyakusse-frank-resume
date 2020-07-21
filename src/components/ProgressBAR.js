import React from "react"

export default obj => {


    const givenValue = obj.level
    let level = 1;
    if(obj.level === 1){level = "Basic"}
     else if(obj.level === 2){level = "Fair"}
     else if(obj.level === 3){level = "Good"}
     else if(obj.level === 4){level = "Great"}
     else if(obj.level === 5){level = "Excellent"}

    const boxArr = ["1","2","3","4","5"]
    const filteredBox = boxArr.filter((box)=> { return givenValue >= box } )

    return <div className="progressAttribs">
    <div><h3>{obj.language}</h3></div>

    <div>
    <div className="progressBar">
    {boxArr.map((box , index)=> <div key={index} className="progressBox"></div>)}
    {filteredBox.map((box,index)=> <div key={index} className={`progressBox  Box${box}`}></div>)}
    </div>
    <h5>{level}</h5>

    </div>
</div>
}