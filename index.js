const generateKey = (length, characters) => {
    let randomString = "";
    
    for (let i = 0; i < length; i++) {
    randomString += characters[Math.floor(Math.random() * characters.length)];
    }
    
    return randomString;
    };
    
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const key = generateKey(16, characters);
    console.log(key);