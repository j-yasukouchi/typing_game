'use strict';

{
    const word = 'apple';
    let loc = 0;
    let score = 0;
    let miss = 0;

    const target = document.getElementById('target');
    const scoreLabel = document.getElementById('score');
    const missLabel = document.getElementById('miss');

    target.textContent = word;

    function updateTarget() {
        let placeholder = '';
        for (let i = 0; i < loc; i++) {
            placeholder += '_';
        }
        target.textContent = placeholder + word.substring(loc);
    }

    window.addEventListener('keydown', (e) => {
        console.log(e.key);
        if (e.key === word[loc]) {
            console.log('score');
            loc++;
            updateTarget();
            score++;
            scoreLabel.textContent = score;
        } else {
            console.log('miss');
            miss++;
            missLabel.textContent = miss;
        }
    });
}
