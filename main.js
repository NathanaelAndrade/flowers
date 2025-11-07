  // Remove a classe container ao carregar a página (como estava no seu código)
    window.onload = () => {
      document.body.classList.remove("container");
    };

    const audio = document.getElementById("meuAudio");

    function reproduzir() {
      audio.play()
        .then(() => {
          console.log("🎶 Música tocando!");
        })
        .catch(err => {
          console.error("⚠️ Erro ao tocar:", err);
          alert("O navegador bloqueou o áudio. Toque novamente para permitir.");
        });
    }

    // Também permite iniciar a música ao passar o mouse (apenas em desktop)
    document.querySelector("h1").addEventListener("mouseover", reproduzir);