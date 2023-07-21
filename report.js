

document.querySelector("form").addEventListener("submit", funReport);

function funReport(){
    event.preventDefault();

    var image = document.querySelector("#image").value;
    var name = document.querySelector("#name").value;
    var batch = document.querySelector("#batch").value;
    var dsa = document.querySelector("#dsa").value;
    var cs = document.querySelector("#cs").value;
    var coding = document.querySelector("#coding").value;
    var parcentage = (parseInt(dsa)+parseInt(cs)+parseInt(coding))/3;

    var tr = document.createElement("tr");

    // var td1 = document.createElement("td");
    // td1.innerText = image;
    var image1 = document.createElement("img");
    image1.src = image;

    var td2 = document.createElement("td");
    td2.innerText = name;
    var td3 = document.createElement("td");
    td3.innerText = batch;
    var td4 = document.createElement("td");
    td4.innerText = dsa;
    var td5 = document.createElement("td");
    td5.innerText = cs;
    var td6 = document.createElement("td");
    td6.innerText = coding;
    var td7 = document.createElement("td");
    td7.innerText = parcentage;
    var td8 = document.createElement("td");
    if(parcentage > 5) {
        td8.innerText = "Pass";
    }
    else {
        td8.innerText = "Fail";
    }
    
    tr.append(image1, td2, td3, td4, td5, td6, td7, td8);

    document.querySelector("tbody").append(tr);

}

