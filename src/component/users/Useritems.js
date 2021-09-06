import React, { Component } from 'react'

class Useritems extends Component {
    constructor() {
        super();
        console.log(123);
        this.state = {
            id: 'id',
            login: 'mojombo',
            avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
            html_url: 'https://github.com/octocat',

        }
    }
    render() {
        return (
            <div className="card">
                <img src="{this.state.avatar_url}" alt="fd" className="round-img" />
                <h3>{this.state.login}</h3>
                <div>
                    <a href="{this.state.html_url}">More</a>
                </div>

            </div>
        )
    }
}

export default Useritems
