let myDiv2 = document.querySelector('.myDiv2');
let myDiv = document.querySelector('.myDiv');
let myH1 = document.createElement('h1');

myH1.setAttribute('id', 'myH1');
myH1.innerHTML = 'inverse color';
myDiv.appendChild(myH1);

let myInput = document.createElement('input');

myInput.type = 'text';
myInput.setAttribute('id'   , 'input');
myDiv.appendChild(myInput);
myInput.focus();
myInput.value = '#';



myInput.addEventListener('keyup', function() {
    if (myInput.value.match(/^[0-9a-z]{1}$/i)) {
        myInput.value = '#' + myInput.value;
    }else{
        document.body.style.backgroundColor = 'white';
        myH1.style.color = 'black';
    }
    if (myInput.value.match(/^#[0-9a-f]{6}$/i)) {
        document.body.style.backgroundColor = myInput.value;
        myH1.style.color = '#' + myInput.value.substr(1).split('').map(function(c) {
            return (15 - parseInt(c, 16)).toString(16);
        }).join('');
    }
    if (myInput.value == "#") {
        document.body.style.backgroundColor = 'white';
        myH1.style.color = 'black';
    }}
);

myInput.addEventListener('keyup' , () => {
    if (myInput.value.match(/^#[0-9a-f]{6}$/i)) {
        let className = (myInput.value).replace('#', '');
        if(/^\d/.test(className)){
            className = 'P' + className;
        };
        if(document.querySelector(`.${className}`) || document.querySelector(`.P${className}`)) return;
        const colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = myInput.value;
        colorDiv.setAttribute('class', className);
        colorDiv.setAttribute('id', "colorDiv");
        const hexCol = document.createElement('div');
        hexCol.setAttribute('class', 'hexCol');
        hexCol.innerHTML = myInput.value;
        let color = myInput.value.replace('#', '');
        let n_match = ntc.name(color);
        const name = document.createElement('div');
        name.setAttribute('class', 'name');
        name.innerHTML = n_match[1];
        colorDiv.appendChild(hexCol);
        colorDiv.appendChild(name);
        let r = parseInt(color.substr(0, 2), 16);
        let g = parseInt(color.substr(2, 2), 16);
        let b = parseInt(color.substr(4, 2), 16);
        let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        colorDiv.style.color = yiq >= 128 ? 'black' : 'white'
        colorDiv.addEventListener('click', () => {
            colorDiv.remove();
        });
        colorDiv.addEventListener('mouseover', () => {
            colorDiv.style.boxShadow = `10px 20px 30px ` + colorDiv.style.backgroundColor;
            colorDiv.addEventListener('mouseout', () => {
                colorDiv.style.boxShadow = '';
            }
            );
        });
        colorDiv.setAttribute('unselectable', 'on');
        myDiv2.appendChild(colorDiv);
    }
})









