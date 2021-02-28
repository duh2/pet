import logo from './logo.svg';
import './App.css';
import React from 'react';
import load from "./load";
import cell from "./cell";
load('http://localhost:3001/products').then(data=>{

})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
    this.loadData()
  }

  loadData() {
    load(this.props.data).then(products => {
      this.setState({data: JSON.parse(products)})
    })
  }

  updateData(config) {
  this.setState(config)
  }
  render() {
    return (<div>Hello, biba</div>)
  }
}
  export default App;
