
 const enddate  = '24 nov 2024 9:47 AM';
 document.getElementById('enddate').innerText = enddate;
 const input = document.querySelectorAll('input');
clock = () =>{
let end = new Date(enddate);
let now = new Date();
const diff = ( end - now )/1000;
if(diff<0)return;

input[0].value = Math.floor(diff/3600/24);
input[1].value = Math.floor((diff/3600)%24);
input[2].value = Math.floor((diff/60)%60);
input[3].value = Math.floor(diff%60);

}
clock();

setInterval(clock,1000)
