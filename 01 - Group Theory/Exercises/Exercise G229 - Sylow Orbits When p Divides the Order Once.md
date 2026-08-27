---
title: "Exercise G229: Sylow Orbits When p Divides the Order Once"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 7, Ex. 7.7, printed p. 224, PDF p. 236"
created: 2026-08-27
---

# Exercise G229: Sylow Orbits When p Divides the Order Once

## Problem Statement

> [!question] Exercise 7.7
> Let $|G|=pm$ with $p\nmid m$, let $H$ be Sylow $p$, and let $S$ be the set of Sylow $p$-subgroups. Explain the decomposition of $S$ into $H$-orbits.

## Hints

> [!hint]- Hint 1
> A fixed Sylow subgroup normalized by $H$ must equal $H$.

## Solution

> [!success]- Solution
> Conjugation by $H$ gives orbits of size $1$ or $p$. The subgroup $H$ is fixed. If another $K$ were fixed, $H$ would normalize $K$, so $HK$ would be a subgroup of order $p^2$, impossible because $p^2\nmid|G|$. Hence
>
> $$
> S=\{H\}\sqcup\text{(orbits of size $p$)},
> $$
>
> recovering $|S|\equiv1\pmod p$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- **Source status:** [S1, Ch. 7, §7, Ex. 7.7, printed p. 224, PDF p. 236]; source PDF checked; solution independently derived.
