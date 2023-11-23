import React from 'react'
import Template from '../../assets/Desktop.png'
import './Projects.css'

function Projects() {
  return (
    <section className='section'>
        <div className='options'>
            <h1>Web App's</h1>
            <h1>Java</h1>
            <h1>API's</h1>
            <h1>UX UI</h1>
        </div>
        <div className="projects">
            <div className='uno'>
                <img src={Template} alt="" />
            </div>
            <div className='dos'>
            <img src={Template} alt="" />
            </div>
            <div className='tres'>
            <img src={Template} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Projects