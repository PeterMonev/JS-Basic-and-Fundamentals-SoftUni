function tseamAccount(games){

   let accountGame = games.shift().split(' ')
    
   for(let i = 0; i < games.length ; i++){
        let command = games[i].split(' ');
        let currCommand = command[0];
        let game = command[1]
        let indexOfGame = [];

       switch(currCommand){
           case 'Install':
               if(!accountGame.includes(game)){
                   accountGame.push(game);
               }
               break;
            case 'Uninstall':
              if(accountGame.includes(game)){
                  indexOfGame = accountGame.indexOf(game);
                  accountGame.splice(indexOfGame, 1);
              }    
              break;
            case 'Update':
                if(accountGame.includes(game)){
                    indexOfGame = accountGame.indexOf(game);
                    let take = accountGame.splice(indexOfGame,1);
                    accountGame.push(take[0]);
                }
                break; 
            case 'Expansion':
                let  expansion = game.split('-');
                 game = expansion[0];
                if(accountGame.includes(game)){
                    let expandedGame = expansion.join(':');
                    let indexOfGameUpdate = accountGame.indexOf(game);
                    accountGame.splice(indexOfGameUpdate + 1,0,expandedGame);
                }
                break;
             
       }    
       if(currCommand === 'Play!'){
           break;
       } 
  
   }
   console.log(accountGame.join(' '));

}
tseamAccount(['CS WoW Diablo',

'Expansion CS-Go',
'Play!']

)