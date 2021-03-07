// 1. Имеем массив слов
// 2. Любое слово из массива вставляем в игру
// 3. Разбиваем слово на буквы
// 4. Если буква есть, открываем её,
// 5. Если нет рисуем висилицу (картинки по порядку)
// 6. Если слово угадано - делаем.. (пишем текст "Поздравляю") и кнопка "Заново"
// 7. Если висилица нарисована до конца - делаем ... (пишем текст "Ты проиграл") и кнопка "Заново"
let bodyPart = 0;


let body =document.querySelector('.body')
let keyboard = document.querySelector('.keyboard');
let buttonNewWord = document.querySelector('.button-new-word');
let wordString = document.querySelector('.word')


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


// Поверяем все ли буквы открты
// Если у каждый буквы есть класс, то выиграл
function vinner(arr) {
    console.log(arr)
    // return arr.every(function() {
    //     return arr.classList.contains('key-word_visible')
    // });
}


function buttonOff (keypress){
    keypress.setAttribute('disabled')
}


// 4,5. Если буква есть, открываем её Если нет рисуем висилицу
function listenerr (keyDown, massivBukvi) {
    console.log(massivBukvi);
    console.log(keyDown);

    if (bodyPart === 6){
        console.log("Ты проиграл!")
        document.querySelector('.gameover-add').classList.add('visibility-visible')
    }


    if(checkAvailability(massivBukvi, keyDown)) {
        console.log(`Есть буквdddа ${keyDown}`)
        massivBukvi.forEach(function(item, i ){
            if (item === keyDown){
                // запустить функцию открыть букву
                showChar(i)
                console.log(`есть буква ${keyDown}`)

                console.log(vinner(massivBukvi))
            }
        })
    }else {
        console.log(`нет букdddвы ${keyDown}`)
        // if(bodyPart = 7){
        //     console.log('Ты проиграл!!!')
        // }
        showPeople(bodyPart)
    }
}

// Ищем кнопку чтобы её заблокировать
function disabledKeyboard(key){
    let allKeyKeyboard = keyboard.querySelectorAll('.key');
    allKeyKeyboard.forEach(function (item){
        // console.log(item.textContent)
        if (item.textContent === key){
            item.setAttribute('disabled','disabled');
            console.log(item)
        }
        })
}


function listenrKey(slovo){
    let slovoMassiv = rarbitBukvi(slovo)
    body.addEventListener('keydown', function (evt){
        key = evt.key;
        disabledKeyboard(key)
        listenerr(key, slovoMassiv)
    })
    let keyboard = document.querySelector('.keyboard')
    keyboard.addEventListener('click', function (evt){
            evt.target.disabled=true
            key = evt.target.innerText;
            listenerr(key, slovoMassiv)
        }
    )
}

function showChar(i){
    let char = document.querySelector(`.sharNumber${i}`)
    char.classList.add('key-word_visible')
}

function showPeople(i){
    let char = document.querySelector(`.body-part-${i}`)
    char.classList.add('viselitsa__people_active')
    bodyPart ++;
}


function reset(){
    wordString.textContent = '';
    let people = document.querySelectorAll('.human-outline')
    people.forEach(function (item){
        item.classList.remove('viselitsa__people_active')
    })

    let key = document.querySelectorAll('.key')
    key.forEach(function (item){
        item.removeAttribute('disabled')
    })
    bodyPart = 0;

    document.querySelector('.gameover-add').classList.remove('visibility-visible')
    document.querySelector('.gameover-add').classList.add('visibility-hidden')
}

//Создаем "Новое слово"
function newWordGenerator(){
    reset()
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
}


buttonNewWord.addEventListener('click', newWordGenerator)


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
    keyboard.append(kewNew(item));
})



const newGame = document.querySelector('.button-new-game');
newGame.addEventListener('click', newWordGenerator)


newWordGenerator()