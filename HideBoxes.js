function hideBoxes() {
    let malebox = document.getElementsByClassName('male');
    let checkmale = document.querySelector("#checkMale");
    let femalebox = document.getElementsByClassName('female');
    let checkfemale = document.querySelector("#checkfemale")
    document.cookie='checkmale=' + checkmale.checked;
    document.cookie='checkfemale=' + checkfemale.checked;
    if (checkmale.checked){
        for(let i=0; i<malebox.length;i++){
            malebox[i].classList.remove(`hidden`) ;
        }
    } else{
        for(let i=0; i<malebox.length;i++){
            malebox[i].classList.add(`hidden`) ;
        }
    }
    if (checkfemale.checked){
        for(let i=0; i<femalebox.length;i++){
            femalebox[i].classList.remove(`hidden`) ;
        }
    } else{
        for(let i=0; i<femalebox.length;i++){
            femalebox[i].classList.add(`hidden`) ;
        }
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



