---
title: "Exercise LA150: Invariant Subspaces of One Jordan Block"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - jordan-blocks
  - invariant-subspaces
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §7, Ex. 7.6, printed p. 129, PDF p. 141"
created: 2026-08-23
---

# Exercise LA150: Invariant Subspaces of One Jordan Block

## Problem Statement

> [!question] Exercise 7.6
> Determine all invariant subspaces of an operator whose Jordan form consists of one block.

## Hints

> [!hint]- Hint 1
> Subtract the eigenvalue and use the chain $Ne_j=e_{j-1}$.

## Solution

> [!success]- Solution
> Write $T=\lambda I+N$ in a Jordan basis $e_1,\ldots,e_n$ with $Ne_1=0$ and $Ne_j=e_{j-1}$. The spaces
>
> $$
> W_k=\operatorname{span}(e_1,\ldots,e_k),\qquad 0\le k\le n,
> $$
>
> are invariant. Conversely, if $0\ne W$ is invariant, choose $w\in W$ with largest nonzero coordinate index $k$, maximal among vectors of $W$. Then $w,Nw,\ldots,N^{k-1}w$ span $W_k$, so $W_k\subseteq W$; maximality gives $W\subseteq W_k$. Thus $W=W_k$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- **Source status:** [S1, Ch. 4, §7, Ex. 7.6, printed p. 129, PDF p. 141]; independent solution.

