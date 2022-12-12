
var product_list = document.querySelector(".product_list")
class FireBaseWorkerShop{
    fireBaseRef;
    constructor(){
        this.fireBaseRef = firebase.firestore()
    }
    async women(){
        try {
            var shoparr = []
            var result = await this.fireBaseRef.collection("womeninformation").get()
            result.forEach(i=>{
                var tmp = i.data()
                shoparr.push(tmp)
            });
            for(let m of shoparr){
                var div = document.createElement("div")
                div.style.display = "inline-block"
                div.style.marginTop = "15px"
                div.style.marginLeft = "30px"
                div.style.marginRight = "30px"
                    
                var newimageinfor = document.createElement("img")
                newimageinfor.src = m.newimage
                newimageinfor.style.width = "200px"
                newimageinfor.style.height = "230px"
                newimageinfor.style.textAlign = "center"
                    
                var clothesinfor = document.createElement("h2")
                clothesinfor.innerHTML = m.clothes
                clothesinfor.style.textAlign = "center"
                clothesinfor.style.fontSize = "18px"
                clothesinfor.style.marginTop = "10px"
                    
                var categoriesinfor = document.createElement("h3")
                categoriesinfor.innerHTML = m.categories
                categoriesinfor.style.textAlign = "center"
                categoriesinfor.style.fontSize = "24px"
                    
                var categoryinfor = document.createElement("h3")
                categoryinfor.innerHTML = m.category
                categoryinfor.style.textAlign = "center"
                categoryinfor.style.fontSize = "16px"
                categoryinfor.style.color = "#6e6e6e"
                    
                var categorynameinfor = document.createElement("h4")
                categorynameinfor.innerHTML = m.categoryname
                categorynameinfor.style.textAlign = "center"
                categorynameinfor.style.fontSize = "20px"
                    
                var priceinfor = document.createElement("h1")
                priceinfor.innerHTML = m.price
                priceinfor.style.color = "orange"
                priceinfor.style.marginLeft = "78px"
                priceinfor.style.display = "inline-block"
                priceinfor.style.textAlign = "center"
                priceinfor.style.fontSize = "26px"
                    
                var saleinfor = document.createElement("h1")
                saleinfor.innerHTML = m.sale
                saleinfor.style.display = "inline-block"
                saleinfor.style.marginLeft = "15px"
                saleinfor.style.textDecoration = "line-through"
                saleinfor.style.fontSize = "26px"
                    
                div.appendChild(newimageinfor)
                div.appendChild(clothesinfor)
                div.appendChild(categoriesinfor)
                div.appendChild(categoryinfor)
                div.appendChild(categorynameinfor)
                div.appendChild(priceinfor)
                div.appendChild(saleinfor)
                    
                product_list.appendChild(div)
            }
        } 
        catch (error) {
            console.log(error)
        }
    }
    async men(){
        try {
            var shoparr = []
            var result = await this.fireBaseRef.collection("meninformation").get()
            result.forEach(i=>{
                var tmp = i.data()
                shoparr.push(tmp)
            });
            for(let m of shoparr){
                var div = document.createElement("div")
                div.style.display = "inline-block"
                div.style.marginTop = "15px"
                div.style.marginLeft = "30px"
                div.style.marginRight = "30px"
                    
                var newimageinfor = document.createElement("img")
                newimageinfor.src = m.newimage
                newimageinfor.style.width = "200px"
                newimageinfor.style.height = "230px"
                newimageinfor.style.textAlign = "center"
    
                var clothesinfor = document.createElement("h2")
                clothesinfor.innerHTML = m.clothes
                clothesinfor.style.textAlign = "center"
                clothesinfor.style.fontSize = "18px"
                clothesinfor.style.marginTop = "10px"
                    
                var categoriesinfor = document.createElement("h3")
                categoriesinfor.innerHTML = m.categories
                categoriesinfor.style.textAlign = "center"
                categoriesinfor.style.fontSize = "24px"
                    
                var categoryinfor = document.createElement("h3")
                categoryinfor.innerHTML = m.category
                categoryinfor.style.textAlign = "center"
                categoryinfor.style.fontSize = "16px"
                categoryinfor.style.color = "#6e6e6e"
                    
                var categorynameinfor = document.createElement("h4")
                categorynameinfor.innerHTML = m.categoryname
                categorynameinfor.style.textAlign = "center"
                categorynameinfor.style.fontSize = "20px"
                    
                var priceinfor = document.createElement("h1")
                priceinfor.innerHTML = m.price
                priceinfor.style.color = "orange"
                priceinfor.style.marginLeft = "78px"
                priceinfor.style.display = "inline-block"
                priceinfor.style.textAlign = "center"
                priceinfor.style.fontSize = "26px"

                var saleinfor = document.createElement("h1")
                saleinfor.innerHTML = m.sale
                saleinfor.style.display = "inline-block"
                saleinfor.style.marginLeft = "15px"
                saleinfor.style.textDecoration = "line-through"
                saleinfor.style.fontSize = "26px"
                    
                div.appendChild(newimageinfor)
                div.appendChild(clothesinfor)
                div.appendChild(categoriesinfor)
                div.appendChild(categoryinfor)
                div.appendChild(categorynameinfor)
                div.appendChild(priceinfor)
                div.appendChild(saleinfor)
                    
                product_list.appendChild(div)
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    async kids(){
        try {
            var shoparr = []
            var result = await this.fireBaseRef.collection("kidesinformation").get()
            result.forEach(i=>{
                var tmp = i.data()
                shoparr.push(tmp)
            });
            for(let m of shoparr){
                var div = document.createElement("div")
                div.style.display = "inline-block"
                div.style.marginTop = "15px"
                div.style.marginLeft = "30px"
                div.style.marginRight = "30px"
                    
                var newimageinfor = document.createElement("img")
                newimageinfor.src = m.newimage
                newimageinfor.style.width = "200px"
                newimageinfor.style.height = "230px"

                var clothesinfor = document.createElement("h2")
                clothesinfor.innerHTML = m.clothes
                clothesinfor.style.textAlign = "center"
                clothesinfor.style.fontSize = "18px"
                clothesinfor.style.marginTop = "10px"

                var categoriesinfor = document.createElement("h3")
                categoriesinfor.innerHTML = m.categories
                categoriesinfor.style.textAlign = "center"
                categoriesinfor.style.fontSize = "24px"
                    
                var categoryinfor = document.createElement("h3")
                categoryinfor.innerHTML = m.category
                categoryinfor.style.textAlign = "center"
                categoryinfor.style.fontSize = "16px"
                categoryinfor.style.color = "#6e6e6e"
                    
                var categorynameinfor = document.createElement("h4")
                categorynameinfor.innerHTML = m.categoryname
                categorynameinfor.style.textAlign = "center"
                categorynameinfor.style.fontSize = "20px"
                   
                var priceinfor = document.createElement("h1")
                priceinfor.innerHTML = m.price
                priceinfor.style.color = "orange"
                priceinfor.style.marginLeft = "78px"
                priceinfor.style.display = "inline-block"
                priceinfor.style.textAlign = "center"
                priceinfor.style.fontSize = "26px"
                   
                var saleinfor = document.createElement("h1")
                saleinfor.innerHTML = m.sale
                saleinfor.style.display = "inline-block"
                saleinfor.style.marginLeft = "15px"
                saleinfor.style.textDecoration = "line-through"
                saleinfor.style.fontSize = "26px"
                    
                div.appendChild(newimageinfor)
                div.appendChild(clothesinfor)
                div.appendChild(categoriesinfor)
                div.appendChild(categoryinfor)
                div.appendChild(categorynameinfor)
                div.appendChild(priceinfor)
                div.appendChild(saleinfor)
                    
                product_list.appendChild(div)
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    price(shoparr){
        for(let m of shoparr){
            var div = document.createElement("div")
            div.style.display = "inline-block"
            div.style.marginTop = "15px"
            div.style.marginLeft = "30px"
            div.style.marginRight = "30px"
                
            var newimageinfor = document.createElement("img")
            newimageinfor.src = m.newimage
            newimageinfor.style.width = "200px"
            newimageinfor.style.height = "230px"
        
            var clothesinfor = document.createElement("h2")
            clothesinfor.innerHTML = m.clothes
            clothesinfor.style.textAlign = "center"
            clothesinfor.style.fontSize = "18px"
            clothesinfor.style.marginTop = "10px"
        
            var categoriesinfor = document.createElement("h3")
            categoriesinfor.innerHTML = m.categories
            categoriesinfor.style.textAlign = "center"
            categoriesinfor.style.fontSize = "24px"
                
            var categoryinfor = document.createElement("h3")
            categoryinfor.innerHTML = m.category
            categoryinfor.style.textAlign = "center"
            categoryinfor.style.fontSize = "16px"
            categoryinfor.style.color = "#6e6e6e"
                
            var categorynameinfor = document.createElement("h4")
            categorynameinfor.innerHTML = m.categoryname
            categorynameinfor.style.textAlign = "center"
            categorynameinfor.style.fontSize = "20px"
               
            var priceinfor = document.createElement("h1")
            priceinfor.innerHTML = m.price
            priceinfor.style.color = "orange"
            priceinfor.style.marginLeft = "78px"
            priceinfor.style.display = "inline-block"
            priceinfor.style.textAlign = "center"
            priceinfor.style.fontSize = "26px"
               
            var saleinfor = document.createElement("h1")
            saleinfor.innerHTML = m.sale
            saleinfor.style.display = "inline-block"
            saleinfor.style.marginLeft = "15px"
            saleinfor.style.textDecoration = "line-through"
            saleinfor.style.fontSize = "26px"
                
            div.appendChild(newimageinfor)
            div.appendChild(clothesinfor)
            div.appendChild(categoriesinfor)
            div.appendChild(categoryinfor)
            div.appendChild(categorynameinfor)
            div.appendChild(priceinfor)
            div.appendChild(saleinfor)
                
            product_list.appendChild(div)

            price(pricearr)
        }
    }
}
// getshopwomen
var getshopwomen = new FireBaseWorkerShop()
getshopwomen.women()
// getshopmen
var getshopmen = new FireBaseWorkerShop()
getshopmen.men()
// getshopkids
var getshopkids = new FireBaseWorkerShop()
getshopkids.kids()


// sort price
var pricearr = []
var selprise = document.querySelector(".selprise")
selprise.addEventListener("change",function(){
    if(selprise.value == "asc"){
        pricearr.sort(function(a,b){
            return a.price - b.price
        });
        product_list.innerHTML = ""
        price(pricearr)
    }
    else if(selprise.value == "desc"){
        pricearr.sort(function(b,a){
            return a.price - b.price
        });
        product_list.innerHTML = ""
        price(pricearr)
    } 
});


// sort person
// var selperson = document.querySelector(".selperson")
// selperson.addEventListener("change",function(){
//     if(selperson.value == "women"){

//     }
//     else if(selperson.value == "men"){

//     }
//     else if(selperson.value == "kids"){

//     }
// });


// sort category
// var selcateg = document.querySelector(".selcateg")
// selcateg.addEventListener("change",function(){
//     if(selcateg.value == "trousers"){
        
//     }
//     else if(selcateg.value == "sweaters"){

//     }
//     else if(selcateg.value == "bags"){

//     }
//     else if(selcateg.value == "underwear"){

//     }
//     else if(selcateg.value == "brand_fash"){

//     }
//     else if(selcateg.value == "luxury"){

//     }
//     else if(selcateg.value == "shoes"){

//     }
// });