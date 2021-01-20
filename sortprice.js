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
    let cookie = " " + document.cookie;
    let search = " " + name + "=";
    let setStr = null;
    let offset = 0;
    let end = 0;
    if (cookie.length > 0) {
        offset = cookie.indexOf(search);
        if (offset !== -1) {
            offset += search.length;
            end = cookie.indexOf(";", offset);
            if (end === -1) {
                end = cookie.length;
            }
            setStr = decodeURI(cookie.substring(offset, end));
        }
    }
    return(setStr);
}
function setCookie() {
    let price_cookie=getCookie('price_cookie')
    alert(price_cookie)
    if ( price_cookie!==null){
        document.querySelector('#pricebox').value=price_cookie;
    }

}
