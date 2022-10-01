setInterval(() => {
let date=new Date();
let hour=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();
hour = 30*hour+min/2;
Minute = 6*min;
Second = 6*sec;
console.log(Second)
se.style.transform=`rotate(${Second}deg)`;
minute.style.transform=`rotate(${Minute}deg)`;
hours.style.transform=`rotate(${hour}deg)`;
document.getElementById("hour").innerHTML =date.getHours()+" : ";
    document.getElementById("minutes").innerHTML = date.getMinutes()+" : ";
    document.getElementById("second").innerHTML = date.getSeconds();
}, 1000);