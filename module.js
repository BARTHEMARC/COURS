//const fs=require('fs')
//fs.writeFileSync('module1.txt','c\'est mon premier module' )
// fs.writeFileSync('module1.dat','c\'est mon premier module' )
//fs.appendFileSync('module1.txt',' ajout')
// fs.openSync('module1.txt')
const fs=require('fs')
a=9
b=3
const calcul=require('./calcul.js')
// console.log(calcul.addition(a,b))
// console.log(calcul.multiplication(a,b))
// console.log(calcul.soustraction(a,b))
// console.log(calcul.division(a,b))
let resultat={
    addition:calcul.addition(a,b),
    soustraction:calcul.soustraction(a,b),
    multiplication:calcul.multiplication(a,b),
    division:calcul.division(a,b)
}
console.log("ok")
console.log(resultat.addition)
// 'fs.writeFileSync("resultat.txt",resultat.addition)