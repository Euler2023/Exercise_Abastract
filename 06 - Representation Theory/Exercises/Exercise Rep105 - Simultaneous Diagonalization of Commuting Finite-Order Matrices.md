---
title: "Exercise Rep105: Simultaneous Diagonalization of Commuting Finite-Order Matrices"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Miscellaneous Ex. M.5, printed p. 321, PDF p. 333"
created: 2026-08-27
---

# Exercise Rep105: Simultaneous Diagonalization of Commuting Finite-Order Matrices

## Problem Statement

> [!question] Miscellaneous Exercise M.5
> Let $A,B$ be commuting matrices such that some positive power of each matrix is the identity. Prove that there is an invertible matrix $P$ such that $PAP^{-1}$ and $PBP^{-1}$ are both diagonal.

## Hints

> [!hint]- Hint 1
> Each minimal polynomial divides $t^m-1$, which has distinct complex roots.

## Solution

> [!success]- Solution
> Finite order makes both $A$ and $B$ diagonalizable over $\mathbb C$. Decompose the space into eigenspaces of $A$. Since $AB=BA$, each $A$-eigenspace is $B$-invariant. Restrict $B$ to each such eigenspace and choose a basis of $B$-eigenvectors there. Combining these bases yields a common eigenbasis, and its change-of-basis matrix $P$ diagonalizes both matrices. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]

## Notes

- **Field boundary:** the proof is over $\mathbb C$, consistent with the chapter's representation convention.
- **Source status:** [S1, Ch. 10, Misc. Ex. M.5, printed p. 321, PDF p. 333].

