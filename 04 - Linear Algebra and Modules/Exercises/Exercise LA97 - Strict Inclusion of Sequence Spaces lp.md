---
title: "Exercise LA97: Strict Inclusion $\\ell^p\\subsetneq\\ell^{p+1}$"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - sequence-spaces
  - infinite-dimensional-spaces
  - lp-spaces
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 6, Ex. 6.3, printed p. 101, PDF p. 113"
created: 2026-08-23
---

# Exercise LA97: Strict Inclusion $\ell^p\subsetneq\ell^{p+1}$

## Problem Statement

> [!question] Exercise 6.3
> For every positive integer $p$, let $\ell^p$ be the space of sequences $(a_i)$ such that $\sum_i|a_i|^p<\infty$. Prove that $\ell^p$ is a proper subspace of $\ell^{p+1}$.

## Hints

> [!hint]- Hint 1
> A summable sequence tends to zero, so eventually $|a_i|\le1$.

> [!hint]- Hint 2
> Use $a_i=i^{-1/p}$ for strictness.

## Solution

> [!success]- Solution
> If $(a_i)\in\ell^p$, then $a_i\to0$. Hence $|a_i|\le1$ for all sufficiently large $i$, and there
> 
> $$
> |a_i|^{p+1}\le|a_i|^p.
> $$
> 
> The finitely many remaining terms do not affect convergence, so $(a_i)\in\ell^{p+1}$. The inclusion is linear. It is strict because for $a_i=i^{-1/p}$,
> 
> $$
> \sum_i|a_i|^p=\sum_i\frac1i=\infty,
> \qquad
> \sum_i|a_i|^{p+1}=\sum_i i^{-1-1/p}<\infty.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §6, Ex. 6.3, printed p. 101, PDF p. 113]. The solution is an independent derivation for this vault, not a solution printed in Artin.
