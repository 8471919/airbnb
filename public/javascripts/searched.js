const CARDS_OF_LINE = 3;

const makeHeader = () => {
    const innerHTML = `
    <div style = "border-bottom: 1px solid #D1D1D1; display:flex;">
        <div style="width:35%; height:80px; padding:0px 10px 0px 10px;">
            <img style="height:100%;", src="https://cdn.designrush.com/uploads/inspiration_images/4810/990__1511452487_364_Airbnb.png", alt="airbnblogo">
        </div>
        <div style="padding:30px; width:25%">
            <input type="text", id="search", placeholder="가격을 입력해주세요", onfocus="this.placeholder=''", onblur="this.placeholder='가격을 입력해주세요'"/>
        </div>
    </div>
    `;
    return innerHTML;
};

const makeItem = (result) => {
    const innerHTML = `
    <div class="houseImg">
        <img style="height:200px", src="${result.image}">
    </div>
    <div style="width:60%; overflow:hidden;">
        <p>${result.title}</p>
        <p>${result.place}</p>
        <p>${result.price}</p>
        <p>${result.description1}</p>
        <p>${result.description2}</p>
    </div>
    `;
    return innerHTML;
};

class App {
    constructor() {
        //body
        const body = document.body;
        //header
        const header = document.createElement("header");
        header.innerHTML = makeHeader();
        body.appendChild(header);
        //main
        const main = document.createElement("main");
        const input = document.getElementById("search");
        input.oninput = this.search;

        body.appendChild(main);

        input.value = 30000;
        this.search();
    }
    //class 내부함수에서는 되도록 화살표를 쓰지말자. 인스턴스에 대한 문제가 발생할 수 있다.
    //class 내부함수는 function을 붙이지 않는다.
    async search() {
        const [main] = document.getElementsByTagName("main");
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }

        const { value: price } = document.getElementById("search");
        const response = await fetch(`/search?price=${price}`, {
            method: "POST",
        });
        const jsonResponse = await response.json();

        while (jsonResponse.length) {
            const items = createEl("div", 0, "items");
            items.style.display = "flex";

            for (let i = 0; i < CARDS_OF_LINE; i++) {
                const item = createEl("div", 0, "item");
                item.style.display = "flex";
                const itemContext = jsonResponse.pop();
                if (itemContext) {
                    item.innerHTML = makeItem(itemContext);
                    items.appendChild(item);
                }
            }
            main.appendChild(items);
        }
    }
}

const createEl = (tag, id, className) => {
    const result = document.createElement(`${tag}`);
    id && (result.id = id);
    className && (result.className = className);
    return result;
};

window.onload = () => {
    new App();
};
