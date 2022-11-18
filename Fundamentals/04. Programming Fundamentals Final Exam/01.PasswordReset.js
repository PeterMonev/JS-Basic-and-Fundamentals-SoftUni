function passwordReset(input) {
    let inputPassword = input.shift();
  
    for (const line of input) {
        let [command, value, value2] = line.split(' ');
 
        switch (command) {
            case 'TakeOdd':
                let tempStr = '';
                for (let i = 0; i < inputPassword.length; i++) {
                    if (i % 2 !== 0) {
                        tempStr += inputPassword[i]
                    }
                }
                inputPassword = tempStr;
                console.log(inputPassword);
                break;
 
            case 'Cut':
                let index = Number(value);
                let length = Number(value2);
                let arr = Array.from(inputPassword).splice(index, length).join('');
                inputPassword = inputPassword.replace(arr, '');
                console.log(inputPassword);
                break;
            case 'Substitute':
                let substring = value;
                let substitute = value2;
                if (!inputPassword.includes(substring)) {
                    console.log('Nothing to replace!');
                } else {
                while (inputPassword.includes(substring)) {
                    inputPassword = inputPassword.replace(substring, substitute);
                }
                console.log(inputPassword);
            };
        }
    }
 
    console.log(`Your password is: ${inputPassword}`);
}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])
);