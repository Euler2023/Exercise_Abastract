---
title: "Exercise G88: Three Candidate Internal Direct Products"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - direct-products
  - matrix-groups
  - complex-numbers
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 11, Ex. 11.4, printed p. 74, PDF p. 86"
created: 2026-08-23
---

# Exercise G88: Three Candidate Internal Direct Products

## Problem Statement

> [!question] Exercise 11.4
> Decide whether $G\cong H\times K$ in:
> 
> **(a)** $G=\mathbb R^\times$, $H=\{\pm1\}$, $K=\mathbb R_{>0}$;
> 
> **(b)** $G$ is the invertible upper-triangular $2\times2$ group, $H$ diagonal and $K$ unipotent upper-triangular;
> 
> **(c)** $G=\mathbb C^\times$, $H$ the unit circle and $K=\mathbb R_{>0}$.

## Hints

> [!hint]- Hint 1
> Use sign/absolute value and polar decomposition.

> [!hint]- Hint 2
> In (b), test whether the two factors commute.

## Solution

> [!success]- Solution
> **(a)** Yes. Every $x\ne0$ has the unique factorization $x=\operatorname{sgn}(x)|x|$, and the factors commute with trivial intersection.
> 
> **(b)** No. Every matrix has a unique factorization
> 
> $$
> \begin{bmatrix}a&b\\0&d\end{bmatrix}
> =\begin{bmatrix}a&0\\0&d\end{bmatrix}
> \begin{bmatrix}1&b/a\\0&1\end{bmatrix},
> $$
> 
> so the multiplication map is bijective, but diagonal matrices do not generally commute with the unipotent factor. This is a semidirect, not direct, product.
> 
> **(c)** Yes. Polar form $z=(z/|z|)|z|$ gives a unique commuting factorization with trivial intersection.

## Related Concepts

- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §11, Ex. 11.4, printed p. 74, PDF p. 86]. The solution is an independent derivation for this vault, not a solution printed in Artin.
