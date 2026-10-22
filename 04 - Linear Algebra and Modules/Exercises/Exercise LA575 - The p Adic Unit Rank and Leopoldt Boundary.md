---
title: 'Exercise LA575: The p Adic Unit Rank and Leopoldt Boundary'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §5, Exercise 4, printed p. 394, PDF p. 413
source_refs:
- S4/ch-VI/sec-5/ex-4
created: '2026-10-23'
---

# Exercise LA575: The p Adic Unit Rank and Leopoldt Boundary

## Problem Statement

> [!question] Neukirch VI.5.4
> The group $\bar E(p):=\bar E\cap\prod_{\mathfrak p\mid p}U_{\mathfrak p}^{(1)}$ is a $\mathbb Z_p$-module of rank $r_p(E):=\operatorname{rank}_{\mathbb Z_p}(\bar E(p))=[K:\mathbb Q]-\operatorname{rank}_{\mathbb Z_p}G(M_p|K)$. $r_p(E)$ is called the **p-adic unit rank**.
> **Following unnumbered source Problem (context, not an additional numbered exercise):** For the $p$-adic unit rank, one has the famous **Leopoldt conjecture**:
> $$
> r_p(E)=r+s-1,
> $$
> where $r$, resp. $s$, is the number of all real, resp. complex, places; in other words,
> $$
> \operatorname{rank}_{\mathbb Z_p}G(M_p|K)=s+1.
> $$
> The Leopoldt conjecture was proved for abelian number fields $K|\mathbb Q$ by the American mathematician Armand Brumer [22]. The general case is still open to date.

## Hints

> [!hint]- 提示
> The principal unit product has rank $\sum_{v\mid p}[K_v:\mathbb Q_p]$. Take ranks in the preceding exact sequence, keeping the unnumbered conjecture outside the proof claim.

> [!hint]- Stronger hint
> Apply the p-adic logarithm on a sufficiently deep finite-index principal-unit subgroup, then tensor the preceding exact sequence with Q_p.

## Solution

> [!success]- 独立推导
> 对每个 $v\mid p$，充分深的主单位群通过 $p$-进对数同构于 $\mathfrak p_v^n$ 的加法群，后者是秩 $[K_v:\mathbb Q_p]$ 的自由 $\mathbb Z_p$-模。有限指数及有限扭子群不改变秩，所以
> $$
> \operatorname{rank}_{\mathbb Z_p}\prod_{v\mid p}U_v^{(1)}
> =\sum_{v\mid p}[K_v:\mathbb Q_p]=[K:\mathbb Q].
> $$
> 闭子群 $\bar E(p)$ 为有限生成 $\mathbb Z_p$-模；$\mathrm{Cl}_K(p)$ 和无限位置符号均有限。前题的正合列（包含必要的 $p=2$ 符号修正）在张量 $\mathbb Q_p$ 后正合，于是
> $$
> \operatorname{rank}G(M_p/K)
> =[K:\mathbb Q]-\operatorname{rank}\bar E(p).
> $$
> 这证明编号习题的秩恒等式。
> **证明边界。** 后面的 Leopoldt 等式是额外猜想，不能由上述恒等式推出。仅将 $[K:\mathbb Q]=r_1+2r_2$ 代入，可证明两个猜想表述等价；本题没有证明一般 Leopoldt 猜想。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §5, Exercise 4, printed p.394, PDF p.413]。解答为独立推导。

- **Historical source context:** The unnumbered Leopoldt Problem is retained as a statement from the 1999 source. The exercise solution proves the displayed rank identity; it does not prove the conjecture or make a claim about its present research status.
