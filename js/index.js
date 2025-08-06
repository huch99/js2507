let myData = [
    {link: "./s02_js/day1_0724/index0724.html", day: "1", date: "0724"},
    {link: "./s02_js/day2_0725/index0725.html", day: "2", date: "0725"},
    {link: "./s02_js/day3_0728/index0728.html", day: "3", date: "0728"},
    {link: "./s02_js/day4_0729/index0729.html", day: "4", date: "0729"},
    {link: "./s02_js/day5_0730/index0730.html", day: "5", date: "0730"},
    {link: "./s02_js/day6_0731/index0731.html", day: "6", date: "0731"},
    {link: "./s02_js/day7_0801/index0801.html", day: "7", date: "0801"},
     {link: "./s02_js/day8_0804/index0804.html", day: "8", date: "0804"},
     {link: "./s02_js/day10_0806/index0806.html", day: "10", date: "0806"}
];

for (let i=0; i < myData.length; i++) {
    document.querySelector('#myData').innerHTML
    += `<li><a href=${myData[i].link} target='_blank'>${myData[i].day}일차 js_${myData[i].date}</a></li>`;
}