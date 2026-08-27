---
title: "Exercise G221: Normalizer Growth in Finite p-Groups"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 6, Ex. 6.5, printed p. 224, PDF p. 236"
created: 2026-08-27
---

# Exercise G221: Normalizer Growth in Finite p-Groups

## Problem Statement

> [!question] Exercise 6.5
> Let $G$ be a finite $p$-group and $H<G$. Prove $N_G(H)>H$, and that $H$ is contained in a normal subgroup of index $p$.

## Hints

> [!hint]- Hint 1
> Let $H$ act on $G/H$, then choose a maximal subgroup containing $H$.

## Solution

> [!success]- Solution
> A coset $gH$ is fixed by the left action of $H$ exactly when $g\in N_G(H)$. Hence the fixed-point congruence gives
>
> $$
> [N_G(H):H]\equiv[G:H]\equiv0\pmod p.
> $$
>
> The left side is positive, so $N_G(H)>H$. Choose a maximal proper subgroup $M\supseteq H$. If $[G:M]>p$, the first result gives $N_G(M)>M$, contradicting maximality. Thus $[G:M]=p$. The coset action shows every index-$p$ subgroup of a $p$-group is normal, so $H\subseteq M\trianglelefteq G$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **Source status:** [S1, Ch. 7, §6, Ex. 6.5, printed p. 224, PDF p. 236]; source PDF checked; solution independently derived.
