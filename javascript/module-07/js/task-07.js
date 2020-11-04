const fontControl = document.querySelector('#font-size-control');

const text = document.querySelector('#text');

fontControl.addEventListener('input', event => {
text.style.fontSize = `${event.target.value}px`;
})