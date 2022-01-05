### Instruções

A namorada de Lucian está a caminho de casa e ele não preparou o jantar de aniversário!

Neste exercício, você vai escrever um código para ajudar Lucian a cozinhar uma lasanha requintada de seu livro de culinária favorito.

Você tem quatro tarefas, todas relacionadas ao tempo gasto no preparo da lasanha.

1. Defina o tempo de forno esperado em minutos
Defina a constante `EXPECTED_MINUTES_IN_OVEN` que representa quantos minutos a lasanha deve ficar no forno. Deve ser exportado. De acordo com o livro de culinária, o tempo de forno esperado em minutos é `40`.

2. Calcule o tempo restante do forno em minutos
Implementar a função `remainingMinutesInOven` que toma como parâmetro os minutos reais que a lasanha ficou no forno e retorna quantos minutos a lasanha ainda tem que permanecer no forno, com base no tempo de forno esperado em minutos da tarefa anterior.

```js
remainingMinutesInOven(30);
// => 10
```

3. Calcule o tempo de preparação em minutos
Implemente a função `preparationTimeInMinutes` que usa o número de camadas que você adicionou à lasanha como parâmetro e retorna quantos minutos você gastou preparando a lasanha, supondo que cada camada leve 2 minutos para preparar.

```js
preparationTimeInMinutes(2);
// => 4
```

4. Calcule o tempo total de trabalho em minutos
Implemente a função `totalTimeInMinutes` que leva dois parâmetros : o parâmetro `numberOfLayers` é o número de camadas que você adicionou à lasanha e o parâmetro `actualMinutesInOven` é o número de minutos que a lasanha está no forno. A função deve retornar quantos minutos no total você trabalhou para cozinhar a lasanha, que é a soma do tempo de preparação em minutos e o tempo em minutos que a lasanha passou no forno no momento.

```js
totalTimeInMinutes(3, 20);
// => 26
```