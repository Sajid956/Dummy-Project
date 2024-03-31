import React from 'react'
import addIcon from '../assets/Vector.png'
import GeneralForm from './GeneralForm'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div>

        <div className='headSection'>
            <h2>sap development</h2>

            <button style={{display: "flex", alignItems: "center", gap: "10px", }}>
                <img src={addIcon} alt="" />
                <span style={{color: "#3E69D2", textTransform: "uppercase" }}>add csv</span>
            </button>
        </div>

        <div>

            <div>
                <input type='radio' id='general' name='General' value={'General'} />
                <label htmlFor='general' >General</label>

                <input type='radio' id='infra' name='Infrastructure' value={'Infrastructure'} />
                <label htmlFor='infra' >Infrastructure</label>

                <input type='radio' id='sd' name='SAP System' value={'SAP System'} />
                <label htmlFor='sd' >SAP System</label>

                <input type='radio' id='install' name='Installation' value={'Installation'} />
                <label htmlFor='install' >Installation</label>

                <input type='radio' id='submit' name='Submission' value={'Submission'} />
                <label htmlFor='submit' >Submission</label>
            </div>

            {


                <GeneralForm />
            }

        </div>

    </div>
  )
}

export default HeroSection