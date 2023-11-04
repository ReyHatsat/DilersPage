window.addEventListener('load', (event) =>{
    resizeDiv();
    changeIco();
    console.log("test")
});

function resizeDiv() {
    var width = screen.availWidth;
    if(width>980){
        $("#fullpage").css("width", width + "px");
        $("#imgheader").css("width", width + "px");
        $("#nav-bg").css("width", width + "px");
        $("#fp-nav").css("width", width + "px");
    }
    else {
        $("#fullpage").css("width", 980 + "px");
        $("#imgheader").css("width", 980 + "px");
        $("#nav-bg").css("width", 980 + "px");
        $("#fp-nav").css("width", 980 + "px");
    }
}

function changeImg(){
    if(randomNumber() == 1){
        const imgheader = $('#imgheader');
        imgheader.attr('src', '/Assets/Img/headerCursiada.png');
    }
}

function changeIco(){
    switch(randomNumber()){
        case 2:
            $("#favicon").attr("href","Assets/Ico/ico02.ico");
            break;
        case 3:
            $("#favicon").attr("href","Assets/Ico/ico03.ico");
            break;
        case 4:
            $("#favicon").attr("href","Assets/Ico/ico04.ico");
            break;
        case 5:
            $("#favicon").attr("href","Assets/Ico/ico05.ico");
            break;
        default:
            $("#favicon").attr("href","Assets/Ico/ico01.ico");
    }    
}

function randomNumber(){
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}