// const makeHouse = (house) => {
//     const innerHTML = `
//     <div style = "min-width: calc(100% - 300px)">
//         <p style="color:red;">${house.title}</p>
//         <p>${house.price}</p>
//         <p>${house.place}</p>
//     </div>
//     <div style="overflow:hidden;">
//         <img src="${house.image}" width="300px" height="300px" style="border-radius:5px 5px 5px 5px;">
//     </div>
//         `;
//     return innerHTML;
// };

// class App {
//     constructor() {
//         // body
//         const body = document.body;
//         body.style.paddingLeft = "15%";
//         body.style.paddingRight = "15%";
//         const input = document.createElement("input");
//         input.id = "priceInput";

//         body.appendChild(input);

//         input.oninput = this.search;
//         input.type = "text";

//         const result = document.createElement("div");
//         result.id = "result";

//         body.appendChild(result);

//         document.getElementById("priceInput").value = 50000;
//         this.search();
//     }

//     async search() {
//         const result = document.getElementById("result");
//         while (result.childNodes.length) {
//             const firstChild = result.childNodes[0];
//             result.removeChild(firstChild);
//         }

//         const data = document.getElementById("priceInput").value;
//         const response = await fetch("/search?price=" + data, {
//             method: "POST",
//         });
//         const jsonData = await response.json();

//         for (const house of jsonData) {
//             const item = document.createElement("div");
//             item.innerHTML = makeHouse(house);
//             item.style.display = "flex";
//             item.style.borderBottom = "1px solid #D3D3D3";

//             result.appendChild(item);
//         }
//     }
// }

// new App();

const in_header = () => {
    const innerHTML = `
    <div style = "border: 1px solid black; display:flex;">
        <div style="width:35%; height:80px; padding:0px 10px 0px 10px;">
            <img style="height:100%;", src="https://cdn.designrush.com/uploads/inspiration_images/4810/990__1511452487_364_Airbnb.png", alt="airbnblogo">
        </div>
        <div style="padding:30px;">
            <input id="search"/>
        </div>
    </div>
    `;

    return innerHTML;
};

class App {
    constructor() {
        //body
        const body = document.body;
        const header = document.createElement("header");
        const main = document.createElement("main");
        const footer = document.createElement("footer");

        header.innerHTML = in_header();

        body.appendChild(header);
        body.appendChild(main);
        body.appendChild(footer);
    }
}

new App();
