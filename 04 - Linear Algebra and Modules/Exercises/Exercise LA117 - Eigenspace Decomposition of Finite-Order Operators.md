---
title: "Exercise LA117: Eigenspace Decomposition of Finite-Order Operators"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - eigenspaces
  - finite-order-operators
  - direct-sums
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §4, Ex. 4.2, printed pp. 126–127, PDF pp. 138–139"
created: 2026-08-23
---

# Exercise LA117: Eigenspace Decomposition of Finite-Order Operators

## Problem Statement

> [!question] Exercise 4.2
> (a) Let $T$ be a linear operator on a finite-dimensional vector space $V$, with $T^2=I$. Prove that $v-Tv$ is either an eigenvector with eigenvalue $-1$ or zero, and prove that $V=V^{(1)}\oplus V^{(-1)}$.
>
> (b) Generalize the method to prove that $T^4=I$ decomposes a complex vector space into a sum of four eigenspaces.

## Hints

> [!hint]- Hint 1
> For (a), also use $v+Tv$; for (b), average $v,Tv,T^2v,T^3v$ with fourth-root-of-unity coefficients.

## Solution

> [!success]- Solution
> Since $T(v-Tv)=Tv-v=-(v-Tv)$, the first assertion follows. Over a field of characteristic not $2$,
>
> $$
> v=\frac{v+Tv}{2}+\frac{v-Tv}{2},
> $$
>
> and the two terms lie in $V^{(1)}$ and $V^{(-1)}$. Their intersection is zero because a vector fixed and negated by $T$ satisfies $2v=0$.
>
> For (b), let $\zeta=i$ and for $j=0,1,2,3$ define
>
> $$
> P_jv=\frac14\sum_{k=0}^3\zeta^{-jk}T^kv.
> $$
>
> Then $TP_j=\zeta^jP_j$, the $P_j$ sum to $I$, and $P_jP_\ell=0$ for $j\ne\ell$. Hence $V=V^{(1)}\oplus V^{(i)}\oplus V^{(-1)}\oplus V^{(-i)}$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]

## Notes

- **Source issue:** Part (a) is printed without a field restriction. Its direct-sum conclusion requires $\operatorname{char}F\ne2$; in characteristic $2$, $\begin{pmatrix}1&1\\0&1\end{pmatrix}^2=I$ but the operator is not diagonalizable. The printed statement is preserved above and the missing hypothesis is made explicit in the solution.
- **Source status:** [S1, Ch. 4, §4, Ex. 4.2, printed pp. 126–127, PDF pp. 138–139]; independent solution.

