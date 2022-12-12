var blogdiv = document.querySelector(".blogdiv")
class FireBaseWorker{
    fireBaseRef;
    constructor(){
        this.fireBaseRef = firebase.firestore()
    }
    async getblog(){
        try {
            var blogarr = []
            var result = await this.fireBaseRef.collection("bloginformation").get()
            result.forEach(i=>{
                var tmp = i.data()
                blogarr.push(tmp)
            });
            for(let m of blogarr){
                var div = document.createElement("div")
                div.style.display = "inline-block"
                div.style.marginTop = "30px"
                div.style.marginLeft = "30px"
                div.style.marginRight = "30px"

                var newimageinfor = document.createElement("img")
                newimageinfor.src = m.newimage
                newimageinfor.style.width = "400px"
                newimageinfor.style.textAlign = "center"

                var bl_a = document.createElement("h1")
                bl_a.innerHTML = m.blog_a
                bl_a.style.fontSize = "24px"
                bl_a.style.width = "400px"
                bl_a.style.marginTop = "10px"

                var bl_p = document.createElement("h4")
                bl_p.innerHTML = m.blog_p
                bl_p.style.color = "orange"
                bl_p.style.display = "inline-block"
                bl_p.style.textAlign = "center"
                bl_p.style.fontSize = "20px"

                var bl_span = document.createElement("h4")
                bl_span.innerHTML = m.blog_span
                bl_span.style.display = "inline-block"
                bl_span.style.marginLeft = "15px"
                bl_span.style.fontSize = "20px"

                div.appendChild(newimageinfor)
                div.appendChild(bl_a)
                div.appendChild(bl_p)
                div.appendChild(bl_span)

                blogdiv.appendChild(div)
            }
        } 
        catch (error) {
            console.log(error)
        }
    }
}
// getblog
var getblg = new FireBaseWorker()
getblg.getblog()

