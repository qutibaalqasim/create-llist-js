var elements =['java' , 'C++' , 'C#'] ;
var data = "";

for(var i = 0 ; i <= 2 ; i++){
   data += `<li>${elements[i]}</li>`;
}

document.querySelector('ul').innerHTML = data;




