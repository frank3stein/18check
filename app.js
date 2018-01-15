function age18(){
    var d = new Date();
    var day = d.getDate();
    var year = d.getFullYear();
    var month;
    var runCount = 0;
    switch(d.getMonth())
        {
        case 0:
            month="January";
            break;
        case 1:
            month="February";
            break;
        case 2:
            month="March";
            break;
        case 3:
            month="April";
            break;
        case 4:
            month="May";
            break;
        case 5:
            month="June";
            break;
        case 6:
            month="July";
            break;
        case 7:
            month="August";
            break;
        case 8:
            month="September";
            break;
        case 9:
            month="October";
            break;
        case 10:
            month="November";
            break;
        case 11:
            month="December";
            break;
        default:
            month="Invalid month";
        }
        document.getElementById("date").innerText = `${day} - ${month} - ${year-18}`;
        runCount++;
        console.log(runCount);
};
age18();
document.getElementById("check").addEventListener("click", age18);


