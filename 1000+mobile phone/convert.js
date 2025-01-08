function stringToBinary(str) {
    let binaryCode = '';
    for (let i = 0; i < str.length; i++) {
      const asciiCode = str.charCodeAt(i);
      const binaryString = asciiCode.toString(2);
      const paddedBinaryString = binaryString.padStart(8, '0');
      binaryCode += paddedBinaryString + ' ';
    }
    return binaryCode.trim();
  }

  const inputString = "hey this is adnan Khan";
const binaryCode = stringToBinary(inputString);
console.log(binaryCode);