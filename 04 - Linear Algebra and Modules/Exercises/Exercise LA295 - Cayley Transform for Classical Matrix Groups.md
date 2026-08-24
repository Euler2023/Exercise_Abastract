---
title: "Exercise LA295: Cayley Transform for Classical Matrix Groups"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - cayley-transform
  - classical-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Miscellaneous Ex. M.6, printed p. 288, PDF p. 300"
created: 2026-08-24
---

# Exercise LA295: Cayley Transform for Classical Matrix Groups

## Problem Statement

> [!question] Miscellaneous Exercise M.6 — Cayley transform
> Let $U$ denote the set of matrices $A$ such that $I+A$ is invertible, and define $A'=(I-A)(I+A)^{-1}$.
>
> (a) Prove that if $A$ is in $U$, then so is $A'$, and that $(A')'=A$.
>
> (b) Let $V$ denote the vector space of real skew-symmetric $n\times n$ matrices. Prove that $A\mapsto(I-A)(I+A)^{-1}$ defines a homeomorphism from a neighborhood of $0$ in $V$ to a neighborhood of $I$ in $SO_n$.
>
> (c) Is there an analogous statement for the unitary group?
>
> (d) Let $S=\begin{pmatrix}0&I\\-I&0\end{pmatrix}$. Show that a matrix $A$ in $U$ is symplectic if and only if $(A')^{\mathsf T}S=-SA'$.

## Hints

> [!hint]- Hint 1
> Compute $I+A'$ and $I-A'$ before applying the transform again.

> [!hint]- Hint 2
> Substitute $A=(I-A')(I+A')^{-1}$ into the defining equation of each classical group.

## Solution

> [!success]- Solution
> **(a)** Since
>
> $$
> I+A'=2(I+A)^{-1},
> \qquad I-A'=2A(I+A)^{-1},
> $$
>
> the first matrix is invertible and a second application gives $(A')'=A$.
>
> **(b)** If $A^{\mathsf T}=-A$, then direct expansion gives
>
> $$
> (A')^{\mathsf T}A'=I.
> $$
>
> Near $A=0$, the determinant is continuously equal to $1$, so $A'\in SO_n$. Conversely, applying the same involution to an orthogonal matrix near $I$ gives a skew-symmetric matrix. The rational formulas are continuous wherever the displayed inverses exist, so they define inverse homeomorphisms. In fact this is a global homeomorphism between skew-symmetric matrices and orthogonal matrices without eigenvalue $-1$.
>
> **(c)** Yes. Replacing transpose by conjugate transpose gives a homeomorphism between skew-Hermitian matrices and unitary matrices without eigenvalue $-1$, and hence between neighborhoods of $0$ and $I$.
>
> **(d)** Put $X=A'$, so $A=(I-X)(I+X)^{-1}$. Multiplying $A^{\mathsf T}SA=S$ on the left by $(I+X)^{\mathsf T}$ and on the right by $I+X$ gives
>
> $$
> (I-X)^{\mathsf T}S(I-X)=(I+X)^{\mathsf T}S(I+X).
> $$
>
> Cancelling common terms yields $X^{\mathsf T}S+SX=0$, which is exactly
>
> $$
> (A')^{\mathsf T}S=-SA'.
> $$
>
> Every step is reversible, proving the equivalence.
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- The Cayley transform exchanges a neighborhood in a classical group with a neighborhood in its Lie algebra.
- **Source status:** The complete multipart statement was visually checked at [S1, Ch. 9, Misc. Ex. M.6, printed p. 288, PDF p. 300]. The algebraic equivalences and domain statements are independent.

