// Recupera os capítulos do localStorage ou inicia com array vazio
let chaptersArray = getChapterList() || [];

// Declare references to input, button, and list
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Correct selector for <ul id="list">

// Renderiza capítulos salvos
chaptersArray.forEach(chapter => {
    displayList(chapter);
});


// Evento de clique no botão
button.addEventListener('click', () => {
    if (input.value != '') {  // Verifica se o campo não está vazio
        displayList(input.value); // Exibe o capítulo
        chaptersArray.push(input.value); // Adiciona ao array
        setChapterList(); // Salva no localStorage
        input.value = ''; // Limpa o input
        input.focus(); // Foca no input novamente
    }
});


// Função que exibe um item na lista
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');

    li.textContent = item; // usa o parâmetro 'item' como texto
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // aplica estilo

    li.append(deletebutton);
    list.append(li);

    deletebutton.addEventListener('click', function () {
        list.removeChild(li);              // Remove do DOM
        deleteChapter(li.textContent);    // Remove do array/localStorage
        input.focus();                    // Foca novamente no campo
    });

    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}


// Função que remove capítulo do array e atualiza localStorage
function deleteChapter(chapter) {
    // Remove o ícone ❌, se estiver no texto
    chapter = chapter.slice(0, chapter.length - 1);

    // Remove do array
    chaptersArray = chaptersArray.filter(item => item !== chapter);

    // Atualiza localStorage
    setChapterList();
}

/*
// Função que exibe um capítulo na lista
function displayList(chapter) {
    const li = document.createElement('li');
    const chapterText = document.createElement('span');
    chapterText.textContent = chapter;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    deleteButton.setAttribute('aria-label', `Remove chapter ${chapter}`);

    // Evento para deletar item
    deleteButton.addEventListener('click', () => {
        list.removeChild(li); // Remove do DOM
        chaptersArray = chaptersArray.filter(item => item !== chapter); // Remove do array
        setChapterList(); // Atualiza localStorage
    });

    li.appendChild(chapterText);
    li.appendChild(deleteButton);
    list.appendChild(li);
}
*/

// Função que salva a lista no localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}


// Função que recupera a lista do localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

