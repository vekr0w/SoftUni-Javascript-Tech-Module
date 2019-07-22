function extractFile(input) {

  let inputToArr = input.split('\\');
  let fileData = inputToArr.pop().split('.');
  if (fileData.length == 2) {
    let [fileName, fileExtention] = fileData;
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtention}`);
  } else {
    let [fileName, firstExtention, secondExtention] = fileData;
    fileExtention = `${firstExtention}.${secondExtention}`;
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtention}`);
  }
}
extractFile('C:\\Template.pptx.txt');