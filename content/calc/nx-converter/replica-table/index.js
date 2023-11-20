const storage = new FormStorage("form", {
  name: "rsvzui-nx-option-converter-replica",
  includes: ['[class="in"]'],
});

/** @type {{type: string, rank: string, pos: number, effect: string, value: string, p: string}[]} */
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
  t.classList.add("sortable");

  const caption = document.createElement("caption");
  caption.innerText = `レプリカ解放オプション変換器: ${type} ${rank} #${pos}`;
  t.appendChild(caption);

  const thead = document.createElement("thead");
  thead.innerHTML = /* html */ `\
<tr><th>#</th><th>オプション効果</th><th>数値</th><th>確率</th></tr>`;
  t.appendChild(thead);

  const tbody = document.createElement("tbody");
  t.appendChild(tbody);
  filtered.map((v, i) => {
    const row = document.createElement("tr");
    row.innerHTML = /* html */ `\
<td>${i}</td><td>${v.effect}</td><td>${v.value}</td><td>${v.p}</td>`;
    tbody.appendChild(row);
  });
  out.appendChild(t);
  storage.save();
};

document.addEventListener("DOMContentLoaded", async () => {
  table = await fetch("../replica-table.json").then((r) => r.json());
  storage.addChildrenEventListener("input", doit);
  storage.apply();
  doit();
});
