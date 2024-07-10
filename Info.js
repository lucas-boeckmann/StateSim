let Renda = 1
let Dívida = 1
let PIBPC = 20000
let População = 10000000
let Educação = 10
let Saúde = 10
let Segurança = 10
let Igualdade = 25
let Equidade = 25

let imposto = parseInt(localStorage.getItem("imposto"))
let impRenda = localStorage.getItem("impRenda")
let impLixo = localStorage.getItem("impLixo")
let impLuxo = localStorage.getItem("impLuxo")

const RendaTxt = document.getElementById("RendaGov")
const DividaTxt = document.getElementById("DividaGov")
const PIBTxt = document.getElementById("PIBPCapita")
const EducaBar = document.getElementById("EducaBar")
const SaudeBar = document.getElementById("SaudeBar")
const SeguraBar = document.getElementById("SeguraBar")
const IgualBar = document.getElementById("IgualBar")
const EquiBar = document.getElementById("EquiBar")

if (localStorage.getItem("Renda") == "1") {
  Igualdade += 1 * imposto
  Equidade += 1 * imposto
  switch (imposto) {
      case 1:
        Renda += ((PIBPC * 10) / 100).toFixed(0)
        PIBPC -= (PIBPC / 100).toFixed(0)
        break;
      case 2:
        Renda += ((PIBPC * 10) / 75).toFixed(0)  
        PIBPC -= (PIBPC / 75).toFixed(0)
        break;
      case 3:
        Renda += ((PIBPC * 10) / 50).toFixed(0) 
        PIBPC -= (PIBPC / 50).toFixed(0)
        break;
      case 4:
        Renda += ((PIBPC * 10)).toFixed(0)  
        PIBPC -= (PIBPC).toFixed(0)
        break;
      default:
        break;
    }

  if (impRenda == "1") {
    Igualdade += 5 * imposto
    Equidade += 5 * imposto
  }
  if (impLixo == "1") {
    Saúde += 3 * imposto
  }
  if (impLuxo == "1") {
    Igualdade += 3 * imposto
    Equidade += 3 * imposto
  }
}


RendaTxt.innerHTML = "Renda Governamental: R$"+Renda
DividaTxt.innerHTML = "Dívida Governamental: R$"+Dívida
PIBTxt.innerHTML = "PIB per Capita: R$"+PIBPC
EducaBar.style.width = Educação+"%"
SaudeBar.style.width = Saúde+"%"
SeguraBar.style.width = Segurança+"%"
IgualBar.style.width = Igualdade+"%"
EquiBar.style.width = Equidade+"%"