var partnerlogos = document.querySelector(".partnerlogos")
var instafoto1 = document.querySelector(".instafoto1")
var instafoto2 = document.querySelector(".instafoto2")
var instafoto3 = document.querySelector(".instafoto3")
var instafoto4 = document.querySelector(".instafoto4")
var instafoto5 = document.querySelector(".instafoto5")
var instafoto6 = document.querySelector(".instafoto6")
var spadimg = document.querySelector(".spadimg")

class FireBaseWorker{
    fireBaseRef;
    constructor(){
        this.fireBaseRef = firebase.firestore()
    }
    async getclothes(){
        try {
            var arr1 = []
            var result = await this.fireBaseRef.collection("clothes").get()
            result.forEach(i=>{
                var tmp = i.data()
                arr1.push(tmp)
            });
            // console.log(arr1)
            return arr1
        }
        catch (error) {
            console.log(error)
        }
    }
    async getpartner(){
        try {
            var arr2 = []
            var result = await this.fireBaseRef.collection("partnior").get()
            result.forEach(i=>{
                var tmp = i.data()
                arr2.push(tmp)
            });
            for(var i of arr2){
                var myimg = document.createElement("img")
                myimg.src = i.newimage
                partnerlogos.appendChild(myimg)
            }
            // console.log(arr2)
            return arr2
        }
        catch (error) {
            console.log(error)
        }
    }
    async getfoto(){
        try {
            var arr3 = []
            var result = await this.fireBaseRef.collection("fotos").get()
            result.forEach(i=>{
                var tmp = i.data()
                arr3.push(tmp)
            });
            instafoto1.src = arr3[16].newimage
            instafoto2.src = arr3[21].newimage
            instafoto3.src = arr3[18].newimage
            instafoto4.src = arr3[8].newimage
            instafoto5.src = arr3[12].newimage
            instafoto6.src = arr3[3].newimage

            spadimg.src = arr3[10].newimage
            // console.log(arr3)
            return arr3
        }
        catch (error) {
            console.log(error)
        }
    }
}
// getcloth
var getcloth = new FireBaseWorker()
getcloth.getclothes()
// getpartn
var getpartn = new FireBaseWorker()
getpartn.getpartner()
// getfoto
var getfoto = new FireBaseWorker()
getfoto.getfoto()


// div open and close
var fashi = document.querySelector(".fashi")
var resdiv = document.querySelector(".resdiv")
var counter = 0;
var lefta = document.querySelector(".lefta")
var righta = document.querySelector(".righta")
fashi.addEventListener("click", function(){
    counter++
    if(counter%2==1){
        resdiv.style.height = "200px"

        lefta.style.display = "block"
        righta.style.display = "block"

        lefta.style.marginLeft = "20px"
        righta.style.marginRight = "20px"

        lefta.style.marginTop = "-15px"
        righta.style.marginTop = "-15px"
    }
    else if(counter%2==0){
        resdiv.style.height = "0px"

        lefta.style.display = "none"
        righta.style.display = "none"
    }
});

// language change
var lang = document.querySelector(".lang")
var imgeng = document.querySelector(".imgeng")
var imgger = document.querySelector(".imgger")
lang.addEventListener("change",function(){
    if(lang.value == "eng"){
        imgger.style.display = "none"
        imgeng.style.display = "inline-block"
    }
    else if(lang.value == "ger"){
        imgeng.style.display = "none"
        imgger.style.display = "inline-block"
    }
});

// close
var header = document.querySelector("header")
var close = document.querySelector(".close")
close.addEventListener("click",function(){
    header.style.display = "none"
});
 
// scroll and header fixed
window.onscroll = function() {myFunction()};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  }
  else{
    header.classList.remove("sticky");
  }
}

// slicknav_btn
var slicknav_btn = document.querySelector(".slicknav_btn")
var slicknav_hidden = document.querySelector(".slicknav_hidden")
var pagesul = document.querySelector(".pagesul")
var collectionul = document.querySelector(".collectionul")
var slicknav_menu = document.querySelector(".slicknav_menu")
var counter2 = 0;
slicknav_btn.addEventListener("click",function(){
    counter2++
    if(counter2%2==1){
        slicknav_hidden.style.display = "block"
        pagesul.style.display = "none"
        collectionul.style.display = "none"
    }
    else if(counter2%2==0){
        slicknav_hidden.style.display = "none"
    }
    if(counter2%2==1 && counter3%2==0 && counter4%2==0){
        slicknav_menu.style.height = "250px"
    }
    else if(counter2%2==0){
        slicknav_menu.style.height = "55px"
    }
});

// slicknav_btn - pages
var blog =document.querySelector(".blog")
var pages = document.querySelector(".pages")
var caret_right_collec = document.querySelector("#caret_right_collec")
var caret_right_page = document.querySelector("#caret_right_page")
var counter3 = 0;
var counter4 = 0;
pages.addEventListener("click",function(){
    counter3++
    if(counter3%2==1){
        pagesul.style.display = "block"
        slicknav_menu.style.height = "430px"
        caret_right_page.style.rotate = "90deg"
    }
    else if(counter3%2==0){
        pagesul.style.display = "none"
        slicknav_menu.style.height = "250px"
        caret_right_page.style.rotate = "0deg"
    }
    if(counter4%2==1){
        slicknav_menu.style.height = "530px"
    }
    if(counter3%2==0 && counter4%2==1){
        slicknav_menu.style.height = "350px"
    }
});
// slicknav_btn - collection
var collection = document.querySelector(".collection")
collection.addEventListener("click",function(){
    counter4++
    if(counter4%2==1){
        collectionul.style.display = "block"
        // collectionul.style.backgroundColor = "#212529"
        slicknav_menu.style.height = "350px"
        blog.style.marginTop = "100px"
        caret_right_collec.style.rotate = "90deg"
    }
    else if(counter4%2==0){
        collectionul.style.display = "none"
        blog.style.marginTop = "0px"
        slicknav_menu.style.height = "250px"
        caret_right_collec.style.rotate = "0deg"
    }
    if(counter3%2==1){
        slicknav_menu.style.height = "430px"
    }
    if(counter3%2==1 && counter4%2==1){
        slicknav_menu.style.height = "530px"
    }
});

var nav_depart = document.querySelector(".nav_depart")
var depart_hover = document.querySelector(".depart_hover")
var counter5 = 0;
nav_depart.addEventListener("click",function(){
    counter5++
    if(counter5%2==1){
        depart_hover.style.opacity = "1"
        depart_hover.style.visibility = "visible"
    }
    else if(counter5%2==0){
        depart_hover.style.opacity = "0"
        depart_hover.style.visibility = "hidden"
    }
});

// Set Time
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();
var cd_item = document.querySelector(".cd_item")
var span1 = document.querySelector(".span1")
var span2 = document.querySelector(".span2")
var span3 = document.querySelector(".span3")
var span4 = document.querySelector(".span4")

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  span1.innerHTML = days + "d ";
  span2.innerHTML = hours + "h ";
  span3.innerHTML = minutes + "m ";
  span4.innerHTML = seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    cd_item.innerHTML = "EXPIRED";
  }
}, 1000);


// cart_hover
var cart_icon_a = document.querySelector(".cart_icon_a")
var cart_hover = document.querySelector(".cart_hover")
var counter6 = 0;
cart_icon_a.addEventListener("mousedown", function(){
    counter6++
    if(counter6%2 == 1){
        cart_hover.style.display = "block"
        cart_hover.style.opacity =  "1";
    }
    else if(counter6%2 == 0){
        cart_hover.style.display = "none"
        cart_hover.style.opacity =  "0";
    }
});

// 
var collect = document.querySelector(".collect")
var collections = document.querySelector(".collections")
var counter7 = 0;
collections.addEventListener("click",function(){
    counter7++
    if(counter7%2==1){
        collect.style.display = "block"
        collect.style.position = "absolute"
        collect.style.marginLeft = "-25px"
    }
    else if(counter7%2==0){
        collect.style.display = "none"
    }
});
var pagg = document.querySelector(".pagg")
var pag = document.querySelector(".pag")
var counter8 = 0;
pag.addEventListener("click",function(){
    counter8++
    if(counter8%2==1){
        pagg.style.display = "block"
        pagg.style.position = "absolute"
        pagg.style.marginLeft = "-80px"
        pagg.style.width = "200px"
    }
    else if(counter8%2==0){
        pagg.style.display = "none"
    }
});