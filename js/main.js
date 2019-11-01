'use strict';

{
    const words = [
        'yasukouchi',
        'maki',
        'makoto',
        'junji',
        'maho',
    ];

    let word;
    let loc;
    let score;
    let miss;
    let startTime;
    let isPlaying = false;

    const target = document.getElementById('target');
    const scoreLabel = document.getElementById('score');
    const missLabel = document.getElementById('miss');
    const timerLabel = document.getElementById('timer');
    const timeLimit = 3 * 1000;

    function updateTarget() {
        let placeholder = '';
        for (let i = 0; i < loc; i++) {
            placeholder += '_';
        }
        target.textContent = placeholder + word.substring(loc);
    }

    function updateTimer() {
        const timeLeft = startTime + timeLimit - Date.now();
        timerLabel.textContent = (timeLeft / 1000).toFixed(2);

        const timeoutId = setTimeout(() => {
            updateTimer();
        }, 10);

        if (timeLeft < 0) {
            isPlaying = false;
            clearTimeout(timeoutId);
            timerLabel.textContent = '0.00';
            setTimeout(() => {
                showResult();
            }, 100);

            target.textContent = 'click to replay';
        }
    }

    function showResult() {
        const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
        alert(`${score} letters, ${miss} misses, ${accuracy.toFixed(2)}% accuracy!`);
    }

    window.addEventListener('click', () => {
        if (isPlaying === true) {
            return;
        }
        isPlaying = true;

        word = words[Math.floor(Math.random() * words.length)];
        loc = 0;
        score = 0;
        miss = 0;
        scoreLabel.textContent = score;
        missLabel.textContent = miss;

        target.textContent = word;
        startTime = Date.now();
        updateTimer();
    });

    window.addEventListener('keydown', (e) => {
        if (isPlaying !== true) {
            return;
        }
        if (e.key === word[loc]) {
            loc++;
            if (loc === word.length) {
                word = words[Math.floor(Math.random() * words.length)];
                loc = 0;
            }
            updateTarget();
            score++;
            scoreLabel.textContent = score;
        } else if (e.key === 'Enter') {
            target.textContent = word;
            loc = 0;
        } else {
            miss++;
            missLabel.textContent = miss;
        }
    });
}
