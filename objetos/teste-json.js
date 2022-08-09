const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
   })
   
   console.log(jsonLivro)

   const objLivro = JSON.parse(jsonLivro)
console.log(objLivro)

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

const clientes = [
    {
      nome: "André",
      cpf: "12312312312",
      dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
       },
       {
        nome: "Samia",
        parentesco: "filha",
        dataNasc: "04/01/2014"
       }],
    },
    {
      nome: "Juliana",
      cpf: "56767867867",
      dependentes: [{
        nome: "Sophia",
        parentesco: "filha",
        dataNasc: "30/08/2020"
       }],
    }
   ]

   const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

   console.table(listaDependentes)

   console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

const catalogo = {
 "editora": "Casa do Código",
 "catalogo": [
 {
   "id": 50,
   "titulo": "Primeiros Passos com NodeJS",
   "autor": "João Rubens",
   "categoria": "programação",
   "versoes": ["ebook", "impresso"]
 }
]}

console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"))

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")





