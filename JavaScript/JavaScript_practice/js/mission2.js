document.addEventListener("DOMContentLoaded", function () {
  let kyu = ["", "", "", "", "", ""];
  // const arr = [1123000, 2431200, 311100, 4670000, 500000, 640000,
  //   7700000, 873000, 90000, 100000, 710000, 3846000];

  // const ran = arr[Math.floor(Math.random() * arr.length)];

  // let kyu = [ran];
  const line = document.getElementsByTagName("tr").length;
  setInterval(() => {
    
    const randdom1 = String(Math.round(Math.random() * 100)).padStart(
      2,
      "0"
    );
    const randdom2 = String(Math.round(Math.random() * 100)).padStart(
      2,
      "0"
    );

    let makeTable = ``;
    for (let i = line - 1; i > 0; i--) {
      kyu[2 * i] = kyu[2 * (i - 1)];
      kyu[2 * i + 1] = kyu[2 * (i - 1) + 1];

      // console.log(kyu); //첫째 행 랜덤값 출력

      makeTable =
        `
          <tr>
            <td>${kyu[2 * i]}</td>
            <td>${kyu[2 * i + 1]}</td>
          </tr>
        ` + makeTable;
    }
    kyu[0] = randdom1;
    kyu[1] = randdom2;
    makeTable =
      `
        <tr>
          <td>${kyu[0]}</td>
          <td>${kyu[1]}</td>
        </tr>
      ` + makeTable;

    document.querySelector(`tbody`).innerHTML = `${makeTable}`;

  }, 2000);

});
