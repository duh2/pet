let boxContent
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

function insertData() {
    let box = document.querySelector('sampleBox');
    let boxclone
    let boxImg
    let boxSex
    let boxModel
    let boxPrice
    for(let i=0; i<boxContent.length; i++){
        boxclone=box.cloneNode(false);
        boxclone.classList.remove('hidden')
        boxImg=document.createElement('img');
        boxImg.src=boxContent[i].Img;
        boxImg.classList.add('pic');
        boxclone.appendChild(boxImg);
        boxclone.setAttribute('data-index', i);

        boxModel = document.createElement('div')
        boxModel.innerText = boxContent[i].Model;
        boxModel.setAttribute('data-name', boxContent[i].Model)
        boxModel.classList.add('name')
        boxclone.appendChild(boxModel);

        if (boxContent[i].Sex==='male') {
            boxSex=document.createElement('div')
            boxSex.classList.add('inside-box-male');
            boxSex.innerText = boxContent[i].Sex;
            boxclone.classList.add('male')
            boxclone.appendChild(boxSex)

        }
        else{
            boxSex=document.createElement('div')
            boxSex.classList.add('inside-box-female');
            boxSex.innerText = boxContent[i].Sex;
            boxclone.classList.add('female')
            boxclone.appendChild(boxSex)
        }

        boxPrice = document.createElement('div')
        boxPrice.classList.add('cost')
        boxPrice.innerText = boxContent[i].Price;
        boxPrice.setAttribute('data-value-price', boxContent[i].Price)
        boxclone.appendChild(boxPrice);


        document.querySelector('mainPart').appendChild(boxclone)

    }
    let boxes = document.getElementsByClassName("box");
    boxes[0].parentNode.removeChild(boxes[0])

}
function testToBig() {
    let boxes = document.getElementsByClassName("box");
    let selectedSort = document.getElementById("sortselection").value
    if (selectedSort == "toBig") {
        if (boxes[0].getAttribute('data-index') !== "18") {
            console.log('sort to big error!')
        }else console.log('sort to big successful!')
    }
}
function testToSmall() {
    let boxes = document.getElementsByClassName("box");
    let selectedSort = document.getElementById("sortselection").value
    if (selectedSort == "toSmall") {
        if (boxes[0].getAttribute('data-index') !== "0") {
            console.log('sort to small error!')
        }else console.log('sort to small successful!')
    }
}
function testToAlphabet() {
    let boxes = document.getElementsByClassName("box");
    let selectedSort = document.getElementById("sortselection").value
    let bb = boxes[0].getAttribute('data-index')
    if (selectedSort == "byName") {
        if (boxes[0].getAttribute('data-index') !== "5") {
            console.log('sort by Name error!')
        }else console.log('sort by Name successful!')
    }
}
function bubblesort() {
    let boxes = document.getElementsByClassName("box");
    let costs = document.getElementsByClassName("cost")
    let models = document.getElementsByClassName('name')
    let selectedSort = document.getElementById("sortselection").value
    
    if (selectedSort == "toBig") {
            for (let j = costs.length-1; j > 0; j--) {
                for (let i = 0; i <j ; i++) {
                    let firstElem = parseInt(costs[i].getAttribute('data-value-price'))
                    let nextElem = parseInt(costs[i + 1].getAttribute('data-value-price'))
                    if (firstElem > nextElem) {
                        boxes[i].parentNode.insertBefore(boxes[i], boxes[i].next)
                    }
                }
            }
        testToBig()
        }
    else if (selectedSort == "toSmall") {
        for (let j = costs.length-1; j > 0; j--) {
            for (let i = 0; i <j ; i++) {
                for (let i = 0; i < costs.length - 1; i++) {
                    let firstElem = parseInt(costs[i].getAttribute('data-value-price'))
                    let nextElem = parseInt(costs[i + 1].getAttribute('data-value-price'))
                    if (firstElem < nextElem) {
                        boxes[i].parentNode.insertBefore(boxes[i], boxes[i].next)
                    }
                }
            }
        }
        testToSmall()
    } else if (selectedSort == "byName") {
            for (let j = costs.length-1; j > 0; j--) {
                for (let i = 0; i <j ; i++) {
                    if (models[i].getAttribute('data-name') > models[i + 1].getAttribute('data-name')) {
                        boxes[i].parentNode.insertBefore(boxes[i], boxes[i].next)
                    }
                }
            }
        testToAlphabet();
    }
}
function getRequest() {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:3000/boxContent',false);
    xhr.send();
    if (xhr.status!=200){
        alert(xhr.status+ ': ' + xhr.statusText)
    } else {
        boxContent = JSON.parse(xhr.responseText)
    }
}