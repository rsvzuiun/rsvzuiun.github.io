const storage = new FormStorage("form", {
  name: "rsvzui-dcdmg",
  includes: ['[class="in"]'],
});

// base 基礎ダメ
// fixamp 固定増幅
// dcdmg ダブクリダメ%
// pure 図案書純粋
// enhance 魔力の暴走
// cruel クルーエル%
const dcdmg_calc = ({
  base,
  fixamp,
  dcdmg,
  pure = 0,
  enhance = 0,
  cruel = 0,
}) => {
  const DC_FACTOR = 4;
  return Math.floor(
    base *
      DC_FACTOR *
      (1 + 0.01 * (dcdmg / 100) ** 2 + 1.01 * (dcdmg / 100)) *
      (1 + (pure + fixamp) / 100) *
      (1 + enhance / 100) *
      (1 + cruel / 100)
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
    pure: 150,
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
    pure: 150,
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
    pure: 150,
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
    pure: 150,
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
