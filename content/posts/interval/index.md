---
draft: true
date: 2023-09-27T10:13:23+09:00
title: "Clopper-Pearsonの信頼区間"
description: ""
tags: ["計算機", "統計"]
math: true
---

<script defer src="https://cdn.jsdelivr.net/gh/rsvzuiun/form-storage/dist/index.umd.js"></script>
<script defer src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-betaincinv@umd/browser.js"></script>
{{< script src="index.js" >}}

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
      <td>表示精度</td>
      <td><input id="prec" name="prec" type="number" class="in" value="4" min="0">桁</td>
    </tr>
  </table>
<div id="out">
  <input id="confidence" name="confidence" inputmode="decimal" class="in" value="95" style="width: 5em">%
  信頼区間 = [
    <span id="out-lower"></span>%,
    <span id="out-upper"></span>%]
</div>
</form>
