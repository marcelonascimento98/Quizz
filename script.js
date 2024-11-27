const hoursElement   = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')
const dateElement    = document.getElementById('date')

function fixTime(time){
    return time < 10 ? '0'+time : time
}

function newTime(){
    const date = new Date();
    const hours   = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Atualizando o relógio
    hoursElement.textContent   = fixTime(hours);
    minutesElement.textContent = fixTime(minutes);
    secondsElement.textContent = fixTime(seconds);
    
    // Atualizando a data
    const dayOfWeek = date.toLocaleString('pt-BR', { weekday: 'long' });
    const day = date.getDate();
    const month = date.toLocaleString('pt-BR', { month: 'long' });
    const year = date.getFullYear();

    const formattedDate = `${dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)}, ${day} de ${month} de ${year}`;
    dateElement.textContent = formattedDate;
}

newTime();
setInterval(newTime, 1000);

