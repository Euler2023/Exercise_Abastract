---
title: 'Exercise Gal202: Local Abelian Closures inside a Global Abelian Closure'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §5, Exercise 2, printed p. 394, PDF p. 413
source_refs:
- S4/ch-VI/sec-5/ex-2
created: '2026-10-23'
---

# Exercise Gal202: Local Abelian Closures inside a Global Abelian Closure

## Problem Statement

> [!question] Neukirch VI.5.2
> For every place $\mathfrak p$ of $K$ one has $K_{\mathfrak p}^{ab}=K^{ab}K_{\mathfrak p}$.
> **Printed hint:** Use (5.6) and (5.8).

## Hints

> [!hint]- 提示
> One inclusion follows because completions of global abelian extensions are abelian. For the other, realize a local cyclic character globally, allowing a larger global order when necessary.

> [!hint]- Stronger hint
> Use the weak Grunwald form allowing a larger global cyclic degree for each cyclic local subextension, then take their compositum.

## Solution

> [!success]- 独立推导
> 所有域放入同一选定的局部代数闭包，右端指各有限全局阿贝尔子扩张的局部合成域。若 $L/K$ 有限阿贝尔，则 $L_w/K_v$ 的 Galois 群为 $G(L/K)$ 的分解子群，仍阿贝尔，所以 $K^{\mathrm{ab}}K_v\subseteq K_v^{\mathrm{ab}}$。
> 反向用如下**外部标准输入：弱 Grunwald 存在性形式（允许全局次数增大）**：给定数域的有限多个局部循环扩张，每一个都可包含在某个全局循环扩张的相应完备化中；无需要求全局次数恰等于局部次数。此处只取单一位置 $v$。这个允许增大次数的版本不受精确次数 Grunwald–Wang 特例阻碍。
> 任意有限阿贝尔 $F/K_v$ 的 Galois 群可嵌入有限个循环商的乘积，因此 $F$ 是有限个循环子扩张的合成。对每个循环子扩张用上述输入取全局循环扩张 $L_i/K$，其选定完备化包含该局部扩张。令 $L=\prod_iL_i$，则 $L/K$ 阿贝尔且 $LK_v\supseteq F$。对所有 $F$ 取并，得到反向包含。
> 无限位置无需此输入：$\mathbb C$ 无非平凡有限扩张；实位置的 $\mathbb C/\mathbb R$ 由任一在该实嵌入下为负的二次根式实现。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §5, Exercise 2, printed p.394, PDF p.413]。解答为独立推导。本解明确依赖允许增大次数的全局实现定理，未声称沿原提示仅用 (5.6)/(5.8) 完成证明，也未声称精确次数的 Grunwald 定理无例外。
