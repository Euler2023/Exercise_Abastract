---
title: "Exercise Gal45: Degrees of Sums of Seventh Roots"
topic: galois-theory
difficulty: intermediate
status: not-started
tags: [exercise, galois-theory, cyclotomic-extensions]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 10, Ex. 10.3, printed p. 509, PDF p. 521"
created: 2026-08-12
---

# Exercise Gal45: Degrees of Sums of Seventh Roots

## Problem Statement

> [!question] Exercise 10.3
> Let $\zeta=\zeta_7$. Determine over $\mathbb Q$ the degrees of (a) $\zeta+\zeta^5$, (b) $\zeta^3+\zeta^4$, (c) $\zeta^3+\zeta^5+\zeta^6$.

## Hints

> [!hint]- Hint 1
> Compute the stabilizer of the exponent set under multiplication by $(\mathbb Z/7)^\times$.

## Solution

> [!success]- Solution
> Distinct subset sums of fewer than seven powers are equal only when their coefficient vectors differ by a multiple of $1+x+\cdots+x^6$, which is impossible here. Thus the degree is the orbit size of the exponent subset.
>
> The sets $\{1,5\}$ and $\{3,4\}$ have trivial stabilizer in $(\mathbb Z/7)^\times$, so (a) and (b) have degree $6$. The set $\{3,5,6\}$ is the coset of quadratic nonresidues and is stabilized by the three quadratic residues, so (c) has degree $6/3=2$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

The stabilizer calculation avoids computing minimal polynomials.
