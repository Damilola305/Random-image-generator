const container = document.querySelector('.container');
const unSplashUrl = 'https://source.unsplash.com/random/'
const imagePerRow = 4
const row = 5

function generateImage(){
    for (let i = 0; i < row; i++){
        for(let j = 0; j < imagePerRow; j++){
            const image = document.createElement('img')
            image.src = `${unSplashUrl} ${getRandomSize()}`
            container.appendChild(image)
        }
    }
}

function getRandomSize(){
    const size = Math.floor(Math.random() * 10) + 300
    return `${size} * ${size}`
}

generateImage()