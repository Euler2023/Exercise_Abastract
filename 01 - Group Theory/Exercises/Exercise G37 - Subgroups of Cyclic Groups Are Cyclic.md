---
title: "Exercise G37: Subgroups of Cyclic Groups Are Cyclic"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - cyclic-groups
  - subgroups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 4, Ex. 4.5, printed p. 70, PDF p. 82"
created: 2026-08-23
---

# Exercise G37: Subgroups of Cyclic Groups Are Cyclic

## Problem Statement

> [!question] Exercise 4.5
> Prove that every subgroup of a cyclic group is cyclic, using exponents and the subgroups of $\mathbb Z^+$.

## Hints

> [!hint]- Hint 1
> Pull the subgroup back under the homomorphism $\mathbb Z\to\langle x\rangle$.

## Solution

> [!success]- Solution
> Let $G=\langle x\rangle$ and $H\le G$. Define
> 
> $$
> S=\{m\in\mathbb Z:x^m\in H\}.
> $$
> 
> The set $S$ is a subgroup of the additive group $\mathbb Z$, so $S=d\mathbb Z$ for some $d\ge0$. Therefore
> 
> $$
> H=\{x^m:m\in S\}=\{x^{dk}:k\in\mathbb Z\}=\langle x^d\rangle.
> $$
> 
> Thus $H$ is cyclic. The same proof covers finite cyclic groups because the exponent map may have a nonzero kernel.

## Related Concepts

- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §4, Ex. 4.5, printed p. 70, PDF p. 82]. The solution is an independent derivation for this vault, not a solution printed in Artin.
