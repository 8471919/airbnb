const makeHouse = (house) => {
    const innerHTML = `
    <div>
        <p style="color:red;">${house.title}</p>
        <p>${house.price}</p>
        <p>${house.place}</p>
    </div>
    <div style="overflow:hidden;">
        <img src="${house.image}" width="300px" height="300px" style="border-radius:5px 5px 5px 5px;">
    </div>
        `;
    return innerHTML;
};

class App {
    constructor() {
        // body
        const body = document.body;
        body.style.paddingLeft = "15%";
        body.style.paddingRight = "15%";
        const input = document.createElement("input");
        input.id = "priceInput";

        body.appendChild(input);

        input.oninput = this.search;
        input.type = "text";

        const result = document.createElement("div");
        result.id = "result";

        body.appendChild(result);
    }

    async search() {
        const result = document.getElementById("result");
        while (result.childNodes.length) {
            const firstChild = result.childNodes[0];
            result.removeChild(firstChild);
        }

        const data = document.getElementById("priceInput").value;
        const response = await fetch("/house?price=" + data, {
            method: "POST",
        });
        const jsonData = await response.json();

        for (const house of jsonData) {
            const item = document.createElement("div");
            item.innerHTML = makeHouse(house);
            item.style.display = "flex";
            item.style.border = "1px solid black";

            result.appendChild(item);
        }
    }
}

new App();
