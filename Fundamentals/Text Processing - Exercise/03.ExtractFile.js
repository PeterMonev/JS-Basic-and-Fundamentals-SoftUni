function extractFile(string) {
  
    let strAsArr = string.split('\\');
    let index = strAsArr.length-1 
    let fileName = strAsArr[index];
    let currFileName = fileName.split('.')

    if(currFileName.length <= 2){
        console.log(`File name: ${currFileName[0]}`);
        console.log(`File extension: ${currFileName[1]}`);
    } else {
        let extension = currFileName.pop()
        console.log(`File name: ${currFileName.join('.')}`);
        console.log(`File extension: ${extension}`);
    }

 }
extractFile('C:\\Internal\\training-internal\\Template.add.babd.pptx')