---
title: "Exercise LA490: Strictly Upper Triangular Nilpotent Algebra"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - nilpotent-matrices
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVII, Exercise 14, printed p. 662, PDF p. 677"
created: 2026-09-29
---

# Exercise LA490: Strictly Upper Triangular Nilpotent Algebra

## Problem Statement

> [!question] Lang XVII.14
> Let $F$ be a field. Let $\mathfrak n=\mathfrak n(F)$ be the vector space of strictly upper triangular $n\times n$ matrices over $F$. Show that $\mathfrak n$ is actually an algebra, and all elements of $\mathfrak n$ are nilpotent (some positive integral power is $0$).

## Hints

> [!hint]- Hint 1: Inspect one entry of a product
> A nonzero summand $x_{ik}y_{kj}$ requires $i<k<j$.

> [!hint]- Hint 2: Count the available indices
> For a product of $r$ strictly upper triangular matrices, any nonzero summand in its $(i,j)$-entry requires a strictly increasing chain of $r+1$ indices from $1$ to $n$.

## Solution

> [!success]- Independent derivation
> Assume $n\ge1$. A matrix $X=(x_{ij})$ lies in $\mathfrak n$ exactly when $x_{ij}=0$ for $i\ge j$. This condition is preserved by addition and scalar multiplication, so $\mathfrak n$ is an $F$-vector subspace of $\operatorname{Mat}_n(F)$.
>
> If $X,Y\in\mathfrak n$, then
>
> $$
> (XY)_{ij}=\sum_{k=1}^n x_{ik}y_{kj}.
> $$
>
> Each potentially nonzero term has $i<k<j$, which is impossible if $i\ge j$. Thus $XY\in\mathfrak n$. Associativity and bilinearity are inherited from matrix multiplication, so $\mathfrak n$ is an associative $F$-algebra, without a required identity element.
>
> More generally, for $X_1,\ldots,X_r\in\mathfrak n$, the matrix multiplication formula gives
>
> $$
> (X_1\cdots X_r)_{ij}
> =\sum_{i=i_0<i_1<\cdots<i_r=j}
> (X_1)_{i_0i_1}\cdots(X_r)_{i_{r-1}i_r}.
> $$
>
> There is no such chain when $r=n$. Hence every product of $n$ elements is zero: $\mathfrak n^n=0$. In particular $X^n=0$ for every $X\in\mathfrak n$, proving the assertion. For $n=1$, the algebra is already zero.
>
> The bound is sharp when $n\ge2$: for $J=E_{12}+E_{23}+\cdots+E_{n-1,n}$, the unique increasing path from $1$ to $n$ of length $n-1$ gives $J^{n-1}=E_{1n}\ne0$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]

## Notes

- **Source:** [S2, Ch. XVII, Exercise 14, printed p. 662, PDF p. 677]. The original page was visually checked; no source figure is needed.
- **Algebra convention:** The source uses an algebra without an identity here. For $n\ge2$, $\mathfrak n$ has no multiplicative identity: an identity would satisfy both $e^n=0$ and $eX=X$ for every nonzero $X$, a contradiction. It is not a unital subalgebra of $\operatorname{Mat}_n(F)$.
- **Stronger conclusion and proof status:** The proof independently establishes the uniform assertion $\mathfrak n^n=0$, which is stronger than nilpotence of each individual element. It uses only matrix multiplication, not Engel's theorem or a structure theorem for associative algebras.
- **Routing:** Entry calculations and the triangular filtration determine the Linear Algebra and Modules destination.
