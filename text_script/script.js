let textos = [ "Watashi no... namae wa...",
			" Sara Kasugano desu",
			" boku-tachi no shigoto wa",
			" PROGRAMMING DESU"];

class Dialogo {
	tempo;
	count = -1;
	mensagem = [];
	campo = document.getElementById('conteudo');

	constructor(mensagem) {
		this.mensagem = mensagem;
	}
	
	escrever(velocidade = 50) {
		let i = 0;
		this.tempo = setInterval( () => {
			try {
				this.campo.innerHTML += this.mensagem[this.count].at(i++);
				i >= this.mensagem[this.count].length ? clearInterval(this.tempo) : false;
			} catch (e) {
				//console.log(e);
				this.limpar();
				this.count = -1;
				this.proximo();
			}
		}, velocidade);
		return this.count++;
	}

	limpar() {
		clearInterval(this.tempo);
		this.campo.innerHTML = '';
	}

	proximo() {
		this.limpar();
		this.escrever(100);
	}
}

let dialogo = new Dialogo(textos);

document.getElementById('next').onclick = () => {
	dialogo.proximo();
}