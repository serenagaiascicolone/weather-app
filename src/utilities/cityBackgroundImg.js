

let cityBackgroundImg = icon => {
    let nameClassBg = '';

    switch(icon) {
        case 'cloud':
        nameClassBg = 'cloud';
        break;
        case 'sun':
        nameClassBg = 'sun';
        break;
        case 'rain':
        nameClassBg = 'rain';
        break;
        default:
        nameClassBg = '';
        break
    }

    return nameClassBg;
}

export {cityBackgroundImg}