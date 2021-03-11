import logo from './logo.svg';
import './App.css';
import React from 'react';
require('dotenv').config()
const db = require('mysql')
db.createConnection({
    localHost: process.env.DB_HOST_LOCAL,
    user: process.env.DB_USER_SERVER,
    serverHost:process.env.DB_HOST_SERVER,
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
        isLoaded: false,
        isMaleChecked: true,
        isFemaleChecked: true,
        textBoxValue: 0,
        selectedSortingValue: 'smsht',
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
                          value={this.state.textBoxValue} onChange={this.changePriceFilter} />
                </div>
            </div>
        )
    }
    renderHeader(){
      return(
          <div className="header">
              <header>ABIBAS</header>
              <article1 className="headerFirst">Only •</article1>
              <article2>original •</article2>
              <article3>jeans</article3>
              <select id="sortselection" className="list" onChange={this.handleSelectedSorting}>
                  <option value="asc">по возрастанию цены</option>
                  <option value="desc">по убыванию цены</option>
                  <option value="byName">по названию</option>
              </select>
          </div>
      )
    }
    handleSelectedSorting=(event)=>{
    this.setState({selectedSortingValue:event.target.value})
    }
    changeMaleState = ()=>{
      this.setState({
          isMaleChecked:!this.state.isMaleChecked
      })
    }
    changePriceFilter = (event)=>{
      this.setState({textBoxValue:event.target.value})
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
console.log(process.env.DB_HOST_SERVER)
    const {data,isFemaleChecked,isMaleChecked,textBoxValue,selectedSortingValue} = this.state
    const maleFilter = ['male']
      const femaleFilter = ['female']
      let myData = data
      for (let i=0; i<data.length; i++){

      }
      function sortAsc(x,y) {
          if (x.Price< y.Price){
              return -1;
          }
          if (x.Price>y.Price){
              return 1
          }
          return 0
      }
      function sortDesc(x,y){
          if (x.Price>y.Price){
              return -1
          }
          if (x.Price<y.Price){
              return 1
          }
          return 0
      }
      function sortByModel(x,y) {
          if (x.Model>y.Model){
              return 1
          }
          if (x.Model<y.Model){
              return -1
          }
          return 0
      }
      if (selectedSortingValue == 'desc'){
          myData.sort(sortDesc)
      } else if (selectedSortingValue == 'asc'){
          myData.sort(sortAsc)
      } else if (selectedSortingValue == 'byName'){
          myData.sort(sortByModel)
      }


    return data.map(item=>{
        if (textBoxValue<item.Price) {
            if (isFemaleChecked && item.Sex === 'female') {
                return (<samplebox className={'box ' + item.Sex}>
                    <img src={'./' + item.Img} alt={item.Model} className='pic'/>
                    <div data-name={item.Model} className='name'>{item.Model}</div>
                    <div className={'inside-box-' + item.Sex}>{item.Sex}</div>
                    <div className='cost' data-value-price={item.Price}>{item.Price}</div>
                </samplebox>)
            }
            if (isMaleChecked && item.Sex === 'male') {
                return (<samplebox className={'box ' + item.Sex}>
                    <img src={'./' + item.Img} alt={item.Model} className='pic'/>
                    <div data-name={item.Model} className='name'>{item.Model}</div>
                    <div className={'inside-box-' + item.Sex}>{item.Sex}</div>
                    <div className='cost' data-value-price={item.Price}>{item.Price}</div>
                </samplebox>)
            }
        }
    })

}


  render() {
const {isLoaded} = this.state


      {isLoaded==false && this.getJSONdata()}
    return (
        <div>
            {this.renderHeader()}
        <main>

            {this.renderNav()}
    <div className='article1'>

      { this.renderProducts()}
    </div>
        </main>
  </div>
    )
  }

}
  export default App;
