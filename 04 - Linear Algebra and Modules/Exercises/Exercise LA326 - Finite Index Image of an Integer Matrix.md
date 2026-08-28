---
title: "Exercise LA326: Finite-Index Image of an Integer Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - integer-matrices
  - lattice-index
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 4, Diagonalizing Integer Matrices, Ex. 4.6, printed p. 438, PDF p. 450"
created: 2026-08-28
---

# Exercise LA326: Finite-Index Image of an Integer Matrix

## Problem Statement

> [!question] Exercise 4.6
> Let $\varphi:\mathbb Z^k\to\mathbb Z^k$ be a homomorphism given by multiplication by an integer matrix $A$. Show that the image of $\varphi$ is of finite index if and only if $A$ is nonsingular and that, if so, the index is $|\det A|$.

## Hints

> [!hint]- Hint 1
> Put $A$ in Smith normal form.

## Solution

> [!success]- Solution
> Choose unimodular $P,Q$ such that
>
> $$
> Q^{-1}AP=\operatorname{diag}(d_1,\ldots,d_r,0,\ldots,0).
> $$
>
> The changes $P,Q$ are automorphisms of the domain and codomain, so they do not affect the cokernel. If $r<k$, the quotient contains a free $\mathbb Z$-summand and is infinite. This is exactly the singular case.
>
> If $r=k$, then
>
> $$
> \mathbb Z^k/A\mathbb Z^k
> \cong\bigoplus_{j=1}^k\mathbb Z/d_j\mathbb Z,
> $$
>
> so
>
> $$
> [\mathbb Z^k:A\mathbb Z^k]
> =d_1\cdots d_k
> =|\det A|.
> $$
>
> Hence the image has finite index exactly when $A$ is nonsingular, with the claimed formula.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Routing:** Linear Algebra is primary because Smith diagonalization identifies the cokernel and determinant.
- **Source status:** [S1, Ch. 14, §14.4, Ex. 4.6, printed p. 438, PDF p. 450]. The proof is independent.
