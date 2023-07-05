const logUser = () => {
  const checkPass = prompt("What is the pass?");

  let logged = false;

  if (!logged && checkPass === "tralala") {
    const myPresentation = document.createElement("div");
    myPresentation.innerText = "Muito Bem!";
    const body = document.getElementsByTagName("body");
    body[0].appendChild(myPresentation);
    logged = true;
  } else {
    alert("Try Again");
    logUser()
  }
};

//logUser()