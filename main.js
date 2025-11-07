function reproduzir() {
  const audio = document.getElementById("meuAudio");

  audio.volume = 1.0;

  // Tenta tocar
  audio.play().then(() => {
    console.log("🎵 Áudio reproduzindo...");
  }).catch((error) => {
    console.log("⚠️ Erro ao tentar tocar o áudio:", error);
    alert("Toque novamente para permitir o som! 🔊");
  });
}

// Garantir que só funcione após interação do usuário
document.getElementById("oi").addEventListener("click", reproduzir);
