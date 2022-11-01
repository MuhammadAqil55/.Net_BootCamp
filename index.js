function fer()
{

let cel = parseInt(document.getElementById("cel").value);
let calc =  (cel * 9) / 5 + 32;
let calculate = document.getElementById("calc").innerHTML = calc+'\xB0F'; 
}
function cel()
{
 
let cel = parseInt(document.getElementById("cel").value);
let calc =  (cel - 32) * 5 / 9;
 let calculate = document.getElementById("calc").innerHTML = calc+'\xB0C'; 

}