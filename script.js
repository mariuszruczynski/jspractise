

function myFunction() {
    var age, name, surname, gender;
  
    name = document.getElementById("name").value;
    surname = document.getElementById("surName").value;
    age = parseInt(document.getElementById("age").value); 
    
    if (name.endsWith("a")){ 
        alert("Dzien dobry kochana!");
        gender = "Pani ";
        document.getElementById("demo").style.fontSize="35px";
        document.getElementById("demo").style.color="pink";
    }else{
        alert("Cześć stary zgredzie!");
        gender = "Pan "
        document.getElementById("demo").style.fontSize="35px";
        document.getElementById("demo").style.color="red";
    }
    
    if(age<18){
        document.getElementById("demo").innerHTML = gender + name + " " + surname + " - nie możesz jeszcze głosować !!!";
    }else{
        document.getElementById("demo").innerHTML =  gender + name + " " + surname + " - spoko mozesz glosowac !!!";  
    }
    
   
}