
function translatePhrase(e){
    e.preventDefault();
    var sentence = document.getElementById("wordsToTranslate").value;
    var wordsArray = sentence.split(' ');
    var isAVowelRegex = '^[aieouAIEOU].*';
    var translatedWordsArray = [];
    wordsArray.forEach(word => {
        var doesItMatch = word.match(isAVowelRegex);
        if(doesItMatch){
            word = word + "way";
        }
        else{
            var alteredWord = word.split('');
            alteredWord.push(alteredWord.shift() + "ay");
            word = alteredWord.join('');       
        } 
        translatedWordsArray.push(word);
    });
    var translatedSentence = translatedWordsArray.join(' ');
    document.getElementById('result').innerHTML = translatedSentence;
}

