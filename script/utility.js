function next(){
    const success = document.getElementById('main')
    success.classList.add('hidden')

     const successSection = document.getElementById('success');
     successSection.classList.remove('hidden')
}

function constinue(){
    hideElementById('success');
    showElementById('main');
}

