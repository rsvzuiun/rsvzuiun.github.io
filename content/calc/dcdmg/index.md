+++
date = 2023-05-09T12:36:11+09:00
lastmod = 2023-10-17T19:07:00+09:00
title = "[旧版] ダブクリダメ計算機"
description = "物理ダブルクリティカルダメージを計算する"
summary = "物理ダブルクリティカルダメージを計算する"
tags = ["計算機", "ダメージ", "ダブクリ"]
aliases = ["/posts/dcdmg/"]
math = true
+++

<script defer src="/js/form-storage/index.umd.js"></script>
{{< script src="index.js" >}}

{{< notice warning >}}
本ページは [2024-09-19 限界突破システム改変](https://www.redstoneonline.jp/bbs/1/view?p=1&ano=903) 以前の仕様に基づきます。
{{< /notice >}}
## 計算条件

<form action="javascript:void(0);">
  <table>
    <tr>
      <td>白ダメ</td>
      <td><input type="number" name="base" id="base" class="in" value="35000"></td>
    </tr>
    <tr>
      <td>限界増幅%</td>
      <td><input type="number" name="amp" id="amp" class="in" value="0"></td>
    </tr>
    <tr>
      <td>ダブクリダメ%</td>
      <td><input type="number" name="dcdmg" id="dcdmg" class="in" value="183"></td>
    </tr>
    <tr>
      <td>クルーエル系%</td>
      <td><input type="number" name="cruel" id="cruel" class="in" value="40"></td>
    </tr>
  </table>
</form>

## 計算結果

<table>
  <tr>
    <th></th>
    <th>赤ダメ</th>
    <th>クルーエル</th>
  </tr>
  <tr>
    <td>赤ダメ</td>
    <td><span id="result-dc">dc</span></td>
    <td><span id="result-dc-cruel">dc-cruel</span></td>
  </tr>
  <tr>
    <td>純粋</td>
    <td><span id="result-pure">25</span></td>
    <td><span id="result-pure-cruel">25-cruel</span></td>
  </tr>
  <tr>
    <td>暴走</td>
    <td><span id="result-enhance">25</span></td>
    <td><span id="result-enhance-cruel">25-cruel</span></td>
  </tr>
  <tr>
    <td>純粋+暴走</td>
    <td><span id="result-pure-enhance">2525</span></td>
    <td><span id="result-pure-enhance-cruel">2525-cruel</span></td>
  </tr>
  <tr>
    <td>恩寵勇気</td>
    <td><span id="result-brave">-</span></td>
    <td><span id="result-brave-cruel">cruel</span></td>
  </tr>
  <tr>
    <td>恩寵勇気+暴走</td>
    <td><span id="result-brave-enhance">-</span></td>
    <td><span id="result-brave-enhance-cruel">cruel</span></td>
  </tr>
</table>

## 計算式

<p>
$$
\begin{aligned}
& [\text{基礎ダメ}] = \min(\text{非クリティカルダメージ}, 20000+\text{限界突破}) \\
& [\text{白ダメ}] = [\text{基礎ダメ}] \cdot (1 + [\text{固定増幅\%}] / 100) \\
& [\text{赤ダメ}] = \operatorname{int}\bigl\{ \\
& \quad [\text{基礎ダメ}] \\
& \quad \cdot 4 \\
& \quad \cdot \left( 1 + \frac{n}{100} \right) \\
& \quad \cdot \left( 1 + \frac{n}{10000} + \frac{[\text{クルーエル系\%}]}{100} \right) \\
& \quad \cdot \left(1 + \frac{[\text{純粋}, \max 150\%] + [\text{固定増幅\%}]}{100}\right) \\
& \quad \cdot \left(1 + \frac{[\text{暴走}, \max 150\%]}{100}\right) \\
& \quad \bigr\}
\end{aligned}
$$
</p>

## 特記事項

<dl>
  <dt>純粋5セット効果</dt>
  <dd>
    「致命打ヒット時、40％ の確率で、対象の最大HPの 10％ 相当のダメージを返す。」<br />
    ゲーム内に記載はないが、純粋未発動時ダメージの2.5倍が上限 (= 追加ダメージ150%)
  </dd>
  <dt>超越スキル<br />「魔力の暴走」</dt>
  <dd>
    「一定の確率で、自身の攻撃力増加および魔法攻撃力増加に応じた数値によって限界ダメージを無視した追加ダメージが入る。
    <span style="color:red">※ 追加ダメージは最大 150％ 制限</span> 」<br />
    <a
      href="https://members.redsonline.jp/news/maintenance_body.asp?ntc_num=12387#:~:text=%E3%83%BB%E8%B6%85%E8%B6%8A%E3%82%B9%E3%82%AD%E3%83%AB%E3%80%8C%E9%AD%94%E5%8A%9B%E3%81%AE%E6%9A%B4%E8%B5%B0%E3%80%8D%E3%81%8C%E3%80%8C%E8%BF%BD%E5%8A%A0%E3%83%80%E3%83%A1%E3%83%BC%E3%82%B8%E3%81%8C%E6%9C%80%E5%A4%A7150%25%E3%80%8D%E3%81%AB%E5%A4%89%E6%9B%B4%E3%81%95%E3%82%8C%E3%81%BE%E3%81%99" target="_blank">
      v0.0696: 超越スキル「魔力の暴走」が「追加ダメージが最大150%」に変更されます{{< icon_external_link >}}</a>
  </dd>
  <dt>クルーエル系<br />追加ダメージ</dt>
  <dd>
    <ul>
      <li>戦士: ブラッディアームス</li>
      <li>霊術師: クルーエルソウル</li>
      <li>メイド: インサイト</li>
      <li>あとはよく知らん</li>
    </ul>
  </dd>
</dl>

## 謝辞

[RED STONE JP公式サーバー / シュルトのご意見箱](https://discord.com/channels/1161901874979549194/1194104087332003860/1286772289005682688)
