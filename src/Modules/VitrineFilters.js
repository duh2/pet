import React, {Component} from 'react';
import {connect} from "react-redux"
import {store} from "../Redux/Redux";
import {actionCheckedMale, actionCheckedFemale,actionFilterChanged} from "../Redux/Redux";

class VitrineFilters extends Component{
    constructor(props) {
        super(props);
        this.state= {
            textBoxValue: 0,
        }
    }
    renderNav(){
        return(
            <div className="nav">

                <div className="menu">Navigation menu</div>

                <div className="menu">

                    <label>
                        <input type="checkbox" defaultChecked={this.props.isMaleChecked}
                               onChange={this.changeMaleState} id="checkMale" value="male"/>
                        <span>Male</span>
                    </label>
                </div>
                <div className="menu">

                    <label>


                        <input type="checkbox" defaultChecked={this.props.isFemaleChecked}
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
    changeMaleState = ()=>{
        this.setState({
            isMaleChecked:!this.state.isMaleChecked
        })
        store.dispatch(actionCheckedMale(this.state.isMaleChecked))
    }
    changePriceFilter = (event)=>{
        this.setState({textBoxValue:event.target.value})
    }
    changeFemaleState = ()=>{
        this.setState({
            isFemaleChecked:!this.state.isFemaleChecked
        })
        store.dispatch(actionCheckedFemale(this.state.isFemaleChecked))
    }
    render(){
        store.dispatch(actionFilterChanged(this.state.textBoxValue))
        return(
            <div>
                {this.renderNav()}
            </div>

        )
    }


}
const mapStateToProps = (store) => {
    return {
        isMaleChecked: store.value_checked_male,
        isFemaleChecked: store.value_checked_female,
    };

};
const VitrineFilter = connect(mapStateToProps,null)(VitrineFilters)
export default VitrineFilter;