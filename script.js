setInterval(()=>{

// ___________part 1_______________

let hr=document.getElementById('hours');
let min=document.getElementById('minutes');
let sec=document.getElementById('seconds');
let ampm=document.getElementById('ampm');

let h=new Date().getHours();
let m=new Date().getMinutes();
let s=new Date().getSeconds();
let am=h>=12?"PM":"AM";

if(h>12){
    h=h-12;
}

h=(h<10)?"0"+h:h;
m=(m<10)?"0"+m:m;
s=(s<10)?"0"+s:s;

hr.innerHTML=h+"<br><span>Hours</span>";
min.innerHTML=m+"<br><span>Minutes</span>";
sec.innerHTML=s+"<br><span>Seconds</span>";
ampm.innerHTML=am;

// __________part 2____________

let hh=document.getElementById('hh');
let mm=document.getElementById('mm');
let ss=document.getElementById('ss');

hh.style.strokeDashoffset=440-(440*h)/12;
mm.style.strokeDashoffset=440-(440*m)/60;
ss.style.strokeDashoffset=440-(440*s)/60;

// ________part 3_____________

let hr_dots=document.querySelector(".hr_dot");
let min_dots=document.querySelector(".min_dot");
let sec_dots=document.querySelector(".sec_dot");

hr_dots.style.transform=`rotate(${h*30}deg)`;
min_dots.style.transform=`rotate(${m*6}deg)`;
sec_dots.style.transform=`rotate(${s*6}deg)`;
});
document.addEventListener('contextmenu', event => event.preventDefault());