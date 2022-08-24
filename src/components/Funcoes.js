import imgDo from '../img/do.png';
import imgRe from '../img/re.png';
import imgMi from '../img/mi.png';
import imgFa from '../img/fa.png';
import imgR1 from '../img/resposta1.png';
import imgR2 from '../img/resposta2.png';
import imgR3 from '../img/resposta3.png';
import imgR4 from '../img/resposta4.png';

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

   if (str == "1") {
        return [[3, 60, 2.5, 0], [3, 62, 2.5, 0.5], [3, 65, 0.5, 1]];
    };

    if (str == "2") {
        return [[3, 62, 2.5, 0], [3, 60, 2.5, 0.5], [3, 65, 0.5, 1]];
    };

    if (str == "3") {
        return [[3, 60, 2.5, 0], [3, 62, 2.5, 0.5], [3, 64, 0.5, 1]];
    };

    if (str == "4") {
        return [[3, 62, 2.5, 0], [3, 60, 2.5, 0.5], [3, 64, 0.5, 1]];
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

    if (str == "1") {
        return imgR1
    };

    if (str == "2") {
        return imgR2
    };

    if (str == "3") {
        return imgR3
    };

    if (str == "4") {
        return imgR4
    };

}


