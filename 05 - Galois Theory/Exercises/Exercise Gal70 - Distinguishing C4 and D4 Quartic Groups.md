---
title: "Exercise Gal70: Distinguishing C4 and D4 Quartic Groups"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, quartic-polynomials, resolvent-cubic]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Miscellaneous Ex. M.11, printed p. 512, PDF p. 524"
created: 2026-08-12
---

# Exercise Gal70: Distinguishing $C_4$ and $D_4$ Quartic Groups

## Problem Statement

> [!question] Exercise M.11
> For an irreducible quartic whose resolvent has $\beta=\alpha_1\alpha_2+\alpha_3\alpha_4\in F$ and nonsquare discriminant, determine the stabilizer of $\beta$; prove $\gamma^2,\epsilon^2\in F$ for $\gamma=\alpha_1\alpha_2-\alpha_3\alpha_4$, $\epsilon=\alpha_1+\alpha_2-\alpha_3-\alpha_4$; and give square tests distinguishing $C_4$ from $D_4$.

## Hints

> [!hint]- Hint 1
> The stabilizer preserves the partition $\{1,2\}\mid\{3,4\}$.

## Solution

> [!success]- Solution
> The stabilizer is the order-eight subgroup
> $$
> H=\langle(12),(34),(13)(24)\rangle\cong D_4,
> $$
> consisting of permutations preserving or exchanging the two blocks. Distinctness of the three resolvent roots proves no other permutation fixes $\beta$.
>
> Elements of $H$ send each of $\gamma,\epsilon$ to its negative or itself, so their squares are $H$-fixed. Since the actual Galois group is a transitive subgroup $C_4$ or $D_4$ inside $H$, the symmetric coefficient calculations show $\gamma^2,\epsilon^2\in F$.
>
> Let $\delta$ be the Vandermonde square root. A character table for $H$ shows that $\delta\gamma$ (when $\gamma\ne0$) and $\delta\epsilon$ (when $\epsilon\ne0$) are fixed precisely by the cyclic transitive subgroup $C_4$. Consequently
> $$
> \delta\gamma\in F^{\times2}\iff G=C_4,\qquad
> \delta\epsilon\in F^{\times2}\iff G=C_4.
> $$
> Finally $\gamma=\epsilon=0$ would imply equal products and equal sums for the two root pairs, hence the unordered pairs coincide, contradicting four distinct roots.

## Related Concepts

- [[05 - Galois Theory/Concepts/Quartic Resolvents and Galois Groups|Quartic Resolvents and Galois Groups]]
- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]

## Notes

The source's notation $\delta\gamma$ “is a square in $F$” means the element lies in $F$ and belongs to $F^{\times2}$. The subgroup/character calculation is the technical core.
