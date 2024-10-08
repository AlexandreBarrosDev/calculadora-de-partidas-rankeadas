<h3>
     <img align="center" src="https://github.com/AlexandreBarrosDev/Portfolio/blob/main/imagens/logoalx.svg">
</h3>

Desafio proposto pelo instrutor Felipe Aguiar do curso de lógica de programação da Dio.

O desafio foi completo com a criação de uma função para calculo de Ranqueadas e uma estrutura switch case seguindo as devidas instruões de calculo e classificação de nível, porém um possivel problema foi encontrado no algoritimo pois se o resultado do calculo for igual a 10, o programa não atribuirá uma classificação ao herói, para contornar o problema foi implementado o operador de comparação "<=" no case inicial do programa.

Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
