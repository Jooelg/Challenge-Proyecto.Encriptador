// made with de madafaking guty
const d = document;

((d) => {
  const $textarea = d.querySelector(".textarea"),
    $encriptar = d.querySelector(".encriptar"),
    $desencriptar = d.querySelector(".desencriptar"),
    $outputvacia = d.querySelector(".outputvacia"),
    $outputllena = d.querySelector(".outputllena"),
    $outputtext = d.querySelector(".output-text"),
    $copy = d.querySelector(".copy");

  let text = "";
  $textarea.addEventListener("input", (e) => {
    text = e.target.value;
  });

  $encriptar.addEventListener("click", (e) => {
    function exchange(text) {
      if (!text) {
        console.log("MSJ Ningun mensaje fue encontrado");
        $outputvacia.classList.remove("none");
        $outputllena.classList.add("none");
      } else {
        $outputvacia.classList.add("none");
        $outputllena.classList.remove("none");

        function encryption(text) {
          text = text.toLocaleLowerCase();
          text = text.split("e").join("enter");
          text = text.split("i").join("imes");
          text = text.split("a").join("ai");
          text = text.split("o").join("ober");
          text = text.split("u").join("ufat");
          $outputtext.innerHTML = `<p class="outputstyle copytext">${text}</p>`;
        }
        encryption(text);
      }
    }
    exchange(text);
  });
  $desencriptar.addEventListener("click", (e) => {
    function exchange2(text) {
      if (!text) {
        console.log("MSJ Ningun mensaje fue encontrado");
        $outputvacia.classList.remove("none");
        $outputllena.classList.add("none");
      } else {
        $outputvacia.classList.add("none");
        $outputllena.classList.remove("none");

        function uncryption(text) {
          text = text.toLocaleLowerCase();
          text = text.split("enter").join("e");
          text = text.split("imes").join("i");
          text = text.split("ai").join("a");
          text = text.split("ober").join("o");
          text = text.split("ufat").join("u");
          $outputtext.innerHTML = `<p class="outputstyle copytext">${text}</p>`;
        }
        uncryption(text);
      }
    }
    exchange2(text);
  });
  $copy.addEventListener("click", function (e) {
    for (let i = 0; i < 5; i++) {
      let $text = d.querySelector(".copytext");
      let range = d.createRange();
      range.selectNode($text);
      window.getSelection().addRange(range);
      try {
        let result = d.execCommand("copy");
        console.log(result ? "texto copiado" : "No se pudo copiar el texto");
      } catch (err) {
        console.log("error al intentar copiar el texto");
      }
      window.getSelection().removeAllRanges();
    }
  });
})(document);
