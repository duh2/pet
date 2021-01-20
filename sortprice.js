let price ;
function my_filter() {
    let price = parseInt(document.querySelector('#pricebox').value);
    let price_box_value
    let price_box = document.getElementsByClassName('cost');
    let all_boxes = document.getElementsByClassName('box');
    document.cookie='price_cookie=' + price;

    for (let i=0; i<price_box.length; i++){
        price_box_value = price_box[i].getAttribute('data-value_price')

        if (price_box_value<price){
            all_boxes[i].classList.add('hidden')
        } else all_boxes[i].classList.remove('hidden')


    }
}
function getCookie(name) {
    var r = document.cookie.match("(|;) ?" + name + "=([^;]*)(;|$)");
    if (r) return r[2];
    else return "";}

function setCookie() {
    let price_cookie=getCookie('price_cookie')
    let checkmale_cookie=getCookie('checkmale')
    let checkfemale_cookie=getCookie('checkfemale')
    document.querySelector('#checkfemale').checked=checkfemale_cookie
    document.querySelector('#checkfemale').checked=checkmale_cookie
    if ( price_cookie!==null){
        document.querySelector('#pricebox').value=price_cookie;
    }

}
