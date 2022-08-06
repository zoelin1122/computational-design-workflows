function alertFn (event) {
  console.log(event)

  let name = event.key;
  let code = event.keyCode;
  
  alert(`This is the letter ${name} with a code of ${code}`)
}

window.addEventListener('keydown', alertFn);