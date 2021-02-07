
let boxContent =[

    {
        Img:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
        Sex:'female',
        Model:'abibas ddos',
        Price:4567,
    },
    {
        Img:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
        Sex:'male',
        Model:'aids',
        Price:12378,
    },
    {
        Img:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
        Sex:'male',
        Model:'court',
        Price:7565,
    },
    {
        Img:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
        Sex:'male',
        Model:'court 2.0',
        Price:5999,
    },
    {
        Img:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
        Sex:'female',
        Model:'hoops 2.0',
        Price:5698,
    },
    {
        Img:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
        Sex:'female',
        Model:'8k 2020',
        Price:4235,
    },
    {
        Img:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
        Sex:'male',
        Model:'fusion',
        Price:6875,
    },
    {
        Img:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
        Sex:'female',
        Model:'gazelle',
        Price:7865,
    },
    {
        Img:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
        Sex:'male',
        Model:'v racer',
        Price:8745,
    },
    {
        Img:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
        Sex:'male',
        Model:'lite racer',
        Price:9854,
    },
    {
        Img:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
        Sex:'female',
        Model:'fyw xta',
        Price:4562,
    },
    {
        Img:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
        Sex:'male',
        Model:'zx 750',
        Price:7568,
    },
    {
        Img:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
        Sex:'female',
        Model:'forest groove',
        Price:9876,
    },
    {
        Img:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
        Sex:'male',
        Model:'streetball',
        Price:4657,
    },
    {
        Img:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
        Sex:'female',
        Model:'torsion',
        Price:6000,
    },
    {
        Img:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
        Sex:'male',
        Model:'torsion trdc',
        Price:7000,
    },
    {
        Img:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
        Sex:'male',
        Model:'zx 2k boost',
        Price:2560,
    },
    {
        Img:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
        Sex:'male',
        Model:'x9000l3',
        Price:3000,
    },
    {
        Img:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
        Sex:'male',
        Model:'easy vulc',
        Price:2499,
    }
]

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
            all_boxes[i+1].classList.add('hidden')
        }
        else {
            all_boxes[i+1].classList.remove('hidden')
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
        for (let i = 0; i<costs.length; i++) {
            for (let i = 0; i < costs.length; i++) {
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
        for (let i = 0; i < boxes.length - 1; i++) {
            for (let i = 0; i < boxes.length - 1; i++) {
                for (let i = 0; i < boxes.length - 1; i++) {
                    if (models[i].getAttribute('data-name') > models[i + 1].getAttribute('data-name')) {
                        boxes[i].parentNode.insertBefore(boxes[i], boxes[i].next)
                    }
                }
            }
        }
        testToAlphabet();
    }


