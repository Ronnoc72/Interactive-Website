const mainCycle = document.getElementById("main-cycle");
const messages = ["Tech", "Gadgets", "Gear"];
const total = document.getElementById("total");
var subTotal = 0;
var inc = 1;
var t = -0.025;
var x = 0;
var color = 255;
// controls the main banner title changing.
setInterval(function () {
    inc += t;
    mainCycle.innerHTML = messages[x];
    mainCycle.style.color = `rgba(${color}, ${color}, ${color}, ${inc})`;
    if (inc <= 0) {
        t = 0.025;
        x += 1;
        if (x > messages.length - 1) {
            x = 0;
        }
    } else if (inc >= 1) {
        t = -0.025;
    }
}, 30);
// adding different prices to the total
function addToChart(num) {
    subTotal += Math.round(num);
    subTotal += roundHundreth(num);
    total.innerHTML = subTotal.toString();
}

function roundHundreth(num) {
    var str = num.toString();
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "." && i + 2 < str.length) {
            var answer = str[i + 1] + str[i + 2]
            return Number(answer);
        }
    }
}
