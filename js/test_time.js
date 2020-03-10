var second = 0;
var stayTime, beforeTime;
function timeCount() {
    beforeTime = localStorage.getItem("stayTime");
    stayTime = setInterval(function () {
        second++;
        localStorage.setItem("stayTime", beforeTime + "@學習系統-遞迴限時測驗 停留時間：" + second + "\n");
    }, 1000);
}

var a = 4;

var question = [];
question[0] = "Public static void demoA(int n)<br>&emsp;"
    + "{ System.out.print(n);<br>&emsp;&emsp;"
    + "if (n&gt;1) <br>&emsp;&emsp;"
    + "demoA(n-1);<br>&emsp;"
    + "}";
question[1] = "void demoB(int n){<br>&emsp;"
    + "if (n >1)<br>&emsp;&emsp;"
    + "demoB(n-2);<br>&emsp;"
    + "System. out. print (n*n+” ”);<br>&emsp;"
    + "}";
question[2] = "void demoC (int n){<br>&emsp;"
    + "if (n>0){<br>&emsp;&emsp;"
    + "demoC(n/2);<br>&emsp;&emsp;"
    + "System.out.print(n%2);<br>&emsp;&emsp;"
    + "}<br>"
    + "}";
question[3] = "int demoJ(int n){<br>&emsp;"
    + " if(n==0){<br>&emsp;&emsp;"
    + "return 0;<br>&emsp;"
    + "}<br>&emsp;"
    + "return n+sum(n-1);<br>}";
question[4] = "int demoK(int n){<br>&emsp;"
    + "if (n != 0)<br>&emsp;&emsp;"
    + "return n * demoK(n-1);<br>&emsp;"
    + "else<br>&emsp;&emsp;"
    + "return 1;<br>}";
question[5] = "何謂FILO?";
question[6] = "遞迴是使用何種stack讀取?";
question[7] = "何謂Overriding";
question[8] = "何謂Overloading";
question[9] = "下列何種modifier會使得method僅能在同一個class執行";
question[10] = "測驗結束";
var title = [];
title[0] = "demoA(";
title[1] = "demoB(";
title[2] = "demoC(";
title[3] = "demoJ(";
title[4] = "demoK(";

var csel = "", items, temp, wrongStr = "";
var cans = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
var temp2 = [];
var temp3 = 0;
var n = 0, reply = -1, score = 0, time = 60, id;
function timer() {
    time--;
    if (time < 0) {
        check();
    }
    else {
        document.getElementById('ti').innerHTML = "" + time;
    }
}

function start() {
    a = Math.floor((Math.random() * 8) + 2);
    title[0] = "demoA(" + a + ")";
    id = setInterval(timer, 1000);
}
function randomeAnswer() {//將選項打亂
    for (j = 0; j < 4; j++) {
        a = Math.floor((Math.random() * 4));
        temp = items[a];
        items[a] = items[j];
        items[j] = temp;
        if (a == cans[n]) {
            cans[n] = j;
        } else {
            if (j == cans[n]) {
                cans[n] = a;
            }
        }
    }
}

function demoA() {
    for (j = 0; j < a; j++) {
        csel += j;
    }
    csel += ",";

    for (j = 1; j <= a; j++) {
        csel += j;
    }
    csel += ",";

    for (j = a - 1; j >= 0; j--) {
        csel += j;
    }
    csel += ",";

    for (j = a; j > 0; j--) {
        csel += j;
    }
    csel += ",";

    items = csel.split(",");//array
    randomeAnswer();
}

function demoB() {
    for (j = a; j > 0; j -= 2) {
        csel += j * j + " ";
    }
    csel += ",";

    for (j = a % 2; j <= a; j += 2) {
        csel += (j - 1) * (j - 1) + " ";
    }
    csel += ",";

    for (j = a - 1; j >= 0; j -= 2) {
        csel += j * j + " ";
    }
    csel += ",";

    for (j = a % 2; j <= a; j += 2) {
        csel += j * j + " ";
    }
    csel += ",";
    items = csel.split(",");//array
    randomeAnswer();
}

function demoC() {
    for (j = 1; j < a; j *= 2) {
        csel += "0";
    }
    csel += ",";

    for (j = 1; j < a; j++) {
        csel += "0";
    }
    csel += ",";
    csel += "0";
    csel += ",";

    for (j = a; j >= 1; parseInt(j /= 2)) {
        temp2[temp3] = parseInt(j % 2);
        temp3++;
    }

    for (j = temp2.length - 1; j >= 0; j--) {
        csel += temp2[j];
        temp2[j] = "";
        temp3--;
    }
    csel += ",";
    items = csel.split(",");//array
    randomeAnswer();
}

function demoJ() {
    for (j = 1; j <= a; j++) {
        temp3 += j;
    }
    csel += "沒有輸出";
    csel += ",";
    csel += temp3 - (a - 1);
    csel += ",";
    csel += temp3 + (a + 1);
    csel += ",";
    csel += temp3;
    csel += ",";
    items = csel.split(",");//array
    randomeAnswer();
}

function demoK() {
    temp3 = 1;
    for (j = 1; j <= a; j++) {
        temp3 *= j;
    }
    csel += "沒有輸出";
    csel += ",";
    csel += temp3 * (a + 1);
    csel += ",";
    csel += temp3 / (a - 1);
    csel += ",";
    csel += temp3;
    csel += ",";
    items = csel.split(",");//array
    randomeAnswer();
}
function normalQuestion1() {
    csel += "Free In Liner Out";
    csel += ",";
    csel += "Fast In Low Out";
    csel += ",";
    csel += "Fill In Look Out";
    csel += ",";
    csel += "First In Last Out";
    csel += ",";
    items = csel.split(",");//array
    randomeAnswer();
}

function normalQuestion2() {
    csel += "RIRO";
    csel += ",";
    csel += "LILO";
    csel += ",";
    csel += "FIFO";
    csel += ",";
    csel += "FILO";
    csel += ",";
    items = csel.split(",");//array
    randomeAnswer();
}

function normalQuestion3() {
    csel += "僅宣告方法名稱而不實作當中的邏輯，這樣的行為稱為覆寫(Overriding)";
    csel += ",";
    csel += "使用相對應的數量及相同資料型態之引數，藉此執行不同功能，此行為稱為覆寫(Overriding)";
    csel += ",";
    csel += "實現抽象類別的方法稱為覆寫(Overriding)";
    csel += ",";
    csel += "在子類別中修改從父類別繼承的相同函數名稱之函數，此行為稱為覆寫(Overriding)";
    csel += ",";
    items = csel.split(",");//array
    randomeAnswer();
}

function normalQuestion4() {
    csel += "僅宣告方法名稱而不實作當中的邏輯，這樣的行為稱為多載(Overloading)";
    csel += ",";
    csel += "在子類別中修改從父類別繼承的相同函數名稱之函數，此行為稱為多載(Overloading)";
    csel += ",";
    csel += "實現抽象類別的方法稱為多載(Overloading)";
    csel += ",";
    csel += "使用相對應的數量及相同資料型態之引數，藉此執行不同功能，此行為稱為多載(Overloading)";
    csel += ",";
    items = csel.split(",");//array
    randomeAnswer();
}

function normalQuestion5() {
    csel += "Public";
    csel += ",";
    csel += "protected";
    csel += ",";
    csel += "無修飾詞";
    csel += ",";
    csel += "private";
    csel += ",";
    items = csel.split(",");//array
    randomeAnswer();
}

function end() {
    csel += "測驗結束";
    csel += ",";
    csel += "測驗結束";
    csel += ",";
    csel += "測驗結束";
    csel += ",";
    csel += "測驗結束";
    csel += ",";
    items = csel.split(",");//array
    window.isStop = true;
    localStorage.setItem("test_timeWrongStr", wrongStr);
    localStorage.setItem("test_timeSc", score);
}

function genQ() {
    document.getElementById('prob1').innerHTML = question[n];
    document.getElementById('prob2').innerHTML = title[n];
    document.getElementById('s0').innerHTML = items[0];
    document.getElementById('s1').innerHTML = items[1];
    document.getElementById('s2').innerHTML = items[2];
    document.getElementById('s3').innerHTML = items[3];
}

function check() {
    if (reply == cans[n]) {
        score += 10;
        drawCircle();
    }
    else {
        wrongStr += "<br>題目:<br>" + question[n] + " <br>答案:<br>" + items[cans[n]];
        drawCross();
    }
    document.getElementById('sc').innerHTML = score;
    n++;

    clearInterval(id);
    time = 60;
    csel = "";
    temp2 = [];
    temp3 = 0;
    a = Math.floor((Math.random() * 8) + 2);
    if (n < 5) {
        title[n] += a + ")";
    } else {
        title[n] = "";
    }
    id = setInterval(timer, 1000);
    if (n == 1) {
        demoB();
    }
    else if (n == 2) {
        demoC();
    }
    else if (n == 3) {
        demoJ();
    } else if (n == 4) {
        demoK();
    } else if (n == 5) {
        normalQuestion1();
    } else if (n == 6) {
        normalQuestion2();
    } else if (n == 7) {
        normalQuestion3();
    } else if (n == 8) {
        normalQuestion4();
    } else if (n == 9) {
        normalQuestion5();
    } else {
        end();
        clearInterval(id);
        document.getElementById("bu").disabled = "true";
        document.getElementById('cbox0').disabled = true;
        document.getElementById('cbox1').disabled = true;
        document.getElementById('cbox2').disabled = true;
        document.getElementById('cbox3').disabled = true;
        time = 0;
        document.getElementById('ti').innerHTML = "" + time;
    }
    reply = -1;
    genQ();
    for (var i = 0; i < 4; i++) {
        document.getElementById('cbox' + i).checked = false;
    }
}

window.addEventListener("beforeunload", function (e) {
    if (!window.isStop) {
        (e || window.event).returnValue = ""; // Gecko + IE
        return ""; // Gecko + Webkit, Safari, Chrome etc.
    }

    return undefined;
});

