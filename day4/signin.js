document.querySelector("form").addEventListener("submit",login)
    let email=JSON.parse(localStorage.getItem("mail"))
    let passwor=JSON.parse(localStorage.getItem("pass"))
function login(event){
    let mail=document.querySelector("#em").value// atul@gmail
    let pass=document.querySelector("#pa").value //1234

    event.preventDefault();
    if (email===mail && pass===passwor){
        alert("login successfully")
        window.location.href="file:///C:/Users/ATUL/Desktop/unit%20project-1/quizzical-powder-4322/day1/index.html"
        console.log(mail,pass)
    }
    else{
        alert("inncorret data")
    }
}