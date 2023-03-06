let hour = 0;
let second = 0;
let minute = 0;
let second2 = 0;


function stopWatch (){
const hourInterval = setInterval(() => {
    document.getElementById('hour').innerText = ++hour;
    if(hour === 12||13||14||15||16||17||18||19||20||21||22||23||24){
        document.getElementById('time').innerText = 'PM'
    }
    else if(hour === 24){
        hour = 0;
    }
    else if (hour === 0 || 1 ||2 ||3||4||5||6||7||8||9||10||11){
        document.getElementById('time').innerText = 'AM'
    }
}, 3600000);


const secondInterval = setInterval(() => {
    document.getElementById('second').innerText = ++second;
    if(second === 60){
        second = 0;
    }
}, 1000);


const minuteInterval = setInterval(() => {
    document.getElementById('minute').innerText = ++minute;
    if(minute === 60){
        minute = 0;
    }
}, 60000);


const miliSecondInterval = setInterval(() => {
    document.getElementById('second2').innerText = ++second2;
    if(second2 === 10){
        second2 = 0;
    }
}, 100);

document.getElementById('btn-stop').addEventListener('click', function(){
    clearInterval(hourInterval)
    clearInterval(minuteInterval)
    clearInterval(secondInterval)
    clearInterval(miliSecondInterval)
});document.getElementById('btn-reset').addEventListener('click', function(){
    hour = 0;
   second = 0;
   minute = 0;
   second2 = 0
   clearInterval(hourInterval)
    clearInterval(minuteInterval)
    clearInterval(secondInterval)
    clearInterval(miliSecondInterval)
      document.getElementById('hour').innerText = 0;
      document.getElementById('minute').innerText = 0;
      document.getElementById('second').innerText = 0;
      document.getElementById('second2').innerText = 0;
  });



}

document.getElementById('btn-start').addEventListener('click', function(){
    stopWatch()
});



