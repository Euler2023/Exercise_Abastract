---
title: 'Exercise Gal199: Cyclotomic Norms and Rational Ray Classes'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 2, printed p. 385, PDF p. 404
source_refs:
- S4/ch-VI/sec-4/ex-2
created: '2026-10-23'
---

# Exercise Gal199: Cyclotomic Norms and Rational Ray Classes

## Problem Statement

> [!question] Neukirch VI.4.2
> Let $\zeta$ be a primitive $m$-th root of unity. Show that the norm group $N_{\mathbb Q(\zeta)|\mathbb Q}C_{\mathbb Q}$ equals the ray class group mod $\mathfrak m=(m)$ in $C_{\mathbb Q}$.

> [!warning] Source issue / proof scope
> The printed norm has the wrong domain subscript; “ray class group in the idele class group” denotes its congruence subgroup here.

## Hints

> [!hint]- 提示
> Identify the rational ray class quotient with $(\mathbb Z/m\mathbb Z)^\times$ and compare its action on $\zeta$.

> [!hint]- Stronger hint
> Frobenius at ell sends zeta to zeta^ell, giving the same quotient as the positive rational ray congruence subgroup.

## Solution

> [!success]- 独立推导
> 由原书 VI.(1.10)（printed p.366/PDF385），有 $C_\mathbb Q/C_\mathbb Q^{(m)}\cong(\mathbb Z/m\mathbb Z)^\times$，其理想表述把与 $m$ 互素主理想的正生成元 $a$ 送到 $a\bmod m$。
> 另一方面，圆分扩张的 Frobenius 在素数 $\ell\nmid m$ 处按 $\zeta\mapsto\zeta^\ell$ 作用。因此全局互反映射在上述射线商上正是
> $$
> (\mathbb Z/m\mathbb Z)^\times
> \longrightarrow\operatorname{Gal}(\mathbb Q(\zeta)/\mathbb Q),
> \quad \bar a\longmapsto(\zeta\mapsto\zeta^a),
> $$
> 这是同构。它的核在 $C_\mathbb Q$ 中正是 $C_\mathbb Q^{(m)}$。全局互反律的范数核性质于是给所求等式。Neukirch 的模 $(m)$ 已隐含实位置正性，故不会遗漏无限位置的符号条件。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 2, printed p.385, PDF p.404]。解答为独立推导。

- **Source issue (domain and terminology):** 原图 printed p.385/PDF404 确写 $N_{\mathbb Q(\zeta)|\mathbb Q}C_{\mathbb Q}$，其 norm 的定义域应为 $C_{\mathbb Q(\zeta)}$。原文“ray class group ... in $C_{\mathbb Q}$”在这里须解释为相应的 ray congruence **subgroup**；解答计算的是这个子群，不把一个有限商群当成其自身的核。
