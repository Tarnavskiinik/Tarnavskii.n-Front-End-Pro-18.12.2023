const smiles = {
    ":)": 0,
    ":(": 0,
    ":D": 0,
    ":O": 0,
    ":|": 0
}
const images = document.querySelector('.images')

function smileCount(){
    images.innerHTML = '';


   for(const emoji in smiles){
        const emojiDiv = document.createElement('div')
        emojiDiv.textContent = `${emoji} (${smiles[emoji]})`
        emojiDiv.classList.add('smile')
        emojiDiv.addEventListener('click', () => count(emoji))
        images.appendChild(emojiDiv);
    };
    

}
function count(emoji){
    smiles[emoji]++
    smileCount()
}
smileCount()