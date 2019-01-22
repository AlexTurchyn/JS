function getMatrix(n, m) {
    let arr2d = new Array(n);
    for(let i = 0; i < arr2d.length; i++) {
        arr2d[i] = new Array(m);
    }

    let row = 0;
    let col = 0;
    let dx = 1;
    let dy = 0;
    let directionChanges = 0;
    let steps = m;

    for (let i = 0; i < n * m; i++) {
        arr2d[row][col] = i + 1;
        steps--;
        if (steps == 0) {
            steps = Math.ceil(m * (directionChanges % 2) + n * ((directionChanges + 1) % 2) - (directionChanges / 2 - 1) - 2);
            let temp = dx;
            dx = -dy;
            dy = temp;
            directionChanges++;
        }
        
        col += dx;
        row += dy;
    }
      return arr2d;
}

console.log(getMatrix(6, 7));