var clothes = document.querySelector(".clothes")
var categories = document.querySelector(".categories")
var category = document.querySelector(".category")
var categoryname = document.querySelector(".categoryname")
var price = document.querySelector(".price")
var sale = document.querySelector(".sale")
var blog_a = document.querySelector(".blog_a")
var blog_p = document.querySelector(".blog_p")
var blog_span = document.querySelector(".blog_span")
class Clothes{
    constructor(clothes,categories,price,newimage){
        this.clothes = clothes
        this.categories = categories
        this.price = price
        this.newimage = newimage
    }
}
class Partner{
    constructor(newimage){
        this.newimage = newimage
    }
}
class Foto{
    constructor(newimage){
        this.newimage = newimage
    }
}
class Women{
    constructor(clothes,categories,category,categoryname,price,sale,newimage){
        this.clothes = clothes
        this.categories = categories
        this.category = category
        this.categoryname = categoryname
        this.price = price
        this.sale = sale
        this.newimage = newimage
    }
}
class Men{
    constructor(clothes,categories,category,categoryname,price,sale,newimage){
        this.clothes = clothes
        this.categories = categories
        this.category = category
        this.categoryname = categoryname
        this.price = price
        this.sale = sale
        this.newimage = newimage
    }
}
class Kids{
    constructor(clothes,categories,category,categoryname,price,sale,newimage){
        this.clothes = clothes
        this.categories = categories
        this.category = category
        this.categoryname = categoryname
        this.price = price
        this.sale = sale
        this.newimage = newimage
    }
}
class Blog{
    constructor(blog_a,blog_p,blog_span,newimage){
        this.blog_a = blog_a
        this.blog_p = blog_p
        this.blog_span = blog_span
        this.newimage = newimage
    }
}

var image = document.querySelector("#image");
var myimage = document.querySelector("#myimage")
var newimage = "";
image.addEventListener("change", function(){
    var reader = new FileReader();
    reader.addEventListener("load", () => {
        newimage = reader.result;
        myimage.style.backgroundImage = `url(${newimage})`
    });
    reader.readAsDataURL(this.files[0]);
});

class FireBaseWorker{
    registerdate;
    fireBaseRef;
    constructor(){
        this.fireBaseRef = firebase.firestore()
        this.registerdate = new Date().toLocaleDateString();
    }
    async addclothes(cloth){
        try {
            var clothe = JSON.stringify(cloth)
            var result = await this.fireBaseRef.collection("clothes").add(JSON.parse(clothe));
        } 
        catch (error) {
            console.log(error)    
        }
    }
    async addpartner(partner){
        try {
            var partn = JSON.stringify(partner)
            var result = await this.fireBaseRef.collection("partnior").add(JSON.parse(partn))
        } 
        catch (error) {
            console.log(error)
        }
    }
    async addfoto(foto){
        try {
            var ft = JSON.stringify(foto)
            var result = await this.fireBaseRef.collection("fotos").add(JSON.parse(ft))
        } 
        catch (error) {
            console.log(error)
        }
    }
    async addwomen(womeninfo){
        try {
            var womeninf = JSON.stringify(womeninfo)
            var result = await this.fireBaseRef.collection("womeninformation").add(JSON.parse(womeninf))
        } 
        catch (error) {
            console.log(error)
        }
    }
    async addmen(meninfo){
        try {
            var meninf = JSON.stringify(meninfo)
            var result = await this.fireBaseRef.collection("meninformation").add(JSON.parse(meninf))
        } 
        catch (error) {
            console.log(error)
        }
    }
    async addkids(kidsinfo){
        try {
            var kidsinf = JSON.stringify(kidsinfo)
            var result = await this.fireBaseRef.collection("kidesinformation").add(JSON.parse(kidsinf))
        } 
        catch (error) {
            console.log(error)
        }
    }
    async addblog(bloginfo){
        try {
            var bloginf = JSON.stringify(bloginfo)
            var result = await this.fireBaseRef.collection("bloginformation").add(JSON.parse(bloginf))
        } 
        catch (error) {
            console.log(error)    
        }
    }
}

// add clothes
var save = document.querySelector(".save")
save.addEventListener("click",function(){
    var fbw = new FireBaseWorker()
    var cloth = new Clothes(clothes.value,categories.value,price.value,newimage)
    fbw.addclothes(cloth)
});

// add partnior
var addpartn = document.querySelector(".addpartn")
addpartn.addEventListener("click",function(){
    var fbw1 = new FireBaseWorker()
    var partner = new Partner(newimage)
    fbw1.addpartner(partner)
});

// add foto
var addfoto = document.querySelector(".addfoto")
addfoto.addEventListener("click",function(){
    var fbw3 = new FireBaseWorker()
    var foto = new Foto(newimage)
    fbw3.addfoto(foto)
});

// add women
var addwomen = document.querySelector(".addwomen")
addwomen.addEventListener("click",function(){
    var fbw4 = new FireBaseWorker()
    var women = new Women(clothes.value,categories.value,category.value,categoryname.value,price.value,sale.value,newimage)
    fbw4.addwomen(women)
});

// add men
var addmen = document.querySelector(".addmen")
addmen.addEventListener("click",function(){
    var fbw5 = new FireBaseWorker()
    var men = new Men(clothes.value,categories.value,category.value,categoryname.value,price.value,sale.value,newimage)
    fbw5.addmen(men)
});

// add kids
var addkids = document.querySelector(".addkids")
addkids.addEventListener("click",function(){
    var fbw6 = new FireBaseWorker()
    var kids = new Kids(clothes.value,categories.value,category.value,categoryname.value,price.value,sale.value,newimage)
    fbw6.addkids(kids)
});

// add blogs
var addblog = document.querySelector(".addblog")
addblog.addEventListener("click",function(){
    var fbw7 = new FireBaseWorker()
    var blogs = new Blog(blog_a.value,blog_p.value,blog_span.value,newimage)
    fbw7.addblog(blogs)
});