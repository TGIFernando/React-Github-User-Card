import React, {Component} from 'react'
import axios from 'axios'
import './App.css';
import Card from './Card'

class App extends Component{
  state = {
    userName: '',
    avatar_url: '',
    html_url: '',
    name: '',
    bio: '',
    input: '',
  }

  fetchData = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
      .then(res => {
        this.setState({ 
          userName: res.data.login,
          avatar_url: res.data.avatar_url,
          html_url: res.data.html_url,
          name: res.data.name,
          bio: res.data.bio,
        })
        console.log(this.state)
      }).catch(err => {
        console.log('Error: ', err)
      })
  }

  componentDidMount(){
    this.fetchData('MileyWright')
  }

  onChange = e => {
    this.setState({input: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault()
    this.fetchData(this.state.input)
    this.setState({input: ''})
  }

  render(){  
    return (
      <div className="App">
        <h1>Git Hub Card Finder</h1>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} value={this.state.input} type='text' placeholder='Github User Name'/>
          <button>Look Up User</button>
        </form>
        <Card data={this.state}/>
      </div>
    );
  }
}

export default App;
