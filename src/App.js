import React from "react"
import "./styles/App.css"
import HeaderHigh from "./components/HeaderHigh"
import HeaderLow from "./components/HeaderLow"
import Mydata from "./resources/cv"
import WorkExperience from "./components/Experience/WorkExperience";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Certificates from "./components/Certificates";
import Education from "./components/education/Education"
import PersonalInfo from "./components/PersonalInfo";
import Languages from "./components/Languages";
import TechSkill from "./components/TechSkill";
import Footing from "./components/Footing";


class App extends React.Component {

constructor(props){
    super(props);
    this.state={ data: Mydata }
}
    render (){
const data = this.state.data;


        return <div className="wholePage">
        <HeaderHigh {...data} />
        <HeaderLow {...data} />
    
    <section className="details">
            <div>
                <PersonalInfo {...data} />
                <Skills {...data} />
                <TechSkill {...data} />
                <Languages {...data}/>
              </div>

            <div>
                <WorkExperience {...data} />
                <Education {...data} />
                <Certificates {...data} />
                <Hobbies {...data}/> </div>
    </section>

<Footing />
    </div>
    }


}

export default App;



