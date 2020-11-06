function checkBox() {
    let genderSelected = "";
    if(document.getElementById("other").checked){
        genderSelected = document.getElementById("other").value;
    } else if(document.getElementById("male").checked){
        genderSelected = document.getElementById("male").value;
    } else if(document.getElementById("female").checked){
        genderSelected = document.getElementById("female").value;
    }else if(document.getElementById("nonbinary").checked){
        genderSelected = document.getElementById("nonbinary").value;
    }
    console.log(genderSelected)
    const text = document.getElementById("warning");
    if(genderSelected == "other"){
        text.style.display = "block";
    }else{
        text.style.display = "none";
    }
}
function inputSel(){
    document.getElementById("other").checked = true;
}