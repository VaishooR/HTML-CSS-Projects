const days=document.querySelector('#days');
const hours=document.querySelector('#hours');
const minutes=document.querySelector('#minutes');
const seconds=document.querySelector('#seconds');

function updateTime(){
    const today=new Date();
    console.log(today);
    
    const newYear=new Date('January 1 2023 00:00:00');
    console.log(newYear);
    
    const diff=newYear - today;
    
    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor((diff/1000/60/60)%24);
    const m=Math.floor((diff/1000/60)%60);
    const s=Math.floor((diff/1000)%60);
    
    days.innerHTML=d<10?'0'+d:d;
    hours.innerHTML=h<10?'0'+h:h;
    minutes.innerHTML=m<10?'0'+m:m;
    seconds.innerHTML=s<10?'0'+s:s;
}
// updateTime();

setInterval(updateTime,1000)
