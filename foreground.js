let mainElement = document.getElementsByTagName("main")[0];

function removeStyles(styles) {
  for (let property in styles) {
    if (styles.hasOwnProperty(property)) {
      styles[property] = "";
    }
  }
}

if (!mainElement) {
  const intervalId = setInterval(() => {
    mainElement = document.getElementsByTagName("main")[0];
    if (mainElement) {
      // Create button
      let button = document.createElement("button");
      button.innerHTML = "Agrandar";
      button.style.position = "fixed";
      button.style.bottom = "10px";
      button.style.left = "10px";
      button.style.zIndex = "9999";
      button.style.padding = "10px";
      button.style.border = "none";
      button.style.backgroundColor = "#0a0000";
      button.style.color = "#fafafa";
      button.style.cursor = "pointer";
      button.style.borderRadius = "5px";
      button.style.fontSize = "16px";
      button.style.fontWeight = "bold";
      button.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
      button.style.outline = "none";
      button.style.textTransform = "uppercase";
      document.body.appendChild(button);

      const EXPAND = "Agrandar";
      const REVERT = "Revertir";

      button.addEventListener("click", function () {
        if (button.innerHTML === EXPAND) {
          //apply styles

          mainElement.style.maxWidth = "100%";
          mainElement.style.height = "100%";
          mainElement.style.width = "100%";
          mainElement.style.paddingLeft = "0";
          mainElement.style.paddingRight = "0";

          mainElement.parentElement.children[1].style.display = "none";
          mainElement.firstElementChild.style.display = "none";

          mainElement.children[1].style.paddingLeft = "0";
          mainElement.children[1].style.paddingTop = "0";
          mainElement.children[1].style.paddingRight = "0";

          document.getElementById("main-iframe").parentElement.style.height =
            "100%";
          document.getElementById("main-iframe").parentElement.style.width =
            "100%";
          document.getElementById(
            "main-iframe"
          ).parentElement.style.paddingLeft = "0";
          document.getElementById(
            "main-iframe"
          ).parentElement.style.paddingRight = "0";
          document.getElementById(
            "main-iframe"
          ).parentElement.style.paddingTop = "0";
          document.getElementById(
            "main-iframe"
          ).parentElement.style.paddingBottom = "0";
          button.innerHTML = REVERT;
        } else {
          // Revert changes
          removeStyles(mainElement.style);
          removeStyles(mainElement.parentElement.children[1].style);
          removeStyles(mainElement.firstElementChild.style);
          removeStyles(mainElement.children[1].style);
          removeStyles(
            document.getElementById("main-iframe").parentElement.style
          );

          button.innerHTML = EXPAND;
        }
      });
      clearInterval(intervalId);
    }
  }, 100);
}
