'use strict';

{
    const word = 'apple';
    let loc = 0;

    const target = document.getElementById('target');
    target.textContent = word;

    window.addEventListener('keydown', (e) => {
        console.log(e.key);
        if (e.key === word[loc]) {
            console.log('score');
            loc++;
        } else {
            console.log('miss');
        }
    });
}
