import React from 'react'
import PropTypes from 'prop-types';

const Navbar = (props) => {


    return (
        < >

            <nav className='navbar'>
                <h1> {props.title}</h1>
            </nav>
        </>
    )

}
Navbar.defaultProps = {
    title: 'Github_finder ',
    icon: 'dfds'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,

};

export default Navbar
