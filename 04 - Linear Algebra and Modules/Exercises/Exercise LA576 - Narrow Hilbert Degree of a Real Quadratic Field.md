---
title: 'Exercise LA576: Narrow Hilbert Degree of a Real Quadratic Field'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 2, printed p. 404, PDF p. 423
source_refs:
- S4/ch-VI/sec-6/ex-2
created: '2026-10-23'
---

# Exercise LA576: Narrow Hilbert Degree of a Real Quadratic Field

## Problem Statement

> [!question] Neukirch VI.6.2
> Let $d>0$ be squarefree, and $K=\mathbb Q(\sqrt d)$. Let $\epsilon$ be a totally positive fundamental unit of $K$. Then one has $[K^1:H]=1$ or $=2$, according as $N_{K|\mathbb Q}(\epsilon)=-1$ or $=1$.

> [!warning] Source issue / proof scope
> A totally positive unit has positive norm. The negative-norm alternative requires an unrestricted fundamental unit, as proved below.

## Hints

> [!hint]- 提示
> A totally positive unit cannot have negative norm. For the intended criterion take an unrestricted fundamental unit and list the signs of $\pm\epsilon^n$.

> [!hint]- Stronger hint
> A negative-norm fundamental unit supplies opposite signs; with -1 this gives all four sign pairs. A positive-norm generator supplies only two.

## Solution

> [!success]- 独立推导
> **Source issue.** 原题称 $\epsilon$ “totally positive” 却区分范数 $\pm1$；总正单位必范数 $+1$。修正版取一组基本单位 $\eta$（可在第一实嵌入下取 $\eta>1$），不预设在第二实嵌入下为正。
> 实二次域的单位为 $\{\pm\eta^n:n\in\mathbb Z\}$。若 $N(\eta)=-1$，$\eta$ 在两个实嵌入的符号相反；与 $-1$ 的符号 $(-,-)$ 一起生成全部四种符号，所以 $[E:E_+]=4$，$t=2$。前题给 $[K^1:H]=2^{2-2}=1$。
> 若 $N(\eta)=+1$，选 $\eta>1$ 后另一实嵌入也正，因此单位符号仅为 $(+,+)$ 与 $(-,-)$，$[E:E_+]=2$，$t=1$，得 $[K^1:H]=2$。
> 若坚持选总正基本单位，则在存在负范数单位时它是自由单位生成元的平方，不能直接用其范数区分这两种情形。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[02 - Ring Theory/Concepts/Units in Real Quadratic Fields|Quadratic Units and Signs]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 2, printed p.404, PDF p.423]。解答为独立推导；外部输入与本题推导分开标明。
