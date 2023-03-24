const countValue  = document.querySelector('#counter');

const increment = ()=>{
 let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value;
};
const dicrement = ()=>{
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
};
const reset = ()=>{
    let value = parseInt(countValue.innerText);
    value = 0;
    countValue.innerText = value;
}