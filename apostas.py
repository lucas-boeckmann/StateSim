Saldo = 50
BonusPA = 20
apostasPerdidas = 0

def BemVindo(nome):
    print("Bem vindo(a), " + nome)

nome = input("Qual é o seu nome?")

BemVindo(nome)

def Apostar():
    NUM_ = range(0, 100)
    print(NUM_)
    if numero == NUM_:
        print("Você venceu!")
        Saldo += NUM_ + (apostasPerdidas * 0.5) + (BonusPA / 2)
        BonusPA = BonusPA / 2
        apostasPerdidas = 0
    else:
        print("Você perdeu!")
        Saldo -= NUM_
        Saldo -= NUM_ - (apostasPerdidas * 0.5)
        apostasPerdidas += 1
        
def loop():
    while True:
        cmd = input("Digite oquê você deseja fazer...")
        if cmd == "Apostar >:)":
            numero = input("Aposte um número")
            Apostar()
        if cmd == "Olhar o saldo":
            print("Seu saldo é: R$"+Saldo)

loop()
