---
title: "Exercise LA142: Real Involutions in Dimension Two"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - involutions
  - diagonalization
  - reflections
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §6, Ex. 6.9, printed p. 129, PDF p. 141"
created: 2026-08-23
---

# Exercise LA142: Real Involutions in Dimension Two

## Problem Statement

> [!question] Exercise 6.9
> Find all real $2\times2$ matrices with $A^2=I$, and describe geometrically how they act on $\mathbb R^2$.

## Hints

> [!hint]- Hint 1
> The polynomial $t^2-1$ has distinct real roots.

## Solution

> [!success]- Solution
> Since the minimal polynomial divides $(t-1)(t+1)$, $A$ is diagonalizable. Thus either $A=I$, $A=-I$, or $A$ is similar to $\operatorname{diag}(1,-1)$. In entries, the nontrivial case is exactly
>
> $$
> A=\begin{pmatrix}a&b\\c&-a\end{pmatrix},
> \qquad a^2+bc=1.
> $$
>
> The identity fixes every vector; $-I$ is a half-turn. In the remaining case, $A$ fixes the $+1$ eigenline and reverses the $-1$ eigenline, so it is an oblique reflection (orthogonal only when the two eigenlines are perpendicular).

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** [S1, Ch. 4, §6, Ex. 6.9, printed p. 129, PDF p. 141]; independent classification.

