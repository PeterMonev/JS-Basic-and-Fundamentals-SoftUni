function nxnMatrix(n){
    let matrix = [];

    for(let i = 0; i < n; i++){
       let row = [];

        for(let j = 0; j < n; j++){
           row.push(n);

        }
        matrix.push(row.join(' '));
    }


    console.log(matrix.join('\n'));

}
nxnMatrix(3);