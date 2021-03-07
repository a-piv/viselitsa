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

// 3. Разбиваем слово на буквы (массив из букв)
function rarbitBukvi(letter) {
    return letter.split('');
}


// Проверяем все буквы, если нет совпадения, рисуем человечка
function checkAvailability(arr, val) {
    return arr.some(function(arrVal) {
        return val === arrVal;
    });
}

// 4,5. Если буква есть, открываем её Если нет рисуем висилицу
function listenerr (keyDown, massivBukvi) {
    console.log(massivBukvi);
    console.log(keyDown);

    if(checkAvailability(massivBukvi, keyDown)) {
        console.log(`Есть буквdddа ${keyDown}`)
        massivBukvi.forEach(function(item, i ){
            if (item === keyDown){
                // запустить функцию открыть букву
                showChar(i)
                console.log(`есть буква ${keyDown}`)
            }
        })
    }else {
        console.log(`нет букdddвы ${keyDown}`)
        showPeople(bodyPart)
    }
}


function listenrKey(slovo){
    let slovoMassiv = rarbitBukvi(slovo)
    body.addEventListener('keydown', function (evt){
            key = evt.key;
            listenerr(key, slovoMassiv)
    })
    let keyboard = document.querySelector('.keyboard')
    keyboard.addEventListener('click', function (evt){
            key = evt.target.innerText;
            console.log(key)
            listenerr(key, slovoMassiv)
        }
    )


    // body.addEventListener('click', function(evt) {
    //     keyDown = evt.target.innerText;
    //     console.log(keyDown);
    //     // massivBukvi.some(console.log('все полпожиельняые'))
    //
    //     massivBukvi.forEach(function(item, i){
    //         if (item === keyDown){
    //             showChar(i)
    //             // запустить функцию открыть букву
    //             return(console.log(`есть буква ${keyDown}`))
    //         }
    //         // else{
    //         //     showPeople(bodyPart)
    //         //     // запустить функцию нарисовать висилицу
    //         //     console.log(`Нет быквы ${keyDown}`)
    //         //     bodyPart++
    //         // }
    //         // return (keyDown)
    //     })
    // })
}

function showChar(i){
    let char = document.querySelector(`.sharNumber${i}`)
    char.classList.add('key-word_visible')
}
let bodyPart = 0;
function showPeople(i){
    let char = document.querySelector(`.body-part-${i}`)
    char.classList.add('viselitsa__people_active')
    bodyPart ++;
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
    let letterWord = rarbitBukvi(word)
    // document.querySelector('.word').textContent=word;

    letterWord.forEach(function(item,i) {
        let keyboard = document.querySelector('.word');
        keyboard.append(newWord(item,i));
    })


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

// Создать слово
function newWord(keyNumber,i){
    let div = document.createElement('div');
    div.classList.add('key-block');
    let span = document.createElement('span');
    span.classList.add('key-word', `sharNumber${i}`)
    div.append(span)
    span.textContent=keyNumber;
    return div
}


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





