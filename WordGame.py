
def wordGame(str):
    # placar com os pontos
    andre = 0     #consoantes
    reynaldo = 0  #vogais

    vogais = ['A','E','I','O','U']

    # tamanho da string
    tamStr = len(str)

    # Somando o tamanho da substrig que vai de i até o final de str.
    # O tamanho da substring será a quantidade de pontos recebidos pelo jogador
    # depedendendo se a substring começa com vogal ou não.
    for i in range(tamStr):
        if (str[i] in vogais):
            print(str[i:tamStr])
            reynaldo += len(str[i:tamStr])

        else:
            print(str[i:tamStr])
            andre += len(str[i:tamStr])

    # printando o vencedor
    if (andre>reynaldo):
        print("André",andre)
    elif(reynaldo>andre):
        print("Reynaldo",reynaldo)
    else:
        print("Empate",andre)


while True:
    string = input()
    wordGame(string)



