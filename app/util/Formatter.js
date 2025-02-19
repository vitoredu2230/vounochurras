function dateFormatter(date) {
    return date.toLocaleDateString('pt-BR');
}

function dateToStringFormatter(date) {
    let [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
}

function currentDate() {
    const now = new Date();
    return now.toLocaleDateString('pt-BR');
}

function currentHour() {
    const now = new Date();
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;
    return formattedTime;
}