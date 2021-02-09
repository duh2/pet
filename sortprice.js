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
let list = new LinkedList()



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
function sortByPriceAsc(linkedList, Array) {
        for (let j = linkedList.getLength() - 1; j > 0; j--) {
            for (let i = 0; i < j; i++) {
              let elem = linkedList.getNodeByPosition(i)
                let nextElem = linkedList.getNodeByPosition(i+1)
                let price = Object.values(elem)
                let nextPrice = Object.values(nextElem)
                if (price[3] > nextPrice[3]){
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

    }
function sortByPriceDec(linkedList, Array) {
    let sortedArray = []
    let boxes = document.getElementsByClassName("box");
    for (let j = linkedList.getLength() - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            let elem = linkedList.getNodeByPosition(i)
            let nextElem = linkedList.getNodeByPosition(i + 1)
            let price = Object.values(elem)
            let nextPrice = Object.values(nextElem)
            if (price[3] < nextPrice[3]) {
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
    console.log(sortedArray)
}
function getRequest() {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'http://localhost:3000/boxContent', false);
        xhr.send();
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText)
        } else {
            boxContent = JSON.parse(xhr.responseText)
            for (let i=0; i<boxContent.length; i++){
                list.addToTheEnd(boxContent[i])

            }

        }
    }
function sorting() {
    let selectedSort = document.getElementById("sortselection").value
    if (selectedSort == "toBig"){
        sortByPriceAsc(list, boxContent)
        removeData()
        insertData(boxContent)
    } else if (selectedSort == 'toSmall'){
        sortByPriceDec(list, boxContent)
        removeData()
        insertData(boxContent)
    } else if (selectedSort == 'byName'){

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
