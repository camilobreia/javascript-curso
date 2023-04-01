function parouimpar(n){
    if (n%2 == 0){
        return 'Par !'
    } else {
        return 'Impar !'
    }
}

let num = parouimpar(3) // no NODE não precisa criar variável, pode colocar a função direto no console.log
console.log(num)
