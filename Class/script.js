class Book{
    constructor(title, author, pages){ //para criar os parâmetros da classe criada Book
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read(){
        return `Estou lendo ${this.title}`
    }
}

/** let book = new Book('teste1', 'teste2', 'teste3')
let book2 = new Book('The Last Kingdom', 'Bernard Cornell', '300')

console.log(book, book2)
console.log(book.read())
console.log(book2.read()) **/

class KidBook extends Book{ //método EXTENDS pega a herança da classe criada Book e mantém os mesmos parâmetos (title, author, pages)
    constructor(title, author, pages, editor){
        super(title, author, pages); //o método SUPER vai pegar os parâmetros da classe anterior
        this.editor = editor; //como a classe anterior não tinha EDITOR, tivemos que criar para esta classe
    }
}

let kidBook = new KidBook('Galinha Pintadinha', 'Galinha', '50', 'Editora Kid')

console.log(kidBook)
console.log(kidBook.read())