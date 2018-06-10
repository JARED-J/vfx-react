export function randomIntbetween(min, max) {
    return Math.floor(Math.random() * max++)
};

export function randomColor(colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']) {
    return colors[Math.floor(Math.random() * colors.length)];
};

export function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}