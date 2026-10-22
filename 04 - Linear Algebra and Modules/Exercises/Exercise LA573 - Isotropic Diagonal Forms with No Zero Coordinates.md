---
title: 'Exercise LA573: Isotropic Diagonal Forms with No Zero Coordinates'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 4, printed p. 385, PDF p. 404
source_refs:
- S4/ch-VI/sec-4/ex-4
created: '2026-10-23'
---

# Exercise LA573: Isotropic Diagonal Forms with No Zero Coordinates

## Problem Statement

> [!question] Neukirch VI.4.4
> If a quadratic form $a_1x_1^2+\cdots+a_nx_n^2$ represents zero over a field $K$ with more than five elements (i.e., $a_1x_1^2+\cdots+a_nx_n^2=0$ has a nontrivial solution in $K$), then there is a representation of zero in which all $x_i\ne0$.
> **Printed hint:** If $a\xi^2=\lambda\ne0$, $b\ne0$, then there are non-zero elements $\alpha$ and $\beta$ such that $a\alpha^2+b\beta^2=\lambda$. To prove this, multiply the identity
> $$
> \frac{(t-1)^2}{(t+1)^2}+\frac{4t}{(t+1)^2}=1
> $$
> by $a\xi^2=\lambda$ and insert $t=b\gamma^2/a$, for some element $\gamma\ne0$ such that $t\ne\pm1$. Use this to prove the claim by induction.

> [!warning] Source issue / proof scope
> The printed field statement needs characteristic different from 2 and nonzero coefficients. Both missing hypotheses have explicit counterexamples below.

## Hints

> [!hint]- 提示
> Check characteristic and zero coefficients. In the valid case fill one zero coordinate at a time while keeping a chosen nonzero coordinate nonzero.

> [!hint]- Stronger hint
> For a nonzero coordinate xi, choose t=b gamma^2/a avoiding 0 and plus/minus 1, then replace xi and one zero coordinate by the two quantities in the solution.

## Solution

> [!success]- 独立推导
> **Source issue.** 原文没有写出的必要假设是 $\operatorname{char}K\ne2$ 且所有 $a_i\ne0$。若容许零系数，$q=x_1^2$ 在二维有非零零点却无各坐标全非零的零点。特征 $2$ 也有反例：在 $K=\mathbb F_2(t)$ 上，$q=x_1^2+t x_2^2+x_3^2$ 有零点 $(1,0,1)$，但 $q=0$ 强迫 $x_2=0$，否则 $t=((x_1+x_3)/x_2)^2$，矛盾。
> 以下证明修正版。若已有非零坐标 $\xi$ 对应系数 $a\ne0$，待填零坐标对应 $b\ne0$，则令 $t=b\gamma^2/a$，并取
> $$
> \alpha=\xi\frac{t-1}{t+1},\qquad
> \beta=\frac{2\xi\gamma}{t+1}.
> $$
> 题列恒等式给 $a\alpha^2+b\beta^2=a\xi^2$。只需 $\gamma\ne0$ 且 $t\ne\pm1$，便使两者均非零。禁取的 $\gamma$ 至多有 $1+2+2=5$ 个；$|K|>5$ 保证可选。
> 从任一非平凡零表示出发，每次用此替换填一个零坐标，保持其他项不变；有限步后全部坐标非零。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 4, printed p.385, PDF p.404]。解答为独立推导。
