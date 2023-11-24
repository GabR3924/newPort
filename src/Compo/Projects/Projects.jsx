import React, { useState } from 'react';
import Template from '../../assets/Desktop.png';
import './Projects.css';

function Projects() {
  const [detailVisible, setDetailVisible] = useState(false);

  const toggleDetail = () => {
    setDetailVisible(!detailVisible);
  };

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
          <div className='img'>
            <img src={Template} alt="" />
          </div>
          <div className="info">
            <h3>lorem</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <ul>
              <li>bb</li>
              <li>bb</li>
              <li>bb</li>
            </ul>
            <button className='ver' onClick={toggleDetail}>
              Ver
            </button>
          </div>
          <div className={`detail ${detailVisible ? 'visible' : ''}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nulla aliquam expedita impedit, perspiciatis quo placeat adipisci animi earum pariatur dignissimos quia esse non hic. Natus possimus fugit optio incidunt.
            Excepturi in maxime ea. Animi modi consectetur rerum suscipit dolorum. Quibusdam eum impedit pariatur sapiente quo, consequatur culpa! Harum molestiae ut ex, optio sequi fuga iste aperiam quod dignissimos atque?
            Qui quis animi nihil dicta doloribus saepe nemo odio fuga. Pariatur ipsam aspernatur totam commodi rem repudiandae saepe quam possimus nam quod minus, tenetur perspiciatis vel aliquid unde minima beatae.
            Molestiae, quidem saepe. Consectetur labore ipsum ea vel, quae eos enim nesciunt? Repellendus, ducimus laboriosam placeat quia consequatur ut distinctio quas iste tenetur? Earum numquam repellendus ducimus. Veniam, aliquid! Commodi.
          </div>
        </div>
        <div className='dos'>
          <img src={Template} alt="" />
        </div>
        <div className='tres'>
          <img src={Template} alt="" />
        </div>
        <div className='cuatro'>
          <img src={Template} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Projects;
