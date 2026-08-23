---
title: "Exercise LA160: Stabilization of Kernels and Images of Powers"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - kernels
  - images
  - operator-powers
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, Miscellaneous Problems, Ex. M.7, printed p. 131, PDF p. 143"
created: 2026-08-23
---

# Exercise LA160: Stabilization of Kernels and Images of Powers

## Problem Statement

> [!question] Exercise M.7
> For $K_r=\ker T^r$ and $W_r=\operatorname{im}T^r$:
>
> (a) Show $K_1\subseteq K_2\subseteq\cdots$ and $W_1\supseteq W_2\supseteq\cdots$.
>
> (b) Find all implications among (1) $K_r=K_{r+1}$, (2) $W_r=W_{r+1}$, (3) $W_r\cap K_r=0$, (4) $W_r+K_r=V$ when $V$ is finite-dimensional. (c) Do the same when $V$ is infinite-dimensional.

## Hints

> [!hint]- Hint 1
> Kernel stabilization propagates to later powers. In finite dimension compare $\dim K_r+\dim W_r$ with $\dim V$.

## Solution

> [!success]- Solution
> (a) Both inclusions follow immediately from $T^{r+1}=T\,T^r=T^rT$.
>
> For every $V$, (1) and (3) are equivalent: stabilization implies $K_{2r}=K_r$, so $T^rx\in W_r\cap K_r$ forces $T^rx=0$; conversely, if $x\in K_{r+1}$, then $T^rx\in W_r\cap K_1\subseteq W_r\cap K_r$, hence $x\in K_r$. Similarly, (2) and (4) are equivalent: stabilization of images lets one write every $v$ as an element of $W_r$ plus one of $K_r$, and applying $T^r$ to such a decomposition proves the converse.
>
> In finite dimension, rank-nullity gives $\dim K_r+\dim W_r=\dim V$, so (3)$\Leftrightarrow$(4). Hence all four conditions are equivalent.
>
> In infinite dimension there are no further implications: the right shift on finite-support sequences satisfies (1),(3) but not (2),(4), while the left shift satisfies (2),(4) but not (1),(3).

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The four conditions were visually checked at [S1, Ch. 4, Misc. Problems, Ex. M.7, printed p. 131, PDF p. 143]. The implication audit is independent.

