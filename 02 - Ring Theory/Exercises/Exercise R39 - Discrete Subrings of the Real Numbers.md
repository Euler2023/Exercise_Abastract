---
title: "Exercise R39: Discrete Subrings of the Real Numbers"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - subrings
  - topology
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §1, Ex. 1.5, printed p. 354, PDF p. 366"
created: 2026-08-27
---

# Exercise R39: Discrete Subrings of the Real Numbers

## Problem Statement

> [!question] Exercise 1.5
> Determine all subrings of $\mathbb{R}$ that are discrete sets.

## Hints

> [!hint]- Hint 1
> A discrete additive subgroup of $\mathbb{R}$ has a least positive element and is cyclic.

> [!hint]- Hint 2
> Use Artin's convention that a subring contains the same identity.

## Solution

> [!success]- Solution
> Let $S\subset\mathbb{R}$ be a discrete subring. Its additive group is discrete, so it has a least positive element $d$ and equals $d\mathbb{Z}$: division with remainder by $d$ would otherwise produce a smaller positive element.
>
> Because $1\in S$, we have $1=md$ for some positive integer $m$, so $d=1/m$. Closure under multiplication gives $d^2\in d\mathbb{Z}$, hence $d$ is an integer. Thus $1/m$ is an integer, forcing $m=1$ and $d=1$. Therefore
>
> $$
> S=\mathbb{Z}.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Subrings|Subrings]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

- **Convention boundary:** Under a nonunital definition of subring, $n\mathbb{Z}$ and the zero ring would also require discussion. Artin's chapter uses identity-preserving subrings.
- **Source status:** The statement is from [S1, Ch. 11, §1, Ex. 1.5, printed p. 354, PDF p. 366]; the classification proof is independent.

