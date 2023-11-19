+++
date = 2023-11-19T23:40:00+09:00
title = "遺物オプション一覧"
description = "遺物でどんなオプションが出るのか"
summary = "遺物でどんなオプションが出るのか"
tags = ["計算機", "アイテム", "遺物"]
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
    <td>位置</td>
    <td>
        <select id="pos" name="pos" class="in">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
    </td>
  </tr>
</table>
</form>
<div id="out"></div>
