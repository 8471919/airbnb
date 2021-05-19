
const buttonFunc = () => {
    
    fetch('/house/1', {
        
    }).then((res) => {
        if (res.status !== 200) {
            console.log('요청이 실패했습니다!')
        }
        console.log(res);
        return res.json();
    }).then((res) => {
        const newEl = document.createElement('div');
        const result = document.getElementById('result');
        const houses = res;
        const {title, place, image} = houses[0];

        newEl.innerHTML = `<div><p>${title}</p><img width='100px' src = '${image}'></div>`; 
        // newEl.innerText = `<button>zzz</button>`
        result.appendChild(newEl);
    })
    
}

const obj = {
    name : 'kakasoo',
    age :25,
};

console.log(obj);

fetch('/house', {
    headers : {
        'Content-Type':'application/json',
    },
    method:'POST',
    body: JSON.stringify(obj),
}).then((res) => console.log(res));

// .then((res) => res.json()).then((res) => console.log(res));