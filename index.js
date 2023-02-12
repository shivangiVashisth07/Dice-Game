var number_1 = Math.random();
number_1 = Math.floor(number_1*6)+1;
var imagesource = "images/"+"dice"+number_1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imagesource);
var number_2  = Math.random();
number_2= Math.floor(number_2*6)+1;
var imagesource = "images/"+"dice"+number_2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imagesource);
function dicegame(number_1,number_2)
{if(number_1>number_2)
{return("Player wins!");}
else {
if( number_2>number_1)
{return ("Computer wins!");}
else 
{return ("Match Draw!");}
}}
document.querySelector("h2").innerHTML = dicegame(number_1,number_2) ;