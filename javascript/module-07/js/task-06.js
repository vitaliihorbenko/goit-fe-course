const validRef = document.querySelector('#validation-input');

validRef.addEventListener('change', event => {
    const dataLength = event.target.value.length;
    // console.log(dataLength);
    if (dataLength === 6) {
        validRef.classList.add('valid');
        validRef.classList.remove('invalid');
    }

    else if (dataLength === 0) {
        validRef.classList.remove('invalid');
        validRef.classList.remove('valid');
    }

    else {
        validRef.classList.add('invalid');
        validRef.classList.remove('valid');
    }
})

