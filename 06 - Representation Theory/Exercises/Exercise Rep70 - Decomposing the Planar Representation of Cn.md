---
title: "Exercise Rep70: Decomposing the Planar Representation of Cn"
topic: representation-theory
difficulty: beginner
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 5, Ex. 5.1, printed p. 317, PDF p. 329"
created: 2026-08-27
---

# Exercise Rep70: Decomposing the Planar Representation of Cn

## Problem Statement

> [!question] Exercise 5.1
> Decompose the standard two-dimensional representation of the cyclic group $C_n$ by rotations into irreducible (complex) representations.

## Hints

> [!hint]- Hint 1
> Use the eigenvectors $(1,-i)$ and $(1,i)$ of a rotation.

## Solution

> [!success]- Solution
> If $x$ generates $C_n$ and $\zeta=e^{2\pi i/n}$, its rotation matrix has eigenvalues $\zeta$ and $\zeta^{-1}$ on the complexified plane. Hence
>
> $$
> \mathbb R^2\otimes_{\mathbb R}\mathbb C\cong\lambda_1\oplus\lambda_{-1},
> \qquad \lambda_k(x)=\zeta^k.
> $$
>
> For $n=1,2$ the two summands are isomorphic; otherwise they are distinct. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** [S1, Ch. 10, §5, Ex. 5.1, printed p. 317, PDF p. 329]; decomposition independently derived.

