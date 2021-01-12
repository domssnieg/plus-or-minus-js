function check(){
    var number = document.getElementById("field").value;
     if (number > 0){
        document.getElementById("solution").innerHTML="Ta liczba jest dodatnia";
     }
     else if (number<0){
        document.getElementById("solution").innerHTML="Ta liczba jest ujemna"; 
     }
     else if (number==0){
        document.getElementById("solution").innerHTML="Zero";   
     }
     else{
        document.getElementById("solution").innerHTML="Proszę, podaj liczbę";  
     }
}