const resultSearchForm = document.getElementById("result-search-form");
const eduPzlLabel = document.getElementById("edi-plz");
const eduBody = document.querySelector(".edu-body");
/**
 * Result Search FOrm Manage
 */

let plz1 = getRandomNumber();
let plz2 = getRandomNumber();
localStorage.setItem("edu_pzl", JSON.stringify({ a: plz1, b: plz2 }));
eduPzlLabel.innerHTML = ` ${plz1} + ${plz2} `;

resultSearchForm.onsubmit = (e) => {
  e.preventDefault();

  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data.entries());

  // get pzl data
  const pzlData = JSON.parse(localStorage.getItem("edu_pzl"));
  const stuData = JSON.parse(localStorage.getItem("students"));

  // check pzl
  if (pzlData.a + pzlData.b !== parseInt(data.pzl)) {
    alert("Pzl Not match");
  } else {
    const searchData = stuData.find(
      (item) =>
        item.roll == data.roll &&
        item.reg == data.reg &&
        item.exam == data.examination &&
        item.year == data.year &&
        item.board == data.board
    );

    if (searchData) {
      localStorage.setItem("searchData", JSON.stringify(searchData));
      eduBody.innerHTML = ` 
        <img src="https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1" />
      `;
      setInterval(() => {
        window.location.href = "/result.html";
      }, 3000);
    } else {
      alert("No result found");
    }
  }
};
