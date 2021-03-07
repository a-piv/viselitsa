// 1. Имеем массив слов
// 2. Любое слово из массива вставляем в игру
// 3. Разбиваем слово на буквы
// 4. Если буква есть, открываем её,
// 5. Если нет рисуем висилицу (картинки по порядку)
// 6. Если слово угадано - делаем.. (пишем текст "Поздравляю") и кнопка "Заново"
// 7. Если висилица нарисована до конца - делаем ... (пишем текст "Ты проиграл") и кнопка "Заново"


let body =document.querySelector('.body')

// 1. Имеем массив слов
let words = ['Цветок','Пыль','Мыло','кАртина','зОлото','Часы'];



// 2. Получаем рандомное число для из массива слов
function randomWord(massivSlov) {
    return Math.floor(Math.random() * Math.floor(massivSlov.length));
}



//console.log(words[randomWord(words)])

// 3. Разбиваем слово на буквы (массив из букв)
function rarbitBukvi(letter) {
    return letter.split('');
}
//console.log(rarbitBukvi(words[randomWord(words)]))

function newWord(words){
    console.log(randomWord(words))
}


// 4,5. Если буква есть, открываем её Если нет рисуем висилицу
function listenrKey(word){
    let keyDown = '';
    console.log(word);
    let massivBukvi = rarbitBukvi(word)
    console.log(massivBukvi)
    body.addEventListener('keydown', function(evt) {
        keyDown = evt.key;
        console.log(keyDown);
        massivBukvi.forEach(function(item){
        if (item === keyDown){
            // запустить функцию открыть букву
             return(console.log(`есть буква ${keyDown}`))
        }else{
            // запустить функцию нарисовать висилицу
            console.log(`Нет быквы ${keyDown}`)
        }
        return (keyDown)
    })
    })


    body.addEventListener('click', function(evt) {
        keyDown = evt.target.innerText;
        console.log(keyDown);
        massivBukvi.forEach(function(item){
            if (item === keyDown){
                // запустить функцию открыть букву
                return(console.log(`есть буква ${keyDown}`))
            }else{
                // запустить функцию нарисовать висилицу
                console.log(`Нет быквы ${keyDown}`)
            }
            return (keyDown)
        })
    })


}





//Создаем "Новое слово"
let buttonNewWord = document.querySelector('.button-new-word');
buttonNewWord.addEventListener('click', function (){
    //выбиреме случайное число из массива
    let number = randomWord(words)
    // console.log(number)
    // let number = num.toUpperCase();
    // слово из массива по этому номеру
    let word = words[number].toLowerCase();
    //разбиваем его по буквам
    // let letterWord = rarbitBukvi(word)
    document.querySelector('.word').textContent=word;
    //Проходимся по каждой букве
    listenrKey(word)
    // keyyy()
})

// function keyyy(){
//     let keyDown = '';
//     body.addEventListener('keydown', function(evt){
//         // keyDown = event.key;
//         // console.log(keyDown)
//         console.log(evt.key)
//         // return keyDown;
//     })
// }

// Создать кнопку
function kewNew(keyNumber){
    let button = document.createElement('button');
    button.classList.add('key');
    button.textContent=keyNumber;
    return button
}

alfavitMassivUpper = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];
alfavitMassivLower = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я']
//создать алфавит
alfavitMassivLower.forEach(function(item){
    let keyboard = document.querySelector('.keyboard');
    keyboard.append(kewNew(item));
})

let keyboard = document.querySelector('.keyboard')
keyboard.addEventListener('click', function(evt){
    console.log(evt.target.innerText)
    let bukva = evt.target.innerText;
    listenrKey(bukva)
})


