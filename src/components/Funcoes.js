import imgDo from '../img/do.png';
import imgRe from '../img/re.png';
import imgMi from '../img/mi.png';
import imgFa from '../img/fa.png';

export const getNota = (str) => {
    if (str == "C") {
        return [3, 60, 2.5]
    };

    if (str == "D") {
        return [3, 62, 2.5]
    };

    if (str == "E") {
        return [3, 64, 2.5]
    };

    if (str == "F") {
        return [3, 65, 2.5]
    };
}

export const getImgNota = (str) => {
    if (str == "C") {
        return imgDo
    };

    if (str == "D") {
        return imgRe
    };

    if (str == "E") {
        return imgMi
    };

    if (str == "F") {
        return imgFa
    };
}


