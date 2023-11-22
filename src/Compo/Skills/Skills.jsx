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
            <div className='info'>
                <div className="img"></div>
                <div className="txt">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ratione ducimus corporis beatae voluptatibus. Laboriosam dolore, fugiat autem, quia minus hic magni rerum, dolor nemo excepturi possimus reprehenderit eveniet quos.
                    Similique cumque tempore aliquid voluptates non mollitia hic ipsam deserunt, officia assumenda suscipit doloremque facilis odit amet? Veritatis optio, quam repudiandae ab voluptas at quaerat excepturi sed, reprehenderit laudantium blanditiis.
                    </p>
                </div>
                <div className="contact">
                    <h2>Contact</h2>
                        <p>Telefono</p>
                        <p>Email</p>
                        <p>Linkedln</p>
                </div>
            </div >
            <div className='skills'>
                <h3>Backend</h3>
                <ul>
                    <li>Figma</li>
                    
                    
                </ul>
            </div>
            <div className='about'> 
                <h3>about</h3>
                <ul>
                    <li>Figma</li>
                    <li>Html | CSS</li>
                    <li>Figma</li>
                    <li>Html | CSS</li>
                    <li>Figma</li>
                    <li>Html | CSS</li>
                </ul>
                
            </div>
            <div className='project'> 
                <h3>projects</h3>
                <ul>
                    <li>Figma</li>
                    <li>Html | CSS</li>
                   
                </ul>
            </div>
        </div>
        <div className='circle2'></div>

        
    </section>
  )
}

export default Skills