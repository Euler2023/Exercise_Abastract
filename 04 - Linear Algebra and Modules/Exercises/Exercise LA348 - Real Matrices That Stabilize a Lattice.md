---
title: "Exercise LA348: Real Matrices That Stabilize a Lattice"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - lattices
  - conjugacy
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Miscellaneous Problem M.5, printed p. 440, PDF p. 452"
created: 2026-08-28
---

# Exercise LA348: Real Matrices That Stabilize a Lattice

## Problem Statement

> [!question] Miscellaneous Problem M.5
> Which matrices $A\in\operatorname{GL}_2(\mathbb R)$ stabilize some lattice $L$ in $\mathbb R^2$?

## Hints

> [!hint]- Hint 1
> Express $A$ in a lattice basis. Then reformulate the answer using trace and determinant.

## Solution

> [!success]- Solution
> A matrix stabilizes a lattice exactly when it is real-conjugate to an element of $\operatorname{GL}_2(\mathbb Z)$. Indeed, if the columns of $B$ form a lattice basis and $A(L)=L$, then
>
> $$
> B^{-1}AB\in\operatorname{GL}_2(\mathbb Z).
> $$
>
> Conversely, if $B^{-1}AB=C\in\operatorname{GL}_2(\mathbb Z)$, then $A$ stabilizes the lattice $B\mathbb Z^2$.
>
> In dimension two this is equivalent to the numerical criterion
>
> $$
> \boxed{\operatorname{tr}A\in\mathbb Z
> \quad\text{and}\quad
> \det A=\pm1.}
> $$
>
> Necessity follows from conjugacy to an integer unimodular matrix. For sufficiency, if $A$ is nonscalar, its minimal polynomial equals
>
> $$
> t^2-(\operatorname{tr}A)t+\det A,
> $$
>
> and $A$ is real-similar to its integer companion matrix. If $A$ is scalar, the determinant condition forces $A=I$ or $A=-I$, which already stabilizes $\mathbb Z^2$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]
- [[04 - Linear Algebra and Modules/Concepts/Cyclic Vectors and Companion Matrices|Cyclic Vectors and Companion Matrices]]

## Notes

- **Routing:** Linear Algebra is primary because conjugacy, trace, determinant, and lattice bases characterize stabilization.
- **Convention:** “Stabilize” is interpreted as $A(L)=L$, not merely $A(L)\subseteq L$.
- **Source status:** [S1, Ch. 14, Misc. M.5, printed p. 440, PDF p. 452]. The criterion is independent.
