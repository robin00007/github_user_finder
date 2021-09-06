import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';


class robin extends Component {

    render() {
        // if (this.props.loading) {
        //     return <Spinner />
        // }
        // else {

        // }
        if(this.props.loading){
            return <Spinner/>
        }
        else{
             
            return (
                <div className='container'>
                    <div>
                        {this.props.users.map(user => (
                            <div key="{user.id}" className='App2'>
    
                                <img src={user.avatar_url} alt="dsd" className="round-img" />
                                <h4>{user.login}</h4>
                                <a href={user.html_url}>know more</a>
                            </div>
                        ))}
                    </div>
                </div>
    
            )

        }
        

    }
}
// users.propTypes = {
//     users: PropTypes.array.isRequired,
//     loading: PropTypes.bool.isRequired,

// }

export default robin
