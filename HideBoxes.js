function hideboxes() {
    let malebox = document.getElementsByClassName('male');
    let checkmale = document.querySelector("#checkMale");
    let femalebox = document.getElementsByClassName('female');
    let checkfemale = document.querySelector("#checkfemale")
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


