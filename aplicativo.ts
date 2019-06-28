const conjunto: number[] = [2, 7, 11, 15];

// Função de seta para escolher aleatóriamente um item do conjunto
const escolha = (array: any[]): number => Math.floor(Math.random() * array.length);

// Função da soma
const soma = (numeros: number[]): boolean =>
{
	// Escolha dos números
	const primeiro = numeros[escolha(numeros)];
	let segundo = numeros[escolha(numeros)];

	// Modifica o segundo número enquanto for igual ao primeiro
	while (primeiro === segundo) segundo = numeros[escolha(numeros)];

	/*
	 * Escreve no terminal o resultado.
	 * É preciso node.js para que funcione
	 */
	return process.stdout.write(`${primeiro + segundo}`);
};

// Realiza a soma de dois números aleatórios do conjunto
soma(conjunto);
