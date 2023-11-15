+++
date = 2023-11-15T22:55:00+09:00
title = "RED STONE で学ぶ遷移確率行列"
description = "製錬+10ってガードないとインクいくらいるの"
tags = ["数学", "期待値", "製錬"]
math = true
+++

## この記事について

じぶんでだいたい理解するところまでは進んだけど、人に理解させる文章が思いつかなかったので、書きかけで力尽きました。
気が向いたら加筆修正します。

## はじめに

基本無料オンラインゲーム「RED STONE」では製錬やウポスマイヤー補助武器の強化など、失敗時にそれまで上げたレベルが下がる強化要素が存在します。製錬ガードは製錬におけるレベルが下がる現象を防止や緩和する効果を持ち、ロトボックスの射幸心やイベント類の参加意欲を盛り上げる効果が(少なくとも筆者に対しては)あります。

また、製錬ガードは取引不可属性を持つアイテムのため、装備を受け渡しして強化に挑戦して成功報酬を得る「代行」という文化が存在します。その価格設定はある程度周囲の売値や買値に連動しているように見えますが、製錬ガードなしに挑戦した場合のインク消費量およびインク価格と比較した事例は(筆者が見る限り)存在しません。

そこでこの記事ではレベルの上下変動を伴う確率変数に対して遷移確率行列を適用する方法を紹介し、実際に製錬+0 を+10 にするまでにかかる費用の期待値と、製錬ガードの成功報酬との比較検証を ~~行ないます~~ 行おうと思って力尽きました。

## 計算例

[インク個数期待値](https://docs.google.com/spreadsheets/d/1bAJnjhdBhMCJoQwvcbcNyPW8TR5ISX0mMa7CyICXKNE/edit?usp=sharing)
[ウポスマイヤー補助武器](https://docs.google.com/spreadsheets/d/1DFQC5y9aOIOHbV5sUNVHEVjcXb5wa5-kL8WmmtdOvWs/edit?usp=sharing)
TODO: ここでガード代行のお金とインク相場とを比較する
TODO: ウポスマイヤー補助武器の確率表を埋める

## なんでそれで計算できるの

製錬やウポスマイヤー補助武器の強化に必要な素材の個数を考える。
どちらも「強化後のレベルがどう変化するかは直前のレベルだけで定まる」という、マルコフ性を持つ。

レベル $i$ から レベル $j$ に変化する確率 $p(i, j)$ を $(N+1) \times (N+1)$ の行列の形に並べた遷移確率行列 $\boldsymbol{P}$ は以下のとおりとなる。

```math
$$ p(i, j) \geq 0 ; i \in [0, N] ; j \in [0, N] $$
$$ \sum_{j=0}^N p(k, j) = 1 ; k \in [0, N] $$

$$
\boldsymbol{P} =
\begin{pmatrix}
    p(0, 0) & \cdots & p(0, N) \\
    p(1, 0) & \cdots & p(1, N) \\
    \vdots  & \ddots & \vdots \\
    p(N, 0) & \cdots & p(N, N)
\end{pmatrix}
$$
```

レベル $N$ になるまでの素材個数を考える場合、
一度でも$N$になった後の変化はなくなる(=吸収状態)と考えて
$$p(N, i \neq N) = 0 ; \quad p(N, i = N) = 1 $$
であり、行列を区切ると

```math
$$
\def\arraystretch{1.5}
\boldsymbol{P} = \left(
\begin{array}{ccc:c}
    p(0, 0) & \cdots & p(0, N-1) & p(0, N) \\
    p(1, 0) & \cdots & p(1, N-1) & p(1, N) \\
    \vdots  & \ddots & \vdots & \vdots \\
    p(N-1, 0) & \cdots & p(N-1, N-1)& p(N-1, N) \\ \hdashline
    0 & \cdots & 0 & 1
\end{array} \right)
=
\begin{pmatrix}
    \boldsymbol{Q} & \boldsymbol{R} \\
    \boldsymbol{0} & 1
\end{pmatrix}
$$
```

初期状態をレベル 0 として $1 \times N$ の行ベクトルで示す
$$ \boldsymbol{s_0} = [1, 0, ..., 0] $$
$N \times N$ の行列 $\boldsymbol{Q}$ は レベル $0$ から $N-1$ の遷移確率を並べたもの
$N \times 1$ の列ベクトル $\boldsymbol{R}$ は それぞれのレベルから レベル $N$ になる確率を並べたもの

ちょうど $t$ 回目の試行で レベル $N$ にはじめて到達する確率を考える
$ \boldsymbol{s_0} \boldsymbol{Q}^{t - 1} $ は $t-1$回目の試行で $0$ ~ $N-1$ になる確率を並べた行ベクトル
$ \boldsymbol{s_0} \boldsymbol{Q}^{t - 1} \boldsymbol{R} $ が求める確率

レベル $0$ から レベル $N$ に到達するまでの試行回数の期待値 $X_{0,N}$ は $N \times N$ の単位行列を $\boldsymbol{E}$ として

```math
$$
\begin{aligned}
X_{0,N} &=
\sum_{t=0}^{\infty} t\cdot\boldsymbol{s_0} \boldsymbol{Q}^{t - 1} \boldsymbol{R}\\
& = \boldsymbol{s_0} \left(\sum_{t=0}^{\infty} t \boldsymbol{Q}^{t - 1}\right) \boldsymbol{R} \\
& = \boldsymbol{s_0} (\boldsymbol{E} - \boldsymbol{Q})^{-2} \boldsymbol{R}\\
& = \boldsymbol{s_0} (\boldsymbol{E} - \boldsymbol{Q})^{-1} \cdot \boldsymbol{1}
\end{aligned}
$$
```

全成分が $1$ の列ベクトルを $\boldsymbol{1}$ として

```math
$$
\boldsymbol{Q}\cdot\boldsymbol{1} + \boldsymbol{R} = \boldsymbol{1} \\
\boldsymbol{R} = \boldsymbol{E}\cdot\boldsymbol{1} - \boldsymbol{Q}\cdot\boldsymbol{1} \\
(\boldsymbol{E} - \boldsymbol{Q})^{-1}\boldsymbol{R} = \boldsymbol{1}
$$
```

簡単な例として、コイントスを 2 連勝するまでのトス回数の期待値 $x$ を求める

```math
$$
\boldsymbol{P} =
\begin{pmatrix}
    1/2 & 1/2 &   0 \\
    1/2 &   0 & 1/2 \\
      0 &   0 &   1
\end{pmatrix}
,\quad
\boldsymbol{Q} =
\begin{pmatrix}
    1/2 & 1/2 \\
    1/2 &   0
\end{pmatrix}
,\quad
(\boldsymbol{E} - \boldsymbol{Q})^{-1} =
\begin{pmatrix}
    4 & 2 \\
    2 & 2
\end{pmatrix}
$$
```

```math
$$
x =
\begin{pmatrix}
    1 & 0
\end{pmatrix}
\begin{pmatrix}
    4 & 2 \\
    2 & 2
\end{pmatrix}
\begin{pmatrix}
    1 \\
    1
\end{pmatrix}
= 6
$$
```

これは

```math
$$
\begin{aligned}
    x &= (2) \cdot (1/4) + (x + 1) \cdot (1/2) + (x + 2) \cdot (1/4) \\
    &= 6
\end{aligned}
$$
```

と求まり、一致する

ここで
$\boldsymbol{s_0} (\boldsymbol{E} - \boldsymbol{Q})^{-1}$ に着目すると $(1,j)$ 成分は レベル $j$ の状態から $x$ 回のうち何回試行したかを示しているため、
レベル $j$ で試行するコストを列ベクトルとして $\boldsymbol{1}$ の代わりにかけることで総コストの期待値が計算できる。

## 参考文献

https://qiita.com/convexineq/items/28c365b8157989154033
https://zenn.dev/kaityo256/articles/markov_eigenvalue
