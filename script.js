console.log("I'm running!");

function killAlert() {
    var target_object = document.querySelector("#alert");
    console.log(target_object);
    target_object.remove();
}

function changeTemp() {
    var temp_unit = document.querySelector("#temp").value;
    console.log(temp_unit);
    if (temp_unit == "F°") {
    var target_object = document.querySelector("#A1");
    console.log(target_object);
    target_object.innerText = "75" + "°";
    var target_object = document.querySelector("#A2");
    console.log(target_object);
    target_object.innerText = "64" + "°";
    var target_object = document.querySelector("#B1");
    console.log(target_object);
    target_object.innerText = "81" + "°";
    var target_object = document.querySelector("#B2");
    console.log(target_object);
    target_object.innerText = "66" + "°";
    var target_object = document.querySelector("#C1");
    console.log(target_object);
    target_object.innerText = "70" + "°";
    var target_object = document.querySelector("#C2");
    console.log(target_object);
    target_object.innerText = "61" + "°";
    var target_object = document.querySelector("#D1");
    console.log(target_object);
    target_object.innerText = "79" + "°";
    var target_object = document.querySelector("#D2");
    console.log(target_object);
    target_object.innerText = "70" + "°";
    } else {
        var target_object = document.querySelector("#A1");
        console.log(target_object);
        target_object.innerText = "24" + "°";
        var target_object = document.querySelector("#A2");
        console.log(target_object);
        target_object.innerText = "18" + "°";
        var target_object = document.querySelector("#B1");
        console.log(target_object);
        target_object.innerText = "27" + "°";
        var target_object = document.querySelector("#B2");
        console.log(target_object);
        target_object.innerText = "19" + "°";
        var target_object = document.querySelector("#C1");
        console.log(target_object);
        target_object.innerText = "21" + "°";
        var target_object = document.querySelector("#C2");
        console.log(target_object);
        target_object.innerText = "16" + "°";
        var target_object = document.querySelector("#D1");
        console.log(target_object);
        target_object.innerText = "26" + "°";
        var target_object = document.querySelector("#D2");
        console.log(target_object);
        target_object.innerText = "21" + "°";
    }
}