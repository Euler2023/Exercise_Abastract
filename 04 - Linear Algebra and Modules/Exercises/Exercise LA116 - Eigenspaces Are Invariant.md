---
title: "Exercise LA116: Eigenspaces Are Invariant"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - eigenspaces
  - invariant-subspaces
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §4, Ex. 4.1, printed p. 126, PDF p. 138"
created: 2026-08-23
---

# Exercise LA116: Eigenspaces Are Invariant

## Problem Statement

> [!question] Exercise 4.1
> Let $T$ be a linear operator on $V$, and let $\lambda$ be a scalar. The eigenspace $V^{(\lambda)}$ is the set of eigenvectors with eigenvalue $\lambda$, together with $0$. Prove that $V^{(\lambda)}$ is a $T$-invariant subspace.

## Hints

> [!hint]- Hint 1
> Identify $V^{(\lambda)}$ as a kernel.

## Solution

> [!success]- Solution
> One has $V^{(\lambda)}=\ker(T-\lambda I)$, so it is a subspace. If $v\in V^{(\lambda)}$, then $Tv=\lambda v$ also lies in that subspace. Hence $T(V^{(\lambda)})\subseteq V^{(\lambda)}$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- **Source status:** [S1, Ch. 4, §4, Ex. 4.1, printed p. 126, PDF p. 138]; independent solution.

