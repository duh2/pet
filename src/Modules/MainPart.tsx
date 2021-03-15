import React, { Component } from "react";
import { connect } from "react-redux";
import { States } from "../Redux/Redux";

const mapStateToProps = (store: States) => {
  return {
    isMaleChecked: store.value_checked_male,
    isFemaleChecked: store.value_checked_female,
    textBoxValue: store.value_filter_by_price,
    selectedSortingValue: store.value_select,
  };
};
interface dataInterface {
  Img: string;
  Model: string;
  Sex: string;
  Price: number;
}
export class MainPart extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [{}],
      isLoaded: false,
    };
  }
  getJSONdata() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/products", true);
    xhr.send();

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) {
        return { isLoaded: false };
      }
      if (xhr.status !== 200) {
        console.log(xhr.status + ": " + xhr.statusText);
      } else {
        this.setState({
          data: JSON.parse(xhr.responseText),
          isLoaded: true,
        });
      }
    };
  }
  renderProducts() {
    const { data }: Readonly<any> = this.state;
    const {
      isFemaleChecked,
      isMaleChecked,
      textBoxValue,
      selectedSortingValue,
    }: Readonly<any> & Readonly<{ children?: React.ReactNode }> = this.props;
    const myData = data;
    function sortAsc(x: dataInterface, y: dataInterface) {
      if (x.Price < y.Price) {
        return -1;
      }
      if (x.Price > y.Price) {
        return 1;
      }
      return 0;
    }
    function sortDesc(x: dataInterface, y: dataInterface) {
      if (x.Price > y.Price) {
        return -1;
      }
      if (x.Price < y.Price) {
        return 1;
      }
      return 0;
    }
    function sortByModel(x: dataInterface, y: dataInterface) {
      if (x.Model > y.Model) {
        return 1;
      }
      if (x.Model < y.Model) {
        return -1;
      }
      return 0;
    }
    if (selectedSortingValue === "desc") {
      myData.sort(sortDesc);
    } else if (selectedSortingValue === "asc") {
      myData.sort(sortAsc);
    } else if (selectedSortingValue === "byName") {
      myData.sort(sortByModel);
    }
    return data.map(
      (item: { Price: number; Sex: string; Img: string; Model: string }) => {
        if (textBoxValue < item.Price) {
          if (isFemaleChecked && item.Sex === "female") {
            return (
              <div className={"box " + item.Sex}>
                <img src={"./" + item.Img} className="pic" alt={undefined} />
                <div data-name={item.Model} className="name">
                  {item.Model}
                </div>
                <div className={"inside-box-" + item.Sex}>{item.Sex}</div>
                <div className="cost" data-value-price={item.Price}>
                  {item.Price}
                </div>
              </div>
            );
          }
          if (isMaleChecked && item.Sex === "male") {
            return (
              <div className={"box " + item.Sex}>
                <img src={"./" + item.Img} className="pic" alt={undefined} />
                <div data-name={item.Model} className="name">
                  {item.Model}
                </div>
                <div className={"inside-box-" + item.Sex}>{item.Sex}</div>
                <div className="cost" data-value-price={item.Price}>
                  {item.Price}
                </div>
              </div>
            );
          }
        }
      }
    );
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { isLoaded } = this.state;
    {
      isLoaded == false && this.getJSONdata();
    }
    return (
      <div>
        <div className="article1">{this.renderProducts()}</div>
      </div>
    );
  }
}
const Products = connect(mapStateToProps, null)(MainPart);
export default Products;
