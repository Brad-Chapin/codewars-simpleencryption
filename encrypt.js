function encrypt(text, n){
  if (!text || text.length == 0 || n <= 0){
    return text;
  }
  text = text.split('');
  while (n > 0){
    let odd = [], even = [];
    for (let i = 0; i < text.length; i++){
      if (i % 2 == 0){
        odd.push(text[i]);
      } else {
        even.push(text[i]);
      }
    }
    console.log(even.join(''));
    console.log(odd.join(''));
    for (let j = 0; j < odd.length; j++){
      even.push(odd[j]);
    }
    text = even.join('');
    n--;
    encrypt (text, n);
  }
  return text;
}
console.log(encrypt("This is a test!", 1));
console.log(encrypt("abcdefghijklmn!", 1));
console.log(encrypt("This is a test!", 2 ));

// s eT ashi tist!


function decrypt(encryptedText, n){

}
