let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p){
    console.log('Engordou')    
    this.peso += p // this vai "puxar" o atributo para a função
}
}

amigo.engordar(2)
console.log(`O cliente ${amigo.nome} pesa ${amigo.peso}`)
