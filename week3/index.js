function hello() {
    console.log("hello")
}

window.onload = function() {
    console.log("loaded")
}

hello();

(function () {
    console.log(document)
    const header = document.getElementsByTagName('header')[0]
    const library = document.getElementById('library')
    header.firstElementChild.innerHTML += " mark"

    header.style.fontSize = 22;
    header.style.color = 'red';


    for (let index = 0; index < 9; index++) {
        const figure = createFigure(index)
        library.appendChild(figure)
        
    }


    const submitButton = document.getElementById('submit')
    submitButton.addEventListener('click', (event) => {
        event.preventDefault()
        readForm()
    })

})();

function createFigure(number, text = 'student') {


    const figure = document.createElement('figure');
    const caption = document.createElement('figcaption');

    figure.appendChild(caption);

    const img = document.createElement('img')
    img.setAttribute('src', 'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D')

    // div.appendChild()
    // caption.before(document.createElement('div'))
    caption.before(img)

    caption.appendChild(document.createTextNode(`${text} ${number}`))

    figure.setAttribute('class', 'placeholder')

    const button = document.createElement('button')

    button.textContent = 'Delete'
    caption.after(button)


    button.addEventListener('click', (event) => {
        event.stopPropagation();
        button.style.background = 'red'
        window.alert("this will be red")
        figure.parentElement.removeChild(figure)


    })

    // figure.addEventListener('click', (event) => {

    //     // figure.style.background = 'red'
    //     figure.parentElement.removeChild(figure)

    // })

    document.querySelector('#library div')


    return figure;

}

function readForm() {

    const number = document.getElementById('number')
    const text = document.getElementById('text')

    const newFig = createFigure(number.value, text.value)
    const library = document.getElementById('library')

    library.appendChild(newFig);

    number.value = ''
    text.value = ''

}