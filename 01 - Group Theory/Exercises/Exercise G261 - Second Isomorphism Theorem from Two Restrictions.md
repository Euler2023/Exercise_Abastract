---
title: "Exercise G261: Second Isomorphism Theorem from Two Restrictions"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Miscellaneous Problems, Ex. M.5, printed p. 227, PDF p. 239"
created: 2026-08-27
---

# Exercise G261: Second Isomorphism Theorem from Two Restrictions

## Problem Statement

> [!question] Exercise M.5
> Let $H,N\le G$ with $N\trianglelefteq G$. Determine the kernels of $\pi|_H$ and $\pi|_{HN}$, then prove $H/(H\cap N)\cong HN/N$.

## Hints

> [!hint]- Hint 1
> Restrict the canonical map $\pi:G\to G/N$.

## Solution

> [!success]- Solution
> The kernel of $\pi|_H$ is $H\cap N$. The kernel of $\pi|_{HN}$ is $HN\cap N=N$, and both restrictions have image $HN/N$ (for $H$, every $hnN=hN$). The First Isomorphism Theorem applied to $\pi|_H$ gives
>
> $$
> H/(H\cap N)\cong HN/N,
> $$
>
> which is the Second Isomorphism Theorem. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]

## Notes

- **Source status:** [S1, Ch. 7, Misc., Ex. M.5, printed p. 227, PDF p. 239]; source PDF checked; solution independently derived.
