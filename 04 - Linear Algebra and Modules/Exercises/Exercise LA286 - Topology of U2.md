---
title: "Exercise LA286: Topology of U2"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - unitary-group
  - matrix-topology
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 3, Ex. 3.2, printed p. 284, PDF p. 296"
created: 2026-08-24
---

# Exercise LA286: Topology of U2

## Problem Statement

> [!question] Exercise 3.2
> Prove that $U_2$ is homeomorphic to the product $S^3\times S^1$.

## Hints

> [!hint]- Hint 1
> The first column of a unitary matrix is an arbitrary unit vector $u=(a,b)^{\mathsf T}\in\mathbb C^2$.

> [!hint]- Hint 2
> The vector $(-\overline b,\overline a)^{\mathsf T}$ is a canonical unit vector orthogonal to $u$. Use the determinant to choose its phase.

## Solution

> [!success]- Solution
> For $(a,b)\in S^3\subset\mathbb C^2$ and $\delta\in S^1$, define
>
> $$
> F(a,b,\delta)=
> \begin{pmatrix}
> a&-\delta\overline b\\
> b&\delta\overline a
> \end{pmatrix}.
> $$
>
> Its columns are orthonormal, so $F(a,b,\delta)\in U_2$, and
>
> $$
> \det F(a,b,\delta)=\delta(|a|^2+|b|^2)=\delta.
> $$
>
> Conversely, let $P\in U_2$ have first column $(a,b)^{\mathsf T}$. Its second column is a unit vector in the one-dimensional orthogonal complement, hence has the form
>
> $$
> \delta(-\overline b,\overline a)^{\mathsf T}
> $$
>
> for a unique $\delta\in S^1$. The determinant calculation shows that this $\delta$ is exactly $\det P$. Therefore
>
> $$
> F^{-1}(P)=(P_{11},P_{21},\det P).
> $$
>
> Both $F$ and its inverse are continuous because their coordinates are polynomial expressions, complex conjugates, and the determinant. Hence
>
> $$
> U_2\cong S^3\times S^1
> $$
>
> as topological spaces.
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2, Quaternions, and the Spin Cover]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Notes

- This is a homeomorphism, not a group isomorphism for the displayed product law.
- **Source status:** The statement was visually verified at [S1, Ch. 9, Ex. 3.2, printed p. 284, PDF p. 296]. The explicit homeomorphism and inverse are independently constructed.
