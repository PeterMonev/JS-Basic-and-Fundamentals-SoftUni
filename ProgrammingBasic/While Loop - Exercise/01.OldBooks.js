function oldBooks(input){
    let favoritBook = input[0];
    let index = 1;
    let searchBook = input[index];
    let bookCounter = 0;
    let isFine = false ;
   

    while(searchBook !== favoritBook){
        
        

        if(searchBook === "No More Books"){
            
            console.log("The book you search is not here!");
            console.log(`You checked ${bookCounter} books.`);
            isFine = true;
            break;
        }
       index++
       searchBook = input[index];
       bookCounter++;
    }
    if(!isFine){
        console.log(`You checked ${bookCounter} books and found it.`);
    }

}
oldBooks(["Troy","Stronger","Life Style","Troy"]);
oldBooks(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"])