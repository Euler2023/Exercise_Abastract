---
title: "Exercise R60: Ideals Above x Squared Plus One"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - quotient-rings
  - gaussian-integers
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §4, Ex. 4.2, printed p. 355, PDF p. 367"
created: 2026-08-27
---

# Exercise R60: Ideals Above x Squared Plus One

## Problem Statement

> [!question] Exercise 4.2
> What does the Correspondence Theorem tell us about ideals of $\mathbb Z[x]$ that contain $x^2+1$?

## Hints

> [!hint]- Hint 1
> Identify $\mathbb Z[x]/(x^2+1)$ by sending the residue of $x$ to $i$.

## Solution

> [!success]- Solution
> The evaluation homomorphism $\mathbb Z[x]\to\mathbb Z[i]$, $x\mapsto i$, is surjective with kernel $(x^2+1)$. Thus
>
> $$
> \mathbb Z[x]/(x^2+1)\cong\mathbb Z[i].
> $$
>
> The Correspondence Theorem therefore gives an inclusion-preserving bijection
>
> $$
> \{J\triangleleft\mathbb Z[x]:(x^2+1)\subseteq J\}
> \longleftrightarrow
> \{\text{ideals of }\mathbb Z[i]\},
> $$
>
> sending $J$ to its image $J/(x^2+1)$ and an ideal $A\subseteq\mathbb Z[i]$ to its inverse image.

## Related Concepts

- [[02 - Ring Theory/Concepts/Isomorphism Theorems for Rings|Isomorphism Theorems for Rings]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]

## Notes

- **Source status:** The statement is from [S1, Ch. 11, §4, Ex. 4.2, printed p. 355, PDF p. 367]. The quotient identification is independently explained.

