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
    
    var grade;

    if (percentage >= 80){
        grade = "A-1";
    }
    else if (percentage >= 70 || percentage < 80){
        grade = "A";
    }
    else if (percentage >= 60 || percentage < 70){
        grade = "B";

    }
    else if (percentage >= 50 || percentage < 60){
        grade = "C";

    }
    else if (percentage >= 40 || percentage < 50){
        grade = "D";
    }
    else{
        grade = "FAIL"
    }

    var table = document.getElementById("marksheet");

    var str = "<tr><td colspan='5' style='text-align: center;'>BOARD OF SECONDARY EDUCATION</td></tr><tr><td colspan='5' style='text-align: center;'>KARACHI</td></tr><tr><td colspan='5' style='text-align: center;'>STATEMENT OF MARKS</td></tr><tr><td colspan='5' style='text-align: center;'>S.S.C. EXAMINATION</td></tr><tr><td colspan='5' style='text-align: center;'>(FOR SUCCESSFUL CANDIDATES ONLY)</td></tr><tr height=70></tr><tr><td>EXAMINATION</td><td colspan='2'>ANNUAL 2020</td><td>ROLL NUMBER</td><td>123456</td></tr><tr><td colspan='3'></td><td >GROUP</td><td>SCIENCE</td><tr><td>NAME</td><td colspan='4'>" + stdName.value + "</td></tr><tr><td>FATHER NAME</td><td colspan='4'>" + fatherName.value + "</td></tr><tr><td>SCHOOL/PRIVATE</td><td colspan='4'>HABIB PUBLIC SCHOOL NORTH NAZIMABAD</td></tr><tr height=50></tr><tr><td colspan='5' style='text-align: center;'>S U B J E C T S</td></tr><tr><td colspan='2' style='text-align: center;'>C O M P O N E N T I</td><td>MARKS</td><td style='text-align: center;'>C O M P O N E N T II</td><td>MARKS</td></tr><tr><td>SINDHI SALEES</td><td>" + marksObtSindhi.value + "</td><td>" + mObtUrSn + "</td><td>MATHEMATICS</td><td>" + marksObtMath.value + "</td></tr><tr><td>URDU NORMAL</td><td>" + marksObtUrdu.value + "</td><td>/150</td><td></td><td>/100</td></tr><tr><td>ENGLISH (COMP) PAPER I</td><td>" + marksObtEnglish1.value + "</td><td>" + mObtEn1En2 + "</td><td>BIOLOGY THEORY</td><td>" + marksObtBioThe.value + "/75</td></tr><tr><td>ENGLISH (COMP) PAPER II</td><td>" + marksObtEnglish2.value + "</td><td>/150</td><td>BIOLOGY PRACTICAL</td><td>" + marksObtBioPrc.value + "/25</td></tr><tr><td colspan='2'>PAKISTAN STUDIES</td><td>" + marksObtPakStd.value + "</td><td>PHYSICS THEORY</td><td>" + marksObtPhyThe.value + "/75</td></tr><tr><td colspan='2'></td><td>/75</td><td>PHYSICS PRACTICAL</td><td>" + marksObtPhyPrc.value + "/25</td></tr><tr><td colspan='2'>ISLAMIAT</td><td>" + marksObtIslamiat.value + "</td><td>CHEMISTRY THEORY</td><td>" + marksObtChmThe.value + "/75</td></tr><tr><td colspan='2'></td><td>/75</td><td>CHEMISTRY PRACTICAL</td><td>" + marksObtChmPrc.value + "/25</td></tr><tr height=40></tr><tr><td colspan='2'>GRAND TOTAL: </td><td>" + grandTotal +  "</td><td colspan='2'>OUT OF 850 MARKS</td></tr><tr height=20></tr><tr><td colspan='2'></td><td>GRADE: </td><td colspan='2'>" + grade + "</td></tr>"  

    table.innerHTML = str
}