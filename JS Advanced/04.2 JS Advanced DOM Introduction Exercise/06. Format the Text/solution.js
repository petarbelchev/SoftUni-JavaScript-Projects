function solve() {
  let sentences = Array.from(document.getElementById('input').value.split('.').map(str => str.trim()).filter(str => str.length > 0));
  let output = document.getElementById('output');
  let numOfSentences = 0;
  let paragraph = '<p>';

  while (sentences.length > 0) {
    let currSentence = sentences.shift() + '. ';
    numOfSentences++;

    if (numOfSentences <= 3) {
      paragraph += currSentence;
    }

    if (sentences.length == 0 || numOfSentences == 3) {
      paragraph = paragraph.trimEnd() + '</p>';
      output.innerHTML += paragraph;
      paragraph = '<p>';
      numOfSentences = 0;
    } 
  }
}