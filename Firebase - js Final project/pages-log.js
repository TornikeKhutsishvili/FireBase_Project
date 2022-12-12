
var sitebtn = document.querySelector(".sitebtn")
var email = document.querySelector(".email")
var password = document.querySelector(".password")
var login = document.querySelector(".login")
var log_h1 = document.querySelector(".log_h1")

class FireBaseWorkerUser{
    fireBaseRef;
    constructor(){
        this.fireBaseRef = firebase.firestore()
    }
    async getAllUsers(){
        try{
            var arr = []
            var arr1 = []
            let strinval = email.value
            let passval = password.value
            var result = await this.fireBaseRef.collection("users").get()
            console.log(result)
            
            result.forEach(i=>{
              var tmp = i.data()
              arr.push(tmp)
            });
            
            var ind = arr.find(x=> {
               if(x.email == strinval && x.password == passval){
                arr1.push("yes")
               }
            });
            
            if(arr1.includes("yes")){
                log_h1.innerHTML = "Login correct"
                log_h1.style.color = "green"
                log_h1.style.textAlign = "center"
            }
            else{
                log_h1.innerHTML = "Login incorrect"
                log_h1.style.color = "red"
                log_h1.style.textAlign = "center"
            }
            
            return ind
        } 
        catch (error) {
            console.log(error)
        }
    }
}

sitebtn.addEventListener("click", function(){
    var getalluser = new FireBaseWorkerUser()
    getalluser.getAllUsers()
});