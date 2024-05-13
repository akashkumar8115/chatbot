
// show suggetion
setTimeout(() => {
  document.getElementById("voice").style.border = "none";
  document.getElementById("suggest").style.display = "none";
}, 2000);

setTimeout(() => {
  document.getElementById("voice").style.border = "2px solid red";
  document.getElementById("suggest").style.display = "block";
}, 4000);

setTimeout(() => {
  document.getElementById("voice").style.border = "none";
  document.getElementById("suggest").style.display = "none";
}, 5000);

let Data = (searchData) => {

  if (searchData === "Hi") {
    searchData = "hello how are you";
    document.getElementById("text").innerHTML = searchData;

  } else if (searchData === "Hello" || "hello") {
    searchData = "hello kese ho aap";
    document.getElementById("text").value = searchData;

  } else if (searchData === "What Is Your Name") {
    searchData = "i am Aakash assistance";
    document.getElementById("text").value = searchData;
  }
  else if (searchData === "Akash") {
    searchData = "Akash is a very nice person";
    document.getElementById("text").value = searchData;
  }
  else if (searchData === "") {
    searchData = "i am Aakash assistance";
    document.getElementById("text").value = searchData;
  }

}


const userName = document.querySelector("#search");
userName.addEventListener("input", (e) => {

  var searchData = e.target.value;
  Data(searchData);

});




// mice on then speak


function speek() {
  var recognition = new webkitSpeechRecognition();
  recognition.lang = "en-GB" || "hn-GB";
  recognition.onresult = function(e) {
    // console.log(e);
    var content = e.results[0][0].transcript;
    document.getElementById("search").value = content;
    // console.log(content);

    Datas(content);
    

    let utterance = new SpeechSynthesisUtterance(content);
    speechSynthesis.speak(utterance);
  };
  recognition.start();
}

let Datas = (content) => {
  if (content === "hi") {
    content = "hello how are you";
    document.getElementById("text").value = content;
  }
  else if (content === "hello") {
    content = "hello kese ho aap";
    document.getElementById("text").value = content;
  }

  else if (content === "what is your name") {
    content = "i am Aakash assistance";
    document.getElementById("text").value = content;
  }

  else if (content === "who are you") {
    content = "me to ek chhoti si assistance hu, and you?";
    document.getElementById("text").value = content;
  }
  else if (content === "how are you") {
    content = "i am fine, and you?";
    document.getElementById("text").value = content;
  }
  else if (content === "fine") {
    content = "soon kar achha laga";
    document.getElementById("text").value = content;
  }
}


// speak mice on click
function miceable() {
  const msg = document.getElementById("search").value;
  const utterance = new SpeechSynthesisUtterance(msg);
  speechSynthesis.speak(utterance);
}

//
function miceablet() {
  const msg = document.getElementById("text").value;
  const utterance = new SpeechSynthesisUtterance(msg);
  speechSynthesis.speak(utterance);
}
