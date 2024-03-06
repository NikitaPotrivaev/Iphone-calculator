let a = ''
let b = ''
let sign = ''
let finish = false

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['−', '+', '×', '÷', '%', '+/-'];

const out = document.querySelector('.calc__screen p')

function clearAll() {
    a = ''
    b = ''
    sign = ''
    finish = false
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll

document.querySelector('.buttons').onclick = (e) => {
    if (!e.target.classList.contains('button')) return;
    if (e.target.classList.contains('ac')) return;

    out.textContent = ''

    const key = e.target.textContent

    if (digits.includes(key)) {
        if (b === '' && sign === '') {
            a += key
            out.textContent = a
        } else if (a !== '' && b !== '' && finish) {
            b = key
            finish = false
            out.textContent = b
        } else {
            b += key
            out.textContent = b
        }
        return
    }

    if (action.includes(key)) {
        if (a === '') {
            sign = key
            out.textContent = '0'
        } else {
            sign = key;
            out.textContent = a;
            return;
        }
    }

    if (key === '=') {
        if (b === '') b = a;
        switch(sign) {
            case '+': a = (+a) + (+b);
                break;
            case '−': a = a - b;
                break;
            case '×': a = a * b;
                break;
            case '÷':
            if(b === '0') {
                    out.textContent = 'Ошибка'; 
                    a = ''; 
                    b = ''; 
                    sign = ''; 
                    return;
                } 
                a = a / b;
                break;
            case '%': a = a * b / 100
                break;
            case '+/-': a = a * (-1)
                break
        }
        finish = true;
        out.textContent = a;
    }
}