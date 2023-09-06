

let cityUI = icon => {
    let nameUI = '';

    switch(icon) {
        case 'cloud':
        nameUI = 'cloud';
        break;
        case 'sun':
        nameUI = 'sun';
        break;
        case 'mixed':
        nameUI = 'mixed';
        break;
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