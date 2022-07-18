//utils
const pushToArray = (char, arr) => arr.push(char);

const toUpperCase = string => string.toUpperCase();

const changeLettersRightToLeft = (text, position) => {
    return text.slice(position) + text.slice(0, position)
};
//utils

function scrollingText(text) {
    const rotations = [];
    for (let letterPosition = 0; letterPosition < text.length; letterPosition++) {
        const rotatedText = changeLettersRightToLeft(text, letterPosition);
        const rotatedUpperCase = toUpperCase(rotatedText);

        pushToArray(
            rotatedUpperCase,
            rotations
        );
    };
    return rotations;
};