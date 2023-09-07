

let cityUI = icon => {
    let nameUI = '';

    switch(icon) {
        case 'cloud':
        case '03d':
        case '03n':
        case '04d':
        case '04n':
        case '09n':
        case '11d':
        case '11n':
        case '13d':
        case '13n':
        case '50d':
        case '50n':
        nameUI = 'cloud';
        break;
        case 'sun':
        case '01d':
        case '01n':
        nameUI = 'sun';
        break;
        case '02d':
        case '02n':
        case '10n':
        case 'mixed':
        nameUI = 'mixed';
        break;
        case '09d':
        case '10d':
        case 'rain':
        nameUI = 'rain';
        break;
        default:
        nameUI = 'weather';
        break
    }

    return nameUI;
}

export {cityUI}