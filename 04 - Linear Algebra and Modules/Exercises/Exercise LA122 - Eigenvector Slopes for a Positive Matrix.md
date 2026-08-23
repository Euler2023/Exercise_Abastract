---
title: "Exercise LA122: Eigenvector Slopes for a Positive Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - eigenvectors
  - positive-matrices
  - slopes
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §4, Ex. 4.7, printed p. 127, PDF p. 139"
created: 2026-08-23
---

# Exercise LA122: Eigenvector Slopes for a Positive Matrix

## Problem Statement

> [!question] Exercise 4.7
> Let $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ be real. For $AX=Y$, an eigenvector condition is equality of slopes $s=x_2/x_1$ and $s'=y_2/y_1$.
>
> (a) Find the equation in $s$. (b) If all entries of $A$ are positive, prove that there is an eigenvector in the first quadrant and one in the second quadrant.

## Hints

> [!hint]- Hint 1
> Set $(c+ds)/(a+bs)=s$ and inspect the signs of the resulting quadratic.

## Solution

> [!success]- Solution
> (a) Equality of slopes gives
>
> $$
> bs^2+(a-d)s-c=0.
> $$
>
> (b) Let $f(s)$ be the left side. With $b,c>0$, $f(0)=-c<0$ and $f(s)\to+\infty$ as $s\to\pm\infty$. Thus there is one positive root and one negative root. For a positive root, $(1,s)^t$ lies in the first quadrant. For a negative root, $(-1,-s)^t$ is the same eigenline and lies in the second quadrant.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** The matrix and slope notation were visually checked at [S1, Ch. 4, §4, Ex. 4.7, printed p. 127, PDF p. 139]. The solution is independent.

