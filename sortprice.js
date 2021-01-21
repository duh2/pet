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
        } else {
            all_boxes[i].classList.remove('hidden')
        }


    }
}
function getCookie(name) {
    var r = document.cookie.match("(|;) ?" + name + "=([^;]*)(;|$)");
    if (r) return r[2];
    else return "";}

function setCookie() {
    let priceCookie=getCookie('price_cookie');
    let checkMaleCookie=getCookie('checkmale');
    let checkFemaleCookie=getCookie('checkfemale');
    if (checkFemaleCookie==null){
        document.querySelector('#checkfemale').checked=true;
    } else {
        document.querySelector('#checkfemale').checked=checkFemaleCookie;
    }    document.querySelector('#checkfemale').checked=checkFemaleCookie;
    document.querySelector('#checkMale').checked=checkMaleCookie;
    if ( priceCookie!==null) {
        document.querySelector('#pricebox').value=priceCookie;
    }

}
