var express = require("express");
var router = express.Router();

const house = require("../database.json");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("search", { title: "Express" });
});

// let index = 0;

// router.post('/', (req, res, next) => {
//     const bodyData = req.body;
//     console.log('body : ',req.body);
//     res.json(bodyData);
// });

// router.get('/:id', (req, res, next) => {
//     const houseNum = req.params;
//     res.json(houseNum.id);
// })

//3만원 이하의 price를 가진 data
router.post("/", (req, res, next) => {
    // console.log(req.params); //id값 사용시. url에 / 사용시.
    let cur;
    console.log(req.query);
    const search_price = Number(req.query.price);

    const searched = house.filter((el) => {
        const temp_searched = el.price
            .split("")
            .filter((el) => !isNaN(Number(el)))
            .join("");

        if (temp_searched[0] !== " ") {
            cur = temp_searched;
        } else {
            cur = temp_searched.slice(1).split(" ")[1];
        }

        if (cur < search_price) return true;
    });

    console.log(searched.length);
    res.json(searched);
});

// router.get("/", (req, res, next) => {
//     res.send("hi");
// });

/* GET home page. */

// router.get('/', function(req, res, next) {
//     const arr = [];
//     for (let i = index; i < index + 1; i++) {
//         arr.push(house[i]);
//     }
//     index += 1;

//     if (arr[0] === null) {
//         // res.send(404);
//         console.log(arr)
//         console.log(arr[0]);
//         res.send(400);
//     }
//     res.send(arr);
// });

module.exports = router;
