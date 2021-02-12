let boxContent
class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    insertInPosition(position, value) {
        if (position < 0 || position > this.length) {
            return 'Incorrect value of position';
        }

        let node = new Node(value);

        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let prev = null;
            let index = 0;

            while (index < position) {
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = node;
            node.next = current;
        }

        this.length++;
    }
    removeFromPosition(position) {
        if (position < 0 || position > this.length) {
            return 'Incorrect value of position';
        }
        let current = this.head;
        if (position === 0) {
            this.head = current.next;
        } else {
            let prev = null;
            let index = 0;
            while(index < position) {
                prev = current;
                current = current.next;
                index++;
            }
            prev.next = current.next;
        }
        this.length--;
        return current.value;
    }
    getLength() {
        return this.length;
    }
    print() {
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
    addToTheEnd(value) {
        let node = new Node(value);
        if (this.length === 0) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = new Node(value);
        }
        this.length++;
    }
    getNodeByPosition(position) {
        if (position < 0 || position > this.length) {
            return 'Incorrect value of position';
        }
        let current = this.head;
        let index = 0;
        while(index < position) {
            current = current.next;
            index++;
        }
        return current.value;
    }

}



function applyAllFilters() {
    let price = parseInt(document.querySelector('#pricebox').value);
    if (price==null){
        price=getCookie('price_cookie');

    }

    let price_box_value
    let price_box = document.getElementsByClassName('cost');
    let all_boxes = document.getElementsByClassName('box');

    document.cookie='price_cookie=' + price;
    for (let i=0; i<price_box.length; i++){
        price_box_value = price_box[i].getAttribute('data-value-price')
        if (price_box_value<price){
            all_boxes[i].classList.add('hidden')
        }
        else {
            all_boxes[i].classList.remove('hidden')
        }


    }
}
function insertData(arrayData) {
    let box = document.querySelector('sampleBox');
    let boxclone
    let boxImg
    let boxSex
    let boxModel
    let boxPrice
    for (let i = 0; i < arrayData.length; i++) {
        boxclone = box.cloneNode(false);
        boxclone.classList.remove('hidden')
        boxImg = document.createElement('img');
        boxImg.src = arrayData[i].Img;
        boxImg.classList.add('pic');
        boxclone.appendChild(boxImg);
        boxclone.setAttribute('data-index', i);

        boxModel = document.createElement('div')
        boxModel.innerText = arrayData[i].Model;
        boxModel.setAttribute('data-name', arrayData[i].Model)
        boxModel.classList.add('name')
        boxclone.appendChild(boxModel);

        if (arrayData[i].Sex === 'male') {
            boxSex = document.createElement('div')
            boxSex.classList.add('inside-box-male');
            boxSex.innerText = arrayData[i].Sex;
            boxclone.classList.add('male')
            boxclone.appendChild(boxSex)

        } else {
            boxSex = document.createElement('div')
            boxSex.classList.add('inside-box-female');
            boxSex.innerText = arrayData[i].Sex;
            boxclone.classList.add('female')
            boxclone.appendChild(boxSex)
        }

        boxPrice = document.createElement('div')
        boxPrice.classList.add('cost')
        boxPrice.innerText = arrayData[i].Price;
        boxPrice.setAttribute('data-value-price', arrayData[i].Price)
        boxclone.appendChild(boxPrice);


        document.querySelector('mainPart').appendChild(boxclone)

    }
    let boxes = document.getElementsByClassName("box");
    boxes[0].parentNode.removeChild(boxes[0])
}
function sortByPriceAsc(Array) {
    let linkedList = new LinkedList()
    for (let i = 0; i < Array.length; i++) {
        linkedList.addToTheEnd(Array[i])
    }
        for (let j = linkedList.getLength() - 1; j > 0; j--) {
            for (let i = 0; i < j; i++) {
              let elem = linkedList.getNodeByPosition(i)
                let nextElem = linkedList.getNodeByPosition(i+1)
                let attributes = new Map(Object.entries(elem))
                let nextAttributes = new Map(Object.entries(nextElem))
                if (attributes.get('Price') > nextAttributes.get('Price')){
                    linkedList.insertInPosition(i+2, elem)
                    linkedList.removeFromPosition(i)
                }
            }
        }
        for (let k=0; k<linkedList.getLength();k++){
            Array.splice(0,1)
        }
        for (let m = 0; m < linkedList.getLength(); m++) {

            Array.push(linkedList.getNodeByPosition(m))
        }
    return Array
    }
    function test_sortByPriceAsc() {
        console.assert(sortByPriceAsc([]) === [])
        console.assert(sortByPriceAsc([{Price:0}]) === [{Price: 0}])
        console.assert(sortByPriceAsc([{Price:1}, {Price: 42}]) === [{Price:1}, {Price: 42}])
        console.assert(sortByPriceAsc([{Price:42}, {Price: 1}]) === [{Price:1}, {Price: 42}])
        console.assert(sortByPriceAsc([{Price:1}, {Price: -1}]) === [{Price:-1}, {Price: 1}])
        console.assert(sortByPriceAsc([{Price:3}, {Price: 2},{Price: 1}]) === [{Price:1}, {Price: 2},{Price: 3}])
        console.assert(sortByPriceAsc([{Price: Number.MAX_VALUE},{Price: Number.MIN_VALUE}]) === [{Price: Number.MIN_VALUE},{Price: Number.MAX_VALUE}])
}
function sortByPriceDec(Array) {
    let linkedList = new LinkedList()
    for (let i = 0; i < Array.length; i++) {
        linkedList.addToTheEnd(Array[i])
    }
    for (let j = linkedList.getLength() - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            let elem = linkedList.getNodeByPosition(i)
            let nextElem = linkedList.getNodeByPosition(i + 1)
            let attributes = new Map(Object.entries(elem))
            let nextAttributes = new Map(Object.entries(nextElem))
            if (attributes.get('Price') < nextAttributes.get('Price')) {
                linkedList.insertInPosition(i + 2, elem)
                linkedList.removeFromPosition(i)
            }
        }
    }
for (let k=0; k<linkedList.getLength();k++){
    Array.splice(0,1)
}
    for (let m = 0; m < linkedList.getLength(); m++) {
        Array.push(linkedList.getNodeByPosition(m))
    }
    return Array
}
function test_sortByPriceDec() {
    console.assert(sortByPriceAsc([]) === [])
    console.assert(sortByPriceAsc([{Price:0}]) === [{Price: 0}])
    console.assert(sortByPriceAsc([{Price:1}, {Price: 42}]) === [{Price:42}, {Price: 1}])
    console.assert(sortByPriceAsc([{Price:42}, {Price: 1}]) === [{Price:42}, {Price: 1}])
    console.assert(sortByPriceAsc([{Price:1}, {Price: -1}]) === [{Price:1}, {Price: -1}])
    console.assert(sortByPriceAsc([{Price:3}, {Price: 2},{Price: 1}]) === [{Price:3}, {Price: 2},{Price: 1}])
    console.assert(sortByPriceAsc([{Price: Number.MAX_VALUE},{Price: Number.MIN_VALUE}]) === [{Price: Number.MAX_VALUE},{Price: Number.MIN_VALUE}])
}
function sortByAlp(Array) {
    let linkedList = new LinkedList()
    for (let i = 0; i < Array.length; i++) {
        linkedList.addToTheEnd(Array[i])
    }
    for (let j = linkedList.getLength() - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            let elem = linkedList.getNodeByPosition(i)
            let nextElem = linkedList.getNodeByPosition(i+1)
            let attributes = new Map(Object.entries(elem))
            let nextAttributes = new Map(Object.entries(nextElem))
            if (attributes.get('Model') > nextAttributes.get('Model')){
                linkedList.insertInPosition(i+2, elem)

                linkedList.removeFromPosition(i)
            }
        }
    }
    for (let k=0; k<linkedList.getLength();k++){
        Array.splice(0,1)
    }
    for (let m = 0; m < linkedList.getLength(); m++) {

        Array.push(linkedList.getNodeByPosition(m))

    }

    return Array
}
function test_sortByPriceAlp() {
    console.assert(sortByAlp([]) === [])
    console.assert(sortByAlp([{Model:'a'}]) === [{Model: 'a'}])
    console.assert(sortByAlp([{Model:'a'}, {Model: 'b'}]) === [{Model:'a'}, {Model: 'b'}])
    console.assert(sortByAlp([{Model:'b'}, {Model: 'a'}]) === [{Model:'a'}, {Model: 'b'}])
    console.assert(sortByAlp([{Model:'b'}, {Model: 'c'},{Model: 'a'}]) === [{Model:'a'}, {Model: 'b'},{Model: 'c'}])
}
function runSortingTests() {
    test_sortByPriceAsc()
    test_sortByPriceDec()
    test_sortByPriceAlp()
}
function getJSONdata() {
let xhr = new XMLHttpRequest()
    function getRequest(XMLRequest) {

        XMLRequest.open('GET', 'http://localhost:3000/products', true);
        XMLRequest.send();
    }
    function createOrDeleteSpinner(XMLRequest) {
        (XMLRequest.readyState !== 4) ? spinner(true) : spinner(NaN)
    }
    function readXHR(XMLRequest) {

        if (XMLRequest.status != 200){
            console.log("Error")
        } else {
            boxContent = JSON.parse(XMLRequest.responseText)
        }

    }
    getRequest(xhr)
          function readWithCaptiure() {
             if (boxContent===undefined){
                 createOrDeleteSpinner(xhr)
             } else{
                 removeData()
                 insertData(boxContent);
             }
return readXHR(xhr)
    }
    xhr.onreadystatechange=readWithCaptiure
    createOrDeleteSpinner(xhr)
}
function sorting() {
    runSortingTests()
    let selectedSort = document.getElementById("sortselection").value
    if (selectedSort == "asc"){
        sortByPriceAsc( boxContent)
        removeData()
        insertData(boxContent)
    } else if (selectedSort == 'desc'){
        sortByPriceDec( boxContent)
        removeData()
        insertData(boxContent)
    } else if (selectedSort == 'byName'){
        sortByAlp( boxContent)
        removeData()
        insertData(boxContent)
    }

    }
function removeData() {
let parentNode = document.querySelector("mainpart")
    let box
    while(parentNode.firstChild){
    parentNode.removeChild(parentNode.firstChild)
    }
    box = document.createElement('sampleBox')
    box.classList.add('box')
    box.classList.add('hidden')
    document.querySelector('mainPart').appendChild(box)
}
function spinner(flag) {
let spinner
    let parentNode = document.querySelector("mainpart")
    spinner = document.createElement('div')
    spinner.classList.add('spinner')
        if (flag===true) {
            parentNode.appendChild(spinner)
        } else {
            removeData()

        }
}

