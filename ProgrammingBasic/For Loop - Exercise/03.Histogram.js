function histogram(input) {
  let n = Number(input[0]);
  p1Counter = 0;
  p2Counter = 0;
  p3Counter = 0;
  p4Counter = 0;
  p5Counter = 0;

  for (let i = 1; i <= n; i++) {
    let num = Number(input[i]);
    if (num < 200) {
      p1Counter++;
    } else if (num >= 200 && num <= 399) {
      p2Counter++;
    } else if (num >= 400 && num <= 599) {
      p3Counter++;
    } else if (num >= 600 && num <= 799) {
      p4Counter++;
    } else {
      p5Counter++;
    }
  }

  let p1Procentge = p1Counter / n * 100;
  let p2Procentge = p2Counter / n * 100;
  let p3Procentge = p3Counter / n * 100;
  let p4Procentge = p4Counter / n * 100;
  let p5Procentge = p5Counter / n * 100;

  console.log(`${p1Procentge.toFixed(2)}%`);
  console.log(`${p2Procentge.toFixed(2)}%`);
  console.log(`${p3Procentge.toFixed(2)}%`);
  console.log(`${p4Procentge.toFixed(2)}%`);
  console.log(`${p5Procentge.toFixed(2)}%`);
}

histogram(["3",
"1",
"2",
"999"])
/*
histogram([
  "20",
  53,
  7,
  56,
  180,
  450,
  920,
  12,
  7,
  150,
  250,
  680,
  2,
  600,
  200,
  800,
  799,
  199,
  46,
  128,
  65,
]);*/

