import React from 'react'
import shieldLogo from '../assets/shield_logo.png'

const GeneralForm = () => {
  return (
    <div>

        <div >
            <div>
                <img src={shieldLogo} alt="" />
            </div>

            <h2>General Details</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quo debitis doloremque, ipsa repudiandae blanditiis natus fugiat quas deserunt possimus, officia alias voluptatem laborum recusandae consectetur, est ut ea. Consectetur!</p>
        </div>

        <form action="">

            <div>
                <label htmlFor="name">
                    Development Name
                    <sup>*</sup>
                </label>
                <input type="text" id='name' name='dev_name' placeholder='Enter Unique name to identify' />
                
                <label htmlFor="dep_type">Deployment Type <sup>*</sup></label>
                <select name="d_type" id="dep_type">
                    <option value="none" selected disabled hidden>Select deployment type</option> 
                    <option value="S4HANA">S4HANA</option>
                    <option value="HANA">HANA</option>
                    <option value="Server">Server</option>
                    <option value="ABORDNOG">ABORDNOG</option>
                    <option value="OABGOAN">OABGOAN</option>
                </select>

            </div>

            <label htmlFor="dev_model"></label>
            <select name="dev_model" id="dev_model">
                    <option value="none" selected disabled hidden>Select deployment model</option> 
                    <option value="S4HANA">S4HANA</option>
                    <option value="HANA">HANA</option>
                    <option value="Server">Server</option>
                    <option value="ABORDNOG">ABORDNOG</option>
            </select>

            <button>Cancel</button>            
            <button type='submit'>Next</button>
        </form>

    </div>
  )
}

export default GeneralForm