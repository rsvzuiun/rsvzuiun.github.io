+++
date = 2023-11-07T00:00:00+09:00
title = "解放オプション変換器の確率表"
description = "解放オプション変換器でどんなオプションが出るのか"
summary = "解放オプション変換器でどんなオプションが出るのか"
tags = ["計算機", "アイテム", "解放オプション変換器"]
aliases = [
  "/posts/nx-open-option-converter/",
  "/posts/nx-converter/table/",
]
+++

<script defer src="/js/form-storage/index.umd.js"></script>
<link href="/js/sortable-tablesort/sortable-base.min.css" rel="preload stylesheet" as="style" />
<script defer src="/js/sortable-tablesort/sortable.min.js"></script>
{{< script src="index.js" >}}

<style>
#out th,
#out td {
  font-size: 16px;
  line-height: 1.0;
  padding: 5px 5px;
}
#out tr *:nth-child(2) {
  border-right: 1px solid var(--border);
}
</style>

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
    <td>位置</td>
    <td>
        <select id="pos" name="pos" class="in">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
    </td>
  </tr>
</table>
</form>
<div id="out"></div>
