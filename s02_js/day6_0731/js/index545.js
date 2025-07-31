for (let i = 1; i < 10; i++) {
    document.writeln('<div class = "box">');
    document.writeln(`<h3>${i}단</h3>`);
    for (let j = 1; j < 10; j++) {
        document.writeln(`${i} X ${j} = ${i*j}<br>`);
    }
    document.writeln('</div>');

    if (i === 4) {
        break;
    }
}