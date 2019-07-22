function pascalCaseSplitter(input){

let text = input.replace(/([A-Z])/g, ",$1");
text = text.split(',').filter(Boolean);
console.log(text.join(', '));

}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');