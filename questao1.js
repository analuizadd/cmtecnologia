/**
 * Invertendo diagonal primaria
 *  | 4 5 6 |       | 9 5 6 |
 *  | 1 2 3 |   =>  | 1 2 3 |
 *  | 7 8 9 |       | 7 8 4 |
 * 
 * Invertendo a diagonal secundaria
 *  | 9 5 6 |       | 9 5 7 |
 *  | 1 2 3 |   =>  | 1 2 3 |
 *  | 7 8 4 |       | 6 8 4 |
 */

function reverseDiagonal(matrix) 
{
    return reverseDiagonalSecondary(
        reverseDiagonalPrimary(JSON.parse(JSON.stringify(matrix)))
    );
}

function reverseDiagonalPrimary(matrix)
{
    let N = matrix.length;
    
    for (let i = 0; i < N/2; ++i) { 
        if (matrix[(N-i-1)][(N-i-1)] == undefined) {
            return `Matrix not square!`;
        }
        let aux = matrix[i][i];
        matrix[i][i] = matrix[(N-i-1)][(N-i-1)];
        matrix[(N-i-1)][(N-i-1)] = aux;
    }
    return matrix;
}

function reverseDiagonalSecondary(matrix)
{
    let N = matrix.length;
    
    for (let i = 0; i < N/2; ++i) {
        if (matrix[i][(N-i-1)] == undefined) {
            return `Matrix not square!`;
        }
        let aux = matrix[i][(N-i-1)];
        matrix[i][(N-i-1)] = matrix[(N-i-1)][i];
        matrix[(N-i-1)][i] = aux;
    }
    return matrix;
}

// Exemplo
let matrix = [
    [4, 5, 6],
    [1, 2, 3],
    [7, 8, 9]
];

console.log(reverseDiagonal(matrix));