const storage = new FormStorage("form", {
  name: "rsvzui-nx-option-converter",
  includes: ['[class="in"]'],
});

/** @type {{type: string, rank: string, pos: number, value: string, p: string, p_improved: string}[]} */
let table = undefined;

const getParams = () => {
  const type = document.getElementById("type").value;
  const rank = document.getElementById("rank").value;
  const pos = Number(document.getElementById("pos").value);
  return [type, rank, pos];
};

const doit = () => {
  const [type, rank, pos] = getParams();
  const filtered = table.filter(
    (v) => v.type === type && v.rank === rank && v.pos === pos
  );
  const out = document.getElementById("out");
  out.innerHTML = "";
  const t = document.createElement("table");
  const tr_head = document.createElement("tr");
  t.appendChild(tr_head);
  tr_head.innerHTML = /* html */ `<th>オプション効果</th><th>数値</th><th>確率</th><th>改良確率</th>`;
  filtered.map((v) => {
    const tr = document.createElement("tr");
    const effect = document.createElement("td");
    effect.innerText = v.effect;
    tr.appendChild(effect);
    const value = document.createElement("td");
    value.innerText = v.value;
    tr.appendChild(value);
    const p = document.createElement("td");
    p.innerText = v.p;
    tr.appendChild(p);
    const p_improved = document.createElement("td");
    p_improved.innerText = v.p_improved;
    tr.appendChild(p_improved);
    t.appendChild(tr);
  });
  out.appendChild(t);
  storage.save();
};

document.addEventListener("DOMContentLoaded", async () => {
  table = await fetch("table.json").then((r) => r.json());
  storage.addChildrenEventListener("input", doit);
  storage.apply();
  doit();
});
