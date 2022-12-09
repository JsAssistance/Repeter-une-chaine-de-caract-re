function repeatString(str, num) {
    console.log(num < 0 ? str : str.repeat(num));
}

repeatString('Hello World', 100);