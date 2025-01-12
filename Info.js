let Renda = 0
let Gastos = 0
let PIBPC = 55000
let População = 10000000
let Educação = 10
let Saúde = 10
let Segurança = 10
let Igualdade = 10
let Equidade = 0
let Liberdade = 100
let Corrupção = 5
let inflação = 0

let regime = parseFloat(localStorage.getItem("Regime")) || 0
let corporativismo = parseFloat(localStorage.getItem("corporativismo")) || 0

let salMinimo = parseFloat(localStorage.getItem("salárioMinimo")) || 0
let penaMorte = parseFloat(localStorage.getItem("penaMorte")) || 0
let Armamentismo = parseFloat(localStorage.getItem("armamentismo")) || 0

let estatais = parseFloat(localStorage.getItem("estatais")) || 0

let SaudePub = localStorage.getItem("SaudePublica") || 0;
let EducaPub = localStorage.getItem("EducaPublica") || 0;
let Policia = localStorage.getItem("Policia") || 0;

let lastro = JSON.parse(localStorage.getItem("Moeda") || 0) 
let TudoEstatatizado = JSON.parse(localStorage.getItem("Estatizar") || 0) 
let TudoCooperativas = JSON.parse(localStorage.getItem("Cooperativas") || 0) 

let imposto = parseFloat(JSON.parse(localStorage.getItem("ImpostoQuant")) || 0) 
let impRenda = JSON.parse(localStorage.getItem("ImpostoRenda") || 0) 
let impLixo = JSON.parse(localStorage.getItem("ImpostoLixo") || 0) 
let impLuxo = JSON.parse(localStorage.getItem("ImpostoLuxo") || 0) 
let impProdutos = JSON.parse(localStorage.getItem("ImpostoProdutos") || 0) 
let taxasCorp = JSON.parse(localStorage.getItem("TaxasCorp") || 0) 
let taxaImportação = JSON.parse(localStorage.getItem("TaxaImp") || 0) 
let impostoProg = JSON.parse(localStorage.getItem("ImpostoProgressivo") || 0) 

const RendaTxt = document.getElementById("RendaGov")
const GastoTxt = document.getElementById("GastoGov")
const DividaTxt = document.getElementById("DividaGov")
const PIBTxt = document.getElementById("PIBPCapita")
const EducaBar = document.getElementById("EducaBar")
const SaudeBar = document.getElementById("SaudeBar")
const SeguraBar = document.getElementById("SeguraBar")
const IgualBar = document.getElementById("IgualBar")
const EquiBar = document.getElementById("EquiBar")
const LiberBar = document.getElementById("LiberBar")
const AprovaBar = document.getElementById("AprovaBar")

const Regime = document.getElementById("Regime")

if (localStorage.getItem("PosRenda") == "1") {
  console.log("Governo possui renda")

  //Regimes
  if (regime > 1) {
    Liberdade -= 5 * parseInt(regime)
  }
  if (corporativismo > 1) {
    PIBPC += PIBPC * 0.15
  }
  
  //Produção empresarial
  let InvestimentoEmpresarial = Renda * parseInt(localStorage.getItem("Investimentos"))
  let PIBPCInvestido = 0.4
  let EmpreendimentosPCapita = InvestimentoEmpresarial + (PIBPC * PIBPCInvestido)
  EmpreendimentosPCapita -= EmpreendimentosPCapita * (imposto / 10)
  
  //Resultado da produção empresarial 
  Educação += ((EmpreendimentosPCapita * 0.2) / 150) 
  Saúde += ((EmpreendimentosPCapita * 0.3) / 100) 
  Segurança += ((EmpreendimentosPCapita * 0.06) / 80)

  //Valores gastos por pessoa dividos por 150, por exemplo para para que R$150 seja o mesmo que 1 na barra (150/150=1)

  let ProdPerCapita = (PIBPC * 0.025)

  //Aumentar o Investimento Empresarial conforme os investimentos estatais aqui
  if (TudoEstatatizado == true) {
    Renda += parseFloat(ProdPerCapita * estatais) / 2
    PIBPC += parseFloat(ProdPerCapita * estatais) / 2
  }
  else {
    PIBPC += parseFloat((ProdPerCapita * 0.95) + (EmpreendimentosPCapita))
    PIBPC += parseFloat((ProdPerCapita * 0.05) * estatais) / 2
    Renda += parseFloat((ProdPerCapita * 0.05) * estatais) / 2
  }
  if (TudoCooperativas == true) {
    Igualdade += 80
    Equidade += 20
  }

  //OBS: Para avaliar a saúde, segurança e educação é necessário um bom gasto em relação a população (bom gasto por pessoa)
  //OBS: Coloquei que o melhor seria 1500 de gasto p/ pessoa (dividi por 150 pq a largura máxima da barra é 100)
  
  //Melhoras no país
  Equidade += Educação
  PIBPC += Saúde + Segurança

  Segurança -= Corrupção
  Saúde -= Corrupção
  Educação -= Corrupção

  Corrupção -= penaMorte * 5

  //Gastos do governo
  Educação += EducaPub * 200
  Saúde +=  SaudePub * 100
  Segurança +=  Policia * 200

  //Multiplicado por 200 pra se encaixar na barra
  //Renda da população vem dos impostos, então os serviços públicos e seu orçamento vem dos impostos e estão de acordo com a população.


  //Impostinhos
  let PIB = PIBPC * População
  PIBPC -= (PIBPC * 0.025) * (imposto * 0.1) // 02,5% do PIBPC seria a renda da população, a partir daí seria tirada um percentual para financiar o imposto
  Renda += (PIB * 0.025) * (imposto * 0.1)

  console.log("Renda imposto "+Renda)

  console.log("Educação "+Educação)
  console.log("Saúde "+Saúde)
  console.log("Segurança "+Segurança)

  Gastos += (Renda * EducaPub) + (Renda * SaudePub) + (Renda * Policia) + (Renda * parseInt(localStorage.getItem("Investimentos")))

  if (imposto > 0) {

    //Resultado da aplicação de impostos específicos
    if (impostoProg == true) {
    Igualdade += 10 * imposto
    Equidade += 10 * imposto
    }
  
    Saúde += 3 * impLixo
  
    Igualdade += 5 * impLuxo
    Equidade += 5 * impLuxo
  
    Segurança += Armamentismo * 6

    Renda += 0.01 * População * ( impLixo + impLuxo + impRenda + impProdutos + taxasCorp + taxaImportação )
    Igualdade += 1 * ( impLixo + impLuxo + impRenda + impProdutos + taxasCorp + taxaImportação )
    Equidade += 1 * ( impLixo + impLuxo + impRenda + impProdutos + taxasCorp + taxaImportação )
  }

  if (PIBPC > 0) {
    PIBPC -= 0.15 * (impProdutos + taxasCorp)
    PIBPC -= 0.05 * ( impLixo + impLuxo + impRenda + impProdutos + taxasCorp + taxaImportação )
  }

}

//Inflação e dívidas

let Dívida = Renda - Gastos

if (lastro == true) { inflação += 8 }

let Aprovação = ((Educação + Saúde + Segurança + Igualdade + Equidade - (Liberdade / 2) - (imposto * 8) - inflação) / 8) 
PIBPC -= PIBPC * (inflação * 0.01)
console.log("PIB " + População * PIBPC)

RendaTxt.innerHTML = "Renda Estatal: R$"+Renda.toFixed(2)
GastoTxt.innerHTML = "Gastos Estatais: R$"+Gastos.toFixed(2)
DividaTxt.innerHTML = "Excedente/Dívida Estatal: R$"+Dívida.toFixed(2)
PIBTxt.innerHTML = "PIB per Capita: R$"+PIBPC.toFixed(2)
EducaBar.style.width = Educação+"%"
SaudeBar.style.width = Saúde+"%"
SeguraBar.style.width = Segurança+"%"
IgualBar.style.width = Igualdade+"%"
EquiBar.style.width = Equidade+"%"
LiberBar.style.width = Liberdade+"%"
AprovaBar.style.width = Aprovação+"%"