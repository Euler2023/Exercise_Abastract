---
title: 'Exercise Gal170: Reciprocity for Pro-P Groups'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §5, Exercise 2, printed p. 298, PDF p. 317
source_refs:
- S4/ch-IV/sec-5/ex-2
created: '2026-10-23'
---

# Exercise Gal170: Reciprocity for Pro-P Groups

## Problem Statement

> [!question] Neukirch IV.5.2
> Generalize the theory developed so far in the following way. Let $P$ be a set of prime numbers and let $G$ be a pro-$P$-group, i.e., a profinite group all of whose quotients $G/N$ by open normal subgroups $N$ have order divisible only by primes in $P$.
> Let $d:G\to\mathbb Z_P$ be a surjective homomorphism onto the group $\mathbb Z_P=\prod_{p\in P}\mathbb Z_p$, and let $A$ be a $G$-module. A henselian $P$-valuation with respect to $d$ is by definition a homomorphism $v:A_k\to\mathbb Z_P$ which satisfies the following properties:
> (i) $v(A_k)=Z\supseteq\mathbb Z$ and $Z/nZ\simeq\mathbb Z/n\mathbb Z$ for all natural numbers $n$ which are divisible only by primes in $P$,
> (ii) $v(N_{K|k}A_K)=f_KZ$ for all finite extensions $K|k$, where $f_K=(d(G):d(G_K))$.
> Under the hypothesis that $H^i(G(L|K),U_L)=1$ for $i=0,-1$, for all unramified extensions $L|K$, prove the existence of a canonical reciprocity homomorphism $r_{L|K}:G(L|K)^{ab}\to A_K/N_{L|K}A_L$ for every finite Galois extension $L|K$.

## Hints

> [!hint]- Hint 1
> 可以逐行把有限度数限制为 $P$-整数；另一种完整归约是补上缺少素数的 $\mathbb Z_{P^c}$ 因子，再应用正文已证明的普通 reciprocity 存在定理。

> [!hint]- Hint 2
> 先把加法记号的 $A$ 对所有 $P$ 外素数局部化。有限 $P$ 群的 norm 商被其阶杀死，所以该局部化不改变所求 norm 商。

## Solution

> [!success]- Independent derivation
> 改用加法记号处理抽象交换群。令 $S$ 为仅含 $P$ 外素因子的正整数集，$B=S^{-1}A$、$Z'=S^{-1}Z\subseteq\mathbb Z_P$。局部化使 $P$ 外整数在 $B,Z'$ 上可逆。对有限 $P$ 群 $F$，其 $H^0,H^{-1}$ 均被 $|F|$ 杀死，故 $S^{-1}$ 不改变这些群。固定群也与此局部化兼容：一个元素的轨道有限，若其分式被固定，可用单个 $S$ 中整数同时杀死有限多个偏差，得到固定分子。因此
> $$
> B_K/N_{L/K}B_L\simeq A_K/N_{L/K}A_L,
> $$
> 而 unramified 单位的两项消失条件仍保持。
>
> 令 $Q$ 为 $P$ 的补集，$D=\mathbb Z_Q$，并构造
> $$
> \Gamma=G\times D,\qquad d'(g,t)=(d(g),t)\in\mathbb Z_P\times\mathbb Z_Q=\widehat{\mathbb Z},
> $$
> $$
> A'=B\oplus D,\qquad v'(b,t)=(v(b),t).
> $$
> $G$ 按原作用作用于 $B$，附加 $D$ 因子在两项上均作用平凡；整个 $A'$ 作为离散连续模。值群为 $Z'\times D$，包含对角嵌入的 $\mathbb Z$，且对任意整数 $m=m_Pm_Q$ 有
> $$
> (Z'\times D)/m(Z'\times D)\simeq\mathbb Z/m_P\mathbb Z\times\mathbb Z/m_Q\mathbb Z\simeq\mathbb Z/m\mathbb Z.
> $$
> 这里 $P$ 外数在 $Z'$ 上可逆，$P$ 内数在 $D$ 上可逆。
>
> 由于两个因子的有限商阶互素，$\Gamma$ 的每个开子群为 $H\times n_QD$：这由有限商中 coprime direct product 的子群分解得到。其总指数为 $n_Pn_Q$，inertia degree 为 $f_Hn_Q$。范数在 $B_H\oplus D$ 上分别为 $n_QN_{H/G}$ 与乘 $n_Pn_Q$，所以其值群恰为
> $$
> f_HZ'\times n_QD=(f_Hn_Q)(Z'\times D).
> $$
> 故 $v'$ 满足正文普通 henselian valuation 的两条条件。
>
> 值映射的单位核为 $S^{-1}U$ 的相应固定群，与附加第二项无关。一个 unramified 扩张在 $G$ 因子上 unramified；额外 $Q$-阶循环因子作用平凡，但其阶在 $S^{-1}U$ 上可逆，故其 $H^0,H^{-1}$ 为零。结合原 $P$-部分消失条件（或逐个 coprime 循环因子使用 norm 与 augmentation），得到 $A'$ 满足普通 (5.1)。
>
> 现在应用正文已独立证明的 reciprocity 存在命题 (5.6) [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §5, printed pp. 294–295, PDF pp. 313–314]。对原 $L/K$，取 $\Gamma$ 中对应的 $G_L\times D\subseteq G_K\times D$。其 Galois 群仍为 $G(L/K)$，而 norm 商中第二项为 $D/[L:K]D=0$，第一项经上面的局部化同构恰为原 $A_K/N A_L$。因此取得所求同态
> $$
> r_{L/K}:G(L/K)^{ab}\longrightarrow A_K/N_{L/K}A_L.
> $$
> 构造只使用 canonical localization、补素数因子与正文 canonical 同态，无附加选择。也可直接按正文 Frobenius-lift/prime-element 定义写出同一映射，因为所用有限度数均为 $P$-整数。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Profinite Galois Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Localization of Modules|Localization of Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Norms and Tate Cohomology]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §5, Exercise 2, printed p. 298, PDF p. 317]. 独立补素数归约；所调用的是正文已证明的普通 $\widehat{\mathbb Z}$ 情形，不是本题的 pro-$P$ 结论。
- **Boundary:** 仅证明 canonical homomorphism 的存在，未在缺少 class field axiom 时声称它为同构。若 $P$ 为空，则 $G=1$，结论为平凡映射；以上补因子解释仍一致。
