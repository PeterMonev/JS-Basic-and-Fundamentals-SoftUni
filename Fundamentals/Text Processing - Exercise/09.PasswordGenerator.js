function paswordGenerator(input) {
  let vowelGen = input.pop().split("");
  let passwordGen = input.toString();
  let password = [];
  let index = 0;

  for (let char of passwordGen) {
    if (char === ",") {
      continue;
    }
    if (
      char.charCodeAt() === 97 ||
      char.charCodeAt() === 101 ||
      char.charCodeAt() === 105 ||
      char.charCodeAt() === 111 ||
      char.charCodeAt() === 117 
    ) {
      for (let i = index; i < vowelGen.length; i++) {
        vowelGen[i] = vowelGen[i].toUpperCase();
        password.push(vowelGen[i]);
        if (index === vowelGen.length - 1) {
          index = 0;
        } else {
          index = i + 1;
        }
        break;
      }
    } else {
      password.push(char);
    }
  }

  console.log(`Your generated password is ${password.reverse().join("")}`);
}
paswordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
