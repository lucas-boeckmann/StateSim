const Investimentos = document.getElementById("Investimentos");

const ImpostoQuant = document.getElementById("ImpostoQuant");
const ImpostoRenda = document.getElementById("ImpostoRenda");
const ImpostoLixo = document.getElementById("ImpostoLixo");
const ImpostoLuxo = document.getElementById("ImpostoLuxo");
const ImpostoProdutos = document.getElementById("ImpostoProdutos");
const TaxasCorp = document.getElementById("TaxasCorp");
const TaxaImp = document.getElementById("TaxaImp");
const ImpostoProgressivo = document.getElementById("ImpostoProgressivo");

const SaudePub = document.getElementById("SaudePublica")
const EducaPub = document.getElementById("EducaPublica")
const Policia = document.getElementById("Policia")
const Exercito = document.getElementById("Exercito")
const Infraestrutura = document.getElementById("Infraestrutura")

const ParquesPublicos = document.getElementById("ParquesPublicos")
const ViasVerdes = document.getElementById("ViasVerdes")
const TransportePublico = document.getElementById("TransporteP")
const RodoviasPublico = document.getElementById("RodoviasP")
const Moradias = document.getElementById("Moradias")
const AuxDesemprego = document.getElementById("AuxDesemprego");
const Previdencia = document.getElementById("Previdência");
const DistRenda = document.getElementById("DistRenda");
const Reciclagem = document.getElementById("Reciclagem")


window.onload = function() {
  Investimentos.value = localStorage.getItem("Investimentos") || 0;
  
  SaudePub.value = localStorage.getItem("SaudePublica") || 0.12
  EducaPub.value = localStorage.getItem("EducaPublica") || 0.15
  Policia.value = localStorage.getItem("Policia") || 0.05
  Exercito.value = localStorage.getItem("Exercito") || 0.10
  Infraestrutura.value = localStorage.getItem("Infraestrutura") || 0.05

  ParquesPublicos.checked = JSON.parse(localStorage.getItem("ParquesPublicos") || 1)
  ViasVerdes.checked = JSON.parse(localStorage.getItem("ViasVerdes") || 0)
  TransportePublico.checked = JSON.parse(localStorage.getItem("TransporteP") || 0)
  RodoviasPublico.checked = JSON.parse(localStorage.getItem("RodoviasP") || 0)
  Moradias.checked = JSON.parse(localStorage.getItem("Moradias") || 0)
  AuxDesemprego.checked = JSON.parse(localStorage.getItem("AuxDesemprego") || 0)
  Previdencia.checked = JSON.parse(localStorage.getItem("Previdência") || 1)
  DistRenda.checked = JSON.parse(localStorage.getItem("DistRenda") || 0)
  Reciclagem.checked = JSON.parse(localStorage.getItem("Reciclagem") || 0)
  
  ImpostoQuant.value = localStorage.getItem("ImpostoQuant") || 0;
  ImpostoRenda.checked = JSON.parse(localStorage.getItem("ImpostoRenda") || 0);
  ImpostoLixo.checked = JSON.parse(localStorage.getItem("ImpostoLixo") || 0);
  ImpostoLuxo.checked = JSON.parse(localStorage.getItem("ImpostoLuxo") || 0);
  ImpostoProdutos.checked = JSON.parse(localStorage.getItem("ImpostoProdutos") || 0);
  TaxasCorp.checked = JSON.parse(localStorage.getItem("TaxasCorp") || 0);
  TaxaImp.checked = JSON.parse(localStorage.getItem("TaxaImp") || 0);
  ImpostoProgressivo.checked = JSON.parse(localStorage.getItem("ImpostoProgressivo") || 0);

  if (ImpostoQuant.value != 0) {
      localStorage.setItem("PosRenda", "1")
  } else {
      localStorage.setItem("PosRenda", "0")
  }
};

function Submit() {
  localStorage.setItem("Investimentos", Investimentos.value);
  
  localStorage.setItem("SaudePublica", SaudePub.value);
  localStorage.setItem("EducaPublica", EducaPub.value);
  localStorage.setItem("Policia", Policia.value);
  localStorage.setItem("Exercito", Exercito.value);
  localStorage.setItem("Infraestrutura", Infraestrutura.value)

  localStorage.setItem("ParquesPublicos", ParquesPublicos.checked);
  localStorage.setItem("ViasVerdes", ViasVerdes.checked);
  localStorage.setItem("TransporteP", TransportePublico.checked);
  localStorage.setItem("RodoviasP", RodoviasPublico.checked);
  localStorage.setItem("Moradias", Moradias.checked);
  localStorage.setItem("AuxDesemprego", AuxDesemprego.checked);
  localStorage.setItem("Previdência", Previdencia.checked);
  localStorage.setItem("DistRenda", DistRenda.checked);
  localStorage.setItem("Reciclagem", Reciclagem.checked);
  
  localStorage.setItem("ImpostoQuant", ImpostoQuant.value);
  localStorage.setItem("ImpostoRenda", ImpostoRenda.checked);
  localStorage.setItem("ImpostoLixo", ImpostoLixo.checked);
  localStorage.setItem("ImpostoLuxo", ImpostoLuxo.checked);
  localStorage.setItem("ImpostoProdutos", ImpostoProdutos.checked);
  localStorage.setItem("TaxasCorp", TaxasCorp.checked);
  localStorage.setItem("TaxaImp", TaxaImp.checked);
  localStorage.setItem("ImpostoProgressivo", ImpostoProgressivo.checked);

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