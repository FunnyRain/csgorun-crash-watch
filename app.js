function __GetCrashes(needArray = false, needEmoji = false) {
  let array = new Array();
  clear(``);
  console.log(` params: needArray: ${needArray}, needEmoji: ${needEmoji}
    
  🚀 CsgoRun dump crash is activated. 
        Expect crashes 💩 in the console.

    🚀 CsgoRun дамп крашей активирован.
        Ожидайте краши 💩 в консоли.
  `);
  let onchange = function (element, callback) {
    let text = element.innerText;
    setInterval(function () {
      let newText = element.innerText;
      if (text !== newText) {
        text = newText;
        callback(element);
      }
    });
  };

  const HTMLElement = document.getElementsByClassName(`graph-labels`)[0];
  onchange(HTMLElement, function (element) {
    const crashValues = element.innerText.split(`x`);
    if (crashValues.length > 0) {
      if (needArray) {
        array.push(crashValues[0]);
        console.log(array);
      }

      if (needEmoji) {
        let emoji = function (value) {
          if (value > 2.0) return `🚀 \x1b[32m${value}\x1b[0m`;
          else return `💩 \x1b[31m${value}\x1b[0m`;
        };
        console.log(`${emoji(crashValues[0])}`);
      } else {
        console.log(`${crashValues[0]}`);
      }
    }
  });
}

__GetCrashes();