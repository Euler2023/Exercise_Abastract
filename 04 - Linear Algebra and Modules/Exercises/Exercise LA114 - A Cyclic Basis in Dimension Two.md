---
title: "Exercise LA114: A Cyclic Basis in Dimension Two"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - cyclic-vectors
  - companion-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §3, Ex. 3.3, printed p. 126, PDF p. 138"
created: 2026-08-23
---

# Exercise LA114: A Cyclic Basis in Dimension Two

## Problem Statement

> [!question] Exercise 3.3
> Let $T:V\to V$ be a linear operator on a vector space of dimension $2$. Assume that $T$ is not multiplication by a scalar. Prove that some $v\in V$ makes $(v,T(v))$ a basis, and describe the matrix of $T$ in that basis.

## Hints

> [!hint]- Hint 1
> If $(v,Tv)$ were dependent for every nonzero $v$, every vector would be an eigenvector.

## Solution

> [!success]- Solution
> If every nonzero $v$ satisfied $Tv\in Fv$, then applying $T$ to two independent vectors and to their sum would force all eigenvalues to be the same, so $T$ would be scalar. Hence some $v$ makes $v,Tv$ independent and therefore a basis.
>
> Write $T^2v=av+bTv$. Relative to $(v,Tv)$, the two columns of $[T]$ are $(0,1)^t$ and $(a,b)^t$, so
>
> $$
> [T]_{(v,Tv)}=\begin{pmatrix}0&a\\1&b\end{pmatrix}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** [S1, Ch. 4, §3, Ex. 3.3, printed p. 126, PDF p. 138]; independent solution.

