import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
        isLoaded: false
    }
  }
  getJSONdata(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/products', true);
    xhr.send();

    xhr.onreadystatechange = ()=>{
      if (xhr.readyState!==4){
        return false
      }
      if (xhr.status!== 200){
        console.log(xhr.status + ': ' + xhr.statusText)
      } else {
        this.setState({
          data: JSON.parse(xhr.responseText),
            isLoaded: true,
        })
      }
    }
  }
  renderProducts(){

    const {data} = this.state

    return data.map(item=>{
     return(<samplebox className='box'>
      <img src={item.Img} alt={item.Model} className='pic'/>
          <div data-name={item.Model} className='name'>{item.Model}</div>
          <div className={item.Sex}>{item.Sex}</div>
          <div className='cost' data-value-price={item.Price}>{item.Price}</div>
            </samplebox>)
    })

}


  render() {
const {isLoaded} = this.state
      {isLoaded==false && this.getJSONdata()}
    return (
    <div className='article1'>

      {this.renderProducts()}
    </div>

    )
  }

}
  export default App;
