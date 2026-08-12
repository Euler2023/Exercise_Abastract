---
title: "Exercise Gal71: Solvable Groups and Solvability by Radicals"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, solvability-by-radicals]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Miscellaneous Ex. M.12, printed p. 512, PDF p. 524"
created: 2026-08-12
---

# Exercise Gal71: Solvable Groups and Solvability by Radicals

## Problem Statement

> [!question] Exercise M.12
> Prove that the roots of an irreducible polynomial $f$ over $F$ are solvable over $F$ if and only if its Galois group is solvable.

## Hints

> [!hint]- Hint 1
> Adjoin roots of unity, refine radical degrees to primes, and use Galois correspondence in both directions.

## Solution

> [!success]- Solution
> If the roots lie in a radical tower, first adjoin all required roots of unity and take normal closures. Kummer theory refines the tower to Galois layers of prime cyclic degree. Intersecting these fields with the splitting field $K$ of $f$ yields a normal series of $\operatorname{Gal}(K/F)$ with cyclic quotients; hence the group is solvable.
>
> Conversely suppose $G=\operatorname{Gal}(K/F)$ is solvable. After adjoining finitely many roots of unity, the base-changed Galois group remains a subgroup, hence solvable. Refine a solvable series to one with prime cyclic quotients. The corresponding reverse tower of fixed fields consists of prime-degree cyclic Galois extensions. Kummer's theorem expresses each layer by adjoining a prime root. Therefore $K$, and hence every root of $f$, lies in a radical tower.

## Related Concepts

- [[01 - Group Theory/Concepts/Solvable Groups|Solvable Groups]]
- [[05 - Galois Theory/Concepts/Solvability by Radicals|Solvability by Radicals]]
- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer Extensions]]

## Notes

The proof imports the roots-of-unity adjunction and Kummer theorem with their exact characteristic hypotheses. This is the full finite characteristic-zero criterion intended by Artin.
