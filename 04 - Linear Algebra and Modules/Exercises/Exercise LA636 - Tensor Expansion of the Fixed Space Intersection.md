---
title: "Exercise LA636: Tensor Expansion of the Fixed Space Intersection"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.7, Exercise 5.7.8, printed p. 196, PDF p. 210"
source_refs:
  - "S7/ch-5/sec-7/ex-8"
created: 2026-10-28
---

# Exercise LA636: Tensor Expansion of the Fixed Space Intersection

## Problem Statement

> [!question] Original Exercise 5.7.8
> Letting $n=2$, multiply out the right sides of (5.20), express the results as direct sums, and show that $V^H\cap\sum V^{K_i}=\sum V^{\langle H,K_i\rangle}$.
>
> For $V=V_1\otimes V_2$, equations (5.20) read
> $$
> V^H=(V_{11}\oplus V_{12})\otimes(V_{21}\oplus V_{22}),
> $$
> $$
> \sum_iV^{K_i}=(V_{11}\oplus V_{13})\otimes V_2+V_1\otimes(V_{21}\oplus V_{23}),
> $$
> $$
> \sum_iV^{\langle H,K_i\rangle}=V_{11}\otimes(V_{21}\oplus V_{22})+(V_{11}\oplus V_{12})\otimes V_{21}.
> $$

## Hints

> [!hint]- Hint 1
> Extend each direct sum $V_{i1}\oplus V_{i2}\oplus V_{i3}$ by a complement $V_{i4}$.

> [!hint]- Hint 2
> Use the sixteen mutually independent tensor blocks $V_{1a}\otimes V_{2b}$; compare their index sets.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> By Exercise 5.7.7 choose $V_{i4}$ so that $V_i=\bigoplus_{a=1}^4V_{ia}$. The tensor-product distributive law gives a direct decomposition
> $$
> V=\bigoplus_{1\le a,b\le4}E_{ab},\qquad E_{ab}=V_{1a}\otimes V_{2b}.
> $$
> One can verify directness by choosing bases in the four summands of each factor: their pairwise tensors form a basis of $V$. Thus intersections of sums of the $E_{ab}$ are obtained by intersecting their index sets.
>
> The first expression becomes
> $$
> V^H=E_{11}\oplus E_{12}\oplus E_{21}\oplus E_{22}.
> $$
> The second contains exactly those blocks with $a\in\{1,3\}$ or $b\in\{1,3\}$. After removing duplicates it is
> $$
> E_{11}\oplus E_{12}\oplus E_{13}\oplus E_{14}\oplus E_{21}\oplus E_{23}\oplus E_{31}\oplus E_{32}\oplus E_{33}\oplus E_{34}\oplus E_{41}\oplus E_{43}.
> $$
> Intersecting its index set with the four blocks of $V^H$ leaves precisely
> $$
> V^H\cap\sum_iV^{K_i}=E_{11}\oplus E_{12}\oplus E_{21}.
> $$
> The third expression expands as $(E_{11}\oplus E_{12})+(E_{11}\oplus E_{21})$, which is the same direct sum after the duplicated $E_{11}$ is removed. This proves the assertion for $n=2$, including cases where some blocks are zero.
>
> For context, the same argument for any finite $n$ uses blocks indexed by $a_i\in\{1,2,3,4\}$. The first space uses only indices $1,2$; the second requires at least one index $1$ or $3$. Their intersection therefore has only $1,2$ indices and at least one $1$, exactly the blocks in the third space.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.7.8, printed p. 196 / PDF p. 210]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** The three expressions (5.20) are on printed p.194/PDF p.208. The tensor-product description of an irreducible representation of a finite direct-product group is an imported representation-theory input in the source; this exercise verifies the ensuing linear-algebra identity rather than proving that classification theorem.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
