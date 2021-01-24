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

function insertArrayData() {
    let boxContent =[
        {
            arrayImg:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
            arraySex:'male',
            arrayModel:'aids',
            arrayPrice:12378,
        },
        {
            arrayImg:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
            arraySex:'female',
            arrayModel:'abibas ddos',
            arrayPrice:4567,
        },
        {
            arrayImg:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
            arraySex:'male',
            arrayModel:'court',
            arrayPrice:7565,
        },
        {
            arrayImg:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
            arraySex:'male',
            arrayModel:'court 2.0',
            arrayPrice:5999,
        },
        {
            arrayImg:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
            arraySex:'female',
            arrayModel:'hoops 2.0',
            arrayPrice:5698,
        },
        {
            arrayImg:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
            arraySex:'female',
            arrayModel:'8k 2020',
            arrayPrice:4235,
        },
        {
            arrayImg:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
            arraySex:'male',
            arrayModel:'fusion',
            arrayPrice:6875,
        },
        {
            arrayImg:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
            arraySex:'female',
            arrayModel:'gazelle',
            arrayPrice:7865,
        },
        {
            arrayImg:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
            arraySex:'male',
            arrayModel:'v racer',
            arrayPrice:8745,
        },
        {
            arrayImg:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
            arraySex:'male',
            arrayModel:'lite racer',
            arrayPrice:9854,
        },
        {
            arrayImg:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
            arraySex:'female',
            arrayModel:'fyw xta',
            arrayPrice:4562,
        },
        {
            arrayImg:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
            arraySex:'male',
            arrayModel:'zx 750',
            arrayPrice:7568,
        },
        {
            arrayImg:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
            arraySex:'female',
            arrayModel:'forest groove',
            arrayPrice:9876,
        },
        {
            arrayImg:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
            arraySex:'male',
            arrayModel:'streetball',
            arrayPrice:4657,
        },
        {
            arrayImg:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
            arraySex:'female',
            arrayModel:'torsion',
            arrayPrice:6000,
        },
        {
            arrayImg:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
            arraySex:'male',
            arrayModel:'torsion trdc',
            arrayPrice:7000,
        },
        {
            arrayImg:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
            arraySex:'male',
            arrayModel:'zx 2k boost',
            arrayPrice:2560,
        },
        {
            arrayImg:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
            arraySex:'male',
            arrayModel:'x9000l3',
            arrayPrice:3000,
        },
        {
            arrayImg:'5c5199ed6194c843895_001_phsrh000_2000.jpeg',
            arraySex:'male',
            arrayModel:'easy vulc',
            arrayPrice:2499,
        }
    ]
    let box = document.querySelector('#boxSample');
    let boxclone
    let boxImg
    let boxSex
    let boxModel
    let boxPrice
    for(let i=0; i<boxContent.length; i++){
        boxclone=box.cloneNode();
        boxclone.classList.remove('hidden')
        boxImg=document.createElement('img');
        boxImg.src=boxContent[i].arrayImg;
        boxImg.classList.add('pic');
        boxclone.appendChild(boxImg);
        boxclone.setAttribute('data-index', i);
        if (boxContent[i].arraySex==='male') {
            boxSex=document.createElement('div')
            boxSex.classList.add('inside-box-male');
            boxSex.innerText = boxContent[i].arraySex;
            boxclone.appendChild(boxSex)

        }
        else{
            boxSex=document.createElement('div')
            boxSex.classList.add('inside-box-female');
            boxSex.innerText = boxContent[i].arraySex;
            boxclone.appendChild(boxSex)
        }
        boxModel = document.createElement('div')
        boxModel.classList.add('name')
        boxModel.innerText = boxContent[i].arrayModel;
        boxclone.appendChild(boxModel);

        boxPrice = document.createElement('div')
        boxPrice.classList.add('cost')
        boxPrice.innerText = boxContent[i].arrayPrice;
        boxPrice.setAttribute('data-value-price', boxContent[i].arrayPrice)
        boxclone.appendChild(boxPrice);


        document.querySelector('mainPart').appendChild(boxclone)

    }

}