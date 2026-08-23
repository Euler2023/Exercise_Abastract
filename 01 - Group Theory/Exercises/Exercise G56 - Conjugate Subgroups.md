---
title: "Exercise G56: Conjugate Subgroups"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - subgroups
  - conjugation
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 6, Ex. 6.7, printed p. 72, PDF p. 84"
created: 2026-08-23
---

# Exercise G56: Conjugate Subgroups

## Problem Statement

> [!question] Exercise 6.7
> If $H\le G$ and $g\in G$, prove $gHg^{-1}=\{ghg^{-1}:h\in H\}$ is a subgroup.

## Hints

> [!hint]- Hint 1
> Conjugation is a bijective homomorphism $G\to G$.

## Solution

> [!success]- Solution
> The identity is $g1g^{-1}$. If $gh_1g^{-1}$ and $gh_2g^{-1}$ lie in the set, then
> 
> $$
> (gh_1g^{-1})(gh_2g^{-1})^{-1}=g(h_1h_2^{-1})g^{-1}.
> $$
> 
> Since $h_1h_2^{-1}\in H$, the subgroup test applies. Therefore $gHg^{-1}\le G$.

## Related Concepts

- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §6, Ex. 6.7, printed p. 72, PDF p. 84]. The solution is an independent derivation for this vault, not a solution printed in Artin.
