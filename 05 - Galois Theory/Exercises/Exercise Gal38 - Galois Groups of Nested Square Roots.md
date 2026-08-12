---
title: "Exercise Gal38: Galois Groups of Nested Square Roots"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, nested-radicals]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 9, Ex. 9.5, printed p. 508, PDF p. 520"
created: 2026-08-12
---

# Exercise Gal38: Galois Groups of Nested Square Roots

## Problem Statement

> [!question] Exercise 9.5
> For $\alpha=\sqrt{r+\sqrt t}$ of degree $4$ over $F$, compute its irreducible polynomial, show the splitting-field group is $D_4,C_4$, or $D_2$, decide among them via $r^2-t$, and in the $D_4$ case generate all intermediate fields.

## Hints

> [!hint]- Hint 1
> Put $\alpha'=\sqrt{r-\sqrt t}$ and $d=r^2-t=(\alpha\alpha')^2$.

## Solution

> [!success]- Solution
> Assuming $\operatorname{char}F\ne2$,
> $$
> f(x)=(x^2-r)^2-t=x^4-2rx^2+(r^2-t).
> $$
> Its roots are $\pm\alpha,\pm\alpha'$; thus the Galois group is a transitive subgroup of the dihedral group preserving opposite pairs, hence $D_4,C_4$, or $D_2$.
>
> Let $d=r^2-t$. If $d\in F^{\times2}$, then $\alpha'= \sqrt d/\alpha\in F(\alpha)$, so the splitting field has degree $4$; the group is $D_2$ when an automorphism exchanging $\alpha,\alpha'$ has order $2$, and $C_4$ when it has order $4$, equivalently according to whether the relevant norm equation makes $\alpha\alpha'$ fixed or negated. If $d\notin F^{\times2}$, then $\alpha'\notin F(\alpha)$, the splitting field has degree $8$, and the group is $D_4$.
>
> In the $D_4$ case put $s=\sqrt t$, $q=\sqrt d=\alpha\alpha'$. The three quadratic fields are $F(s),F(q),F(sq)$; the five quartic fields are
> $$
> F(\alpha),\ F(\alpha'),\ F(\alpha+\alpha'),\ F(\alpha-\alpha'),\ F(s,q).
> $$
> Together with $F,K$, these match all subgroups.

## Related Concepts

- [[05 - Galois Theory/Concepts/Quartic Resolvents and Galois Groups|Quartic Resolvents and Galois Groups]]
- [[05 - Galois Theory/Concepts/Galois Correspondence|Galois Correspondence]]

## Notes

The precise $C_4/D_2$ branch is the standard norm criterion; the $D_4$ field list is fully explicit.
