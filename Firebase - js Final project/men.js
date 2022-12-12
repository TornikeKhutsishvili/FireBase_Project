
var mendiv = document.querySelector(".mendiv")
var meninfor = document.querySelector(".meninfor")

class FireBaseWorkerMen{
    fireBaseRef;
    constructor(){
        this.fireBaseRef = firebase.firestore()
    }
    async men(){
        try {
            var menarr = []
            var result = await this.fireBaseRef.collection("meninformation").get()
            result.forEach(i=>{
                var tmp = i.data()
                menarr.push(tmp)
            });
            for(var i=0; i<menarr.length; i++){
                for(let m of menarr){
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
                    
                    mendiv.appendChild(div)
                }
            }
            return menarr
        } 
        catch (error) {
            console.log(error)
        }
    }
}

// getmen
var getmen = new FireBaseWorkerMen()
getmen.men()