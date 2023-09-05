let storage = undefined;

const doit = () => {
  const base = parseInt(document.getElementById("base").value) || 0;
  const nx_minus = parseInt(document.getElementById("nx_minus").value) || 0;
  const badge_minus =
    parseInt(document.getElementById("badge_minus").value) || 0;
  const op1 = parseInt(document.getElementById("op1").value);
  const op2 = parseInt(document.getElementById("op2").value);
  const op3 = parseInt(document.getElementById("op3").value);
  const method = document.getElementById("method").value;

  const ops = [op1, op2, op3].sort((a, b) => {
    if (isNaN(a)) return 1;
    else if (isNaN(b)) return -1;
    else return b - a;
  });
  let item = base - nx_minus - badge_minus;
  if (method == "UM") {
    if (!isNaN(ops[2])) {
      item +=
        Math.trunc((ops[0] * 3) / 4) +
        Math.trunc(ops[1] / 4) +
        Math.trunc(ops[2] / 20);
    } else if (!isNaN(ops[1])) {
      item += Math.trunc((ops[0] * 3) / 4) + Math.trunc(ops[1] / 4);
    } else if (!isNaN(ops[0])) {
      item += ops[0];
    }
  } else {
    if (!isNaN(ops[0])) item += ops[0];
    if (!isNaN(ops[1])) item += Math.trunc((ops[1] * 2) / 3);
    if (!isNaN(ops[2])) item += Math.trunc((ops[2] * 1) / 3);
  }
  document.getElementById("out").innerText = Math.max(0, item);

  storage.save();
};

document.addEventListener("DOMContentLoaded", () => {
  const elms_in = document.querySelectorAll(".in");
  elms_in.forEach((e, k, p) => {
    e.addEventListener("input", doit);
  });
  storage = new FormStorage("form", {
    name: "rsvzui-equip-lv",
    includes: ['[class="in"]'],
  });
  storage.apply();
  doit();
});
