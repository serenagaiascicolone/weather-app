

let cityUI = icon => {
    let nameUI = '';

    switch(icon) {
        // clear sky
        case '01d':
        nameUI = 'sun';
        break;

        case '01n':
        nameUI = 'moon'
        break;
        
        // clouds
        case '02d':
        case '03d':
        case '04d':
        nameUI = 'cloud';
        break;

        case '02n':
        case '03n':
        case '04n':
        nameUI = 'cloudMoon'
        break;

        // rain 
        case '09d':
        case '10d':
        nameUI = 'rain';
        break;

        case '09n':
        case '10n':
        nameUI = 'rainMoon'
        break; 

        // thunderstorm
        case '11d':
        case '11n':
        nameUI = 'thunderstorm'
        break;

        //snow
        case '13d':
        case '13n':
        nameUI = 'snow'

        // mist 
        case '50d':
        case '50n':
        nameUI = 'mixed';
        break;
 
        default:
        nameUI = 'weather';
        break
    }

    return nameUI;
}

export {cityUI}