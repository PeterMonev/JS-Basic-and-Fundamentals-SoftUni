function movies(arrayMovie) {
     let listOfMove = [];
 
     for(let lines of arrayMovie) {

        if(lines.includes('addMovie')){
        let nameOfMovie = lines.split('addMovie ')[1];
        listOfMove.push({name: nameOfMovie});

        } else if (lines.includes('directedBy')){
           let info = lines.split('directedBy ');
           let name = info[0].trim();
           let director = info[1];
          
           let movie = listOfMove.find((movieObj) => movieObj.name === name);

           if(movie){
             movie.director = director;
           }
        } else if (lines.includes('onDate')){
           let info = lines.split('onDate ');
           let name = info[0].trim();
           let date = info[1];

           let movie = listOfMove.find((movieObj) => movieObj.name === name);

           if(movie){
              movie.date = date;
           }
        }
         
     }
     
    for(let movie of listOfMove){
      if(movie.name && movie.date && movie.director){
         console.log(JSON.stringify(movie));
      }
    }



}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
