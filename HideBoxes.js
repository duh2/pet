let checkMaleCookie;
let checkFemaleCookie;
let priceCookie;
function hideBoxes() {
    let malebox = document.getElementsByClassName('male');
    let checkmale = document.querySelector("#checkMale");
    let femalebox = document.getElementsByClassName('female');
    let checkFemale = document.querySelector("#checkFemale")
    document.cookie='checkmale=' + checkmale.checked;
    document.cookie='checkFemale=' + checkFemale.checked;
    if (checkmale.checked){
        for(let i=0; i<malebox.length;i++){
            malebox[i].classList.remove(`hidden`) ;
        }
    } else{
        for(let i=0; i<malebox.length;i++){
            malebox[i].classList.add(`hidden`) ;
        }
    }
    if (checkFemale.checked){
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
    else return "";
}
function getCookieOnStart(){
    let checkmale = document.querySelector("#checkMale");
    let checkFemale = document.querySelector("#checkFemale")
    document.cookie='checkmale=' + checkmale.checked;
    document.cookie='checkFemale=' + checkFemale.checked;
    if (checkMaleCookie===undefined){
         checkMaleCookie=getCookie('checkmale');
         checkMaleCookie=getCookie('checkmale');
    }
    if (checkFemaleCookie===undefined){
         checkFemaleCookie=getCookie('checkFemale');
         checkFemaleCookie=getCookie('checkFemale');
    }

     priceCookie=getCookie('price_cookie');
}

function applyStoredFilters() {
    let boolFemaleCookie
    let boolMaleCookie
    if (checkMaleCookie==="false"){
        boolMaleCookie=NaN;
    } else boolMaleCookie=true;
    if (checkFemaleCookie==="false"){
        boolFemaleCookie=NaN;
    } else boolFemaleCookie=true;




    if (checkFemaleCookie===undefined){
        document.getElementById('checkFemale').checked = true;
    }
    else{
        document.getElementById('checkFemale').checked = boolFemaleCookie;
    }
    if (checkMaleCookie===undefined){
        document.getElementById('checkMale').checked = true;
    } 
    else{
        document.getElementById('checkMale').checked = boolMaleCookie;

    }
    if ( !isNaN(priceCookie)===true) {
        document.querySelector('#pricebox').value=priceCookie;
    } else document.querySelector('#pricebox').value="0";

}



