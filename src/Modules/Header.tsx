import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {actionSelected} from "../Redux/Redux";
import {store} from "../Redux/Redux";
import {connect} from "react-redux";


export const Header: React.FC = () => {
  const [selectedSortingValue,setSelectedSortingValue] = useState('')
   const dispatch = useDispatch()
    const handleSelectedSorting = (event: React.ChangeEvent<HTMLSelectElement>)=>{
        setSelectedSortingValue(event.target.value)
    }

    return (

        <div className="header">

            <header>ABIBAS</header>
            <article className="headerFirst">Only •</article>
            <article className="headerFirst">original •</article>
            <article className="headerFirst">jeans</article>
            <select id="sortselection" className="list" onChange={(event)=>{
                handleSelectedSorting(event)
                dispatch(actionSelected(selectedSortingValue))
            }} >
                <option value="asc">по возрастанию цены</option>
                <option value="desc">по убыванию цены</option>
                <option value="byName">по названию</option>
            </select>
            </div>



    );

}
