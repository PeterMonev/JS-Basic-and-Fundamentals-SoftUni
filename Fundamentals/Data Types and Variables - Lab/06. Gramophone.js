function gramophone(band,album,song){

   let time = (album.length * band.length) * song.length / 2;
    time /= 2.5
   console.log(`The plate was rotated ${Math.ceil(time)} times.`);



}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');