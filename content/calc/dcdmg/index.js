const storage = new FormStorage("form", {
  name: "rsvzui-dcdmg",
  includes: ['[class="in"]'],
});

// base 基礎ダメ
// fixamp 固定増幅
// dcdmg ダブクリダメ%
// amp 図案書純粋 と 図案書勇気 の倍率
// enhance 魔力の暴走
// cruel クルーエル%
const dcdmg_calc = ({
  base,
  fixamp,
  dcdmg,
  amp = 0,
  enhance = 0,
  cruel = 0,
}) => {
  return Math.floor(
    base *
      4 *
      (1 + dcdmg / 100) *
      (1 + dcdmg / 10000 + cruel / 100) *
      (1 + (amp + fixamp) / 100) *
      (1 + enhance / 100)
  );
};
const doit = () => {
  const base = parseInt(document.getElementById("base").value);
  const fixamp = parseInt(document.getElementById("amp").value);
  const dcdmg = parseInt(document.getElementById("dcdmg").value);
  const cruel = Number(document.getElementById("cruel").value);
  document.getElementById("result-dc").innerText = dcdmg_calc({
    base,
    fixamp,
    dcdmg,
  }).toLocaleString();
  document.getElementById("result-pure").innerText = dcdmg_calc({
    base,
    fixamp,
    dcdmg,
    amp: 150,
  }).toLocaleString();
  document.getElementById("result-enhance").innerText = dcdmg_calc({
    base,
    fixamp,
    dcdmg,
    enhance: 150,
  }).toLocaleString();
  document.getElementById("result-pure-enhance").innerText = dcdmg_calc({
    base,
    fixamp,
    dcdmg,
    amp: 150,
    enhance: 150,
  }).toLocaleString();

  document.getElementById("result-dc-cruel").innerText = dcdmg_calc({
    base,
    fixamp,
    dcdmg,
    cruel,
  }).toLocaleString();
  document.getElementById("result-pure-cruel").innerText = dcdmg_calc({
    base,
    fixamp,
    dcdmg,
    amp: 150,
    cruel,
  }).toLocaleString();
  document.getElementById("result-enhance-cruel").innerText = dcdmg_calc({
    base,
    fixamp,
    dcdmg,
    enhance: 150,
    cruel,
  }).toLocaleString();
  document.getElementById("result-pure-enhance-cruel").innerText = dcdmg_calc({
    base,
    fixamp,
    dcdmg,
    amp: 150,
    enhance: 150,
    cruel,
  }).toLocaleString();

  document.getElementById("result-brave").innerText = dcdmg_calc({
    base,
    fixamp,
    dcdmg,
    amp: 110,
  }).toLocaleString();
  document.getElementById("result-brave-enhance").innerText = dcdmg_calc({
    base,
    fixamp,
    dcdmg,
    amp: 110,
    enhance: 150,
  }).toLocaleString();
  document.getElementById("result-brave-cruel").innerText = dcdmg_calc({
    base,
    fixamp,
    dcdmg,
    amp: 110,
    cruel,
  }).toLocaleString();
  document.getElementById("result-brave-enhance-cruel").innerText = dcdmg_calc({
    base,
    fixamp,
    dcdmg,
    amp: 110,
    enhance: 150,
    cruel,
  }).toLocaleString();
  storage.save();
};
document.addEventListener("DOMContentLoaded", () => {
  storage.addChildrenEventListener("input", doit);
  storage.apply();
  doit();
});
