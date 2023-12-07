import './Skills.css'
import React from '../../assets/react.png'
import Js from '../../assets/js.png'
import Css from '../../assets/css.png'
import Figma from '../../assets/fig.png'
import Angular from '../../assets/angular.png'
import Sql from '../../assets/sql.png'
import Selenium from '../../assets/selenium.png'
import Mongo from '../../assets/mongo.png'
import Java from '../../assets/java.png'
import Post from '../../assets/post.png'
import Node from '../../assets/node.png'
import Express from '../../assets/express.png'
import Aws from '../../assets/aws.png'
import Git from '../../assets/git.png'
import Postman from '../../assets/postman.png'


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
                    <p>Software Developer con background en Informatica que me ha
proporcionado un sólido conjunto de competencias como la
capacidad de trabajar eficazmente en equipo, adaptarme a nuevas
tecnologías con facilidad y analizar datos de forma masiva
especializado en Back-end y Cloud Computing. Conocimientos en
metodologías ágiles, GIT, estructura de datos, algoritmos,
frameworks CSS, arquitectura de datos. Experiencia en Back-end y
Cloud Computing con AWS y Azure. Soy una persona altamente
Adaptable, Analitica, Dedicada, Flexible y Orientada a resultados.</p>
                </div>
                <div className="contact">
                    <h2>Contact</h2>
                        <p>Telefono: 56 9 3264 7535</p>
                        <p>Email: garc392004@gmail</p>
                        <a href="https://www.linkedin.com/in/gabriela-r-24b4b0214/" style={{ textDecoration: 'none', color: '#1b92d5' }}>Linkedin</a>

                </div>
            </div >
            <div className='sks'>
                <div className="add">+</div>
                <img src={Js} alt="" />
                <img src={Css} alt="" />
                <img src={Figma} alt="" />
                <img src={React} alt="" />
                <img src={Angular} alt="" />
                <img src={Sql} alt="" />
                <img src={Selenium} alt="" />
                <img src={Mongo} alt="" />
                <img src={Java} alt="" />
                <img src={Post} alt="" />
                <img src={Node} alt="" />
                <img src={Express} alt="" />
                <img src={Git} alt="" />
                <img src={Aws} alt="" />
                <img src={Postman} alt="" />
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