
var kidsdiv = document.querySelector(".kidsdiv")
var kidsinfor = document.querySelector(".womeninfor")

class FireBaseWorkerMen{
    fireBaseRef;
    constructor(){
        this.fireBaseRef = firebase.firestore()
    }
    async kids(){
        try {
            var kidsarr = []
            var result = await this.fireBaseRef.collection("kidesinformation").get()
            result.forEach(i=>{
                var tmp = i.data()
                kidsarr.push(tmp)
            });
            for(var i=0; i<kidsarr.length; i++){
                for(let m of kidsarr){
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
                    priceinfor.innerHTML = m.price
                    saleinfor.style.display = "inline-block"
                    saleinfor.style.marginLeft = "15px"
                    saleinfor.style.textDecoration = "line-through"
                    saleinfor.style.fontSize = "26px"
                    
                    saleinfor.innerHTML = m.sale
                    div.appendChild(newimageinfor)
                    div.appendChild(clothesinfor)
                    div.appendChild(categoriesinfor)
                    div.appendChild(categoryinfor)
                    div.appendChild(categorynameinfor)
                    div.appendChild(priceinfor)
                    div.appendChild(saleinfor)
                    
                    kidsdiv.appendChild(div)
                }
            }
            return kidsarr
        } 
        catch (error) {
            console.log(error)
        }
    }
}

// getkids
var getkids = new FireBaseWorkerMen()
getkids.kids()