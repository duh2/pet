
import React, {Component} from 'react';
import {connect} from "react-redux"
import {store} from "../Redux/Redux";
import {actionSelected} from "../Redux/Redux";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state= {
            selectedSortingValue:''
        }
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
                <div>{this.props.user}</div>
            </div>
        )
    }
    handleSelectedSorting=(event)=>{
        this.setState({selectedSortingValue:event.target.value})


        }

    render(){
        store.dispatch(actionSelected(this.state.selectedSortingValue))
        return(
            <div>
                {this.renderHeader()}
            </div>

        )
    }
}
const mapStateToProps = (store) => {
     // посмотрим, что же у нас в store?
    return {
        selectedSortingValue: store.value_select,
    };

};


 const Head = connect(mapStateToProps,null)(Header)
export default Head;