// Seleciona os elementos do DOM
const copyText = document.querySelector("textarea[name=copyTxt]"); // Textarea onde o texto é inserido para cópia
const finalText = document.querySelector("textarea[name=finalTxt]"); // Textarea onde o texto copiado será colado
const moveBtn = document.querySelector(".moveBtn"); // Botão para mover o texto
const copyBtn = document.querySelector(".copyBtn"); // Botão para copiar o texto
const output = document.querySelector(".output"); // Elemento para mostrar mensagens de feedback

// Adiciona um evento de clique ao botão de copiar
copyBtn.addEventListener("click", () => {
  const temp = copyText.value; // Armazena o texto atual da copyText
  copyToClipboard(temp); // Chama a função para copiar o texto
});

// Adiciona um evento de clique ao botão de mover
moveBtn.addEventListener("click", () => {
  const temp = copyText.value; // Armazena o texto atual da copyText
  finalText.value = temp; // Move o texto para a finalText
});

// Seleciona o texto na copyText ao clicar
copyText.addEventListener("click", (evt) => {
  evt.target.select(); // Seleciona o texto na textarea clicada
});

// Seleciona o texto na finalText ao clicar
finalText.addEventListener("click", (evt) => {
  evt.target.select(); // Seleciona o texto na textarea clicada
});

// Função para copiar texto para a área de transferência
function copyToClipboard(str) {
  const outputContainer = document.querySelector(".output-container"); // Seleciona o container para mensagens
  const textarea = document.createElement("textarea"); // Cria um textarea temporário
  textarea.value = str; // Define o valor do textarea como o texto a ser copiado
  outputContainer.appendChild(textarea); // Adiciona o textarea ao container
  textarea.select(); // Seleciona o texto no textarea temporário
  document.execCommand("copy"); // Executa o comando de cópia
  outputContainer.removeChild(textarea); // Remove o textarea temporário após a cópia
  output.innerHTML = `<h3>Content Copied</h3>`; // Exibe mensagem de feedback
  output.classList.add("added"); // Adiciona classe para estilo (opcional)
  
  // Limpa a mensagem após 2 segundos
  setTimeout(() => {
    output.classList.remove("added"); // Remove a classe que adiciona estilo
    output.textContent = ""; // Limpa o conteúdo da mensagem
  }, 2000);
}
