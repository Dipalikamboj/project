const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#seconds');
const ampm = document.querySelector('#ampm');

function AmPm(hour) {
    return hour >= 12 ? "Pm" : "Am";
}

function formatTime(time) {
    return time.toString().padStart(2,"0");
}
function clock() {
    const date = new Date();
    
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    hour.textContent = formatTime(h);
    minute.textContent = formatTime(m);
    second.textContent = formatTime(s);
    ampm.textContent = AmPm(h);
}

setInterval(clock, 1000);

// date() object se time milega with date, then extract h, m, s from that... date.getHours() etc etc
// pass the value to html tags using textContent 
// u need to format the time too time.toString().padStart(2, "0");
// check am pm of hour >= 12 ? Pm : Am

// to continuously update the time use setInterval and pass the clock (main) fnc as callback and 1000ms(1s) as interval