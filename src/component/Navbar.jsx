import React from 'react'
import companyLogo from '../assets/company_logo.png'
import { IoMdArrowDropdown } from 'react-icons/io'
import './Navbar.css'
import notifyLogo from '../assets/Notification.png'

const Navbar = () => {
    return (
        <div className='navbar'>

            <div>
                <img src={companyLogo} alt="company Logo" width='222px' height='125px' />
            </div>

            <div className='nav_ele'>
                <p>Product
                    <span>
                        <IoMdArrowDropdown />
                    </span>
                </p>

                <p>Guide
                    <span>
                        <IoMdArrowDropdown />
                    </span>
                </p>

                <p>Pricing
                    <span>
                        <IoMdArrowDropdown />
                    </span>
                </p>

                <p>About us
                    <span>
                        <IoMdArrowDropdown />
                    </span>
                </p>

                <div>
                    <img src={notifyLogo} alt="notify_logo" width='40px'/>
                </div>

            </div>

        </div>
    )
}

export default Navbar