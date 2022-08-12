function wordsUppercase(text) {
    const re = /[A-Za-z]+/gm;
    let arr = String(text).toUpperCase().match(re);
    console.log(arr.join(', '));
}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
wordsUppercase('Functions in JS can be nested, i.e. hold other functions');