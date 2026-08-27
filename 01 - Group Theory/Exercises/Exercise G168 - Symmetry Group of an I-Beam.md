---
title: "Exercise G168: Symmetry Group of an I-Beam"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - symmetry-groups
  - direct-products
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 9, Ex. 9.5, printed p. 192, PDF p. 204"
created: 2026-08-27
---

# Exercise G168: Symmetry Group of an I-Beam

## Problem Statement

> [!question] Exercise 9.5
> Let $F$ be a section of an I-beam, which one can think of as the product set of the letter I and the unit interval. Identify its group of symmetries, orientation-reversing symmetries included.

## Hints

> [!hint]- Hint 1
> A generic planar letter I has two independent reflection symmetries.

> [!hint]- Hint 2
> The unit-interval factor can be reversed independently.

## Solution

> [!success]- Solution
> The planar I-shaped cross-section has reflection symmetry in its horizontal and vertical midlines. These commuting involutions generate $D_2\cong C_2\times C_2$. Reversal of the interval factor is a third commuting involution, independent of the cross-section symmetries. Hence
>
> $$
> \operatorname{Sym}(F)\cong D_2\times C_2\cong C_2^3,
> $$
>
> and the group has order $8$. In centered coordinates its elements are the three independent coordinate sign changes. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]

## Notes

- This assumes the usual non-square proportions of an I-beam; accidental equal dimensions could introduce extra symmetries not intended by the problem.
- **Source status:** [S1, Ch. 6, §9, Ex. 9.5, printed p. 192, PDF p. 204]; independent product-symmetry argument.

