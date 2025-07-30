let myData = [
    {link: "./s02_js/day1_0724/index0724.html", day: "1"},
    {link: "./s02_js/day2_0725/index0725.html", day: "2"},
    {link: "./s02_js/day3_0728/index0728.html", day: "3"},
    {link: "./s02_js/day4_0729/index0729.html", day: "4"},
    {link: "./s02_js/day5_0730/index0730.html", day: "5"}
];

for (let i=0; i < myData.length; i++) {
    document.querySelector('#myData').innerHTML
    += `<li><a href=${myData[i].link} target='_blank'>${myData[i].day}일차 js</a></li>`;
}