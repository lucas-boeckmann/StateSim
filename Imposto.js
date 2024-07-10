const QuantImposto = document.getElementById("ImpostoQuant")
const ImpostoRenda = document.getElementById("ImpostoRenda")
const ImpostoLixo = document.getElementById("ImpostoLixo")
const ImpostoLuxo = document.getElementById("ImpostoLuxo")
const ImpostoProd = document.getElementById("ImpostoProdutos")
const TaxasCorp = document.getElementById("TaxasCorp")
const TaxaImp = document.getElementById("TaxaImp")

QuantImposto.value = localStorage.getItem("imposto")

function mudarQuantImposto() {
    localStorage.setItem("imposto", QuantImposto.value)
}

let impRenda = localStorage.getItem("impRenda")
let impLixo = localStorage.getItem("impLixo")
let impLuxo = localStorage.getItem("impLuxo")
let impProd = localStorage.getItem("impProd")
let taxasCo = localStorage.getItem("taxaCorp")
let taxaI = localStorage.getItem("taxaImp")

let ir = false
let il = false
let ilx = false
let ipr = false
let tc = false
let ti = false

if (impRenda == "1") {
    ImpostoRenda.checked = true
    ir = true
}
if (impLixo == "1") {
    ImpostoLixo.checked = true
    il = true
}
if (impLuxo == "1") {
    ImpostoLuxo.checked = true
    ilx = true
}
if (impProd == "1") {
    ImpostoProd.checked = true
    ipr = true
}
if (taxasCo == "1") {
    TaxasCorp.checked = true
    tc = true
}
if (taxaI == "1") {
    TaxaImp.checked = true
    ti = true
}


function impostoRenda() {
    if (ir == true) {
    localStorage.setItem("impRenda", "0")
    }
    else {
    localStorage.setItem("impRenda", "1")
    }
    ir = !ir
    VerificarRenda()
}
function impostoLixo() {
    if (il == true) {
    localStorage.setItem("impLixo", "0")
    }
    else {
    localStorage.setItem("impLixo", "1")
    }
    il = !il
    VerificarRenda()
}
function impostoLuxo() {
    if (ilx == true) {
    localStorage.setItem("impLuxo", "0")
    }
    else {
    localStorage.setItem("impLuxo", "1")
    }
    ilx = !ilx
    VerificarRenda()
}
function impostoProdutos() {
    if (ipr == true) {
    localStorage.setItem("impProd", "0")
    }
    else {
    localStorage.setItem("impProd", "1")
    }
    ipr = !ipr
    VerificarRenda()
}
function taxasC() {
    if (tc == true) {
    localStorage.setItem("taxasCorp", "0")
    }
    else {
    localStorage.setItem("taxasCorp", "1")
    }
    tc = !tc
    VerificarRenda()
}
function taxaIm() {
    if (ti == true) {
    localStorage.setItem("taxaImp", "0")
    }
    else {
    localStorage.setItem("taxaImp", "1")
    }
    ti = !ti
    VerificarRenda()
}

function VerificarRenda() {
    if (ir == true || il == true || ilx == true) {
       localStorage.setItem("Renda", "1")
    }
    else {
        localStorage.setItem("Renda", "0")
    }
}