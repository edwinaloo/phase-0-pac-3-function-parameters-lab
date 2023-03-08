function introduction(name){
  console.log(`Hi,my name is ${name}.`);
}
function introductionWithLanguage(name, language){
  console.log(`Hi, my name is ${name} and i am learning to code ${language}.`);
}
function helloToSay(name, language = "javas"){
  console.log(`hello, my name is ${name} and i am learning to codein ${language}`);
}
introduction("Edwin")
introductionWithLanguage("Edwin", "Python")
helloToSay("Edwin")
