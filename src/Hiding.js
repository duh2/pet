import React from 'react';
export default class NavBoxes extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            isMaleChecked:false,
            isFemaleChecked:false,
        }
    }
    renderNav(){
        return(
            <div className="nav">

                <div className="menu">Navigation menu</div>

                <div className="menu">

                    <label>
                        <input type="checkbox"  id="checkMale" value="male"/>
                        <span>Male</span>
                    </label>
                </div>
                <div className="menu">

                    <label>


                        <input type="checkbox" onClick="" id="checkFemale"/>
                        <span>Female</span>
                    </label>
                </div>
                <div className="menu">

                    <span>Введите цену</span>
                    <input type="text" maxLength="6" size="8" name="FilterField" id="pricebox"
                           onInput=""/>
                </div>
            </div>
        )
    }
    Hide(){
const malebox = document.getElementsByClassName('male')
        let checkmale = document.querySelector('#checkMale')

}
}