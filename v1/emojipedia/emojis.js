// https://emoji.aranja.com/static/emoji-data/img-apple-160/1f600.png

function func(emoji) {
    const codePoint = emoji.codePointAt(0).toString(16).toUpperCase();
    // return `Emoji: &#x${codePoint};`;
    return codePoint.toLowerCase();
}

// console.log(func("😀")); // Emoji: &#x1F600;

function toImage(val) {
    // return `https://emoji.aranja.com/static/emoji-data/img-apple-160/${val}.png`;
    // return `https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/${val}.svg`;
    return `https://images.emojiterra.com/microsoft/fluent-emoji/15.1/512px/${val}_flat.png`;
}

function toImageTag(val) {
    return `<img width="20" style='vertical-align: center; ' src="${toImage(val)}">`;
}
 


// const frase = "😀 - testando";
// const resultado = frase.replace(/\p{Emoji_Presentation}/gu, e=>toImageTag(func(e)))
// console.log(resultado); // x - testando

function phraseToEmojiPhare(frase) {
    // const frase = "😀 - testando";
    return frase.replace(/\p{Emoji_Presentation}/gu, e=>toImageTag(func(e)));
}



