import React, {ChangeEvent, useState} from "react";
import {actionCheckedFemale, actionCheckedMale, actionFilterChanged, store} from "../Redux/Redux";
import {useDispatch, useSelector} from 'react-redux'
export const NavBar: React.FC = () => {
    const [maleCheck, setMaleCheck] = useState<boolean>(true)
    const [femaleCheck,setFemaleCheck] = useState<boolean>(true)
    const [textBoxValue, setTextBoxValue] = useState<string|undefined>()
    const dispatch = useDispatch();
    const changeMaleState = (event:React.ChangeEvent<HTMLInputElement>)=> {
        setMaleCheck( event.target.checked)
        dispatch(actionCheckedMale(maleCheck))

    }
    const changeFemaleState =(event:React.ChangeEvent<HTMLInputElement>)=>{

        setFemaleCheck( event.target.checked)
        dispatch(actionCheckedFemale(femaleCheck))
    }
    const changeTextboxValue =(event:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(actionFilterChanged(textBoxValue))
        setTextBoxValue(event.target.value)
        console.log(textBoxValue)

    }
    return(
        <div className="nav">

            <div className="menu">Navigation menu</div>

            <div className="menu">

                <label>
                    <input type="checkbox" defaultChecked={maleCheck}
                           onChange={changeMaleState} id="checkMale" value="male"/>
                    <span>Male</span>
                </label>
            </div>
            <div className="menu">

                <label>


                    <input type="checkbox" defaultChecked={femaleCheck}
                           onChange={changeFemaleState} id="checkFemale"/>
                    <span>Female</span>
                </label>
            </div>
            <div className="menu">

                <span>Введите цену</span>
                <input type="text"  id="pricebox"
                       value={textBoxValue} onChange={changeTextboxValue} />
            </div>
        </div>
    );

}

