function loadingBar(number) {

    let complete = '%'.repeat(number / 10);
    let incomplete = '.'.repeat(10 - complete.length );

    if(number < 100){

    console.log(`${number}% [${complete}${incomplete}]`);
    console.log(`Still loading...`);

  } else {
    console.log(`${number} Complete!`)
    console.log(`[${complete}]`)
  }

}
loadingBar(30);
loadingBar(100)