document.querySelector("form").addEventListener("submit",masailogin)
let mail=JSON.parse(localStorage.getItem("mail"))
let password=JSON.parse(localStorage.getItem("pass"))
console.log(mail,password)

//console.log(arr)
function masailogin(event){
    event.preventDefault();
    let name=document.querySelector("#nm").value
    let number=document.querySelector("#num").value
    let eml=document.querySelector("#em").value
    let psw=document.querySelector("#pa").value


    localStorage.setItem("mail",JSON.stringify(eml))
    localStorage.setItem("pass",JSON.stringify(psw))
    window.location.href="file:///C:/Users/ATUL/Desktop/unit%20project-1/quizzical-powder-4322/day4/sigin.html"
}