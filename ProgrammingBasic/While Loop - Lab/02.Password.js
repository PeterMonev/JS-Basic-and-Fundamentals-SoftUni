function password(input){
    let index = 0;
    let username = input[index++];
    let pass = input[index++];
    let temppass = input[index++];

    while(pass !== temppass){
        temppass = input[index++];
        
        
    }
    
    console.log(`Welcome ${username}!`);
}
(["Nakov",
"1234",
"Pass",
"1324",
"1234"])