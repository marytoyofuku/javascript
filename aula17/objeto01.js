//let amigo = {}
//console.log(typeof amigo)

let amigo = {nome:"Jose", 
sexo: "M", 
peso: 85.4,
engordar(p=0){
    console.log(`engordou!`)
    this.peso += p

}}
amigo.engordar(2) //funçao dentro de variaveis
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)