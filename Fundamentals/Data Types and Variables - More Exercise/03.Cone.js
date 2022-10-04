function cone(n1,n2){

    let volume = Math.PI*(Math.pow(n1,2)*(n2/3));
    console.log(`volume = ${volume.toFixed()}`);
    let s = Math.sqrt(n1 * n1 + n2 * n2);
    let area = Math.PI * n1 * (n1 + s);
    console.log(`area = ${area.toFixed(4)}`);
}
cone(3,5)