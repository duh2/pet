import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
        isLoaded: false,
        isMaleChecked: true,
        isFemaleChecked: true,
    }
  }
    renderNav(){
        return(
            <div className="nav">

                <div className="menu">Navigation menu</div>

                <div className="menu">

                    <label>
                        <input type="checkbox" defaultChecked={this.state.isMaleChecked}
                               onChange={this.changeMaleState} id="checkMale" value="male"/>
                        <span>Male</span>
                    </label>
                </div>
                <div className="menu">

                    <label>


                        <input type="checkbox" defaultChecked={this.state.isFemaleChecked}
                               onChange={this.changeFemaleState} id="checkFemale"/>
                        <span>Female</span>
                    </label>
                </div>
                <div className="menu">

                    <span>Введите цену</span>
                    <input type="text" maxLength="6" size="8" name="FilterField" id="pricebox"
                           />
                </div>
            </div>
        )
    }
    changeMaleState = ()=>{
      this.setState({
          isMaleChecked:!this.state.isMaleChecked
      })
    }
    changeFemaleState = ()=>{
        this.setState({
            isFemaleChecked:!this.state.isFemaleChecked
        })
    }
  getJSONdata(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3001/products', true);
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

    const {data,isFemaleChecked,isMaleChecked} = this.state
    const maleFilter = ['male']
      const femaleFilter = ['female']
      const maleArray =data.Sex;
    console.log(maleArray)
    return data.map(item=>{

        if (isFemaleChecked  && item.Sex==='female') {
            return (<samplebox className={'box ' + item.Sex}>
                <img src={'./' + item.Img} alt={item.Model} className='pic'/>
                <div data-name={item.Model} className='name'>{item.Model}</div>
                <div className={'inside-box-' + item.Sex}>{item.Sex}</div>
                <div className='cost' data-value-price={item.Price}>{item.Price}</div>
            </samplebox>)
        }
        if (isMaleChecked  && item.Sex==='male') {
            return (<samplebox className={'box ' + item.Sex}>
                <img src={'./' + item.Img} alt={item.Model} className='pic'/>
                <div data-name={item.Model} className='name'>{item.Model}</div>
                <div className={'inside-box-' + item.Sex}>{item.Sex}</div>
                <div className='cost' data-value-price={item.Price}>{item.Price}</div>
            </samplebox>)
        }
    })

}


  render() {
const {isLoaded} = this.state


      {isLoaded==false && this.getJSONdata()}
    return (
        <main>
            {this.renderNav()}
    <div className='article1'>

      { this.renderProducts()}
    </div>
        </main>
    )
  }

}
  export default App;
