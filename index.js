const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const generateKey = (length) => {
    let randomString = "";

    for (let i = 1; i < length; i++) {
        randomString += characters[Math.floor(Math.random() * characters.length)];
    }

    return randomString;
};
const key = generateKey(16, characters);
console.log(key);