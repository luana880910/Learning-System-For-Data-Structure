//限時測驗題目
var prob1 = [];
prob1[0] = 'int x, y, z = 4;<br>x = y = z + 6;<br>z = x + y + z;<br>System.out.println(z);<br>印出結果為?';
prob1[1] = 'int x1 = 9, y1 = 8, z1 = 7;<br>x1 = x1 % z1;<br>if (x1 < 5)<br>&emsp;y1 = y1 + 1;<br>else<br>&emsp;y1 = x1 + 1;<br>System.out.println(y1);<br>印出結果為?';
prob1[2] = 'int w = 7, p = 4, x = 3;<br>p = w / x * 2;<br>if (p < 18 && p > 8)<br>&emsp;x = (x * x) % 2;<br>else<br>&emsp;x = x % 3;<br>System.out.println(x);<br>印出結果為?';
prob1[3] = 'int w = 8, p = 6, x = 4;<br>x++;<br>if (w + 1 == p + 3)<br>&emsp;x = x + 1;<br>System.out.println(x);<br>印出結果為?';
prob1[4] = 'int w = 8, p = 4, x = 3;<br>System.out.println((w> p + x));<br>印出結果為?';
prob1[5] = 'int a = 8, b = 6, c = 4;<br><br>if (a + b == c + 3)<br>&emsp;a = b + 1;<br>else<br>&emsp;a += c;<br>System.out.println(a);<br>印出結果為?';
prob1[6] = 'int w = 9, p = 10, x = 3;<br>p = w / x * 5;<br>if (p < 18 && p > 8)<br>&emsp;x = (x * w) % 2;<br>else<br>&emsp;x = x % 3;<br>System.out.println(x);<br>印出結果為?';
prob1[7] = 'int x = 40, y = 15;<br>switch (x/10){<br>&emsp;case 6:<br>&emsp;case 5:<br>&emsp;&emsp;System.out.println("5");<br>&emsp;case 4:<br>&emsp;&emsp;System.out.println("4");<br>&emsp;case 3:<br>&emsp;&emsp;System.out.println("3");<br>&emsp;&emsp;break;<br>&emsp;default:<br>&emsp;&emsp;System.out.println("0");<br>印出結果為?';
prob1[8] = 'int x = 20, y = 15;<br>switch ((x-2)/3){<br>&emsp;case 6:<br>&emsp;case 5:<br>&emsp;&emsp;System.out.println(“5”);<br>&emsp;&emsp;break;<br>&emsp;case 4:<br>&emsp;&emsp;System.out.println(“4”);<br>&emsp;&emsp;break;<br>&emsp;case 3:<br>&emsp;&emsp;System.out.println(“3”);<br>&emsp;&emsp;break;<br>&emsp;case 2:<br>&emsp;&emsp;System.out.println(“2”);<br>&emsp;&emsp;break;<br>&emsp;default:<br>&emsp;&emsp;System.out.println(“0”);<br>&emsp;&emsp;break;<br>}<br>印出結果為?';
prob1[9] = 'int n1 = 0;<br>for (int i = 0;i < 5;i++){<br>&emsp;n1++;<br>&emsp;for(int j = 0;j < 3;j++)<br>&emsp;&emsp;n1++;<br>}<br>System.out.println(n1);<br>印出結果為?';
prob1[10] = 'int n = 0;<br>for(int i = 0;i < 5;i++)<br>&emsp;n++;<br>for(int j = 0;j < 3;j++)<br>&emsp;n++;<br>System.out.println(n);<br>印出結果為?';
prob1[11] = 'int p = 0, i = 1, n = 9;<br>while (i <= n){<br>&emsp;p = p * i;<br>&emsp;i = i + 2;<br>}<br>System.out.println(p "," + n);<br>印出結果為?';
prob1[12] = 'int x = 0, y = 10, z = 5;<br>for (int i = 1; i < y;i++){<br>&emsp;x += y;<br>&emsp;z++;<br>}<br>System.out.println(x + "," + y + "," + z);<br>印出結果為?';
prob1[13] = 'int a = 5, b = 6, c = 9;<br>for (int i = a + b;i > c - b;i--){<br>&emsp;a++;<br>&emsp;for (int j = a; j < 8;j++){<br>&emsp;&emsp;a += b;<br>&emsp;&emsp;b += c;<br>&emsp;}<br>}<br>System.out.println(a + "," + b);<br>印出結果為?';
prob1[14] = 'int x = 40, y = 5;<br>for (var i = 0;i < y;i++){<br>&emsp;switch (x%7){<br>&emsp;&emsp;case 6:<br>&emsp;&emsp;&emsp;System.out.print("6")<br>&emsp;&emsp;&emsp;break;<br>&emsp;&emsp;case 5:<br>&emsp;&emsp;&emsp;System.out.print("5");<br>&emsp;&emsp;&emsp;break;<br>&emsp;&emsp;case 4:<br>&emsp;&emsp;&emsp;System.out.print("4");<br>&emsp;&emsp;&emsp;break;<br>&emsp;&emsp;case 3:<br>&emsp;&emsp;&emsp;System.out.print("3");<br>&emsp;&emsp;&emsp;break;<br>&emsp;&emsp;default:<br>&emsp;&emsp;&emsp;System.out.print("0");<br>&emsp;&emsp;&emsp;break;<br>&emsp;}<br>}<br>印出結果為?';


var prob2 = [];
prob2[0] = "int&nbsp;w=21,x=100,y=5,z=6;<br>for (w++, x=11;x&gt;0;z++, x--){<br>&emsp;y++;<br>&emsp;x--;<br>}<br>System.out.print(w+“,”+x+“,”+y+“,”+z);";
prob2[1] = "int&nbsp;w=0,x=5,y=7;<br>while(w&lt;10){<br>&emsp;x++;<br>&emsp;y--;<br>&emsp;w++;<br>&emsp;y--;<br>}<br>System.out.print(w+“,”+x+“,”+y);";
prob2[2] = "int&nbsp;w=10,x=15,y=20;<br>do{<br>&emsp;w--;<br>&emsp;x++;<br>&emsp;y--;<br>&emsp;w--;<br>&emsp;y=5;<br>}while(w&gt;0);<br>System.out.print(w+“,”+x+“,”+y);";
prob2[3] = "請問下列何者程式碼能做到與題目相同的效果?<br>for(int &nbsp; i=0;i&lt;10;i--){<br>&emsp;內容<br>}";
prob2[4] = "請問下列何者程式碼能做到與題目相同得效果?<br>for(int &nbsp; i=0;i&gt;10;i++){<br>&emsp;內容<br>}";
prob2[5] = "請問下列何者程式碼有錯?";
prob2[6] = "請問下列何者程式碼沒有錯誤?";
prob2[7] = "int&nbsp;w=3,x=100,y=0;<br>for (w++, x=10;w&gt;0;w--){<br>&emsp;y=y+w*--x;<br>}<br>System.out.print(w+“,”+x+“,”+y);";
prob2[8] = "下列何者程式碼與題目效果一樣?<br>int &nbsp; x=10;<br>for(int &nbsp; i=0;i&lt;5;i++){<br>&emsp;x += --x*i;<br>}<br>System.out.print(x);";
prob2[9] = "for(int&nbsp;i =0;i&lt;100;i++){<br>&emsp; if(i&gt;10){<br>&emsp;&emsp;i=100;<br>&emsp;&emsp;break;<br>&emsp;}<br>&emsp;System.out.print(i);}";
prob2[10] = "請問要排序一個無序陣列(n個)，範圍為0-100，要做到最短的時間複雜度為何?";
prob2[11] = "int[]&nbsp;A=new&nbsp;int[100];<br>  for(int&nbsp;i =0;i&lt;99;i++){<br>&emsp;A[i]=i;<br>}<br>System.out.print(A[5]+\"&nbsp; \"+A[99]);";
prob2[12] = "int[]&nbsp;A=new&nbsp;int[100];<br>  for(int&nbsp;i =0;i&lt;200;i++){<br>&emsp;A[i]=i;<br>}<br>System.out.print(A[50]+\" &nbsp;\"+A[150]);";
prob2[13] = "int[]&nbsp;A=new&nbsp;int[100];<br> int &nbsp; i=1;<br> A[0] = 1;<br> while(i&lt;A.length){<br>&emsp;A[i]=i+A[i-1];<br>&emsp;i++;<br>}<br>System.out.print(A[0] +\"&nbsp; \"+A[i-50]);";
prob2[14] = "下列何者宣告陣列方式正確?";

//限時測驗選項
var option1 = [];
option1[0] = "24";//正確答案
option1[1] = "30";
option1[2] = "26";
option1[3] = "20";

option1[4] = "10";
option1[5] = "17";
option1[6] = "9";//正確答案
option1[7] = "16";

option1[8] = "0";//正確答案
option1[9] = "1";
option1[10] = "2";
option1[11] = "3";

option1[12] = "9";
option1[13] = "4";
option1[14] = "5";
option1[15] = "6";//正確答案

option1[16] = "0";
option1[17] = "1";
option1[18] = "true";//正確答案
option1[19] = "false";

option1[20] = "12";//正確答案
option1[21] = "10";
option1[22] = "7";
option1[23] = "8";

option1[24] = "10";
option1[25] = "0";
option1[26] = "2";
option1[27] = "1";//正確答案

option1[28] = "4";
option1[29] = "43";//正確答案
option1[30] = "430";
option1[31] = "5430";

option1[32] = "4";
option1[33] = "5";//正確答案
option1[34] = "2";
option1[35] = "3";

option1[36] = "24";
option1[37] = "15";
option1[38] = "12";
option1[39] = "20";//正確答案

option1[40] = "20";
option1[41] = "8";//正確答案
option1[42] = "2";
option1[43] = "15";

option1[44] = "0,9";//正確答案
option1[45] = "9,8";
option1[46] = "81,8";
option1[47] = "9,9";

option1[48] = "90,10,14";//正確答案
option1[49] = "80,10,15";
option1[50] = "90,15,10";
option1[51] = "80,14,10";

option1[52] = "50,20,10";
option1[53] = "52,25,9";
option1[54] = "50,25,9";
option1[55] = "52,24,9";//正確答案

option1[56] = "50004";
option1[57] = "50046";//正確答案
option1[58] = "50404";
option1[59] = "50406";

var option2 = [];
option2[0] = "22,0,55,56";
option2[1] = "21,0,55,56";
option2[2] = "22,-1,11,12";
option2[3] = "21,-1,11,12";

option2[4] = "10,15,-13";
option2[5] = "10,15,-3";
option2[6] = "9,15,-13";
option2[7] = "9,15,-3";

option2[8] = "0,20,15";
option2[9] = "0,20,5";
option2[10] = "0,25,5";
option2[11] = "0,25,15";

option2[12] = "while(10==10){<br>&emsp;&emsp;內容<br>&emsp;}";
option2[13] = "while(10=10){<br>&emsp;&emsp;內容<br>&emsp;}";
option2[14] = "for(;;){<br>&emsp;&emsp;內容<br>&emsp;}";
option2[15] = "while(true){<br>&emsp;&emsp;內容<br>&emsp;}";

option2[16] = "while(false){<br>&emsp;&emsp;內容<br>&emsp;}";
option2[17] = "for(;;){<br>&emsp;&emsp;內容<br>&emsp;}";
option2[18] = "while(10==10){<br>&emsp;&emsp;內容<br>&emsp;}";
option2[19] = "for(int &nbsp i=10;i&gt;0;i--){<br>&emsp;&emsp;內容<br>&emsp;}";

option2[20] = "while(10=10){<br>&emsp;&emsp;內容<br>&emsp;}";
option2[21] = "int &nbsp; i=0;<br>while(i=10){<br>&emsp;&emsp;內容<br>&emsp;}";
option2[22] = "int &nbsp; i=0;<br>while(i==10){<br>&emsp;&emsp;內容<br>&emsp;}";
option2[23] = "for(int &nbsp i=0;){<br>&emsp;&emsp;內容<br>&emsp;}";

option2[24] = "for(int &nbsp; i=0;i&lt;10;){<br>&emsp;&emsp;內容<br>&emsp;}";
option2[25] = "int &nbsp; i=0;<br>while(i=i){<br>&emsp;&emsp;內容<br>&emsp;}";
option2[26] = "int &nbsp i=0;<br>while(i==i){<br>&emsp;&emsp;內容<br>&emsp;}";
option2[27] = "for(int i=10;;i--){<br>&emsp;&emsp;內容<br>&emsp;}";

option2[28] = "0,6,80";
option2[29] = "-1,6,90";
option2[30] = "0,6,90";
option2[31] = "-1,6,80";

option2[32] = "1081";
option2[33] = "1200";
option2[34] = "1319";
option2[35] = "1400";

option2[36] = "012345678910";
option2[37] = "012345678910100";
option2[38] = "01234567891011";
option2[39] = "01234567891011100";

option2[40] = "O(n)";
option2[41] = "O(n^2)";
option2[42] = "O(n^3)";
option2[43] = "O(2n)";

option2[44] = "5&nbsp;0";
option2[45] = "5&nbsp;99";
option2[46] = "0&nbsp;0";
option2[47] = "error";

option2[48] = "5&nbsp;150";
option2[49] = "5&nbsp;null";
option2[50] = "5&nbsp;";
option2[51] = "error";

option2[52] = "0,1276";
option2[53] = "1,1276";
option2[54] = "1,1275";
option2[55] = "0,1275";

option2[56] = "int[] &nbsp; A = new &nbsp; int[100];";
option2[57] = "int[] &nbsp; A ={0,0,0,0};";
option2[58] = "int[] &nbsp; A = new &nbsp; int[4]{0,0,0,0};";
option2[59] = "int[] &nbsp; A;";

//限時測驗正確答案
var cAns1 = [0, 2, 0, 3, 2, 0, 3, 1, 1, 3, 1, 0, 0, 3, 1];
var cAns2 = [0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1];

//動態評量題目
var bank = [];
bank[0] = 'int i,j,n = 0;<br>for(i = 0; i < 5; i++)<br>&emsp;for(j = 0; j < 3; j++)<br>&emsp;&emsp;n++;<br>&emsp;System.out.println(n + "," + i + "," + j);<br>印出結果為?';
bank[1] = 'int x = 10, y = 15, s2 = 0;<br>for(; x < y;x++){<br>&emsp;for(i = 8; i < x; i++)<br>&emsp;s2++;<br>}<br>System.out.println(x + "," + y + "," + s2);<br>印出結果為?';
bank[2] = 'int x = 10, y = 15, z = 20;<br>for (var i = 0;i < y;i++){<br>&emsp;i += 5;<br>&emsp;z++;<br>&emsp;y += 2;<br>&emsp;if (x <= 10){<br>&emsp;&emsp;x += z;<br>&emsp;&emsp;z -= y;<br>&emsp;}<br>&emsp;else{<br>&emsp;&emsp;y++;<br>&emsp;&emsp;x++;<br>&emsp;}<br>}<br>System.out.println(x + "," + y + "," + z);<br>印出結果為?';
bank[3] = '以下巢狀迴圈哪幾行會有問題?(以","隔開答案,數字由小到大排列)<br>例如:第一行,第三行<br>int w = 15, x = 10, y = 7, z = 8;<font color = green>//第一行</font><br>for (i = 0;i < z;i++){<font color = green>//第二行</font><br>&emsp;w += 2;<font color = green>//第三行</font><br>&emsp;y = z * 10 % 8;<font color = green>//第四行</font><br>&emsp;x = w * 2 % 7;<font color = green>//第五行</font><br>&emsp;for (int j = 6,j < z,j++)<font color = green>//第六行</font><br>&emsp;&emsp;w--;<font color = green>//第七行</font><br>}<font color = green>//第八行</font><br><br>';
bank[4] = "Public static void demoH(int[] a, n)  { <br>&emsp;if (n&lt;a.length-1)<br>&emsp;demoH(a, n+1); <br>&emsp;System.out.print(a[n]);<br>}<br>呼叫敘述:<br>int[] ss3={4,3,2,1,0};<br>demoH(ss3,0);<br>印出結果為?";
bank[5] = " public static void demoI(int n, String s) { <br>&emsp;if (n&gt;0) {<br>&emsp;&emsp;   ???   <br>&emsp;}<br>&emsp;demoI(n - 1 , s);<br>}<br>public static void demoJ(int n, String s) {<br>&emsp;if (n > 0) {<br>&emsp;&emsp;System.out.print(s);<br>&emsp;&emsp;demoJ(n - 1  , s);<br>&emsp;} else {<br>&emsp;&emsp;System.out.println();<br>&emsp;}<br>}<br>呼叫敘述:<br>demoI(5,”*”);<br>???內容該如何填寫才能印出<br>*****<br>****<br>***<br>**<br>*";
bank[6] = "int demoE(int n, int m){<br>&emsp;if (m <= n && n * m ==0)<br>&emsp;&emsp;return m;<br>&emsp;else if(n&lt;m)<br>&emsp;&emsp;return demoE (m,n);<br>&emsp;else   return demoE(m,n %m);}<br>呼叫敘述:demoE(48,60);<br>如果要得出n與m的最大公因數，請將錯誤的那一行改正";
bank[7] = 'public static void main(String[] args) {<br>&emsp;for(???){<br>&emsp;&emsp;System.out.print(number);<br>&emsp;}<br>}<br>若要印出54321，???要怎麼寫，只可使用一個變數。';
bank[8] = 'int w=21, x=100,y=5,z=6;<br>w++; x=10;<br>while (x>0)<br>{y++; x--; z--; x--;}<br>System.out.print(w+“,”+x+“,”+y+“,”+z);<br>輸出結果為?';
bank[9] = 'public static void main(String[] args) {<br>&emsp;int x=5;y=20;z=12;<br>&emsp;do {<br>&emsp;&emsp;x--;<br>&emsp;&emsp;y--;<br>&emsp;&emsp;z++;<br>&emsp;} while (x>0);<br>&emsp;System.out.print("x="+x+",y="+y+",z="+z);<br>}</br>若要印出x=0,y=15,z=31，請將錯誤的那一行程式碼改正，只可更改迴圈部分，不可新增變數。';

//動態評量正確答案
var select = [];
select[0] = "15,5,3";
select[1] = "15,15,20";
select[2] = "35,29,8";
select[3] = "第二行,第六行";
select[4] = "01234";
select[5] = "demoJ(n, s);";
select[6] = "if(m <= n && n % m == 0)";
select[7] = "for(int number = 5; number > 0; number--)";
select[8] = "22,0,10,1";
select[9] = "z=31;";

//動態評量提示
var prompt = [];
prompt[0] = "注意n的值";
prompt[1] = "注意裡面for迴圈執行次數";
prompt[2] = "注意外面for迴圈執行次數";
prompt[3] = "n值進到迴圈開始為0；每次執行加一；總共執行10次";

prompt[4] = "注意s2的值";
prompt[5] = "注意迴圈裡X的增減值";
prompt[6] = "注意for迴圈執行次數";
prompt[7] = "X值進到迴圈開始為10；每次執行加一；總共執行5次；內部迴圈每次執行的次數都會改變";

prompt[8] = "注意y的值";
prompt[9] = "注意判斷式裡面的判斷";
prompt[10] = "注意for迴圈執行次數";
prompt[11] = "i值進到迴圈開始為0；每次執行加6；總共執行5次；根據if else會做的改變不同";

prompt[12] = "不用考慮無限迴圈的問題";
prompt[13] = "注意變數的宣告方式";
prompt[14] = "注意for迴圈的用法";
prompt[15] = "for迴圈裡面的變數是否被宣告過，迴圈裡是怎麼隔開起始條件跟結束條件的";

prompt[16] = "注意a陣列的長度是多少";
prompt[17] = "注意遞迴裡面的參數值";
prompt[18] = "注意遞迴和輸出文字的先後順序";
prompt[19] = "答案為01234";

prompt[20] = "注意是哪個遞迴程式在處理文字";
prompt[21] = "注意遞迴內的參數如何宣告";
prompt[22] = "可參考下列方法的宣告方式";
prompt[23] = "答案為demoJ(n, s);";

prompt[24] = "注意兩個數字和最大公因數間的關係";
prompt[25] = "注意程式內容和if else判斷間的關係";
prompt[26] = "此程式為輾轉相除法";
prompt[27] = "答案為if (m <= n && n % m ==0)";

prompt[28] = "注意for迴圈不可為無限迴圈";
prompt[29] = "注意輸出答案的值";
prompt[30] = "注意for迴圈中變數的內容";
prompt[31] = "答案為for(int number=5;number>0;number--)";

prompt[32] = "注意X的值";
prompt[33] = "注意X和W每次扣除幾次";
prompt[34] = "注意for迴圈執行次數"; 
prompt[35] = "X值進到迴圈開始為11；每次執行減二；總共執行6次；W值一開始要+1；在迴圈裡並沒有動";

prompt[36] = "注意輸出答案，找找哪個不一樣";
prompt[37] = "注意Z的值";
prompt[38] = "注意Z跟迴圈次數並沒有倍數關係";
prompt[39] = "Z要直接賦值";

//二階層題目跟選項
var twotierQ = [];
twotierQ[0] = "下列對於遞迴的敘述何者正確？";// question 1
twotierQ[1] = "A.遞迴會用到Stack";
twotierQ[2] = "B.遞迴會浪費很多記憶體";
twotierQ[3] = "C.遞迴執行時間較快";
twotierQ[4] = "D.遞迴會用到queue";

twotierQ[5] = "1A.Stack是一種資料結構";
twotierQ[6] = "1B.Stack的特性是FIFO";
twotierQ[7] = "1C.遞迴不須呼叫自己";
twotierQ[8] = "1D.遞迴不會造成程式進入無限迴圈";

twotierQ[9] = "2A.即使會浪費很多記憶體，但遞迴的執行效率很高";
twotierQ[10] = "2B.遞迴的程式碼可以很精簡";
twotierQ[11] = "2C.Stack是先進先出";
twotierQ[12] = "2D.遞迴容易造成電腦死機";

twotierQ[13] = "3A.遞迴容易引起記憶體不足的問題";
twotierQ[14] = "3B.遞迴函數裡可以不加終止條件";
twotierQ[15] = "3C.算公因數不能用遞迴";
twotierQ[16] = "3D.遞迴用heap可以增加速度";

twotierQ[17] = "4A.遞迴就是迴圈的一種";
twotierQ[18] = "4B.遞迴用法跟do while一樣";
twotierQ[19] = "4C.queue的特性是先進後出";
twotierQ[20] = "4D.Stack將會吃掉所有的CPU";

twotierQ[21] = "遞迴使用什麼資料結構？";// question 2
twotierQ[22] = "A.Stack";
twotierQ[23] = "B.Queue";
twotierQ[24] = "C.Set";
twotierQ[25] = "D.Tree";

twotierQ[26] = "1A.方法的指令必須放於stack中";
twotierQ[27] = "1B.因為方法都要stack紀錄過程";
twotierQ[28] = "1C.因為方法要空間所以要stack";
twotierQ[29] = "1D.用以返回原本方法的位置";

twotierQ[30] = "2A.遞迴必須使用先進先出";
twotierQ[31] = "2B.可節省空間";
twotierQ[32] = "2C.遞迴不須記錄前一方法的位置";
twotierQ[33] = "2D.遞迴用完馬上可以移除所以用queue";

twotierQ[34] = "3A.遞迴使用方法的集合";
twotierQ[35] = "3B.當遞迴為空集合時方法結束";
twotierQ[36] = "3C.宇集合為每一步的方法子集合";
twotierQ[37] = "3D.每一步多一個集合";

twotierQ[38] = "4A.用定址來指向下一方法的位置";
twotierQ[39] = "4B.當碰到葉子時結束";
twotierQ[40] = "4C.一定為complete tree";
twotierQ[41] = "4D.一定為balance tree";

twotierQ[42] = '下列程式碼運用到何種技巧?<br>public class Exercise{<br>&emsp;public void play(String item){<br>&emsp;&emsp;System.out.println(" Play: " + item);<br>&emsp;}<br>&emsp;public void play(String name, String item){<br>&emsp;&emsp;System.out.println("name: " + name + " Play: " + item);<br>&emsp;}<br>}';// question 3
twotierQ[43] = "Overloading";
twotierQ[44] = "Overriding";
twotierQ[45] = "Abstract";
twotierQ[46] = "Interface";

twotierQ[47] = "1A.同名不同參數列的方法即為Overloading";
twotierQ[48] = "1B.不同名同參數列的方法即為Overloading";
twotierQ[49] = "1C.因為下方的程式碼取代了上方的程式碼，是一種Overloading";
twotierQ[50] = "1D.Overloading透過繼承關係，可以修改同名的方法";

twotierQ[51] = "2A.只要有取代程式碼的動作，都算是一種Overriding";
twotierQ[52] = "2B.上下兩程式碼有繼承關係，所以是Overriding";
twotierQ[53] = "2C.Overriding是指同名的方法，根據不同的參數列，執行不同的程式碼";
twotierQ[54] = "2D.下方的程式碼增加了新的內容於上方的程式碼，這是一種Overriding";

twotierQ[55] = "3A.在同名卻有不同參數列的程式碼位於同一個class時，即為Abstract";
twotierQ[56] = "3B.因為程式會不知道該執行哪個程式碼，而發生Abstract的狀況";
twotierQ[57] = "3C.Abstract是在程式碼發生取代時的稱呼";
twotierQ[58] = "3D.Abstract是要依照參數值的不同，進行不同程式的一種行為";

twotierQ[59] = "4A.下方的程式碼實現了上方的程式碼沒有的內容，所以是Interface";
twotierQ[60] = "4B.下方的程式碼執行後，上方的程式碼就會清空，所以是Interface";
twotierQ[61] = "4C.Interface是一種實現差距不大的程式碼的行為";
twotierQ[62] = "4D.因為同名的方法，要使用不同參數列，就需要以Interface實現不同程式碼";

twotierQ[63] = "下列何者為無限迴圈？";// question 4
twotierQ[64] = "A.for(;;);";
twotierQ[65] = "B.while(false);";
twotierQ[66] = "C.do{int x=10;}while(x>15);";
twotierQ[67] = "D.for(int x=5;x>10;x++);";

twotierQ[68] = "A.因為什麼都不寫，系統判定錯誤，所以無限迴圈。";
twotierQ[69] = "B.因為迴圈條件(運算式2)省略，導致它成為無限迴圈。";
twotierQ[70] = "C.因為迴圈變數給予初值(運算式1)省略，導致它成為無限迴圈。";
twotierQ[71] = "D.因為迴圈變數增量(運算式3)省略，導致它成為無限迴圈。";

twotierQ[72] = "A.因為判斷式裡面寫false，系統判定錯誤，所以無限迴圈。";
twotierQ[73] = "B.因為判斷式裡面不能寫布林值，所以無限迴圈。";
twotierQ[74] = "C.因為while一定要填寫內容，內容不能為空。";
twotierQ[75] = "D.因為while一定要有變數幫忙，否則就會無限迴圈。";

twotierQ[76] = "A.因為x一直都不可能大於15，所以無限迴圈。";
twotierQ[77] = "B.因為第一次判定就是false，系統出BUG，所以無限迴圈。";
twotierQ[78] = "C.因為前面的x，一定要有變化(增減)，不然會進入無限迴圈。";
twotierQ[79] = "D.因為do while一定要有Break。";

twotierQ[80] = "A.因為for一定要填寫內容，內容不能為空。";
twotierQ[81] = "B.因為x一直都不可能大於15，所以無限迴圈。";
twotierQ[82] = "C.因為第一次判定就是false，系統出BUG，所以無限迴圈。";
twotierQ[83] = "D.因為for一定要有Break，不然出不去。";

twotierQ[84] = "下列何者對於迴圈的敘述正確？";// question 5
twotierQ[85] = "A.迴圈的種類有四種。";
twotierQ[86] = "B.如果遇到無窮迴圈，我們可以用continue強制跳開。";
twotierQ[87] = "C.for迴圈一定得先設定初值、條件或變化量。";
twotierQ[88] = "D.當while的條件式為真時，會重複執行內容。";

twotierQ[89] = "A.迴圈種類有for、switch、while、if else。";
twotierQ[90] = "B.迴圈種類有for、switch、while、do while。";
twotierQ[91] = "C.迴圈種類有for、switch、do while、if else。";
twotierQ[92] = "D.迴圈種類有for、while、do while、if else。";

twotierQ[93] = "A.因為continue會跳過當前回合，導致系統判定錯誤，跳出迴圈。";
twotierQ[94] = "B.因為continue的功能就是直接跳出迴圈。";
twotierQ[95] = "C.因為break使用上有時機問題，所以通常會用continue當作跳出迴圈的方法。";
twotierQ[96] = "D.因為育到無窮迴圈一定會導致程式崩潰，所以continue可以直接把迴圈強制關閉，避免崩潰。";

twotierQ[97] = "A.一定要設定初值，否則程式會崩潰。";
twotierQ[98] = "B.一定要設定條件，否則程式會崩潰。";
twotierQ[99] = "C.一定要設定變化量，否則程式會崩潰。";
twotierQ[100] = "D.一定要設定好三樣運算式，否則程式會崩潰。";

twotierQ[101] = "A.while被判定為false後，會執行最後一次程式。";
twotierQ[102] = "B.while被判定為true時，只要內容執行中途條件式不成立，就會跳出來。";
twotierQ[103] = "C.while被判定成true時，會執行完內容一次後，再判定。";
twotierQ[104] = "D.while被判定成false時，程式就會崩潰。";

twotierQ[105] = "下列關於array的特性何者正確？";// question 6
twotierQ[106] = "A.同一個array裡可以放入不同型態的資料";
twotierQ[107] = "B.index從0開始;";
twotierQ[108] = "C.只支援Sequential Access;";
twotierQ[109] = "D.支援Linked List的共享;";

twotierQ[110] = "A.每格都包含data和reference";
twotierQ[111] = "B.因為有reference，須額外空間儲存reference";
twotierQ[112] = "C.每格型態、記憶體大小可不用相同";
twotierQ[113] = "D.最後的reference為null";

twotierQ[114] = "A.index的順序，並不代表就是占用連續的記憶體空間";
twotierQ[115] = "B.不一定每個資料都有index";
twotierQ[116] = "C.第n筆資料的index就是n";
twotierQ[117] = "D.一個array有n格，index從0~n-1";

twotierQ[118] = "A.因為Sequential access速度快";
twotierQ[119] = "B.Sequential access的資料是放在一起的，很容易尋找";
twotierQ[120] = "C.Sequential access是依照資料位址存取";
twotierQ[121] = "D.Random access只有linked list有";

twotierQ[122] = "A.兩者都可以實作stack";
twotierQ[123] = "B.兩者都支援Random access";
twotierQ[124] = "C.兩者都可以實作queue";
twotierQ[125] = "D.兩者都支援Sequential access";

twotierQ[126] = "下列對於switch的敘述何者正確？";// question 7
twotierQ[127] = "A.每個case後面都要加break";
twotierQ[128] = "B.case裡的程式不需要用大括號刮起來";
twotierQ[129] = "C.default是必須要有的";
twotierQ[130] = "D.default後面一定要加break";

twotierQ[131] = "1A.如果不加break，程式無法執行";
twotierQ[132] = "1B.如果不加break，將會變異錯誤";
twotierQ[133] = "1C.加了break，程式會自動跳過，不執行switch";
twotierQ[134] = "1D.break只能出現在迴圈裡";

twotierQ[135] = "2A.不是用大括號刮起來，是要用中括號";
twotierQ[136] = "2B.case後面只要有冒號就可以";
twotierQ[137] = "2C.大括號必須搭配迴圈使用";
twotierQ[138] = "2D.大括號跟switch無關";

twotierQ[139] = "3A.沒有default，電腦會自動關機";
twotierQ[140] = "3B.沒有default，程式會進入無限迴圈";
twotierQ[141] = "3C.default是用在遞迴方面的";
twotierQ[142] = "3D.加了default，程式執行時間會增加";

twotierQ[143] = "4A.default跟break不會同時出現";
twotierQ[144] = "4B.default跟break出現在同一個程式裡會導致當機";
twotierQ[145] = "4C.是break後面要加default";
twotierQ[146] = "4D.default用法跟break一樣";

twotierQ[147] = "下列對於if..else..的敘述何者正確？";// question 8
twotierQ[148] = "A.if一定會跟else一起出現";
twotierQ[149] = "B.if跟else if只能出現一個";
twotierQ[150] = "C.if跟else只會執行一個";
twotierQ[151] = "D.else可以接條件判斷式";

twotierQ[152] = "1A.else可以單獨出現";
twotierQ[153] = "1B.else要放在if前面";
twotierQ[154] = "1C.if不執行必定會執行else";
twotierQ[155] = "1D.if後面不加else會造成程式無法執行";

twotierQ[156] = "2A.else if只會出現一個";
twotierQ[157] = "2B.if判斷式判斷成功的話，將會跳過else if";
twotierQ[158] = "2C.else if太多的話可以用switch代替";
twotierQ[159] = "2D.else if可以放在if前面";

twotierQ[160] = "3A.if判斷式判斷失敗將會執行else";
twotierQ[161] = "3B.if判斷式判斷成功，依然會往下判斷else if";
twotierQ[162] = "3C.else接了判斷式將會讓程式進入無限迴圈";
twotierQ[163] = "3D.if else是屬於迴圈的一種";

twotierQ[164] = "4A.else接判斷式的話，if就不能接了";
twotierQ[165] = "4B.if和else if跟else都可以不接判斷式";
twotierQ[166] = "4C.判斷式裡的等號運算子是'='";
twotierQ[167] = "4D.else if接了判斷式，else就不能接了";

twotierQ[168] = "下列對於運算子的敘述何者正確？";// question 9
twotierQ[169] = "A.邏輯運算子有四種";
twotierQ[170] = "B.運算子有優先順序";
twotierQ[171] = "C.!跟?都是運算子的一種";
twotierQ[172] = "D.條件運算子的用法的switch一樣";

twotierQ[173] = "1A.!是屬於邏輯運算子";
twotierQ[174] = "1B.==是屬於邏輯運算子";
twotierQ[175] = "1C.邏輯運算子的優先順序最大";
twotierQ[176] = "1D.運算子小括號的優先度最低";

twotierQ[177] = "2A.乘除運算子的優先度大於其他的";
twotierQ[178] = "2B.小括號的優先度比邏輯運算子大";
twotierQ[179] = "2C.AND比OR的優先度大";
twotierQ[180] = "2D.!在邏輯運算子的優先度是最低的";

twotierQ[181] = "3A.!代表的意思是XOR";
twotierQ[182] = "3B.?要跟;一起出現";
twotierQ[183] = "3C.?跟!不能一起出現";
twotierQ[184] = "3D.!跟?一起出現會導致程式崩潰";

twotierQ[185] = "4A.條件運算子可以代替if else";
twotierQ[186] = "4B.?;就是條件運算子";
twotierQ[187] = "4C.==是條件運算子的一種";
twotierQ[188] = "4D.條件運算子優先度僅高於=";

twotierQ[189] = "下列對於巢狀迴圈的敘述何者正確？";// question 10
twotierQ[190] = "A.巢狀迴圈就是在if裡面再加if";
twotierQ[191] = "B.for裡面放while會形成巢狀迴圈";
twotierQ[192] = "C.for裡面必須放for，不能放其他的";
twotierQ[193] = "D.巢狀迴圈裡不能用continue跟break";

twotierQ[194] = "1A.放在if裡面的if不須加判斷式";
twotierQ[195] = "1B.巢狀迴圈裡的if判斷式判斷失敗程式依然會執行";
twotierQ[196] = "1C.巢狀迴圈裡不能有else if存在";
twotierQ[197] = "1D.else再巢狀迴圈裡必須加判斷式";

twotierQ[198] = "2A.while裡放while會造成電腦當機";
twotierQ[199] = "2B.while裡放for會造成程式進入無限迴圈";
twotierQ[200] = "2C.三個迴圈無法組成巢狀迴圈";
twotierQ[201] = "2D.巢狀迴圈就是迴圈裡加上迴圈";

twotierQ[202] = "3A.巢狀迴圈容易造成記憶體不足";
twotierQ[203] = "3B.巢狀迴圈處理不當會造成無限迴圈";
twotierQ[204] = "3C.一個迴圈就可以稱作巢狀迴圈了";
twotierQ[205] = "3D.巢狀迴圈會用到Stack";

//二階層正確答案
var firstAns = [1, 1, 1, 1, 4, 2, 2, 3, 2, 2];
var secondAns = [2, 2, 2, 2, 3, 4, 2, 1, 2, 4];