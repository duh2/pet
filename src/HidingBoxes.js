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
                        <input type="checkbox" defaultChecked={checked}  id="checkMale" value="male"/>
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
const maleBoxes = document.getElementsByClassName('male')
        let checkMale = document.querySelector('#checkMale')
        const femaleBoxes = document.getElementsByClassName('female')
        let checkFemale = document.querySelector('#checkFemale')
        if (checkMale.checked){
            for(let i=0; i<maleBoxes.length;i++){
                maleBoxes[i].classList.remove(`hidden`) ;
            }
        } else{
            for(let i=0; i<maleBoxes.length;i++){
                maleBoxes[i].classList.add(`hidden`) ;
            }
        }
        if (checkFemale.checked){
            for(let i=0; i<femaleBoxes.length;i++){
                femaleBoxes[i].classList.remove(`hidden`) ;
            }
        } else{
            for(let i=0; i<femaleBoxes.length;i++){
                femaleBoxes[i].classList.add(`hidden`) ;
            }
        }
}
}