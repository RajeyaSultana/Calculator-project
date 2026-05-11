const display = document.getElementById("display");
const historyBox = document.getElementById("history");

// Load theme
if(localStorage.getItem("theme")==="light"){
    document.body.classList.add("light");
}

// Append input
function append(value){
    display.value += value;
}

// Clear
function clearDisplay(){
    display.value = "";
}

// Delete last
function deleteLast(){
    display.value = display.value.slice(0,-1);
}

// History
function addHistory(text){
    historyBox.innerHTML += text + "<br>";
    historyBox.scrollTop = historyBox.scrollHeight;
}

// Calculate
function calculate(){
    try{
        let result = math.evaluate(display.value);
        //addHistory(display.value + " = " + result);
        display.value = result;
    }catch{
        display.value = "Error";
    }
}

// Theme toggle
function toggleTheme(){
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        localStorage.setItem("theme","light");
    }else{
        localStorage.setItem("theme","dark");
    }
}

// Copy result
function copyResult(){
    navigator.clipboard.writeText(display.value);
    alert("Copied: " + display.value);
}

// Keyboard support
document.addEventListener("keydown",(e)=>{

    if(!isNaN(e.key) || "+-*/.%()^".includes(e.key)){
        display.value += e.key;
    }

    if(e.key==="Enter") calculate();
    if(e.key==="Backspace") deleteLast();
    if(e.key==="Escape") clearDisplay();
});
