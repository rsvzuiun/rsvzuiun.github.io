---
date: 2023-09-04T23:45:49+09:00
title: "装備要求レベル計算機"
description: ""
tags: ["計算機"]
---

<script defer src="/js/form-storage/index.umd.js"></script>
{{< script src="index.js" >}}

<form action="javascript:void(0);">
  <table>
    <tr>
      <td>ベース要求Lv</td>
      <td align="right"></td>
      <td><input type="number" name="base" id="base" class="in" style="width: 5em"></td>
    </tr>
    <tr>
      <td>Nx1OP目</td>
      <td align="right">-</td>
      <td><input type="number" name="nx_minus" id="nx_minus" class="in" style="width: 5em"></td>
    </tr>
    <tr>
      <td>バッチなど</td>
      <td align="right">-</td>
      <td><input type="number" name="badge_minus" id="badge_minus" class="in" style="width: 5em"></td>
    </tr>
    <tr>
      <td>1OP *</td>
      <td align="right">+</td>
      <td><input name="op1" id="op1" class="in" style="width: 5em"></td>
      <td><input type="search" name="op1-sel" id="op1-sel" class="in" list="oplist" placeholder="オプション名"></td>
    </tr>
    <tr>
      <td>2OP *</td>
      <td align="right">+</td>
      <td><input name="op2" id="op2" class="in" style="width: 5em"></td>
      <td><input type="search" name="op2-sel" id="op2-sel" class="in" list="oplist" placeholder="オプション名"></td>
    </tr>
    <tr>
      <td>3OP *</td>
      <td align="right">+</td>
      <td><input name="op3" id="op3" class="in" style="width: 5em"></td>
      <td><input type="search" name="op3-sel" id="op3-sel" class="in" list="oplist" placeholder="オプション名"></td>
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
  <p>* オプションなしは空白のまま、NPCオプションなど要求レベル0のオプションは0を入力してください。</p>
  <p>* オプション名は正式な名称の一部を入力すると候補が絞り込まれます。<br />参照: <a href="https://docs.google.com/spreadsheets/d/1QZ3CZSsYtcK-LsFyYl1FheEvL4QBL28ATxgZk2f_244/edit?usp=drive_link" target="_blank">オプション名の一覧</a></p>
  <p>** 装備がUM もしくは ULTオプションを含むならUM(アイコン右下がUMになります)、そうでなければNを選択してください。</p>
  <datalist id="oplist"></datalist>
</form>
