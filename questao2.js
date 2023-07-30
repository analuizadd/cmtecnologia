
function countSubmatrix(matrixA, matrixB) 
{
    //Size matrixA
    let rowsA = matrixA.length;
    let colsA = matrixA[0].length;

    //Size matrixB
    let rowsB = matrixB.length;
    let colsB = matrixB[0].length;
  
    if (rowsB > rowsA || colsB > colsA) {
      return 0;
    }
  
    let submatrix = 0;
  
    //limitar
    for (let i = 0; i < (rowsA - rowsB + 1); ++i) {
      for (let j = 0; j < (colsA - colsB + 1); ++j) {
        let found = true;
        
        // Verifica se matrizB existe dentro de A, caso exista valor diferente, found = false
        // Se found = true, conta SubMatriz + 1
        for (let rowB = 0; rowB < rowsB; ++rowB) {
          for (let colB = 0; colB < colsB; ++colB) {
            if (matrixA[i + rowB][j + colB] !== matrixB[rowB][colB]) {
              found = false;
              break;
            }
          }
          if (!found) { break; }
        }
  
        if (found) {
            submatrix++;
        }
      }
    }
  
    return submatrix;
  }
  
  // Exemplo
  const matrixA = [
    [1, 2, 3, 4, 1, 2],
    [5, 6, 1, 2, 5, 6],
    [1, 2, 5, 6, 3, 4],
    [5, 6, 3, 4, 1, 2]
  ];
  
  const matrixB = [
    [1, 2],
    [5, 6]
  ];

  const matrixC = [
    [3, 4],
    [1, 2]
  ];
  
  const matrixD = [
    [1],
    [5]
  ];

  console.log(countSubmatrix(matrixA, matrixB)); // Saída: 4
  console.log(countSubmatrix(matrixA, matrixC)); // Saída: 2
  console.log(countSubmatrix(matrixA, matrixD)); // Saída: 4
  console.log(countSubmatrix(matrixB, matrixD)); // Saída: 1
  console.log(countSubmatrix(matrixC, matrixD)); // Saída: 0