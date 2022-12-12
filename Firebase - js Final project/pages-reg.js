var email = document.querySelector(".email")
var repeatpassword = document.querySelector(".repeatpassword")
var password = document.querySelector(".password")
var secret = document.querySelector(".secret")
var save = document.querySelector(".save")
var rep_pass_label = document.querySelector(".rep_pass_label")
var log_h1 = document.querySelector(".log_h1")

class Users{
    constructor(email,password,repeatpassword,secret){
        this.email = email;
        this.password = password;
        this.repeatpassword = repeatpassword;
        this.secret = secret;
    }
}

repeatpassword.style.display = "none"
rep_pass_label.style.display = "none"

password.addEventListener("keydown",function(){
    if(password.value.length < 7){
        repeatpassword.style.display = "none"
        rep_pass_label.style.display = "none"
    }
    else{
        repeatpassword.style.display = "inline-block"
        rep_pass_label.style.display = "inline-block"
    }
});

class FireBaseWorkerUser{
    fireBaseRef;
    constructor(){
        this.fireBaseRef = firebase.firestore()
    }
    async AddUser(user){
        try{
            var reginf = JSON.stringify(user)
            var result = await this.fireBaseRef.collection("users").add(JSON.parse(reginf));
        }
        catch (error) {
            console.log(error)
        }
    }
    async getAllUsers(){
        try {
            var regarr = []
            let strinval = email.value
            var result = await this.fireBaseRef.collection("users").get()
            result.forEach(i=>{
                var tmp = i.data()
                regarr.push(tmp)
            });
            var ind = regarr.find(x=> x.email == strinval)
            return ind
        } 
        catch (error) {
            console.log(error)
        }
    }
}

save.addEventListener("click",function(){
    var getuser = new FireBaseWorkerUser()
    getuser.getAllUsers()
    let x = getuser.getAllUsers()
    x.then(el=>{
        if(el == undefined){
            if(password.value.length >= 8 && password.value.length == repeatpassword.value.length){
                var fbw = new FireBaseWorkerUser()
                var user = new Users(email.value,password.value,repeatpassword.value,secret.value)
                fbw.AddUser(user)
                log_h1.innerHTML = "Registration correct"
                log_h1.style.color = "green"
                log_h1.style.textAlign = "center"
            }
        }
        else{
            log_h1.innerHTML = "Registration incorrect, This user already have"
            log_h1.style.color = "red"
            log_h1.style.textAlign = "center"
        }
    });
});