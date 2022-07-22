document.querySelector("#btn").addEventListener("click",login)
arr=JSON.parse(localStorage.getItem("list"))||[];
display(arr)
function login(event){
    event.preventDefault();
    obj={
        local:document.querySelector("#locat").value,
    };
    arr.push(obj)
    localStorage.setItem("list",JSON.stringify(arr))
    display(arr)
}

function display(arr){
    document.querySelector("tbody").innerHTML=""
    arr.forEach(function(ele){
        let row=document.createElement("tr")
        let col1=document.createElement("td")
        col1.innerText=ele.local
        row.append(col1);
        document.querySelector("tbody").append(row);
    });
    
}