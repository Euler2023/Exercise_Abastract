---
title: "Exercise LA409: Determinant Exact Sequence Modulo N"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-groups
  - exact-sequences
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercise 20, printed p. 547, PDF p. 562"
created: 2026-09-26
---

# Exercise LA409: Determinant Exact Sequence Modulo N

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 20
> Show that one has an exact sequence
>
> $$
> 1\longrightarrow SL_2(\mathbb Z/N\mathbb Z)
> \longrightarrow GL_2(\mathbb Z/N\mathbb Z)
> \xrightarrow{\det}(\mathbb Z/N\mathbb Z)^\times
> \longrightarrow1.
> $$
>
> In fact, show that $GL_2(\mathbb Z/N\mathbb Z)=SL_2(\mathbb Z/N\mathbb Z)G_N$, where $G_N$ is the group of matrices $\begin{pmatrix}1&0\\0&d\end{pmatrix}$ with $d\in(\mathbb Z/N\mathbb Z)^\times$.

> [!info] Context
> As in Exercise 18, $N$ is a positive integer.

## Hints

> [!hint]- Hint 1
> The determinant-one subgroup is the kernel of the determinant homomorphism.

> [!hint]- Hint 2
> The diagonal matrices in $G_N$ realize every unit determinant and give a section of the map.

## Solution

> [!success]- Independently derived solution
> Let $R=\mathbb Z/N\mathbb Z$. Multiplicativity of determinant makes $\det:GL_2(R)\to R^\times$ a homomorphism whose kernel is, by definition, $SL_2(R)$. For every $d\in R^\times$, the matrix $s(d)=\operatorname{diag}(1,d)$ is invertible and has determinant $d$. Thus $s:R^\times\to GL_2(R)$ is a homomorphic section of determinant. This proves exactness at every term.
>
> More explicitly, for $A\in GL_2(R)$ put $d=\det A$. Then
>
> $$
> A=\bigl(A\operatorname{diag}(1,d^{-1})\bigr)
> \operatorname{diag}(1,d),
> $$
>
> where the first factor has determinant $1$ and the second lies in $G_N$. Hence $GL_2(R)=SL_2(R)G_N$. The intersection $SL_2(R)\cap G_N$ contains only the identity, so the exact sequence is split; equivalently $GL_2(R)\cong SL_2(R)\rtimes R^\times$ with the action induced by conjugation through $s$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Source and proof status:** The determinant arrow, exact sequence, and $G_N$ factorization were checked against [S2, Ch. XIII, Ex. 20, printed p. 547, PDF p. 562]. The solution is independently derived.
