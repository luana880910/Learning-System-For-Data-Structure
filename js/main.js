function changePage(p) {
    switch (p) {
        case 0:
            document.getElementById("mainframe").src = "simulation(if else).html";
            break;
        case 1:
            document.getElementById("mainframe").src = "simulation(switch).html";
            break;
        case 2:
            document.getElementById("mainframe").src = "simulation.html";
            break;
        case 3:
            document.getElementById("mainframe").src = "simulation(nest).html";
            break;
        case 4:
            document.getElementById("mainframe").src = "for.html";
            break;
        case 5:
            document.getElementById("mainframe").src = "while.html";
            break;
        case 6:
            document.getElementById("mainframe").src = "do_while.html";
            break;
        case 7:
            document.getElementById("mainframe").src = "Recursive.html";
            break;
        case 8:
            document.getElementById("mainframe").src = "simulation(logical).html";
            break;
        case 9:
            document.getElementById("mainframe").src = "array.html";
            break;
        case 10:
            document.getElementById("mainframe").src = "array_ex.html";
            break;
        case 11:
            document.getElementById("mainframe").src = "Method.html";
            break;
        case 12:
            document.getElementById("mainframe").src = "test1boy.html";
            break;
        case 13:
            document.getElementById("mainframe").src = "test1girl.html";
            break;
        case 14:
            document.getElementById("mainframe").src = "test_time.html";
            break;
        case 15:
            document.getElementById("mainframe").src = "test2.html";
            break;
        case 16:
            document.getElementById("mainframe").src = "two_tier.html";
            break;
        case 17:
            document.getElementById("mainframe").src = "fb.html";
            break;
        case 18:
            document.getElementById("mainframe").src = "timeRecord.html";
            break;
        case 19:
            document.getElementById("mainframe").src = "Introduce.html";
            break;
    }
}
window.document.onkeydown = function (e) {
    if (!e) {
        e = event;
    }
    if (e.keyCode == 27) {
        lightbox_close();
    }
};
