const printRightTrianglePattern = (size) => {
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

printRightTrianglePattern(5);
