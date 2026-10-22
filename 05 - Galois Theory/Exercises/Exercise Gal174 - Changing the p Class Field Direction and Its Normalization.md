---
title: 'Exercise Gal174: Changing the p Class Field Direction and Its Normalization'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 3, printed p. 305, PDF p. 324
source_refs:
- S4/ch-IV/sec-6/ex-3
created: '2026-10-23'
---

# Exercise Gal174: Changing the p Class Field Direction and Its Normalization

## Problem Statement

> [!question] Neukirch IV.§6, Exercise 3
> Let $p$ be a prime number and $(d:G\to\mathbb Z_p,\ v:A_k\to\mathbb Z_p)$ a $p$-class field theory in the sense of §5, exercise 2. Let $d':G\to\mathbb Z_p$ be another surjective homomorphism, and $\widetilde K'/K$ the $\mathbb Z_p$-extension defined by $d'$. Let $v':A_k\to\mathbb Z_p$ be the composite of
> $$
> A_k\xrightarrow{(\ ,\widetilde K'/K)}G(\widetilde K'/K)\xrightarrow{d'}\mathbb Z_p.
> $$
> Then $(d',v')$ is also a $p$-class field theory. The norm residue symbols associated to $(d,v)$ and $(d',v')$ coincide. (No analogous statement holds in the case of $\widehat{\mathbb Z}$-class field theories $(d:G\to\widehat{\mathbb Z},v:A_k\to\widehat{\mathbb Z})$.)

## Hints

> [!hint]- Hint 1 — first step
> Test the definition on the rescaling $d′=u d$ for a $p$-adic unit $u$; ask whether the new value image still contains the integer $1$.

> [!hint]- Hint 2 — proof route
> First check whether the value subgroup contains the book's fixed copy of $\mathbb Z$. The substantive independence statement concerns the reciprocity map after compatible normalization.

## Solution

> [!success]- 独立推导
> **Source issue / 值域规范化。** IV.§5 Exercise2 的原定义要求值子群包含标准 $\mathbb Z\subseteq\mathbb Z_p$。题目对任意满射 $d'$ 的字面断言未必保持这一规范化。取 $G=\mathbb Z_p$，加法模 $A=\mathbb Z$，作用平凡，$d=\mathrm{id}$，$v=\mathrm{id}$；有限指数 $p^r$ 扩张的范数为乘 $p^r$，Tate 群阶满足类域公理。若 $d'=u d$，$u\in\mathbb Z_p^\times\setminus\mathbb Q$，则题定义 $v'=u v$，像 $u\mathbb Z$ 不含 $1$。因此必须允许重新选择 $\mathbb Z_p$ 坐标或放宽“含标准整数”的规范化，才有无条件的预期表述。
> 因此，按“包含固定的标准整数”这一严格定义，原题的第一个断言已被反例完全否定，不能继续声称它给出同一定义下的第二个类域论。这里没有用一个未经证明的值群商条件来补齐该断言。
>
> 可完整说明的是**同一方向的坐标重标特殊情形**。若 $d'=u d$，将新目标 $\mathbb Z_p$ 的坐标同时乘 $u^{-1}$，则
> $$
> u^{-1}d'=d,\qquad u^{-1}v'=v.
> $$
> 第二个等式来自旧互反映射在旧 $\mathbb Z_p$-塔上的规范化 $d\circ\operatorname{Artin}=v$；故 $v'=d'\circ\operatorname{Artin}=u v$。重标后恰好恢复原来的两个映射，并不是建立了一个新的不同方向的理论。若原值群为 $Z=v(A_k)$，则未重标的像是 $uZ$；乘 $u^{-1}$ 给出
> $$
> uZ/p^r uZ\xrightarrow{\sim} Z/p^rZ\cong\mathbb Z/p^r\mathbb Z.
> $$
> 对任意有限层，范数像同样从 $f_KZ$ 变为 $f_KuZ$，重标后恢复 $f_KZ$；单位核不变，故其 Tate 群与类域公理也完全不变。互反构造所用的赋值、Frobenius 坐标和范数在重标后逐项等于旧数据，因此剩余符号相同。这证明这个特殊情形的坐标不变性，同时明确了值群商条件为何保持。
>
> 若拒绝重标而仍要求 $uZ$ 包含固定的标准 $\mathbb Z$，就必须另外核实该包含；它在上面的 $Z=\mathbb Z$、$u\notin\mathbb Q$ 反例中失败。对任意不同 $\mathbb Z_p$-方向 $d'$ 的预期互反独立性，本笔记不声称已经证明，也不把它当作原题字面断言成立的理由。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Theory]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Class Field Theory Context]]

## Notes

题面已与原书200 dpi页面图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 3, printed p.305, PDF p.324]。解答为独立推导，沿用本章的抽象域、连续离散 $G$-模、限制与范数约定。原题按严格定义被反例否定。附加推导仅证明同一方向的同时坐标重标，不声称任意新方向已满足值群条件或已经证明一般互反独立性。
