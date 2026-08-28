---
title: "Exercise LA327: Unimodular Reduction of an Integer Column"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - bezout
  - integer-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 4, Diagonalizing Integer Matrices, Ex. 4.7, printed p. 438, PDF p. 450"
created: 2026-08-28
---

# Exercise LA327: Unimodular Reduction of an Integer Column

## Problem Statement

> [!question] Exercise 4.7
> Let $A=(a_1,\ldots,a_n)^{\mathsf T}$ be an integer column vector, and let $d$ be the greatest common divisor of $a_1,\ldots,a_n$. Prove that there is a matrix $P\in\operatorname{GL}_n(\mathbb Z)$ such that
>
> $$
> PA=(d,0,\ldots,0)^{\mathsf T}.
> $$

## Hints

> [!hint]- Hint 1
> Apply the extended Euclidean algorithm successively to pairs of coordinates.

## Solution

> [!success]- Solution
> For two integers $a,b$, let $g=\gcd(a,b)$ and choose $u,v$ with $ua+vb=g$. Then
>
> $$
> E=\begin{pmatrix}u&v\\-b/g&a/g\end{pmatrix}
> $$
>
> has determinant $1$ and satisfies
>
> $$
> E(a,b)^{\mathsf T}=(g,0)^{\mathsf T}.
> $$
>
> Embed such a $2\times2$ unimodular block into the first and $j$th coordinates. Starting with $(a_1,a_2)$, replace them by $(\gcd(a_1,a_2),0)$; then combine the first coordinate successively with $a_3,\ldots,a_n$. The product $P$ of these embedded blocks lies in $\operatorname{GL}_n(\mathbb Z)$ and sends $A$ to
>
> $$
> (\gcd(a_1,\ldots,a_n),0,\ldots,0)^{\mathsf T}.
> $$
>
> Multiplying the first row by $-1$ if needed makes the first entry the positive gcd $d$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Routing:** Linear Algebra is primary because the extended Euclidean algorithm is encoded as unimodular row operations.
- **Source status:** [S1, Ch. 14, §14.4, Ex. 4.7, printed p. 438, PDF p. 450]. The construction is independent.
