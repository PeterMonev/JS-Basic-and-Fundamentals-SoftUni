function songsAsClass(songsAsString){
    class FavoritSong {
        constructor(type,name,time){
            this.type = type;
            this.name = name ;
            this.time = time;
        }

    }

    let numberOfSong = songsAsString.shift();
    let songs = [];
    let typeSong = songsAsString.pop()

    for(let i = 0; i < numberOfSong;i++){
        let [type, name, time] = songsAsString.shift().split('_');
        let song = new FavoritSong(type, name, time);
        songs.push(song);
    }

     if(typeSong === 'all'){
        songs.forEach((i)=> console.log(i.name));
     } else {
        let filtered = songs.filter((i) => i.type === typeSong);
        filtered.forEach((i)=> console.log(i.name));
      }

}
songsAsClass([3,'favourite_DownTown_3:14','favourite_Kiss_4:16','favourite_Smooth Criminal_4:01','favourite']);
songsAsClass([4,'favourite_DownTown_3:14','listenLater_Andalouse_3:24','favourite_In To The Night_3:58','favourite_Live It Up_3:48','listenLater'])