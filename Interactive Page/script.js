const mainCycle = document.getElementById("main-cycle");
const messages = ["Tech", "Gadgets", "Gear"];
const total = document.getElementById("total");
var subTotal = 0;
var inc = 1;
var t = -0.025;
var x = 0;
var color = 255;
var items = [];
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
// adding different prices to the total.
function addToChart(num, item) {
    if (items.length < 13) {
        var list = document.getElementById("items-purchased");
        list.innerHTML = '';
        items.push(item);
        for (let i = 0; i < items.length; i++) {
            var p = document.createElement("p");
            p.innerHTML = items[i];
            list.appendChild(p);
        }
        var b = document.createElement('button');
        b.innerHTML = "Click to Check Out";
        list.appendChild(b);
        b.onclick = () => {
            list.innerHTML = 'Thanks for checking out';
            items = [];
            subTotal = 0;
        }
        subTotal += roundHundreth(num);
        subTotal = roundHundreth(subTotal);
        if (subTotal.toString()[subTotal.toString().length - 2] == ".") {
            total.innerHTML = "$" + subTotal.toString() + "0";
        } else {
            total.innerHTML = "$" + subTotal.toString();
        }
    }
}
// rounds the number to the nearest hundreth to stop repeating decimels.
function roundHundreth(num) {
    var answer = "";
    var completeAnswer = [];
    var str = num.toString();
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ".") {
            if (str[i + 2] == null) {
                answer = str[i + 1] + "0";
            } else {
                answer = str[i + 1] + str[i + 2];
            }
            for (let j = 0; j < str.length; j++) {
                if (str[j] == ".") {
                    break;
                } else {
                    completeAnswer.push(str[j])
                }
            }
            completeAnswer = completeAnswer.join("");
            return Number(completeAnswer + "." + answer);
        }
    }
}
