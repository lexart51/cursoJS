const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

   // const guerreiro = { fichaGuerreiro, equipoGuerreiro }
   // const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
// console.log(guerreiro)

const mago = {
    nome: "Gandalf",
    classe: "mago"
   }
    const guerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const ranger = {
    nome: "Legolas",
    classe: "ranger"
   }
   const personagens = { ...mago, ...guerreiro, ...ranger }
console.log(personagens)


{
    editora: "Casa do Código",
    catalogo  [
    {
      "id": 50,
      "titulo": "Primeiros Passos com NodeJS",
      "autor": "João Rubens",
      "categoria": "programação",
      "versoes": ["ebook", "impresso"]
    },
    {
      "id": 59,
      "titulo": "ECMAScript 6",
      "autor": "Diego Martins de Pinho",
      "categoria": "programação",
      "versoes": ["ebook"]
    },
    {
      "id": 39,
      "titulo": "Orientação a Objetos",
      "autor": "Thiago Leite",
      "categoria": "programação",
      "versoes": ["ebook", "impresso"]
    }
   ]}