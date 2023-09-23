const storage = new FormStorage("form", {
  name: "rsvzui-pot",
  includes: ['[class="in"]'],
});

const calc_hps = (hp, con, pot_boost, breath) =>
  (((1 + pot_boost / 100) * (con + 50)) / 5) * (1 + breath / 100);
const calc_time = (hp, con, pot_boost, breath) =>
  hp / calc_hps(hp, con, pot_boost, breath);
const doit = () => {
  const hp = parseInt(document.getElementById("hp").value);
  const con = parseInt(document.getElementById("con").value);
  const pot_boost = parseInt(document.getElementById("pot-boost").value);
  const breath = parseInt(document.getElementById("breath").value);

  document.getElementById("result-hps").innerText = calc_hps(
    hp,
    con,
    pot_boost,
    0
  ).toFixed(1);
  document.getElementById("result-hps-breath").innerText = calc_hps(
    hp,
    con,
    pot_boost,
    breath
  ).toFixed(1);
  document.getElementById("result-time").innerText = calc_time(
    hp,
    con,
    pot_boost,
    0
  ).toFixed(1);
  document.getElementById("result-time-breath").innerText = calc_time(
    hp,
    con,
    pot_boost,
    breath
  ).toFixed(1);
  storage.save();
};

document.addEventListener("DOMContentLoaded", () => {
  storage.addEventListener("input", doit);
  storage.apply();
  doit();
});
