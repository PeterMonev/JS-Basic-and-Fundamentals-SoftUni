function oldBooks(input){
    let index = 0;
    let favoritBook = input[index++];
    let i = input[index++];
    let bookCounter = 0;
    let isFine = false ;

    while(i !== favoritBook){
       

        if(i === "No More Books"){
            console.log("The book you search is not here!");
            console.log(`You checked ${bookCounter} books.`);
            isFine = true;
            break;
        } 
        
        bookCounter++;
        
    
        i = input[index++];
           
    }
    if(!isFine){
        console.log(`You checked ${bookCounter} books and found it.`);
    }
}
oldBooks(["Troy","Stronger","Life Style","Troy"]);
oldBooks(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"])
