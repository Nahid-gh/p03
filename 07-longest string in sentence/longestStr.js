function longer(a,b) {
    if (a.length > b.length)
        return a;
    else  return b;
  }
  
  function longWord(sen) {
    let words = sen.split(' ');
    return words.reduce(longer);
  }
  
  console.log(longWord("The quick brown fox jumped over the lazy dogs"));