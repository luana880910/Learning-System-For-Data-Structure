var second = 0;
var stayTime, beforeTime;
function timeCount1() {
    beforeTime = localStorage.getItem("stayTime");
    stayTime = setInterval(function () {
        second++;
        localStorage.setItem("stayTime", beforeTime + "@學習系統-迴圈與陣列限時測驗 停留時間：" + second + "\n");
    }, 1000);
}


//var cAns2 = [0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1];
var Bcheck = 0;
//var cAns2=[0,3,3,3,2,2,1,1,0,3];
var t = [0, 1, 2, 3];
//var prob2 = pstring.split("#");//array
//var option2 = csel.split("?");//array
var n = 0, reply = 0;
var timer, id;
var sc = 0;
var wrongStr = "";
var judge = 1;
window.addEventListener("beforeunload", function (e) {
    if (!window.isStop) {
        (e || window.event).returnValue = ""; // Gecko + IE
        return ""; // Gecko + Webkit, Safari, Chrome etc.
    }

    return undefined;
});
function genQ() {
    ranNum();
    clearTime();
    document.getElementById('prob1').innerHTML = prob2[n];
    for (var i = 0; i < 4; i++) {
        document.getElementById('s' + t[i]).innerHTML = option2[4 * n + i];
    }
    timeCount();
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
        var temp = prob2[i];
        prob2[i] = prob2[rn];
        prob2[rn] = temp;
        for (let index = 0; index < 4; index++) {

            temp = cAns2[4 * i + index];
            cAns2[4 * i + index] = cAns2[4 * rn + index];
            cAns2[4 * rn + index] = temp;

            temp = option2[4 * i + index];
            option2[4 * i + index] = option2[4 * rn + index];
            option2[4 * rn + index] = temp;
        }
    }
    genQ();
}
function check() {
    var scw = 0;
    for (var i = 0; i < 4; i++) {
        var BOX = document.getElementById('cbox' + t[i]);
        if (BOX.checked != cAns2[4 * n + i]) {
            scw++;
            judge = 0;
        }
    }
    var bxc = 0;
    for (var i = 0; i < 4; i++) {
        var BOX = document.getElementById('cbox' + t[i]);
        if (BOX.checked) {
            bxc = 1;
        }
    }
    if (bxc == 0) {
        scw = 4;
    }
    if (scw == 0) {
        sc += 10;
    }
    else if (scw == 1) {
        sc += 5;
    }
    if (judge == 0) {
        wrongStr += "<br>題目:<br>" + prob2[n] + " <br>答案:<br>";
        for (let i = 0; i < 4; i++) {
            if (cAns2[4 * n + i] == 1) {
                wrongStr += option2[4 * n + i] + "<br>";
            }
        }

    }
    document.getElementById('sc').innerHTML = sc;
    drawChart();
    judge = 1;
    if (n + 1 < prob2.length) {
        n++;
        genQ();
        for (var i = 0; i < 4; i++) {
            document.getElementById('cbox' + i).checked = false;
        }
    }
    else {
        stop();
    }
}
function freply(x) {
    reply = option2[4 * n + t[x]];
}
function stop() {
    clearTime();
    document.getElementById('button1').disabled = true;
    document.getElementById('prob1').innerHTML = "測驗結束";
    document.getElementById('s0').innerHTML = "測驗結束";
    document.getElementById('s1').innerHTML = "測驗結束";
    document.getElementById('s2').innerHTML = "測驗結束";
    document.getElementById('s3').innerHTML = "測驗結束";
    document.getElementById('time').innerHTML = "0";
    document.getElementById('cbox0').disabled = true;
    document.getElementById('cbox1').disabled = true;
    document.getElementById('cbox2').disabled = true;
    document.getElementById('cbox3').disabled = true;
    localStorage.setItem("test1girlWrongStr", wrongStr);
    localStorage.setItem("test1girlSc", sc);
    window.isStop = true;
}
function timeCount() {
    timer = 59;
    id = setInterval("setTime()", 1000);
}
function clearTime() {
    clearInterval(id);
}
function setTime() {
    if (timer > 0) {
        document.getElementById('time').innerHTML = timer;
        timer--;
    }
    else {
        check();
    }
}

