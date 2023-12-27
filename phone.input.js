//Функция создающая этот инпут
const phone_input = (div_class, callback) => { //Можно закинуть div className к которому применится этот элемент,
    // так же сюда можно закинуть callback для получения значения
    var input_containter = document.createElement('div') //Создание контейнера для инпута
    var text_placeholder = document.createElement('div') // создание плейсхолдера для того чтобы положить его поверх инпута (т.к. placheolder input'а исчезает при вводе)
    var input = document.createElement('input'); // Создание инпута
    var formattedNumber = ''

    //Добавление в контейнер input и placheolder
    input_containter.appendChild(input)
    input_containter.appendChild(text_placeholder)

    // Формат того как всё должно выглядеть (без '+7 (' Т.К. на скринах оно уже bold))
    const placeholder = '    ___) ___-__-__'

    //Стили контейнера
    input_containter.style.position = 'relative'
    input_containter.style.width = 'auto'
    input_containter.style.height = '40px'



    //Стили placheolder
    text_placeholder.style.position = 'relative'
    text_placeholder.style.width = '100%'
    text_placeholder.style.bottom = '75%'
    text_placeholder.style.textAlign = 'left'
    text_placeholder.style.paddingLeft = '2%'
    text_placeholder.style.pointerEvents = 'none'
    text_placeholder.style.color = 'gray'
    text_placeholder.innerText = placeholder
    text_placeholder.style.fontSize = '1rem'
    text_placeholder.style.fontWeight = 'normal'
    text_placeholder.style.whiteSpace = 'pre'
    text_placeholder.style.fontFamily = 'Courier, monospace'


    //Установка стилей и значений атрибутов тегов html для input
    input.style.border = '2px solid black' // Установка border
    input.style.height = '100%'
    input.style.width = '100%'
    input.style.paddingLeft = '2%'
    input.style.paddingTop = '2%'
    input.style.paddingBottom = '2%'
    input.style.fontSize = '1rem'
    input.style.fontWeight = 'bold'
    input.value = '+7 ('
    input.style.fontFamily = 'Courier, monospace'


    input.addEventListener('input', ((event) => { 
        var phoneNumber = event.target.value.replace(/\D/g, ''); // Оставляем только цифры

        // Применяем формат +7 (XXX) XXX-XX-XX
        formattedNumber = '+7 (' + phoneNumber.substring(1, 4);
    
        if (phoneNumber.length > 4) {
            formattedNumber += ') ' + phoneNumber.substring(4, 7);
        }
        if (phoneNumber.length > 7) {
            formattedNumber += '-' + phoneNumber.substring(7, 9);
        }
        if (phoneNumber.length > 9) {
            formattedNumber += '-' + phoneNumber.substring(9, 11);
        }
        var spaces = ' '.repeat(formattedNumber.length)

        text_placeholder.innerText = spaces + placeholder.substring(formattedNumber.length, placeholder.length)
        console.log(text_placeholder.innerText.length)

        phoneNumber =  phoneNumber.substring(0, 11)
        
        // Устанавливаем отформатированный номер обратно в поле ввода
        input.value = formattedNumber;
    }))



    var append_target = document.querySelector(`.${div_class}`); //Куда будет вставляться компонент
    append_target.appendChild(input_containter); //Монтирование компонента

    if(callback !== null) { //Если есть функция callback, то она вызывается с аргументом formattedNumber
        callback(phoneNumber)
    }
}


phone_input('test', null) //монтирую в div с class test. Не передаю callback т.к. для демонстрации не нужен
