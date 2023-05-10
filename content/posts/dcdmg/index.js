let storage = undefined;
const dcdmg_calc = (base, dcdmg, amp = 1, cruel_amp = 1) => {
  const DC_FACTOR = 4;
  return Math.floor(
    base *
      DC_FACTOR *
      (1 + 0.01 * (dcdmg / 100) ** 2 + 1.01 * (dcdmg / 100)) *
      amp *
      cruel_amp
  );
};
const doit = () => {
  const base = parseInt(document.getElementById("base").value);
  const dcdmg = parseInt(document.getElementById("dcdmg").value);
  const cruel = parseInt(document.getElementById("cruel").value) / 100;
  document.getElementById("result-dc").innerText = dcdmg_calc(
    base,
    dcdmg
  ).toLocaleString();
  document.getElementById("result-25").innerText = dcdmg_calc(
    base,
    dcdmg,
    2.5
  ).toLocaleString();
  document.getElementById("result-2525").innerText = dcdmg_calc(
    base,
    dcdmg,
    2.5 * 2.5
  ).toLocaleString();

  document.getElementById("result-dc-cruel").innerText = dcdmg_calc(
    base,
    dcdmg,
    1,
    cruel
  ).toLocaleString();
  document.getElementById("result-25-cruel").innerText = dcdmg_calc(
    base,
    dcdmg,
    2.5,
    cruel
  ).toLocaleString();
  document.getElementById("result-2525-cruel").innerText = dcdmg_calc(
    base,
    dcdmg,
    2.5 * 2.5,
    cruel
  ).toLocaleString();
  storage.save();
};
document.addEventListener("DOMContentLoaded", () => {
  const elms_in = document.querySelectorAll(".in");
  elms_in.forEach((e, k, p) => {
    e.addEventListener("input", doit);
  });
  storage = new FormStorage("form", {
    name: "rsvzui-dcdmg",
    includes: ['[class="in"]'],
  });
  storage.apply();
  doit();
});
