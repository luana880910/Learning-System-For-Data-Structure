var second = 0;
var stayTime, beforeTime;
function timeCount() {
    beforeTime = localStorage.getItem("stayTime");
    stayTime = setInterval(function () {
        second++;
        localStorage.setItem("stayTime", beforeTime + "@學習系統-動態評量 停留時間：" + second + "\n");
    }, 1000);
}
var sc = pn = cnt = 0, str = "", wrongStr = "";
var rec = [0, 0, 0];

window.addEventListener("beforeunload", function (e) {
    if (!window.isStop) {
        (e || window.event).returnValue = ""; // Gecko + IE
        return ""; // Gecko + Webkit, Safari, Chrome etc.
    }

    return undefined;
});

function shprob() {
    if (pn < bank.length) {
        document.getElementById('prob').innerHTML = bank[pn];
    }
}//shprob()

function check() {
    str = document.getElementById('s1').value;
    if (str == select[pn]) {
        drawCircle();
        rec[pn]++;
        sc = sc + 10 - 2.5 * cnt;
        cnt = 0;
        pn++;
        shprob();
    }
    else {
        drawCross();
        if (cnt <= 3) {
            document.getElementById('prompt').innerHTML = prompt[pn * 4 + cnt];
            cnt++;
        }
        else {
            wrongStr += "<br>題目:<br>" + bank[pn] + " <br>答案:<br>" + select[pn];
            pn++;
            shprob();
            cnt = 0;
            window.document.getElementById('prompt').innerHTML = "---第一次作答錯誤後才有提示---";
        }
        if (pn >= bank.length) {
            document.getElementById('prob').innerHTML = "測驗結束";
            document.getElementById('s1').disabled = true;
            document.getElementById('prompt').innerHTML = "請進入學習診斷，看自己的錯誤~";
            document.getElementById('c1').disabled = true;
            localStorage.setItem("test2WrongStr", wrongStr);
            localStorage.setItem("test2Sc", sc);
            window.isStop = true;
        }
    }
    window.document.getElementById('score').innerHTML = sc;
    if (pn < bank.length) {
        s1.value = "";
    } else {
        s1.value = "測驗結束";
    }
}