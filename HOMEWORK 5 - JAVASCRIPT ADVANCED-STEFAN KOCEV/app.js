function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours === 0) {
        hours = 12;
    }
    if (hours < 10) {
        let hours = `0` + hours
    }
    if (minutes < 10) {
        let minutes = `0` + minutes;
    }
    if (seconds < 10) {
        let seconds = `0` + seconds;
    }
    let time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = time;
    setTimeout(showTime, 1000);
}
showTime();