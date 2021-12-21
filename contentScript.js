// if(window.location.href.includes('getmoonbounce.com/*')) {
//    const newForm = document.createElement("form")
//    const formOne = document.createElement("input")
//    newForm.appendChild(formOne)

//    const currentDiv = document.getElementById("_next");
//    document.body.insertBefore(newForm, currentDiv)
// }

const initFunction = function(){
   const injectElement = document.createElement("div");
   injectElement.className = "chatbox";
   injectElement.innerHTML = "Portals Chat";
   document.body.appendChild(injectElement);
//    const injectInput = document.createElement("input");
//    injectInput.className = "input";
//    injectInput.placeholder ="write message here";
//    document.getElementsByClassName("chatbox").appendChild(injectInput);
// }
}
initFunction();

// const initFunction2 = function(){
//    const injectElementtwo = document.createElement("input");
//    injectElementtwo.className = "message-input";
//    injectElementtwo.innerHTML = "write message here";
//    document.getElementsByName("chatbox").appendChild(injectElementtwo);
// }
// initFunction2();

// if(shouldChangeIcon) {
//    // send message to background script
//    chrome.runtime.sendMessage({ "newIconPath" : folder + icons[2] });
// }