// Mensagem conforme HORA
var hoje = new Date()  //get the present local information about data
var diaSem = hoje.getDay() //Use only the information Day
var hora = hoje.getHours() //Use only the information Hours

console.log (`Agora são ${hora} h!`)

if ( hora < 12 ) { 

    console.log('Bom dia, hoje é')

} else if (hora <= 18 ) {
     console.log('Boa tarde, hoje é')

    }    else {
        console.log('Boa noite, hoje é')
}
 
//console.log(diaSem)  //Uncoment the last comand to output the number that represent the day
 // 0 = dom, 1 = seg, 2 = ter, 3 = qua, 4 = qui, 5 = sex, 6 = sab

  //diaSem = 7 // Edit the number in the last comand to output the day that you want
switch (diaSem) {
    case 0:
        console.log('Domingo')
    break
    case 1:
        console.log('Segunda')
    break
    case 2:
        console.log('Terça')
    break
    case 3:
        console.log('Quarta')
    break
    case 4:
        console.log('Quinta')
    break
    case 5:
        console.log('Sexta')
    break
    case 6:
        console.log('Sabado')
    break
    default:
        console.log('Error, no recognized insert')
    break
}

