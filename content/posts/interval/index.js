const storage = new FormStorage("form", {
  name: "rsvzui-interval",
  includes: ['[class="in"]'],
});

/** @returns {[number, number]} */
const clopper_pearson = (
  /** @type {number} */ n,
  /** @type {number} */ x,
  /** @type {number} */ confidence
) => {
  if (
    !Number.isInteger(n) ||
    !Number.isInteger(x) ||
    confidence <= 0 ||
    1 <= confidence
  )
    return [NaN, NaN];
  const alpha = 1 - confidence;
  return [
    betaincinv(alpha / 2, x, n - x + 1),
    betaincinv(1 - alpha / 2, x + 1, n - x),
  ];
};

const doit = () => {
  const n = Number(document.getElementById("n").value);
  const x = Number(document.getElementById("x").value);
  const confidence = Number(document.getElementById("confidence").value) / 100;
  const prec = Number(document.getElementById("prec").value);
  const [lower, upper] = clopper_pearson(n, x, confidence);
  document.getElementById("out-lower").innerText = (lower * 100).toPrecision(
    prec
  );
  document.getElementById("out-upper").innerText = (upper * 100).toPrecision(
    prec
  );

  storage.save();
};

document.addEventListener("DOMContentLoaded", () => {
  storage.addChildrenEventListener("input", doit);
  storage.apply();
  doit();
});
