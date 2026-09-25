---
title: "Exercise LA396: Homogeneous Linear Systems and Field Extension"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - linear-systems
  - field-extensions
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Matrices and Linear Maps, Exercise 4, printed p. 545, PDF p. 560"
created: 2026-09-26
---

# Exercise LA396: Homogeneous Linear Systems and Field Extension

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 4
> Let $A_1,\ldots,A_r$ be row vectors of dimension $n$, over a field $k$. Let $X=(x_1,\ldots,x_n)$. Let $b_1,\ldots,b_r\in k$. By a system of linear equations in $k$ one means a system of type
> $$
> A_1\cdot X=b_1,\ldots,A_r\cdot X=b_r.
> $$
> If $b_1=\cdots=b_r=0$, one says the system is homogeneous. We call $n$ the number of variables and $r$ the number of equations. A solution $X$ of the homogeneous system is called trivial if $x_i=0$, $i=1,\ldots,n$.
>
> (a) Show that a homogeneous system of $r$ linear equations in $n$ unknowns with $n>r$ always has a non-trivial solution.
>
> (b) Let $L$ be a system of homogeneous linear equations over a field $k$. Let $k$ be a subfield of $k'$. If $L$ has a non-trivial solution in $k'$, show that it has a non-trivial solution in $k$.

## Hints

> [!hint]- Hint 1
> Put the row vectors into a single $r\times n$ coefficient matrix.

> [!hint]- Hint 2
> Its rank is at most $r$. Row reduction over $k$ remains valid over $k'$.

## Solution

> [!success]- Independent derivation
> Let $A$ be the $r\times n$ matrix whose rows are $A_1,\ldots,A_r$. The solutions of the homogeneous system are precisely $\ker(A:k^n\to k^r)$.
>
> **(a)** Since $\operatorname{rank}_k A\le r<n$, rank-nullity gives
> $$
> \dim_k\ker A=n-\operatorname{rank}_k A\ge n-r>0.
> $$
> Thus the kernel contains a nonzero vector.
>
> **(b)** Perform elementary row operations over $k$, producing a row-echelon matrix $U=PA$ with $P\in GL_r(k)$. The pivot entries of $U$ are nonzero elements of $k$, so they remain nonzero in the extension field $k'$. Thus the same echelon form has the same number of pivots over either field:
> $$
> \operatorname{rank}_k A=\operatorname{rank}_{k'}A.
> $$
> A nonzero solution in $(k')^n$ means $\operatorname{rank}_{k'}A<n$. Therefore $\operatorname{rank}_k A<n$, and rank-nullity over $k$ supplies a nonzero solution in $k^n$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- The full setup and both parts were checked against [S2, Ch. XIII, Exercise 4, printed p. 545, PDF p. 560]. The source's repeated wording “Let $k$ be a subfield of $k'$” is preserved; the proof is independent.
- Part (b) is a rank-invariance statement for a matrix with entries in $k$ under scalar extension $k\subseteq k'$.
