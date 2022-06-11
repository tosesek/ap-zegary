let data1 = new Date(2022, 5, 24, 10, 30, 0);
let data2 = new Date(2022, 8, 1, 8, 0, 0);
let data3 = new Date(2022, 0, 1, 0, 0, 0);
let data4 = new Date(2022, 0, 30, 0, 0, 0);

function ileZostalo(data, id) {
  //   console.log(data, id);
  let dzisiaj = new Date();
  let doDaty;

  if (data > dzisiaj) {
    doDaty = data - dzisiaj;
  } else {
    doDaty = dzisiaj - data;
  }

  //   console.log(doDaty);

  let sekundy = doDaty / 1000;
  let minuty = sekundy / 60;
  let godziny = minuty / 60;
  let dni = godziny / 24;

  sekundy = Math.floor(sekundy % 60);
  minuty = Math.floor(minuty % 60);
  godziny = Math.floor(godziny % 24);
  dni = Math.floor(dni);

  document.getElementById(
    id
  ).innerHTML = `${dni} : ${godziny} : ${minuty} : ${sekundy}`;
}

function odliczanie() {
  let dzisiaj = new Date();
  // alert(dzisiaj);
  let dzien = dzisiaj.getDate();
  let mc = dzisiaj.getMonth() + 1;
  let rok = dzisiaj.getFullYear();
  //alert(dzien + "/" + mc + "/" + rok);
  let godz = dzisiaj.getHours();
  let min = dzisiaj.getMinutes();
  let sek = dzisiaj.getSeconds();

  if (godz < 10) {
    godz = `0${godz}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (sek < 10) {
    sek = `0${sek}`;
  }

  document.getElementById("zegar").innerHTML =
    dzien +
    "/" +
    mc +
    "/" +
    rok +
    " &nbsp;&nbsp;" +
    godz +
    " : " +
    min +
    " : " +
    sek;

  ileZostalo(data1, "do1");
  ileZostalo(data2, "do2");
  ileZostalo(data3, "do3");
  ileZostalo(data4, "do4");

  setTimeout("odliczanie()", 1000);
}
