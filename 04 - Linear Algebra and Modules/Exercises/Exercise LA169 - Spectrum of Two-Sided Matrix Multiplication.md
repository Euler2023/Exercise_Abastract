---
title: "Exercise LA169: Spectrum of Two-Sided Matrix Multiplication"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - eigenvalues
  - two-sided-multiplication
  - trace
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §2, Ex. 2.2, printed p. 151, PDF p. 163"
created: 2026-08-24
---

# Exercise LA169: Spectrum of Two-Sided Matrix Multiplication

## Problem Statement

> [!question] Exercise 2.2
> Let $A$ be an $m\times m$ and $B$ an $n\times n$ complex matrix, and define $T$ on $\mathbb C^{m\times n}$ by $T(M)=AMB$.
>
> (a) Construct an eigenvector for $T$ from column vectors $X,Y$, where $X$ is an eigenvector for $A$ and $Y$ is an eigenvector for $B^t$.
>
> (b) Determine the eigenvalues of $T$ in terms of those of $A$ and $B$.
>
> (c) Determine the trace of $T$.

## Hints

> [!hint]- Hint 1
> Try the rank-one matrix $XY^t$.

## Solution

> [!success]- Solution
> (a) If $AX=\alpha X$ and $B^tY=\beta Y$, then
>
> $$
> T(XY^t)=AXY^tB=\alpha X(B^tY)^t=\alpha\beta XY^t.
> $$
>
> Thus $XY^t$ is an eigenvector with eigenvalue $\alpha\beta$.
>
> (b) Triangularize $A$ and $B^t$. On the induced basis of matrix units, the matrix of $T$ is triangular with diagonal entries
>
> $$
> \alpha_i\beta_j\qquad(1\le i\le m, 1\le j\le n),
> $$
>
> counted with algebraic multiplicity. These are all $mn$ eigenvalues of $T$.
>
> (c) Summing them gives
>
> $$
> \operatorname{tr}T=\sum_{i,j}\alpha_i\beta_j
> =(\operatorname{tr}A)(\operatorname{tr}B).
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA133 - Trace and Determinant of Two-Sided Multiplication|Exercise LA133]]

## Notes

- **Deduplication:** LA133 asks for trace and determinant in the square equal-size case; this exercise additionally constructs eigenvectors and determines the full spectrum for rectangular matrix spaces.
- **Source status:** [S1, Ch. 5, §2, Ex. 2.2, printed p. 151, PDF p. 163]; independent solution.

