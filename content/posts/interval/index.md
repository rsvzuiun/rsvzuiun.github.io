---
date: 2023-09-27T23:53:00+09:00
title: "母比率の区間推定"
description: ""
tags: ["計算機", "統計"]
math: true
---

<script defer src="/js/stdlib/math-base-special-betaincinv/browser.js"></script>
<script defer src="/js/form-storage/index.umd.js"></script>
{{< script src="index.js" >}}

[Clopper-Pearsonの信頼区間](https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval#Clopper%E2%80%93Pearson_interval)

<form action="javascript:void(0);">
  <table>
    <tr>
      <td>試行回数</td>
      <td><input id="n" name="n" type="number" class="in" value="100" min="0"></td>
    </tr>
    <tr>
      <td>生起回数</td>
      <td><input id="x" name="x" type="number" class="in" value="50" min="0"></td>
    </tr>
    <tr>
      <td>名目の信頼区間</td>
      <td><input id="confidence" name="confidence" inputmode="decimal" class="in" value="95">%</td>
    </tr>
    <tr>
      <td>表示精度</td>
      <td><input id="prec" name="prec" type="number" class="in" value="4" min="0">桁</td>
    </tr>
  </table>
<div id="out">
  標本比率 = <span id="out-ratio"></span>%<br/>
  <span id="out-confidence"></span>%信頼区間 = [<span id="out-lower"></span>%, <span id="out-upper"></span>%]
</div>
</form>
