---
title: "Exercise MF36: Isolating an Elliptic Point in a Modular Chart"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.2, Exercise 2.2.4, printed p. 52, PDF p. 67"
source_refs:
  - "S7/ch-2/sec-2/ex-4"
created: 2026-10-28
---

# Exercise MF36: Isolating an Elliptic Point in a Modular Chart

## Problem Statement

> [!question] Original Exercise 2.2.4
> Prove Corollary 2.2.3.
>
> **Referenced Corollary 2.2.3, printed p. 49 / PDF p. 64.** Let $\Gamma$ be a congruence subgroup of $SL_2(\mathbb Z)$. Each point $\tau\in\mathcal H$ has a neighborhood $U$ in $\mathcal H$ such that
> $$
> \text{for all }g\in\Gamma,\quad g(U)\cap U\ne\varnothing\ \Longrightarrow\ g\in\Gamma_\tau.
> $$
> Such a neighborhood has no elliptic points except possibly $\tau$.
>
> Here $\Gamma_\tau=\{g\in\Gamma:g\tau=\tau\}$, and an elliptic point means a point fixed by a nonidentity fractional linear transformation in $\Gamma$, equivalently by some $g\in\Gamma\setminus\{\pm I\}$.

## Hints

> [!hint]- Hint 1
> Use Proposition 2.1.1 with the two centers both equal to $\tau$, and intersect its neighborhoods.

> [!hint]- Hint 2
> If $z\in U$ is fixed by a nonidentity transformation $g$, then $g(U)\cap U$ contains $z$. Thus $g$ also fixes $\tau$. A nonidentity real fractional linear transformation cannot fix two distinct points of the upper half-plane.

## Solution

> [!success]- Solution
> **Proof scope:** Independent deduction of both conclusions from Proposition 2.1.1, with the uniqueness of a fixed point in $\mathcal H$ proved explicitly.
>
> Proposition 2.1.1, printed p. 46 / PDF p. 61, gives neighborhoods $U_1,U_2$ of $\tau$ such that $g(U_1)\cap U_2\ne\varnothing$ implies $g\tau=\tau$ for every $g\in SL_2(\mathbb Z)$. Replace them by open neighborhoods inside them and set $U=U_1\cap U_2$. Then
> $$
> g(U)\cap U\ne\varnothing\quad\Longrightarrow\quad
> g(U_1)\cap U_2\ne\varnothing\quad\Longrightarrow\quad g\in\Gamma_\tau
> $$
> for every $g\in\Gamma$. This is the first conclusion.
>
> Suppose now that $z\in U$ is elliptic for $\Gamma$. Choose $g=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\Gamma\setminus\{\pm I\}$ with $gz=z$. Since $z\in g(U)\cap U$, the conclusion just proved gives $g\tau=\tau$.
>
> To show that $z=\tau$, consider the fixed-point equation
> $$
> cw^2+(d-a)w-b=0.
> $$
> If $c=0$ and $w\in\mathcal H$ is fixed, its imaginary part gives $d=a$, and then its real part gives $b=0$. The determinant condition forces $a^2=1$, making $g=\pm I$, contrary to its choice. Therefore $c\ne0$.
>
> The displayed polynomial is then a quadratic with real coefficients. Since it has the nonreal root $\tau$, its two roots are $\tau$ and $\bar\tau$. Exactly one lies in $\mathcal H$. As $z\in\mathcal H$ is also a root, $z=\tau$. Thus no point of $U\setminus\{\tau\}$ can be elliptic, proving the second conclusion.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]

## Notes

- **Source status:** The original exercise was checked on printed p. 52 / PDF p. 67 and the complete corollary on printed p. 49 / PDF p. 64, using 200 dpi page images. The input proposition was checked on printed p. 46 / PDF p. 61; its full argument is completed in [[04 - Linear Algebra and Modules/Exercises/Exercise LA592 - Matrix Bounds for Proper Discontinuity|Exercise LA592]].
- **Proof boundary:** The final sentence of the corollary needs the uniqueness of an upper-half-plane fixed point for a nonidentity real fractional linear transformation. The proof supplies that step and does not confuse a nonidentity matrix with a nonidentity transformation.
- **Routing:** The neighborhood isolates the possible branch point of a modular-curve chart, so this exercise is placed under Modular Forms with its matrix and group-action prerequisites linked.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
