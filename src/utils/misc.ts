function getRandomItemFromArray(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}

const eyeColors = ['green', 'yellow', 'blue', 'brown', 'gray'];

const randomEyeColor = getRandomItemFromArray(eyeColors);

export { randomEyeColor };