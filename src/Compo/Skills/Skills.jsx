import './Skills.css'
import { TbBrandRedux } from "react-icons/tb";
import { SiAngular } from "react-icons/si";
import React from '../../assets/react.png'
import Js from '../../assets/js.png'
import Css from '../../assets/css.png'
import Figma from '../../assets/fig.png'

function Skills() {
  return (
    <section className='Skills'>
        <div className='title'>
            <h1>Skills</h1>
        </div>
        {/* <div className='circle'></div> */}
        <div className="cont">
            <div>
                <h3>Frontend</h3>
                <ul>
                    <li><img src={Figma} alt="" />Figma</li>
                    <li><img src={Js} alt="" />Javascript</li>
                    <li><img src={React} alt="" />React</li>
                    <li><img src={React} alt="" />React Native</li>
                    <li><TbBrandRedux />Redux</li>
                </ul>
            </div>
            <div>
                <h3>Backend</h3>
                <ul>
                    <li>Figma</li>
                    <li>Html | CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Angular</li>
                    <li>Redux</li>
                </ul>
            </div>
            <div>
                <h3>Others</h3>
                <ul>
                    <li>Figma</li>
                    <li>Html | CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Angular</li>
                    <li>Redux</li>
                </ul>
            </div>
        </div>
        <div className='circle2'></div>

        
    </section>
  )
}

export default Skills