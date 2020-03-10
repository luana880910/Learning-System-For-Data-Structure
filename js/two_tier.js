var sc = 0, x1;
var rec = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var pn = 0, cans = 0, cans2 = 0, wrongStr = "";
var close = ['s1', 's2', 's3', 's4', 'c1'];
function report() {
    window.document.getElementById('score').innerHTML = sc ;
}

function check() { //1st-tier
    if (cans == 0) {
        alert("請選擇選項");
    } else {
        showsecond();
        var lock = 'item' + cans;
        document.getElementById(lock).style.color = "red";
        for (var w = 0; w <= 4; w++)
            document.getElementById(close[w]).disabled = true;
        shprob_2();
    }
}

function check2() { //2nd-tier
    //showsecond();
    if (cans2 == 0) {
        alert("請選擇選項");
    } else {
        var msg = "", x1;
        if (firstAns[pn] == cans && secondAns[pn] == cans2) {
            msg = "correct";
            rec[pn] = 1;
            sc += 10;
        }
        else {
            msg = "Incorrect";
            if (firstAns[pn] != cans) {
                wrongStr += "<br>題目:<br>" + twotierQ[pn * 21] + " <br>答案:<br>" + twotierQ[pn * 21 + firstAns[pn]];
            } else {
                wrongStr += "<br>題目:<br>" + twotierQ[pn * 21 + cans] + "的原因 <br>答案:<br>" + twotierQ[pn * 21 + cans * 4 + secondAns[pn]];
            }
        }
        pn++;

        showsecond();
        for (var w = 0; w <= 4; w++)
            document.getElementById(close[w]).disabled = false;

        shprob();
        document.getElementById('show1').innerHTML = msg;
        report();
        document.getElementById("s1").checked = false;
        document.getElementById("s2").checked = false;
        document.getElementById("s3").checked = false;
        document.getElementById("s4").checked = false;
        document.getElementById("t1").checked = false;
        document.getElementById("t2").checked = false;
        document.getElementById("t3").checked = false;
        document.getElementById("t4").checked = false;
        cans = 0; cans2 = 0;
        if (pn == 10) {
            document.getElementById('voc').innerHTML = "測驗結束";
            document.getElementById('item1').innerHTML = "測驗結束";
            document.getElementById('item2').innerHTML = "測驗結束";
            document.getElementById('item3').innerHTML = "測驗結束";
            document.getElementById('item4').innerHTML = "測驗結束";
            window.isStop = true;
            document.getElementById("c1").disabled = true;
            localStorage.setItem("two_tierWrongStr", wrongStr);
            localStorage.setItem("two_tierSc", sc);
        }
    }
}

function showsecond() {//show or hide
    var x = document.getElementById("secondquest");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

window.addEventListener("beforeunload", function (e) {
    if (!window.isStop) {
        (e || window.event).returnValue = ""; // Gecko + IE
        return ""; // Gecko + Webkit, Safari, Chrome etc.
    }

    return undefined;
});
function shprob() {
    if (pn < 10) {
        document.getElementById('voc').innerHTML = twotierQ[pn * 21 + 0];
        document.getElementById('item1').innerHTML = twotierQ[pn * 21 + 1];
        document.getElementById('item2').innerHTML = twotierQ[pn * 21 + 2];
        document.getElementById('item3').innerHTML = twotierQ[pn * 21 + 3];
        document.getElementById('item4').innerHTML = twotierQ[pn * 21 + 4];
        document.getElementById('item1').style.color = "black";
        document.getElementById('item2').style.color = "black";
        document.getElementById('item3').style.color = "black";
        document.getElementById('item4').style.color = "black";
    }
}//shprob()

function shprob_2() {
    if (pn < 10) { //cans
        document.getElementById('secq').innerHTML = twotierQ[pn * 21 + cans] + "的原因";
        document.getElementById('sitem1').innerHTML = twotierQ[pn * 21 + cans * 4 + 1];//cans==1, pn*20+cans*4+1 
        document.getElementById('sitem2').innerHTML = twotierQ[pn * 21 + cans * 4 + 2];
        document.getElementById('sitem3').innerHTML = twotierQ[pn * 21 + cans * 4 + 3];
        document.getElementById('sitem4').innerHTML = twotierQ[pn * 21 + cans * 4 + 4];

        document.getElementById('sitem1').style.color = "black";
        document.getElementById('sitem2').style.color = "black";
        document.getElementById('sitem3').style.color = "black";
        document.getElementById('sitem4').style.color = "black";
    }
}//shprob_2()
