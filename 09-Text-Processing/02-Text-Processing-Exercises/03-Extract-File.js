function extractFile(input) {

  let fileNameStart = input.lastIndexOf('\\') + 1;
  let fileNameEnd = input.lastIndexOf('.');
  let fileName = input.substring(fileNameStart, fileNameEnd);
  let fileExtention = input.substr(fileNameEnd + 1);
  
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExtention}`);
}
extractFile('C:\\Template.pptx.txt');