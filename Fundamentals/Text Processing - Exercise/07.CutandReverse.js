function cutAndReverse(string){

   let arr =  string.split('').reverse();
   let index = arr.length / 2;
   let firstHalf = arr.splice(index).join('');
   console.log(firstHalf);
   console.log(arr.join(''));
  
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')