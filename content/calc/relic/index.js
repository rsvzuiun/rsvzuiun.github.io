const storage = new FormStorage("form", {
  name: "rsvzui-relic",
  includes: ['[class="in"]'],
});

/** @type {{text: string, pos: number, effect: string}[]} */
let table = undefined;

const doit = () => {
  const pos = Number(document.getElementById("pos").value);
  const filtered = table.filter((v) => v.pos === pos);
  const out = document.getElementById("out");
  out.innerHTML = "";
  const t = document.createElement("table");
  t.classList.add("sortable");

  const thead = document.createElement("thead");
  thead.innerHTML = /* html */ `\
<tr><th>#</th><th>名称</th><th>オプション効果</th></tr>`;
  t.appendChild(thead);

  const tbody = document.createElement("tbody");
  t.appendChild(tbody);
  filtered.map((v, i) => {
    const row = document.createElement("tr");
    row.innerHTML = /* html */ `<td>${i}</td><td>${v.text}</td><td>${v.effect}</td>`;
    tbody.appendChild(row);
  });
  out.appendChild(t);
  storage.save();
};

document.addEventListener("DOMContentLoaded", async () => {
  table = await fetch("./table.json").then((r) => r.json());
  storage.addChildrenEventListener("input", doit);
  storage.apply();
  doit();
});
