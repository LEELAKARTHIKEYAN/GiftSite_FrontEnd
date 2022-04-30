const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button");

function create(){
    if(username.value == "theteam8@outlook.com"){
        if(password.value == "qwerty123")
           // window.open("https://www.youtube.com/watch?v=rS77fDr1mhM");
            window.open("../../distribution/index.html");
        
        else
            alert("Check your password")
        
    }
  

    else if(username.value == "designers@outlook.com"){
        if(password.value == "qwerty123")
            // window.open("https://www.youtube.com/watch?v=rS77fDr1mhM");
            window.open("../../dashboards/designerDashboard/colorlib-regform-4/index.html");
        
        else
            alert("Check your password")
        
    }
    

    else if(username.value == "seller@outlook.com"){
        if(password.value == "qwerty123")
            // window.open("https://www.youtube.com/watch?v=rS77fDr1mhM");
            window.open("../../dashboards/sellerDashboard/colorlib-regform-4/index.html");
        
        else
            alert("Check your password")
        
    }
    else 
        alert("User Does not exist!")

    
}

function main(){

   // username.addEventListener('input',create);
    button.addEventListener('click',create);

} 

main()