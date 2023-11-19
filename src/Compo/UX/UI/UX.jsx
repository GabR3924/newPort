import './UX.css'
import Template from '../../../assets/Desktop.png'

function UX() {
  return (
    <section className='uxui'>
        <div className='title'>
            <h1>UX / UI</h1>
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

export default UX