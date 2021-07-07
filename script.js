let outputBox = document.querySelector(".output");
let getBody = document.body;
const getValue = () => {
    let red = document.getElementById('red').value;
    let green = document.getElementById('green').value;
    let blue = document.getElementById('blue').value;
    let alpha = document.getElementById('alpha').value;
    getBody.style.background = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    outputBox.innerHTML = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}
const copy = () => {
    let ele = document.createElement('textarea');
    ele.value = outputBox.textContent;
    document.body.appendChild(ele);
    ele.select();
    document.execCommand("copy");
    document.body.removeChild(ele);
    alert("copied!!");
}