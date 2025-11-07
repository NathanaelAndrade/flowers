 // Quando a página carregar, remove a classe container (como no seu original)
window.onload = () => {
  document.body.classList.remove("container");
};

const audio = document.getElementById("meuAudio");

// Função para tocar a música
function reproduzir() {
  audio.play()
    .then(() => {
      console.log("🎶 Música tocando!");
    })
    .catch(err => {
      console.error("⚠️ Erro ao tocar o áudio:", err);
      alert("O navegador bloqueou o áudio. Toque novamente para permitir.");
    });
}