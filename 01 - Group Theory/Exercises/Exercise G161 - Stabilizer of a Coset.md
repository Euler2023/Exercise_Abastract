---
title: "Exercise G161: Stabilizer of a Coset"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - group-actions
  - cosets
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 8, Ex. 8.2, printed p. 191, PDF p. 203"
created: 2026-08-27
---

# Exercise G161: Stabilizer of a Coset

## Problem Statement

> [!question] Exercise 8.2
> What is the stabilizer of the coset $[aH]$ for the operation of $G$ on $G/H$?

## Hints

> [!hint]- Hint 1
> Solve $gaH=aH$.

> [!hint]- Hint 2
> Multiply the equality by $a^{-1}$ on the left.

## Solution

> [!success]- Solution
> Under left multiplication, $g$ stabilizes $aH$ exactly when
>
> $$
> gaH=aH.
> $$
>
> This is equivalent to $a^{-1}gaH=H$, hence to $a^{-1}ga\in H$. Therefore
>
> $$
> \operatorname{Stab}_G(aH)=aHa^{-1}.
> $$
>
> In particular, the stabilizer of the base coset $H$ is $H$ itself. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Conjugation of subgroups]]

## Notes

- Stabilizers at different cosets in this transitive action are conjugate, not generally equal.
- **Source status:** [S1, Ch. 6, §8, Ex. 8.2, printed p. 191, PDF p. 203]; independent derivation.
