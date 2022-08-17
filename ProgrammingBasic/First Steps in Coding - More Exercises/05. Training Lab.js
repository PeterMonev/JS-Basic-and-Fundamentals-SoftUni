function trainingLab(input){
    const lenght = Number(input[0]);
    const width = Number(input[1]);

    let lenghtPerSm = lenght * 100;
    let widhPerSm = width * 100;

    widhPerSm -= 100;

    let deskWidth =Math.floor(widhPerSm / 70);
    let deskLenht =Math.floor(lenghtPerSm / 120);

    let places = deskLenht * deskWidth;
    places -= 3;

    console.log(places);















} 
trainingLab([15,8.9]);