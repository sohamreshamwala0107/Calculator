const input = document.getElementById('input');
const buttons = document.querySelectorAll('.container div');

function handleInput(value) {
    if (value === 'AC') {
        input.value = '';
    } else if (value === '=') {
        try {
            input.value = eval(input.value);
        } catch (e) {
            input.value = 'Error';
        }
    } else if (value === '×') {
        input.value += '*';
    } else {
        input.value += value;
    }
}

// Click support
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.textContent.trim();
        if (btn.classList.contains('input')) return;
        handleInput(value);
    });
});

// Keyboard support
window.addEventListener('keydown', (e) => {
    let key = e.key;

    if (key === 'Enter') key = '=';
    if (key === 'Escape') key = 'AC';
    if (key === 'x' || key === 'X') key = '×';

    const validKeys = '0123456789+-*/.%=';

    if (key === 'AC') {
        handleInput('AC');
    } else if (validKeys.includes(key)) {
        if (key === '*') handleInput('×');
        else handleInput(key);
    }
});
