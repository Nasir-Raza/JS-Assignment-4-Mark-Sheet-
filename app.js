function validateValues() {

    var stdName = document.getElementById("stdname");
    var fatherName = document.getElementById("fathername");
    var marksObtSindhi = document.getElementById("sindhi");
    var marksObtUrdu = document.getElementById("urdu");
    var marksObtEnglish1 = document.getElementById("english1");
    var marksObtEnglish2 = document.getElementById("english2");
    var marksObtPakStd = document.getElementById("pakstd");
    var marksObtIslamiat = document.getElementById("islamiat");
    var marksObtMath = document.getElementById("math");
    var marksObtBioThe = document.getElementById("biothe");
    var marksObtBioPrc = document.getElementById("bioprc");
    var marksObtPhyThe = document.getElementById("phythe");
    var marksObtPhyPrc = document.getElementById("phyprc");
    var marksObtChmThe = document.getElementById("chmthe");
    var marksObtChmPrc = document.getElementById("chmprc");
    var errorMessage = "";
    var isValid = true;

    if (stdName.value === "") {
        errorMessage = "Student name cannot be left blank";
        isValid = false;
    } else if (fatherName.value === "") {
        errorMessage = "Father name cannot be left blank";
        isValid = false;
    } else if (marksObtSindhi.value === "" || marksObtUrdu.value === "" || marksObtEnglish1.value === "" || marksObtEnglish2.value === "" || marksObtPakStd.value === "" || marksObtIslamiat.value === "" || marksObtMath.value === "" || marksObtBioThe.value === "" || marksObtBioPrc.value === "" || marksObtPhyThe.value === "" || marksObtPhyPrc.value === "" || marksObtChmThe.value === "" || marksObtChmPrc.value === "") {
        errorMessage = "Marks obtained for any subject cannot be left blank";
        isValid = false;
    } else if (Number(marksObtSindhi.value) < 0 || Number(marksObtUrdu.value) < 0 || Number(marksObtEnglish1.value) < 0 || Number(marksObtEnglish2.value) < 0 || Number(marksObtPakStd.value) < 0 || Number(marksObtIslamiat.value) < 0 || Number(marksObtMath.value) < 0 || Number(marksObtBioThe.value) < 0 || Number(marksObtBioPrc.value) < 0 || Number(marksObtPhyThe.value) < 0 || Number(marksObtPhyPrc.value) < 0 || Number(marksObtChmThe.value) < 0 || Number(marksObtChmPrc.value) < 0) {
        errorMessage = "Marks obtained for any subject cannot be negative";
        isValid = false;
    } else if (Number(marksObtSindhi.value) > 75 || Number(marksObtUrdu.value) > 75 || Number(marksObtEnglish1.value) > 75 || Number(marksObtEnglish2.value) > 75 || Number(marksObtPakStd.value) > 75 || Number(marksObtIslamiat.value) > 75 || Number(marksObtMath.value) > 100 || Number(marksObtBioThe.value) > 75 || Number(marksObtBioPrc.value) > 25 || Number(marksObtPhyThe.value) > 75 || Number(marksObtPhyPrc.value) > 25 || Number(marksObtChmThe.value) > 75 || Number(marksObtChmPrc.value) > 25) {
        errorMessage = "Marks obtained for any subject cannot be greater than maximum marks";
        isValid = false;
    }


    if (!isValid) {
        alert(errorMessage);
    } else {
        submitValues();
    }
}

function submitValues() {

    var stdName = document.getElementById("stdname");
    var fatherName = document.getElementById("fathername");
    var marksObtSindhi = document.getElementById("sindhi");
    var marksObtUrdu = document.getElementById("urdu");
    var marksObtEnglish1 = document.getElementById("english1");
    var marksObtEnglish2 = document.getElementById("english2");
    var marksObtPakStd = document.getElementById("pakstd");
    var marksObtIslamiat = document.getElementById("islamiat");
    var marksObtMath = document.getElementById("math");
    var marksObtBioThe = document.getElementById("biothe");
    var marksObtBioPrc = document.getElementById("bioprc");
    var marksObtPhyThe = document.getElementById("phythe");
    var marksObtPhyPrc = document.getElementById("phyprc");
    var marksObtChmThe = document.getElementById("chmthe");
    var marksObtChmPrc = document.getElementById("chmprc");
    var mObtUrSn = Number(marksObtSindhi.value) + Number(marksObtUrdu.value)
    var mObtEn1En2 = Number(marksObtEnglish1.value) + Number(marksObtEnglish2.value)
    var grandTotal = Number(marksObtSindhi.value) + Number(marksObtUrdu.value) + Number(marksObtEnglish1.value) + Number(marksObtEnglish2.value) + Number(marksObtPakStd.value) + Number(marksObtIslamiat.value) + Number(marksObtMath.value) + Number(marksObtBioThe.value) + Number(marksObtBioPrc.value) + Number(marksObtPhyThe.value) + Number(marksObtPhyPrc.value) + Number(marksObtChmThe.value) + Number(marksObtChmPrc.value);
    var percentage = (grandTotal / 850) * 100;
    var grade = "";

    if (Number(marksObtSindhi.value) < 25 || Number(marksObtUrdu.value) < 25 || Number(marksObtEnglish1.value) < 25 || Number(marksObtEnglish2.value) < 25 || Number(marksObtPakStd.value) < 25 || Number(marksObtIslamiat.value) < 25 || Number(marksObtMath.value) < 33 || Number(marksObtBioThe.value) < 25 || Number(marksObtBioPrc.value) < 8 || Number(marksObtPhyThe.value) < 25 || Number(marksObtPhyPrc.value) < 8 || Number(marksObtChmThe.value) < 25 || Number(marksObtChmPrc.value) < 8) {
        grade = "FAIL";
    } else {
        if (percentage >= 80) {
            grade = "A-1";
        } else if (percentage >= 70 && percentage < 80) {
            grade = "A";
        } else if (percentage >= 60 && percentage < 70) {
            grade = "B";
        } else if (percentage >= 50 && percentage < 60) {
            grade = "C";
        } else if (percentage >= 40 && percentage < 50) {
            grade = "D";
        } else if (percentage >= 33 && percentage < 40) {
            grade = "E";
        } else {
            grade = "FAIL";
        }
    }

    var table = document.getElementById("marksheet");
    var str = "<tr><td class='mainhead' colspan='7' style='text-align: center;'>BOARD OF SECONDARY EDUCATION</td></tr><tr><td class='mainhead' colspan='7' style='text-align: center;'>KARACHI</td></tr><tr><td colspan='7' style='text-align: center;'>STATEMENT OF MARKS</td></tr><tr><td colspan='7' style='text-align: center;'>S.S.C. EXAMINATION</td></tr><tr><td colspan='7' style='text-align: center;'>(FOR SUCCESSFUL CANDIDATES ONLY)</td></tr><tr height='70'><td colspan='7'></td></tr><tr><td width='10'></td><td>EXAMINATION</td><td colspan='2'>ANNUAL 2020</td><td>ROLL NUMBER</td><td>123456</td><td width='10'></td></tr><tr><td colspan='4'></td><td>GROUP</td><td>SCIENCE</td><td width='10'></td></tr><tr><td width='10'></td><td>NAME</td><td colspan='4'>" + stdName.value + "</td><td width='10'></td></tr><tr><td width='10'></td><td>FATHER NAME</td><td colspan='4'>" + fatherName.value + "</td><td width='10'></td></tr><tr><td width='10'></td><td>SCHOOL/PRIVATE</td><td colspan='4'>HABIB PUBLIC SCHOOL NORTH NAZIMABAD</td><td width='10'></td></tr><tr height='50'><td colspan='7'</td></tr><tr><td width='10'></td><td class='main' colspan='5' style='text-align: center;'>S U B J E C T S</td><td width='10'></td></tr><tr><td width='10'></td><td class='main' colspan='2' style='text-align: center;'>C O M P O N E N T I</td><td class='main' style='text-align: center;' width='75'>MARKS</td><td class='main' style='text-align: center;'>C O M P O N E N T II</td><td class='main' style='text-align: center;' width='70'>MARKS</td><td width='10'></td></tr><tr height='20'><td colspan='7'</td></tr><tr><td width='10'></td><td class='main'>SINDHI SALEES</td><td class='main' style='text-align: center;'>" + marksObtSindhi.value + "</td><td class='main' style='text-align: center;'>" + mObtUrSn + "</td><td class='main' rowspan='2'>MATHEMATICS</td><td class='main' style='text-align: center;'>" + marksObtMath.value + "</td><td width='10'></td></tr><tr><td width='10'></td><td class='main'>URDU NORMAL</td><td class='main' style='text-align: center;'>" + marksObtUrdu.value + "</td><td class='main' style='text-align: right;'>/150</td><td class='main' style='text-align: right;'>/100</td><td width='10'></td></tr><tr><td width='10'></td><td class='main'>ENGLISH (COMP) PAPER I</td><td class='main' style='text-align: center;'>" + marksObtEnglish1.value + "</td><td class='main' style='text-align: center;'>" + mObtEn1En2 + "</td><td class='main'>BIOLOGY THEORY</td><td class='main' style='text-align: right;'>" + marksObtBioThe.value + "/75</td><td width='10'></td></tr><tr><td width='10'></td><td class='main'>ENGLISH (COMP) PAPER II</td><td class='main' style='text-align: center;'>" + marksObtEnglish2.value + "</td><td class='main' style='text-align: right;'>/150</td><td class='main'>BIOLOGY PRACTICAL</td><td class='main' style='text-align: right;'>" + marksObtBioPrc.value + "/25</td><td width='10'></td></tr><tr><td width='10'></td><td class='main' colspan='2' rowspan='2'>PAKISTAN STUDIES</td><td class='main' style='text-align: center;'>" + marksObtPakStd.value + "</td><td class='main'>PHYSICS THEORY</td><td class='main' style='text-align: right;'>" + marksObtPhyThe.value + "/75</td><td width='10'></td></tr><tr><td width='10'></td><td class='main' style='text-align: right;'>/75</td><td class='main'>PHYSICS PRACTICAL</td><td class='main' style='text-align: right;'>" + marksObtPhyPrc.value + "/25</td><td width='10'></td></tr><tr><td width='10'></td><td class='main' colspan='2' rowspan='2'>ISLAMIAT</td><td class='main' style='text-align: center;'>" + marksObtIslamiat.value + "</td><td class='main'>CHEMISTRY THEORY</td><td class='main' style='text-align: right;'>" + marksObtChmThe.value + "/75</td><td width='10'></td></tr><tr><td width='10'></td><td class='main' style='text-align: right;'>/75</td><td class='main'>CHEMISTRY PRACTICAL</td><td class='main' style='text-align: right;'>" + marksObtChmPrc.value + "/25</td><td width='10'></td></tr><tr height='40'><td colspan='7'></td></tr><tr><td width='10'></td><td colspan='2' style='text-align: right;'>GRAND TOTAL: </td><td class='main' style='text-align: center;'>" + grandTotal + "</td><td colspan='2' style='padding-left: 15px;'>OUT OF 850 MARKS</td><td width='10'></td></tr><tr height='20'><td colspan='7'></td></tr><tr><td width='10'></td><td colspan='2' style='text-align: right;'>GRADE:</td><td class='main' style='text-align: center;'>" + grade + "</td><td colspan='2'></td><td width='10'></td></tr>";

    table.innerHTML = str;
}


function resetValues() {

    var stdName = document.getElementById("stdname");
    var fatherName = document.getElementById("fathername");
    var marksObtSindhi = document.getElementById("sindhi");
    var marksObtUrdu = document.getElementById("urdu");
    var marksObtEnglish1 = document.getElementById("english1");
    var marksObtEnglish2 = document.getElementById("english2");
    var marksObtPakStd = document.getElementById("pakstd");
    var marksObtIslamiat = document.getElementById("islamiat");
    var marksObtMath = document.getElementById("math");
    var marksObtBioThe = document.getElementById("biothe");
    var marksObtBioPrc = document.getElementById("bioprc");
    var marksObtPhyThe = document.getElementById("phythe");
    var marksObtPhyPrc = document.getElementById("phyprc");
    var marksObtChmThe = document.getElementById("chmthe");
    var marksObtChmPrc = document.getElementById("chmprc");

    stdName.value = "";
    fatherName.value = "";
    marksObtSindhi.value = "";
    marksObtUrdu.value = "";
    marksObtEnglish1.value = "";
    marksObtEnglish2.value = "";
    marksObtPakStd.value = "";
    marksObtIslamiat.value = "";
    marksObtMath.value = "";
    marksObtBioThe.value = "";
    marksObtBioPrc.value = "";
    marksObtPhyThe.value = "";
    marksObtPhyPrc.value = "";
    marksObtChmThe.value = "";
    marksObtChmPrc.value = "";

    var table = document.getElementById("marksheet");
    table.innerHTML = "";
}