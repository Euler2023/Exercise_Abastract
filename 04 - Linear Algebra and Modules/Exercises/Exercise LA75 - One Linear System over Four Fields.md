---
title: "Exercise LA75: One Linear System over Four Fields"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - linear-systems
  - finite-fields
  - nullspaces
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 1, Ex. 1.6, printed p. 99, PDF p. 111"
created: 2026-08-23
---

# Exercise LA75: One Linear System over Four Fields

## Problem Statement

> [!question] Exercise 1.6
> Solve completely $AX=0$ and $AX=B$, where
> 
> $$
> A=\begin{pmatrix}1&1&0\\1&0&1\\1&-1&-1\end{pmatrix},
> \qquad B=\begin{pmatrix}1\\-1\\1\end{pmatrix},
> $$
> 
> over **(a)** $\mathbb Q$, **(b)** $\mathbb F_2$, **(c)** $\mathbb F_3$, and **(d)** $\mathbb F_7$.

## Hints

> [!hint]- Hint 1
> The determinant is $3$.

> [!hint]- Hint 2
> For $AX=B$, the first two equations give $y=1-x$ and $z=-1-x$.

## Solution

> [!success]- Solution
> Since $\det A=3$, the homogeneous system has only $0$ over $\mathbb Q$, $\mathbb F_2$, and $\mathbb F_7$. Substitution in $AX=B$ gives $3x=1$, $y=1-x$, and $z=-1-x$. Hence
> 
> $$
> \begin{array}{c|c|c}
> \text{field}&AX=0&AX=B\\ \hline
> \mathbb Q&\{0\}&\{(1/3,\,2/3,\,-4/3)^t\}\\
> \mathbb F_2&\{0\}&\{(1,0,0)^t\}\\
> \mathbb F_7&\{0\}&\{(5,3,1)^t\}
> \end{array}
> $$
> 
> Over $\mathbb F_3$, the homogeneous equations give
> 
> $$
> \ker A=\{t(1,2,2)^t:t\in\mathbb F_3\}.
> $$
> 
> For $AX=B$, the first two equations still give $y=1-x$ and $z=2-x$, but the third then reduces to $0=1$. Thus $AX=B$ has no solution over $\mathbb F_3$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §1, Ex. 1.6, printed p. 99, PDF p. 111]. The solution is an independent derivation for this vault, not a solution printed in Artin.
