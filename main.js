const logUser = () => {
  let logged = false;

  const checkPass = prompt("What is the pass?");

  if (!logged && checkPass == "donaldnorman") {
    logged = true;
    const body = document.getElementsByTagName("body")[0];
    const passWall = body.children[0];
    body.removeChild(passWall);
  } else {
    alert("Reload the page to try Again");
  }
};

logUser();
