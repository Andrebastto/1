let tipoAtendimento = '';

function selecionarTipo(tipo) {
  tipoAtendimento = tipo;
  document.getElementById('tipo').value = tipo;
  alert(`Você selecionou: ${tipo}`);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("consulta-form");
  const mensagem = document.getElementById("mensagem");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById("nome").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const dia = document.getElementById("dia").value;
    const hora = document.getElementById("hora").value;
    const tipo = document.getElementById("tipo").value;

    if (!nome || !cidade || !dia || !hora || !tipo) {
      mensagem.textContent = "Por favor, preencha todos os campos.";
      mensagem.style.color = "red";
      return;
    }

    // Mensagem formatada para o WhatsApp
    const mensagemWhatsApp = `Olá, gostaria de agendar uma consulta, e confirmar dia e data disponível:\n\n` +
      `Nome: ${nome}\n` +
      `Cidade: ${cidade}\n` +
      `Dia: ${dia}\n` +
      `Hora: ${hora}\n` +
      `Tipo de Atendimento: ${tipo}`;

    // Número de WhatsApp (substitua pelo número correto no formato internacional)
    const numeroWhatsApp = "5561998247363"; // Exemplo: +55 61 99824-7363
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`;

    // Redireciona para o WhatsApp
    window.open(url, "_blank");

    // Mensagem de confirmação
    mensagem.textContent = "Redirecionando para o WhatsApp...";
    mensagem.style.color = "green";

    // Limpa o formulário
    form.reset();
  });
});
