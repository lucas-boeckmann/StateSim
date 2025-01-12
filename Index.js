const nomeP = document.getElementById("NomePaís")
const direitos = document.getElementById("Direitos")
const regime = document.getElementById("Regime")
const sistema = document.getElementById("Sistema")
const organização = document.getElementById("Organização")
const título = document.getElementById("Título")
const ideo = document.getElementById("Ideologia")
const corp = document.getElementById("corporativismo")

window.onload = function () {
    nomeP.value = localStorage.getItem("NomeP") || null
    direitos.value = localStorage.getItem("Direitos") || 1
    regime.value = localStorage.getItem("Regime") || 1
    sistema.value = localStorage.getItem("Sistema") || 1
    organização.value = localStorage.getItem("Organização") || 1
    título.value = localStorage.getItem("Título") || 1
    ideo.value = localStorage.getItem("Ideologia") || null
    corp.value = localStorage.getItem("corporativismo") || 0
}
function Submit() {
    localStorage.setItem("NomeP", nomeP.value)
    localStorage.setItem("Direitos", direitos.value)
    localStorage.setItem("Regime", regime.value)
    localStorage.setItem("Sistema", sistema.value)
    localStorage.setItem("Organização", organização.value)
    localStorage.setItem("Título", título.value)
    localStorage.setItem("Ideologia", ideo.value)
    localStorage.setItem("corporativismo", corp.value)

    alert("Jogo salvo!");

}