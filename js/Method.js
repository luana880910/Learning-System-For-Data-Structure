var example = [],
    example2 = [],
    example3 = [],
    example4 = [],
    example5 = [];
var A = [];
var animeFlag = true,
    introductionFlag = true;

example[0] = "modifier";
example[1] = "return value type";
example[2] = "method Name";
example[3] = "formal parameter";
example[4] = "Public";
example[5] = "static";
example[6] = "int";
example[7] = "max";
example[8] = "(int num1, int num2){";
example[9] = "}";

example2[0] = "method";
example2[1] = "header";
example2[2] = "body";

example3[0] = "public class glob_local_var {";
example3[1] = "   static int x1=9,y1=8;";
example3[2] = "   public static void main(String[] args){";
example3[3] = "        int x1=10;";
example3[4] = '        System.out.println("inside main()");';
example3[5] = '        System.out.println("local variable x1="+x1);';
example3[6] = "        x1--;";
example3[7] = '        System.out.println("local variable x1="+x1);';
example3[8] = "        y1++;";
example3[9] = '        System.out.println("global variable y1="+y1);';
example3[10] = '        System.out.println("global variable x1="+glob_local_var.x1);';
example3[11] = "        glob_local_var.x1+=10;";
example3[12] = '        System.out.println("global variable x1="+glob_local_var.x1);';
example3[13] = "        pp1();";
example3[14] = "   }";
example3[15] = "   public static void pp1(){";
example3[16] = "      int y1=20;";
example3[17] = '      System.out.println("inside pp()");';
example3[18] = '      System.out.println("local variable y1="+y1);';
example3[19] = "      x1++;";
example3[20] = '      System.out.println("global variable x1="+x1);';
example3[21] = '      System.out.println("global variable x1="+glob_local_var.y1);';
example3[22] = "   }";
example3[23] = "}";

example4[0] = "結果";
example4[1] = "inside main()";
example4[2] = "local variable x1=10";
example4[3] = "local variable x1=9";
example4[4] = "global variable y1=9";
example4[5] = "global variable x1=9";
example4[6] = "global variable x1=19";
example4[7] = "inside pp()";
example4[8] = "local variable y1=20";
example4[9] = "global variable x1=20";
example4[10] = "global variable x1=9";

example5[0] = "public static void main(String[] args){";
example5[1] = "  ... ... ...";
example5[2] = "  recurse()";
example5[3] = "  ... ... ...";
example5[4] = "}";
example5[5] = "static void recurse(){";
example5[6] = "  ... ... ...";
example5[7] = "  recurse()";
example5[8] = "  ... ... ...";
example5[9] = "}";
example5[10] = "Normal Method ";
example5[11] = "Recursive ";
example5[12] = "Call";
var codePos = [];
var skyx = 50; // x coord to slice sky image
var skyy = 30; //y coord to slice sky image
var flag = 0; //目前行數
var sp = 0;
var flag2 = 0;


var timeout, timeout2, timeout3;

function drawCode(i) { //畫出程式碼
    code.fillStyle = "#ffffff";
    code.fillRect(0, 0, 1000, 1000);
    code2.fillStyle = "#ffffff";
    code2.fillRect(0, 0, 1000, 1000);
    chart.fillStyle = "#ffffff";
    chart.fillRect(0, 0, 1000, 1000);
    document.getElementById("b6").value = '開始模擬';
    document.getElementById("b7").style = "display:none";
    document.getElementById("b8").style = "display:none";
    introductionFlag = true;
    if (i == 0) {
        canvas.height = "250";
        for (i = 0; i < 4; i++) {
            document.getElementById("b" + i).style = "display:true";
        }
        for (i = 4; i < 9; i++) {
            document.getElementById("b" + i).style = "display:none";
        }

        code.fillStyle = "black";
        code.font = "18px Verdana";
        code.textAlign = "left";
        code2.fillStyle = "black";
        code2.font = "18px Verdana";
        code2.textAlign = "left";
        code.fillText(example[0], 40, 20);
        code.fillText(example[1], 140, 20);
        code.fillText(example[2], 340, 20);
        code.fillText(example[3], 490, 20);
        code.fillText(example[4], 0, 80);
        code.fillText(example[5], 90, 80);
        code.fillText(example[6], 190, 80);
        code.fillText(example[7], 240, 80);
        code.fillText(example[8], 280, 80);
        code.fillText(example[9], 0, 220);
        code.beginPath();
        code.moveTo(75, 30);
        code.lineTo(40, 60);
        code.lineTo(45, 45);
        code.lineTo(40, 60);
        code.lineTo(55, 60);
        code.stroke();
        code.beginPath();
        code.moveTo(75, 30);
        code.lineTo(110, 60);
        code.lineTo(105, 45);
        code.lineTo(110, 60);
        code.lineTo(95, 60);
        code.stroke();
        code.beginPath();
        code.moveTo(200, 30);
        code.lineTo(200, 60);
        code.lineTo(190, 50);
        code.lineTo(200, 60);
        code.lineTo(210, 50);
        code.stroke();
        code.beginPath();
        code.moveTo(400, 30);
        code.lineTo(270, 60);
        code.lineTo(270, 50);
        code.lineTo(270, 60);
        code.lineTo(280, 65);
        code.stroke();
        code.beginPath();
        code.moveTo(550, 30);
        code.lineTo(450, 60);
        code.lineTo(450, 50);
        code.lineTo(450, 60);
        code.lineTo(460, 63);
        code.stroke();
        code2.fillText(example2[0], 0, 60);
        code2.fillText(example2[1], 0, 80);
        code2.fillText(example2[0], 0, 170);
        code2.fillText(example2[2], 0, 190);
        code2.beginPath();
        code2.moveTo(90, 70);
        code2.lineTo(190, 70);
        code2.lineTo(165, 50);
        code2.lineTo(190, 70);
        code2.lineTo(165, 90);
        code2.lineTo(190, 70);
        code2.stroke();
        code2.beginPath();
        code2.moveTo(90, 180);
        code2.lineTo(190, 180);
        code2.lineTo(165, 160);
        code2.lineTo(190, 180);
        code2.lineTo(165, 200);
        code2.lineTo(190, 180);
        code2.stroke();
    } else if (i == 1) {
        chart.fillStyle = "#ffffff";
        chart.fillRect(0, 0, 1000, 1000);
        chart.fillStyle = "black";
        chart.font = '24px serif';
        canvas.height = "500";

        for (i = 0; i < 4; i++) {
            document.getElementById("b" + i).style = "display:none";
        }
        for (i = 4; i < 7; i++) {
            document.getElementById("b" + i).style = "display:true";
        }

        code.fillStyle = "black";
        code.font = "18px Verdana";
        code.textAlign = "left";
        code2.fillStyle = "black";
        code2.font = "18px Verdana";
        code2.textAlign = "left";
        for (i = 0; i < 24; i++) {
            code.fillText(example3[i], 40, (i + 1) * 20);
        }
        /*
                        for (i = 0; i < 11; i++) {
                            chart.fillText(example4[i], 40, (i + 2) * 25);
                        }
                        chart.drawImage(img, 300, 50, 400, 250);
                        */
    } else {
        for (i = 0; i < 9; i++) {
            document.getElementById("b" + i).style = "display:none";
        }
        code.fillStyle = "black";
        code.font = "18px Verdana";
        code.textAlign = "left";
        code2.fillStyle = "black";
        code2.font = "18px Verdana";
        code2.textAlign = "left";

        for (i = 0; i < 10; i++) {
            code.fillText(example5[i], 40, (i + 1) * 20);
        }
        code.font = "12px Verdana";
        code.beginPath();
        code.moveTo(140, 55);
        code.lineTo(350, 55);
        code.lineTo(350, 110);
        code.lineTo(235, 110);
        code.lineTo(240, 113);
        code.lineTo(235, 110);
        code.lineTo(240, 107);
        code.stroke();

        code.beginPath();
        code.moveTo(140, 150);
        code.lineTo(270, 150);
        code.lineTo(270, 120);
        code.lineTo(235, 120);
        code.lineTo(240, 117);
        code.lineTo(235, 120);
        code.lineTo(240, 123);
        code.stroke();
        code.fillText(example5[10], 360, 100);
        code.fillText(example5[12], 395, 120);
        code.fillText(example5[11], 275, 125);
        code.fillText(example5[12], 295, 145);
    }
}

function fillName(i) { //顯示顏色
    drawCode(0);
    drawChart(i);
    if (i == 0) {
        code.fillStyle = "khaki";
        code.fillRect(40, 5, 75, 20);
        code.fillStyle = "red";
        code.fillText(example[i], 40 + i * 100, 20);
    } else if (i == 1) {
        code.fillStyle = "khaki";
        code.fillRect(25 + i * 110, 5, 100 + i * 70, 20);
        code.fillStyle = "red";
        code.fillText(example[i], 40 + i * 100, 20);
    } else {
        code.fillStyle = "khaki";
        code.fillRect(45 + i * 145, 5, 80 + i * 30, 20);
        code.fillStyle = "red";
        code.fillText(example[i], 40 + i * 150, 20);
    }
}

function fillCode(i) {
    drawCode(1);
    if (i == 0) { //global variable
        code.fillStyle = "#3AD0FF";
        code.fillRect(55, 25, 200, 20); //example3[1]
        code.fillRect(90, 165, 53, 20); //y1++
        code.fillRect(473, 185, 23, 20); //y1
        code.fillRect(473, 205, 157, 20); //glob_local_var.x1
        code.fillRect(90, 225, 210, 20); //glob_local_var.x1+=10
        code.fillRect(473, 245, 157, 20); //glob_local_var.x1
        code.fillRect(78, 385, 53, 20); //x1++
        code.fillRect(460, 405, 23, 20); //x1
        code.fillRect(460, 425, 160, 20); //glob_local_var.y1
        code.fillStyle = "yellow";
        code.fillText(example3[1], 40, 40);
        code.fillText("y1++", 90, 180);
        code.fillText("y1", 473, 200);
        code.fillText("glob_local_var.x1", 473, 220);
        code.fillText("glob_local_var.x1+=10", 90, 240);
        code.fillText("glob_local_var.x1", 473, 260);
        code.fillText("x1++", 78, 400);
        code.fillText("x1", 460, 420);
        code.fillText("glob_local_var.y1", 460, 440);

        code2.fillText("x1", 0, 300);
        code2.fillText("9", 35, 300);
        code2.fillText("y1", 0, 320);
        code2.fillText("8", 35, 320);
        code2.fillText("}", 50, 310);
        code2.fillText("Global Variable", 60, 310);

    } else { //local variable
        code.fillStyle = "#99CC00";
        code.fillRect(120, 65, 60, 20); //x1=10
        code.fillRect(460, 105, 20, 20); //x1
        code.fillRect(90, 125, 40, 20); //x1--
        code.fillRect(460, 145, 20, 20); //x1
        code.fillRect(108, 325, 60, 20); //y1=20
        code.fillRect(448, 365, 20, 20);
        code.fillStyle = " #FFFFCC";
        code.fillText("x1=10", 120, 80);
        code.fillText("x1", 460, 120);
        code.fillText("x1--", 90, 140);
        code.fillText("x1", 460, 160);
        code.fillText("y1=20", 108, 340);
        code.fillText("y1", 448, 380);

        code2.fillText("x1", 0, 300);
        code2.fillText("10", 35, 300);
        code2.fillText("}", 60, 300);
        code2.fillText("main() local", 70, 300);
        code2.fillText("y1", 0, 350);
        code2.fillText("20", 35, 350);
        code2.fillText("}", 60, 350);
        code2.fillText("pp1() local", 70, 350);
    }
}

function drawChart(i) { //畫Stack圖
    chart.fillStyle = "#ffffff";
    chart.fillRect(0, 0, 1000, 1000);
    chart.fillStyle = "black";
    chart.font = '24px serif';
    if (i == 0) {
        chart.fillText("存取權限修飾詞 (access level modifier)", 0, 40);
        chart.fillText("  ·Public:跨越封裝(package)有效", 0, 70);
        chart.fillText("  ·protected:封裝(package)內及子類別(subclasses)內有效", 0, 100);
        chart.fillText("  ·無修飾詞:封裝內有效", 0, 130);
        chart.fillText("  ·private:僅類別(class)內有效", 0, 160);

        chart.fillText("非存取權限修飾詞 (non access modifier)", 0, 190);
        chart.fillText("  ·static：靜態，用於類別函數／方法（methods）與變數", 0, 220);
        chart.fillText("  ·final：相當於常數化，用於類別，方法與變數的實作", 0, 250);
        chart.fillText("  ·abstract：用來建立抽像類別與方法", 0, 280);
    } else if (i == 1) {
        chart.fillText("回傳值資料型態(return value type)", 0, 40);
        chart.fillText("  ·整數:byte	8、short	16、int		32、long	64", 0, 70);
        chart.fillText("  ·浮點數:float		32、double		64", 0, 100);
        chart.fillText("  ·布林值:boolean	1", 0, 130);
        chart.fillText("  ·字元:char	16", 0, 160);

        chart.fillText("無回傳值：void代表空，不傳回值", 0, 190);
    } else if (i == 2) {
        chart.fillText("函數名稱(method Name)", 0, 40);
        chart.fillText("  ·呼叫此函數的變數名", 0, 70);
        chart.fillText("  ·與繼承討論:Overriding", 0, 100);
        chart.fillText("  ·與形式參數串列討論:Overloading", 0, 130);

        chart.fillText("Overriding:兩class之間有繼承關係，", 0, 160);
        chart.fillText("   在子類別中修改從父類別繼承的相同函數名稱之函數，此行為稱為覆寫(Overriding)", 0, 190);
        chart.fillText("Overloading:同一class內，有相同函數名稱，", 0, 220);
        chart.fillText("   但不同形式參數串列之函數，可以使用相對應的數量及相同資料型態之引數，", 0, 250);
        chart.fillText("   藉此執行不同功能，此行為稱為多載(Overloading)", 0, 280);
    } else if (i == 3) {
        chart.fillText("形式參數(formal parameter)", 0, 40);
        chart.fillText("  ·在呼叫子程式時，可以透過參數向子程式傳遞資料", 0, 70);
    } else {
        chart.fillText("", 0, 40);
    }
}

function anime(a) {
    if (animeFlag) {
        fillName(a);
        document.getElementById("anime").id = 'anime1';
        animeFlag = false;
    } else {
        document.getElementById("anime1").id = 'anime';
        animeFlag = true;
        anime(a);
    }
}


function introduction() {
    if (introductionFlag) {
        drawCode(1);
        document.getElementById("b6").value = '中止模擬';
        document.getElementById("b7").style = "display:true";
        document.getElementById("b8").style = "display:true";
        introductionFlag = false;
    } else {
        document.getElementById("b6").value = '開始模擬';
        document.getElementById("b7").style = "display:none";
        document.getElementById("b8").style = "display:none";
        introductionFlag = true;
    }
}