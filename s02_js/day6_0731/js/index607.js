

function lottoN() {
    document.getElementById('result').innerHTML = "";
    let lotto = [];
    while (lotto.length < 6) {
        
        let number = Math.floor(Math.random() * 45 + 1);
        if (!lotto.includes(number)) {
            lotto.push(number);
        }
    }
    
    lotto.sort((a,b) => a-b);

    for (let i = 0; i < lotto.length; i++) {
        document.getElementById('result').innerHTML
            += `<div class ="number">${lotto[i]}</div>`;
    }
    
}