import React from 'react'
import Template from '../../assets/Desktop.png'


function Projects() {
  return (
    <section className='uxui'>
        <div className='title'>
            <h1>Projects</h1>
        </div>
        <div className="projects">
            <div>
                <img src={Template} alt="" />
            </div>
            <div>
            <img src={Template} alt="" />
            </div>
            <div>
            <img src={Template} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Projects