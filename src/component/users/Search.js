import React, { Component } from 'react'

 class Search extends Component {
     state={
         text:''
     }
     onChange=(e)=>{
         this.setState({
            //  text:e.target.value
            [e.target.name]:e.target.value
        })};

     onSubmit=(e)=>{
        //  added this because it is not a arrow function and due to this we have to use bind() to pass this in it.
        e.preventDefault();
     
        console.log(this.state.text);
        this.props.searchUsers(this.state.text);
        this.setState({text:''});
     }
    
     
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} action="" >
                    <input type="text" 
                    name="text" 
                    placeholder="Search whatever you want" 
                    class="search_bar" 
                    value={this.state.text}
                    onChange={this.onChange}/>
                    <input type="submit" value="Search" className="button" />
                   
                </form>
                {/* <button onClick={this. props.clearUsers}>Clear</button> */}
            </div>
        )
    }
}

export default Search
