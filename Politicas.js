const tratamentoCriminoso = document.getElementById("TrataCriminoso")
const leisPrincipais = document.getElementById("LeisPrincipais")
const imunidadeParlamentar = document.getElementById("ImuniParla")
const maioridadePenal = document.getElementById("MaiorPenal")
const LeisProg = document.getElementById("LeisProg")
const salárioMinimo = document.getElementById("SalarioMinimo")

const proibAborto = document.getElementById("ProibAborto")
const proibMaconha = document.getElementById("ProibMaco")
const proibDrogasGerais = document.getElementById("ProibDro")
const reflorestamento = document.getElementById("Reflo")
const estadoLaico = document.getElementById("EstaLai")
const proibJogosAzar = document.getElementById("ProibAzar")
const proibOposicaoPolitica = document.getElementById("ProibOpo")
const censuraMidia = document.getElementById("Censura")
const penaMorte = document.getElementById("PenaMorte")
const leiMarcial = document.getElementById("LeiMarcial")
const disciplinaInstituicoes = document.getElementById("Disciplina")
const proibReligiao = document.getElementById("ProibReli")
const proibReligiaoEspecifica = document.getElementById("ProibReliEsp")

const MercadoFechado = document.getElementById("MercadoFechado")
const Moeda = document.getElementById("Moeda")
const Cambio = document.getElementById("Cambio")
const Cooperativas = document.getElementById("Cooperativas")
const Estatizar = document.getElementById("Estatizar")

const minisEconomia = document.getElementById("MinisEconomia");
const minisSaude = document.getElementById("MinisSaúde");
const minisEduca = document.getElementById("MinisEduca");
const minisSegura = document.getElementById("MinisSegura");
const minisCiencia = document.getElementById("MinisCiência");
const minisDefesa = document.getElementById("MinisDefesa");
const minisPropaganda = document.getElementById("MinisPropaganda");
const ministeriosExtras = document.getElementById("MinisteriosEx");
const estatais = document.getElementById("Estatais");


window.onload = function() {
    tratamentoCriminoso.value = localStorage.getItem("tratamentoCriminoso") || 2;
    leisPrincipais.value = localStorage.getItem("leisPrincipais") || 2;
    imunidadeParlamentar.value = localStorage.getItem("imunidadeParlamentar") || 0;
    maioridadePenal.value = localStorage.getItem("maioridadePenal") || 4;
    penaMorte.value = localStorage.getItem("penaMorte") || 0;
    LeisProg.value = localStorage.getItem("LeisProg") || 0;
    salárioMinimo.value = localStorage.getItem("salárioMinimo") || 5;
    MercadoFechado.checked = JSON.parse(localStorage.getItem("MercadoFechado") || 0);
    Moeda.checked = JSON.parse(localStorage.getItem("Moeda") || 0);
    Cambio.checked = JSON.parse(localStorage.getItem("Cambio") || 0);
    Cooperativas.checked = JSON.parse(localStorage.getItem("Cooperativas") || 0);
    Estatizar.checked = JSON.parse(localStorage.getItem("Estatizar") || 0);

    minisEconomia.checked = JSON.parse(localStorage.getItem("minisEconomia") || 1);
    minisSaude.checked = JSON.parse(localStorage.getItem("minisSaude") || 1);
    minisEduca.checked = JSON.parse(localStorage.getItem("minisEduca") || 1);
    minisSegura.checked = JSON.parse(localStorage.getItem("minisSegura") || 1);
    minisCiencia.checked = JSON.parse(localStorage.getItem("minisCiencia") || 1);
    minisDefesa.checked = JSON.parse(localStorage.getItem("minisDefesa") || 1);
    minisPropaganda.checked = JSON.parse(localStorage.getItem("minisPropaganda") || 0);
    ministeriosExtras.value = localStorage.getItem("ministeriosExtras") || "0";
    estatais.value = localStorage.getItem("estatais") || "0";

    document.getElementById("ProibAborto").checked = JSON.parse(localStorage.getItem("proibAborto"));
    document.getElementById("ProibMaco").checked = JSON.parse(localStorage.getItem("proibMaconha"));
    document.getElementById("ProibDro").checked = JSON.parse(localStorage.getItem("proibDrogasGerais"));
    document.getElementById("Reflo").checked = JSON.parse(localStorage.getItem("reflorestamento"));
    document.getElementById("EstaLai").checked = JSON.parse(localStorage.getItem("estadoLaico"));
    document.getElementById("ProibAzar").checked = JSON.parse(localStorage.getItem("proibJogosAzar"));
    document.getElementById("ProibOpo").checked = JSON.parse(localStorage.getItem("proibOposicaoPolitica"));
    document.getElementById("Censura").checked = JSON.parse(localStorage.getItem("censuraMidia"));
    document.getElementById("LeiMarcial").checked = JSON.parse(localStorage.getItem("leiMarcial"));
    document.getElementById("PenaMorte").checked = JSON.parse(localStorage.getItem("penaMorte"));
    document.getElementById("Disciplina").checked = JSON.parse(localStorage.getItem("disciplinaInstituicoes"));
    document.getElementById("ProibReli").checked = JSON.parse(localStorage.getItem("proibReligiao"));
    document.getElementById("ProibReliEsp").checked = JSON.parse(localStorage.getItem("proibReligiaoEsp"));
}

function Submit() {

    localStorage.setItem("tratamentoCriminoso", tratamentoCriminoso.value)
    localStorage.setItem("leisPrincipais", leisPrincipais.value)
    localStorage.setItem("imunidadeParlamentar", imunidadeParlamentar.value)
    localStorage.setItem("maioridadePenal", maioridadePenal.value)
    localStorage.setItem("LeisProg", LeisProg.value)
    localStorage.setItem("salárioMinimo", salárioMinimo.value)
    
    localStorage.setItem("proibAborto", proibAborto.checked)
    localStorage.setItem("proibMaconha", proibMaconha.checked)
    localStorage.setItem("proibDrogasGerais", proibDrogasGerais.checked)
    localStorage.setItem("reflorestamento", reflorestamento.checked)
    localStorage.setItem("estadoLaico", estadoLaico.checked)
    localStorage.setItem("proibJogosAzar", proibJogosAzar.checked)
    localStorage.setItem("proibOposicaoPolitica", proibOposicaoPolitica.checked)
    localStorage.setItem("censuraMidia", censuraMidia.checked)
    localStorage.setItem("leiMarcial", leiMarcial.checked)
    localStorage.setItem("penaMorte", penaMorte.checked)
    localStorage.setItem("disciplinaInstituicoes", disciplinaInstituicoes.checked)
    localStorage.setItem("proibReligiao", proibReligiao.checked)
    localStorage.setItem("proibReligiaoEsp", proibReligiaoEspecifica.checked)

    localStorage.setItem("MercadoFechado", MercadoFechado.checked);
    localStorage.setItem("Moeda", Moeda.checked);
    localStorage.setItem("Cambio", Cambio.checked);
    localStorage.setItem("Cooperativas", Cooperativas.checked);
    localStorage.setItem("Estatizar", Estatizar.checked);
    
    localStorage.setItem("minisEconomia", minisEconomia.checked);
    localStorage.setItem("minisSaude", minisSaude.checked);
    localStorage.setItem("minisEduca", minisEduca.checked);
    localStorage.setItem("minisSegura", minisSegura.checked);
    localStorage.setItem("minisCiencia", minisCiencia.checked);
    localStorage.setItem("minisDefesa", minisDefesa.checked);
    localStorage.setItem("minisPropaganda", minisPropaganda.checked);
    localStorage.setItem("ministeriosExtras", ministeriosExtras.value);
    localStorage.setItem("estatais", estatais.value);

    alert("Jogo salvo!");

    genRandom()

}

function genRandom() {

    const questions = document.querySelectorAll(".question");

    questions.forEach(question => question.style.display = "none");

    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];

    randomQuestion.style.display = "block";
}

window.onload = () => {
    genRandom();
};