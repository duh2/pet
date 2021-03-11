import React, {Component} from "react";
import { Store } from "redux";
import {store} from "../Redux/Redux";
import {connect} from "react-redux";
import {States} from "../Redux/Redux";


const mapStateToProps = (store: States)=>{
    return{
        isMaleChecked: store.value_checked_male,
        isFemaleChecked: store.value_checked_female,
        textBoxValue:store.value_filter_by_price,
        selectedSortingValue:store.value_select,
    }
}

export class MainPart extends Component {

    constructor(props: any) {
        super(props);
        this.state = {
            data: [{
            },],
            isLoaded: false,

        };
    }

    getJSONdata() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/products', true);
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return {isLoaded: false}
            }
            if (xhr.status !== 200) {
                console.log(xhr.status + ': ' + xhr.statusText)
            } else {
                this.setState({
                    data: JSON.parse(xhr.responseText),
                    isLoaded: true,
                })
            }
        }
    }

    renderProducts() {
        
        // @ts-ignore
        const {data} = this.state
        // @ts-ignore
        const {isFemaleChecked, isMaleChecked, textBoxValue, selectedSortingValue} = this.props

        let myData = data

        function sortAsc(x: object, y: object) {
            // @ts-ignore
            if (x.Price < y.Price) {
                return -1;
            }
            // @ts-ignore
            if (x.Price > y.Price) {
                return 1
            }
            return 0
        }

        function sortDesc(x: object, y: object) {
            // @ts-ignore
            if (x.Price > y.Price) {
                return -1
            }
            // @ts-ignore
            if (x.Price < y.Price) {
                return 1
            }
            return 0
        }

        function sortByModel(x: object, y: object) {
            // @ts-ignore
            if (x.Model > y.Model) {
                return 1
            }
            // @ts-ignore
            if (x.Model < y.Model) {
                return -1
            }
            return 0
        }

        if (selectedSortingValue == 'desc') {
            myData.sort(sortDesc)
        } else if (selectedSortingValue == 'asc') {
            myData.sort(sortAsc)
        } else if (selectedSortingValue == 'byName') {
            myData.sort(sortByModel)
        }


        return data.map((item: { Price: {} | number | undefined; Sex: {} | string | undefined; Img: string; Model: {} | string | undefined; }) => {
// @ts-ignore
            if (textBoxValue < item.Price) {
// @ts-ignore
                if (isFemaleChecked && item.Sex === 'female') {
                    // @ts-ignore

                    return (
                        // @ts-ignore
                        <div className={'box ' + item.Sex}>
                        <img src={'./' + item.Img}  className='pic'/>
                        <div data-name={item.Model} className='name'>{item.Model}</div>
                        <div className={'inside-box-' + item.Sex}>{item.Sex}</div>
                        <div className='cost' data-value-price={item.Price}>{item.Price}</div>

                    </div>)

                }
                // @ts-ignore
                if (isMaleChecked && item.Sex === 'male') {
                    // @ts-ignore
                    return (<div className={'box ' + item.Sex}>
                        <img src={'./' + item.Img}  className='pic'/>
                        <div data-name={item.Model} className='name'>{item.Model}</div>
                        <div className={'inside-box-' + item.Sex}>{item.Sex}</div>
                        <div className='cost' data-value-price={item.Price}>{item.Price}</div>
                    </div>)
                }
            }
        })

    }

    render() {
        // @ts-ignore
        const {isLoaded} = this.state

        {
            isLoaded == false && this.getJSONdata()
        }
        return (
            <div>
                <div className='article1'>
                    {this.renderProducts()}
                </div>
            </div>
        )
    }
}

const Products = connect(mapStateToProps,null)(MainPart)
export default Products;

