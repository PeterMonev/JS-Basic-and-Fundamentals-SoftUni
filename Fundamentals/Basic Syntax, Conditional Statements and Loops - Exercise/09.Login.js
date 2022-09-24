function login(input) {

    let username = input[0];
    let loginCounter = 0;
    let login = 0

    for (let i = 1;i < input.length;i++) {

         login = input[i];
        login = login.split('')
        login = login.reverse();
        login =login.join('');

        if(login === username){
            console.log(`User ${username} logged in.`);
        } else {
            loginCounter++;
            if(loginCounter === 4){
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        }

    }


}
login(['Acer','login','go','let me in','recA'])
login(['sunny','rainy','cloudy','sunny','not sunny'])
