//  var idade = 66
//.log(`Você tem ${idade} anos.`)
// if (idade < 16) {
//    console.log ('Não vota')
//} else  if (idade < 18 || idade > 65) {
// console.log ('Voto é opcional')
 //  } else {
//       console.log('voto é obrigatório')
//   }

//var agora = new Date()
//var hora = agora.getHours()
//console.log(`Agora são exatamente ${hora} horas.`)
//if (hora < 12) {
//    console.log('bom dia!')
//} else if(hora <= 18) {
//    console.log('boa tarde!')
//} else {
 //   console.log('boa noite!')
//}
var agora = new Date()
var diasem = agora.getDay()
/* 
0 =domingo
1=segunda
2=terça
3=quarta
4=quinta
5=sexta
6=sabado */
console.log(diasem)
switch(diasem) {
    case 0:
        console.log('domingo')
        break
        case 1:
            console.log('segunda')
            break
            case 2:
                console.log('terça')
                break
                case 3:
                    console.log("quarta")
                    break
                    case 4:
                        console.log('quinta')
                        break
                        case 5:
                            console.log('sexta')
                            break
                            case 6:
                                console.log('sabado')
                                break
                                default:
                                    console.log( "[ERRO] Dis invślido!")
                                    break

}