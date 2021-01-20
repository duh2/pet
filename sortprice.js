function My_filter() {
    let price = parseInt(document.querySelector('#pricebox').value);
    let price_box_value
    let price_box = document.getElementsByClassName('cost');
    let all_boxes = document.getElementsByClassName('box');
    alert(price_box[2])
    for (let i=0; i<price_box.length; i++){
        price_box_value = price_box[i].getAttribute('data-value_price')

        if (price_box_value<price){
            all_boxes[i].classList.add('hidden')
        }


    }
}