const typing=document.querySelector(".typing");

const words=[
"Web Developer",
"Frontend Developer",
"HTML",
"CSS",
"JavaScript"
];

let wordIndex=0;
let letterIndex=0;
let currentWord="";
let currentLetters="";

function type(){

if(letterIndex<words[wordIndex].length){

currentLetters+=words[wordIndex][letterIndex];

typing.textContent=currentLetters;

letterIndex++;

setTimeout(type,100);

}else{

setTimeout(erase,1500);

}

}

function erase(){

if(letterIndex>0){

currentLetters=currentWord.substring(0,letterIndex-1);

typing.textContent=currentLetters;

letterIndex--;

setTimeout(erase,50);

}else{

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

currentWord=words[wordIndex];

setTimeout(type,300);

}

}

currentWord=words[wordIndex];

type();