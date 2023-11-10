---
date: 2023-05-10T12:37:52+09:00
title: "薬回復計算機"
tags: ["計算機"]
aliases: ["posts/pot"]
math: true
---

<script defer src="/js/form-storage/index.umd.js"></script>
{{< script src="index.js" >}}

## 計算条件

<form action="javascript:void(0);">
  <table>
    <tr>
      <td>最大HP</td>
      <td><input type="number" name="hp" id="hp" class="in" value="200000" min="0" max="200000"></td>
    </tr>
    <tr>
      <td>健康</td>
      <td><input type="number" name="con" id="con" class="in" value="15000" min="0"></td>
    </tr>
    <tr>
      <td>薬回復%</td>
      <td><input type="number" name="pot-boost" id="pot-boost" class="in" value="250" min="0" max="255"></td>
    </tr>
    <tr>
      <td>生命の息吹%</td>
      <td><input type="number" name="breath" id="breath" class="in" value="100" min="0" max="100"></td>
    </tr>
  </table>
</form>

## 計算結果

<table>
  <tr>
    <th></th>
    <th>単位</th>
    <th>息吹なし</th>
    <th>息吹あり</th>
  </tr>
  <tr>
    <td>秒間回復速度</td>
    <td>pt/秒</td>
    <td><span id="result-hps"></span></td>
    <td><span id="result-hps-breath"></span></td>
  </tr>
  <tr>
    <td>最大HP回復にかかる時間</td>
    <td>秒</td>
    <td><span id="result-time"></span></td>
    <td><span id="result-time-breath"></span></td>
  </tr>
</table>

## 計算式

<p>$$ [\text{秒間回復速度}] = (1 + [\text{薬回復\%}]/100) \cdot ([\text{健康}] + 50)/5 \cdot (1 + [\text{生命の息吹\%}]/100) $$</p>

## 参考

{{< tweet user="rsvzui" id="1607002621923164160" >}}
