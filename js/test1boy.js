var second = 0;
var stayTime, beforeTime;
function timeCount() {
    beforeTime = localStorage.getItem("stayTime");
    stayTime = setInterval(function () {
        second++;
        localStorage.setItem("stayTime", beforeTime + "@學習系統-分支與巢狀限時測驗 停留時間：" + second + "\n");
    }, 1000);
}

window.addEventListener("beforeunload", function (e) {
    if (!window.isStop) {
        (e || window.event).returnValue = ""; // Gecko + IE
        return ""; // Gecko + Webkit, Safari, Chrome etc.
    }

    return undefined;
});
var pn = sc = 0;
var op = 4, msg;
var time = 60;
var id;

var t = [0, 1, 2, 3];
var judge = 1;
var wrongStr = "";

function genQ() {
    if (pn < prob1.length) {
        ranNum();
        document.getElementById('prob1').innerHTML = prob1[pn];
        for (var i = 0; i < 4; i++) {
            document.getElementById('item' + t[i]).innerHTML = option1[4 * pn + i];
        }
        id = setInterval(timer, 1000);
    }
    else {
        window.isStop = true;
        document.getElementById('prob1').innerHTML = "測驗結束";
        for (var i = 0; i < 4; i++)
            document.getElementById('item' + t[i]).innerHTML = "測驗結束";
        document.getElementById('check').disabled = true;
        document.getElementById('s0').disabled = true;
        document.getElementById('s1').disabled = true;
        document.getElementById('s2').disabled = true;
        document.getElementById('s3').disabled = true;
        clearInterval(id);
        document.getElementById('ti').innerHTML = "0";
        localStorage.setItem("test1boyWrongStr", wrongStr);
        localStorage.setItem("test1boySc", sc);
    }
}
function ranNum() {
    for (var i = 0; i < 4; i++) {
        var rn = Math.floor(Math.random() * 4);
        var temp = t[i];
        t[i] = t[rn];
        t[rn] = temp;
    }
}
function ranQ() {
    for (var i = 0; i < 15; i++) {
        var rn = Math.floor(Math.random() * 15);
        var temp = prob1[i];
        prob1[i] = prob1[rn];
        prob1[rn] = temp;

        temp = cAns1[i];
        cAns1[i] = cAns1[rn];
        cAns1[rn] = temp;
        for (let index = 0; index < 4; index++) {
            temp = option1[4 * i + index];
            option1[4 * i + index] = option1[4 * rn + index];
            option1[4 * rn + index] = temp;
        }
    }
    genQ();
}

function freply(x) {
    var c = 0;
    while (true) {
        if (t[c] == x) {
            op = c;
            break;
        }
        else if (c > 3) {
            op = 4;
            break;
        }
        else
            c++;
    }
}

function check() {
    freply(op);
    canvasChart.clearRect(0, 0, 50, 50);
    clearInterval(id);
    time = 60;
    if (cAns1[pn] == op) {
        sc += 10;
        pn++;
        genQ();
    }
    else {
        store();
        pn++;
        judge = 0;
        genQ();
    }
    drawChart();
    judge = 1;
    op = 4;
    document.getElementById('s0').checked = false;
    document.getElementById('s1').checked = false;
    document.getElementById('s2').checked = false;
    document.getElementById('s3').checked = false;
    window.document.getElementById('score').innerHTML =  sc ;
}

function store() {
    wrongStr += "題目:<br>" + prob1[pn] + " <br>答案:<br>";
    wrongStr += option1[4 * pn + cAns1[pn]] + "<br>";
}

function timer() {
    time--;
    if (time < 0) {
        check();
    }
    else
        document.getElementById('ti').innerHTML = "" + time;
}