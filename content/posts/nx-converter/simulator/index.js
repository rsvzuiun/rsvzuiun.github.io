const storage = new FormStorage("form", {
  name: "rsvzui-converter-sim",
  includes: ['[class="in"]'],
});

/** @type {{type: string, rank: string, pos: number, effect: string, value: string, p: number, p_improved: string}[]} */
let table = undefined;

const getParams = () => {
  const type = document.getElementById("type").value;
  const rank = document.getElementById("rank").value;
  return [type, rank];
};

/**
 *
 * @param {{type: string, rank: string, pos: number, effect: string, value: string, p: number, p_improved: string}[]} target
 * @param {number} pos
 * @param {number} r
 */
const select = (target, pos, r) => {
  let acc = 0;
  for (const x of target.filter((v) => v.pos === pos)) {
    acc += x.p;
    if (r < acc) return x;
  }
  return undefined;
};

const gacha = () => {
  const [type, rank] = getParams();
  const target = table.filter((v) => v.type === type && v.rank === rank);

  const ops = [1, 2, 3, 4].map((i) => select(target, i, Math.random()));

  document.getElementById("out").innerText = ops
    .map((v) => `- ${v.effect}` + (v.value === "-" ? "" : ` ${v.value}`))
    .join("\n");
};

document.addEventListener("DOMContentLoaded", async () => {
  table = await fetch("../nx-open-option-converter/table.json")
    .then((r) => r.json())
    .then((j) =>
      j.map((v) => ({
        ...v,
        p: Number(v.p.replace("%", "")) / 100,
      }))
    );
  document.getElementById("gacha").addEventListener("click", gacha);
  storage.addChildrenEventListener("input", () => storage.save());
  storage.apply();
});
