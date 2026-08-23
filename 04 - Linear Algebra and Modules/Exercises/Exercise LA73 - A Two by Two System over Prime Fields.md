---
title: "Exercise LA73: A $2\\times2$ System over Prime Fields"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - linear-systems
  - finite-fields
  - singular-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 1, Ex. 1.4, printed p. 98, PDF p. 110"
created: 2026-08-23
---

# Exercise LA73: A $2\times2$ System over Prime Fields

## Problem Statement

> [!question] Exercise 1.4
> Consider
> 
> $$
> \begin{pmatrix}6&-3\\2&6\end{pmatrix}
> \begin{pmatrix}x_1\\x_2\end{pmatrix}
> =\begin{pmatrix}3\\1\end{pmatrix}.
> $$
> 
> **(a)** Solve it in $\mathbb F_p$ for $p=5,11,17$.
> 
> **(b)** Determine the number of solutions for $p=7$.

## Hints

> [!hint]- Hint 1
> The determinant is $42$.

> [!hint]- Hint 2
> When $p=7$, the two equations become dependent and consistent.

## Solution

> [!success]- Solution
> For $p\ne2,3,7$, Cramer's rule gives
> 
> $$
> x_1=\frac{21}{42}=\frac12,\qquad x_2=\frac{-6+6}{42}=0.
> $$
> 
> Thus the solutions are
> 
> $$
> (x_1,x_2)=
> \begin{cases}
> (3,0)&\text{in }\mathbb F_5,\\
> (6,0)&\text{in }\mathbb F_{11},\\
> (9,0)&\text{in }\mathbb F_{17}.
> \end{cases}
> $$
> 
> In $\mathbb F_7$, the first row and right side are three times the second row and right side. There is one independent equation, $2x_1-x_2=1$. Choosing $x_2$ arbitrarily determines $x_1=4(1+x_2)$, so there are exactly $7$ solutions.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §1, Ex. 1.4, printed p. 98, PDF p. 110]. The solution is an independent derivation for this vault, not a solution printed in Artin.
