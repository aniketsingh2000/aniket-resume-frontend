import './App.css';
import Header from './component/Header';
import Baneer from './component/BaneerSection';
import Experience from './component/ExperienceSection';
import Skillsection from './component/SkillSection';
import MarqueeSection from './component/MarqueeSection';
import Projects from './component/Project';
import ProjectsTwo from './component/ProjectTwo';
import ParticlesComponent from './component/Particle'
import ResumeSection from './component/ResumeSection';
import Fotter from './component/Fotter';
import ScrollComp from './component/ScrollCompoentn';


const marqueeOne = {
  "speed": 300,
  "direction": "left",
  "headCleass": 'bacground-fixed',
  "color" : 'light',
  "data": [
    "performance.",
    "creative.",
    "interactive.",
    "boldness.",
    "accessibility.",
    "user experience."
  ]

}


const marqueeTwo = {
  "speed": 300,
  "direction": "right",
  "headCleass": 'bacground-fixed',
  "color" : 'dark',
  "data": [
    "frontend.",
    "backend.",
    "database.",
    "codeoptimization.",
    "responsiveness.",
    "API integration."
  ]


}


function App() {


  return (
    <div>
      {/* <div className='main-particle-box'>
        <ParticlesComponent id="particles"></ParticlesComponent>
      </div> */}
      <Header></Header>
      <Baneer></Baneer>
      <Skillsection />
      {/* <ScrollComp></ScrollComp> */}
      <Experience />
      <MarqueeSection dataSource={marqueeTwo} />
      <MarqueeSection dataSource={marqueeOne} />
      {/* <Projects /> */}
      <ProjectsTwo/>
      <ResumeSection></ResumeSection>
      <Fotter></Fotter>

    </div>
  );
}

export default App;

