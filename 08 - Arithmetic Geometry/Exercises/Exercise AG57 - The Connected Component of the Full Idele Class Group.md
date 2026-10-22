---
title: 'Exercise AG57: The Connected Component of the Full Idele Class Group'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 10, printed p. 368, PDF p. 387
source_refs:
- S4/ch-VI/sec-1/ex-10
created: '2026-10-23'
---

# Exercise AG57: The Connected Component of the Full Idele Class Group

## Problem Statement

> [!question] Neukirch VI.1.10
> The connected component $D_K$ of $1$ in the idèle class group $C_K$ is the direct product of $t$ copies of the “solenoid” $(\widehat{\mathbb Z}\times\mathbb R)/\mathbb Z$, $s$ circles $\mathbb R/\mathbb Z$, and a real line.

> [!note] 前题的根单位约定
> 若 $K$ 全虚，沿用 Exercise 6 的可见修正：$\epsilon_i$ 是总正单位模根单位后的自由基的提升。有限根单位由复相位处理，不额外加入 profinite 参数。

## Hints

> [!hint]- Hint 1 — first step
> Construct a continuous section of the absolute norm by putting a positive number in one infinite component.

> [!hint]- Hint 2 — proof route
> Split the absolute norm using a positive infinite component. Then use the two preceding exercises.

## Solution

> [!success]- 独立推导
> 选一个无限位置 $v_0$。若其为实位置，将 $r>0$ 放在该分量；若其为复位置，将 $r^{1/2}>0$ 放在该分量；其他分量均为 $1$。按标准归一化复绝对值为复模平方，得到连续群截面 $s:\mathbb R_{>0}\to C_K$，满足 $\mathfrak N(s(r))=r$。
> 映射
> $$
> C_K^0\times\mathbb R_{>0}\longrightarrow C_K,\qquad(c,r)\longmapsto c\,s(r)
> $$
> 是拓扑同构，逆为 $a\mapsto(a\,s(\mathfrak N(a))^{-1},\mathfrak N(a))$。故单位连通分支为 $D_K^0\times\mathbb R_{>0}$。由 Exercise8 及对数 $\mathbb R_{>0}\cong(\mathbb R,+)$，
> $$
> D_K\cong\Sigma^t\times(\mathbb R/\mathbb Z)^s\times\mathbb R.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adèles and Idèles]]
- [[08 - Arithmetic Geometry/Concepts/Connectedness and Connected Components|Connectedness]]

## Notes

题面已核对原书图像。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 10, printed p.368, PDF p.387]。解答为独立推导。
