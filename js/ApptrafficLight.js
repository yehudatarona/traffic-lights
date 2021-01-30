let counter = 0
// let color_ar = ["red", "orange", "green", "orange", "red"]
let color_ar = ["red", "orange", "green"]
let timer;

window.onload = () => {

    init();

};

// init function

const init = () => {
    counter = 0;
    timer = 0;
    changeLigthColor();
};

const onDealyOneSec = () =>{
    if(timer >= 0){
        timer = setInterval(changeLigthColor,2000);
    }
}

const changeLigthColor = () => {
    let id_red = document.querySelector("#id_red");
    let id_Divbg = document.querySelector("#id_Divbg");
    // id_red.style.backgroundColor = color_ar[counter%(color_ar.length)];
    id_Divbg.style.backgroundColor = color_ar[counter%(color_ar.length)];
 
    // id_red.innerHTML = counter;
    id_Divbg.innerHTML = counter;
    // counter++

    if(counter == 0){
        id_red.style.backgroundColor = color_ar[0];
        clearInterval(timer);
        timer=0;
        counter++;
        onDealyOneSec();
    }
    else if(counter == 1){
        id_red.style.backgroundColor = "white";
        id_orange.style.backgroundColor = color_ar[1];
        clearInterval(timer);
        timer=0;
        counter++;
        onDealyOneSec();

    }
    else if (counter == 2){
        id_red.style.backgroundColor = "white";
        id_orange.style.backgroundColor = "white";
        id_green.style.backgroundColor = color_ar[2];
        clearInterval(timer);
        timer=0;
        counter++;
        onDealyOneSec();
        
    }
   else if(counter >= color_ar.length){
    id_green.style.backgroundColor = "white";
        clearInterval(timer);
        timer=0;
        counter=0;
        onDealyOneSec();
    }
    else{
        clearInterval(timer);
    }

    // if(counter >= color_ar.length){
    //     clearInterval(timer);
    //     timer=0;
    //     counter=0;
    //     onDealyOneSec();
    // }
}

const onStop = () =>{
    clearInterval(timer);
}


