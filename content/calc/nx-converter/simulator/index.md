---
date: 2023-11-07T00:20:00+09:00
title: "解放オプション変換器シミュレーター"
description: ""
tags: ["計算機"]
aliases: [
  "/posts/nx-converter-sim/",
  "/posts/nx-converter/simulator/",
]
---

<script defer src="/js/form-storage/index.umd.js"></script>
{{< script src="index.js" >}}

<form action="javascript:void(0);">
<table>
  <tr>
    <td>部位</td>
    <td>
      <select id="type" name="type" class="in">
        <option>武器</option>
        <option>武器(笛)</option>
        <option>ネックレス</option>
        <option>ヘルメット</option>
        <option>冠</option>
        <option>イヤリング、マント</option>
        <option>ベルト</option>
        <option>共用鎧</option>
        <option>専用鎧</option>
        <option>グローブ、ブレスレット</option>
        <option>ブーツ</option>
      </select>
    </td>
  </tr>
  <tr>
    <td>等級</td>
    <td>
        <select id="rank" name="rank" class="in">
          <option>U</option>
          <option>DXU</option>
          <option>UMU</option>
        </select>
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <input type="button" id="gacha" value="ガチャる">
      <span id="count">0</span>回目
    </td>
  </tr>
</table>
</form>

<pre id="out"></pre>
