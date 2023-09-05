---
date: 2023-09-04T23:45:49+09:00
title: "装備要求レベル計算機"
description: ""
tags: ["計算機"]
math: true
---

<script defer src="/js/form-storage.js"></script>
<script defer src="index.js"></script>

<form action="javascript:void(0);">
  <table>
    <tr>
      <td>ベース要求Lv</td>
      <td align="right"></td>
      <td><input type="number" name="base" id="base" class="in" value="1100" style="width: 5em"></td>
    </tr>
    <tr>
      <td>Nx1OP目</td>
      <td align="right">-</td>
      <td><input type="number" name="nx_minus" id="nx_minus" class="in" value="180" style="width: 5em"></td>
    </tr>
    <tr>
      <td>バッチなど</td>
      <td align="right">-</td>
      <td><input type="number" name="badge_minus" id="badge_minus" class="in" value="0" style="width: 5em"></td>
    </tr>
    <tr>
      <td>1OP *</td>
      <td align="right">+</td>
      <td><input name="op1" id="op1" class="in" value="-" style="width: 5em"></td>
    </tr>
    <tr>
      <td>2OP *</td>
      <td align="right">+</td>
      <td><input name="op2" id="op2" class="in" value="-" style="width: 5em"></td>
    </tr>
    <tr>
      <td>3OP *</td>
      <td align="right">+</td>
      <td><input name="op3" id="op3" class="in" value="-" style="width: 5em"></td>
    </tr>
    <tr>
      <td>N / UM **</td>
      <td align="right"></td>
      <td>
      <select name="method" id="method" class="in">
        <option value="N">N</option>
        <option value="UM">UM</option>
      </select>
      </td>
    </tr>
    <tr>
      <td>要求レベル</td>
      <td align="right"></td>
      <td><span id="out"></span></td>
    </tr>
  </table>
  <p>* 空オプションは"-"など数字ではないものを入力して、NPCオプションなど要求レベル0のオプションは0を入力してください。</p>
  <p>** 装備がUM もしくは ULTオプションを含むならUM(アイコン右下がUMになります)、そうでなければNを選択してください。</p>
</form>
