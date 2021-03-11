import "../lib/webpack.config"
import React, {Component} from 'react';
import {connect} from "react-redux"
import {store} from "../Redux/Redux";



class MainPart extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false,

        };
    }

    getJSONdata(){
        const url =process.env.DB_HOST_LOCAL
        console.log(process.env.DB_HOST_LOCAL)
        const xhr = new XMLHttpRequest();
        xhr.open('GET', ''+url, true);
        xhr.send();

        xhr.onreadystatechange = ()=>{
            if (xhr.readyState!==4){
                return {isLoaded:false}
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
        store.subscribe(()=>mapStateToProps(store))
const {data}=this.state
const {isFemaleChecked,isMaleChecked,textBoxValue,selectedSortingValue} = this.props

        let myData = data
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
                <div className='article1'>
                    { this.renderProducts()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (store)=>{
    return{
        isMaleChecked: store.value_checked_male,
        isFemaleChecked: store.value_checked_female,
        textBoxValue:store.value_filter_by_price,
        selectedSortingValue:store.value_select,
    }
}

const Products = connect(mapStateToProps,null)(MainPart)
export default Products;