---
title: "Exercise LA230: Sylvester's Law of Inertia"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - sylvesters-law
  - signature
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.21, printed p. 256, PDF p. 268"
created: 2026-08-24
---

# Exercise LA230: Sylvester's Law of Inertia

## Problem Statement

> [!question] Exercise 4.21
> Prove Sylvester's Law (see 8.4.17).
>
> **Hint from the source.** Begin by showing that if $W_1$ and $W_2$ are subspaces of $V$ and if the form is positive definite on $W_1$ and negative semidefinite on $W_2$, then $W_1$ and $W_2$ are independent.

## Hints

> [!hint]- Hint 1
> A nonzero vector cannot have both a positive and a nonpositive squared value.

> [!hint]- Hint 2
> Compare the positive subspace from one diagonalization with the negative-plus-null subspace from another.

## Solution

> [!success]- Solution
> First suppose the form is positive definite on $W_1$ and negative semidefinite on $W_2$. If $x\in W_1\cap W_2$ were nonzero, then
>
> $$
> (x,x)>0
> \quad\text{and}\quad
> (x,x)\le0,
> $$
>
> a contradiction. Thus $W_1\cap W_2=\{0\}$ and
>
> $$
> \dim W_1+\dim W_2\le\dim V.
> $$
>
> Now suppose two orthogonal bases give diagonal decompositions
>
> $$
> V=P\oplus N\oplus Z
> =P'\oplus N'\oplus Z',
> $$
>
> where the form is positive definite on $P,P'$, negative definite on $N,N'$, and zero on $Z,Z'$. Write their dimensions as $(p,m,z)$ and $(p',m',z')$.
>
> The form is negative semidefinite on $N'\oplus Z'$. Applying the preliminary result to $P$ and $N'\oplus Z'$ gives
>
> $$
> p+(m'+z')\le n.
> $$
>
> Since $m'+z'=n-p'$, this says $p\le p'$. Interchanging the two decompositions gives $p'\le p$, hence $p=p'$.
>
> Similarly, compare $N$ with the positive semidefinite subspace $P'\oplus Z'$ to obtain $m\le m'$, and reverse the roles to get $m'=m$. Finally,
>
> $$
> z=n-p-m=n-p'-m'=z'.
> $$
>
> Therefore the numbers of positive, negative, and zero diagonal entries are independent of the diagonalizing basis. In particular, for a nondegenerate form the signature $(p,m)$ is well defined.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Indefinite Bilinear Forms and Lorentz Groups|Indefinite Bilinear Forms and Lorentz Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]

## Notes

- The proof establishes invariance of the full inertia triple $(p,m,z)$; Artin calls $(p,m)$ the signature in the nondegenerate case.
- **Source status:** The statement and source hint were visually verified at [S1, Ch. 8, §4, Ex. 4.21, printed p. 256, PDF p. 268]. The proof is independent.

