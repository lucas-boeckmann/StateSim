const nomeP = document.getElementById("NomePaís")
const direitos = document.getElementById("Direitos")
const regime = document.getElementById("Regime")
const sistema = document.getElementById("Sistema")
const organização = document.getElementById("Organização")
const título = document.getElementById("Título")
const ideoEconomica = document.getElementById("IdeologiaEconomica")
const ideoSocial = document.getElementById("IdeologiaSocial")

nomeP.value = localStorage.getItem("NomeP")
direitos.value = localStorage.getItem("Direitos")
regime.value = localStorage.getItem("Regime")
sistema.value = localStorage.getItem("Sistema")
organização.value = localStorage.getItem("Organização")
título.value = localStorage.getItem("Título")
ideoEconomica.value = localStorage.getItem("IdeologiaEconomica")
ideoSocial.value = localStorage.getItem("IdeoSocial")

function Submit() {
    localStorage.setItem("NomeP", nomeP.value)
    localStorage.setItem("Direitos", direitos.value)
    localStorage.setItem("Regime", regime.value)
    localStorage.setItem("Sistema", sistema.value)
    localStorage.setItem("Organização", organização.value)
    localStorage.setItem("Título", título.value)
    localStorage.setItem("IdeologiaEconomica", ideoEconomica.value)
    localStorage.setItem("IdeoSocial", ideoSocial.value)
}