function thePianist(input){
   let n = input.shift();
   let musics = {};

   for(let i = 0; i < n; i++){
      let tokens = input.shift().split('|');
      let name = tokens[0];
      let composer = tokens[1];
      let key = tokens[2];

      musics[name] = {
        composer,
        key,
      }
   }

   let tokens = input.shift().split('|');
    
   while(tokens[0] != 'Stop'){
     
    let command = tokens[0];
    let name = tokens[1];
    let composer = tokens[2];
    let key = tokens[3];
    let music = musics[name];

    if(command === 'Add'){
        if(musics.hasOwnProperty(name)){
            console.log(`${name} is already in the collection!`);
        } else {
            musics[name] = {
                composer,
                key,
              }
              console.log(`${name} by ${composer} in ${key} added to the collection!`)
        }
    } else if (command === 'Remove'){
        if(musics.hasOwnProperty(name)){
            delete musics[name];
            console.log(`Successfully removed ${name}!`);
        } else {
            console.log(`Invalid operation! ${name} does not exist in the collection.`)
        }

    } else if (command === 'ChangeKey'){
        if(musics.hasOwnProperty(name)){
            music.key = composer;
            console.log(`Changed the key of ${name} to ${composer}!`)
        } else {
            console.log(`Invalid operation! ${name} does not exist in the collection.`)
        }
    }
    tokens = input.shift().split('|');
   }

   for(let line of Object.entries(musics)){
       let piece = line[0];
       let music = line[1];

       console.log(`${piece} -> Composer: ${music.composer}, Key: ${music.key}`)
   }


}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  );