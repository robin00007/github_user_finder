import './App.css';
import React, { Component } from 'react';
import Navbar from './component/layout/Navbar.js';
import axios from 'axios';
import Users from './component/users/Users.js';
import Search from './component/users/Search';
 


class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLINT_ID);
    this.setState({ loading: true });
    const le = await axios.get(`https://api.github.com/users?clint_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: le.data, loading: false });
    console.log('hello');
  }

  searchUsers= async (text)=>{
    console.log(text);
    this.setState({loading:true});
     
    const le = await axios.get(`https://api.github.com/search/users?q=${text}&clint_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: le.data.items, loading: false});
  }
  clearUsers=()=>{
    this.setState({users:[],loading:false});
  }

  render() {
   

    return (
      <div className="App" >
        <Navbar title="Github-finder" icon="" />
        <Search searchUsers={this.searchUsers}  />
        <button onClick={this.clearUsers}>Clear</button>
        
        
        <Users loading={this.state.loading} users={this.state.users} />
      </div >
    );
  }


}



export default App;
