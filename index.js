class Calculator {
  constructor() {
    // Declarando os atributos que serão usados
    this.ul = document.getElementById("list");
    this.li = document.createElement("li");
    this.ulSoma = document.getElementById("list-soma");
    this.arr = [];
    this.total = 0;
  }

  // Metodo usado para atualizar os valores nas listas do HTML
  clearLists() {
    if (this.ul.lastChild || this.ulSoma.firstChild) {
      // Removendo o valor final para deixa-lo atualizado, caso ja exista um
      this.ul.removeChild(this.ul.lastChild);
      // While que remove todos os childs da lista dos numeros que são somados para sempre manter atuazado, caso exista um
      while (this.ulSoma.firstChild) {
        this.ulSoma.removeChild(this.ulSoma.firstChild);
      }
    }
  }

  // Metodo que calcula o valor final dos numeros que são divisíveis por 3 e 5 somados e adiciona a um array cada um para exibir individualmente cada um 
  calculateTotal(value) {
    for (let index = 1; index < value; index++) {
      // if else para ver se os valores são divisíveis por 3 e 5, se for adicionara a um array e ao atributo total
      if (index % 3 === 0 || index % 5 === 0) {
        this.arr.push(index);
        this.total += index;
      }
    }
  }
// Metodo para exibir os valores que são somados e o valor final
  displayResults() {
    // Criando uma li e adicionando o valor total para exibi-la
    this.li.innerText = `Total: ${this.total}`;
    this.ul.append(this.li);
    // Foreach para criar um li para cada elemento que foi adicionado ao array
    this.arr.forEach((element) => {
      const liSoma = document.createElement("li");
      liSoma.innerText = `Elemento somado ao total: ${element}`;
      this.ulSoma.append(liSoma);
    });
  }
}

// Função que é ativada ao clicar do button no index
function calculate() {
  // resgatando o valor do input
  const valor = document.getElementById("num").value;
  // Criando objeto
  const calculator = new Calculator();

  // função que verifica se o valor é uma string, caso seja retorna um alert e sai da função
  if (isNaN(valor)) {
    alert("Por favor, insira um número válido. Strings não são permitidas.");
    return;
  }
// Chamando os metodos
  calculator.clearLists();
  calculator.calculateTotal(valor);
  calculator.displayResults();
}