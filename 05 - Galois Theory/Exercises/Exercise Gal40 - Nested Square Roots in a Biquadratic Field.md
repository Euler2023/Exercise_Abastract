---
title: "Exercise Gal40: Nested Square Roots in a Biquadratic Field"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, nested-radicals]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 9, Ex. 9.7, printed p. 508, PDF p. 520"
created: 2026-08-12
---

# Exercise Gal40: Nested Square Roots in a Biquadratic Field

## Problem Statement

> [!question] Exercise 9.7
> If $K=F(\sqrt a,\sqrt b)$, determine all nested square roots $\sqrt{r+\sqrt t}\in K$, with $r,t\in F$.

## Hints

> [!hint]- Hint 1
> Write $\alpha=x+y\sqrt a+z\sqrt b+w\sqrt{ab}$ and require $\alpha^2-r$ to have square in $F$.

## Solution

> [!success]- Solution
> Assume $\operatorname{char}F\ne2$ and independent square classes. If $\alpha^2=r+\sqrt t$, then $F(\alpha)$ has degree at most $4$ and its conjugates must be stable under the Klein group. Solving the coefficient equations shows that, up to multiplying by an element of $F^\times$ and choosing signs, $\alpha$ lies in one of the three quadratic subfields or has the form
> $$
> x\sqrt a+y\sqrt b,\quad x\sqrt a+y\sqrt{ab},\quad x\sqrt b+y\sqrt{ab}\qquad(x,y\in F).
> $$
> Their squares are respectively
> $$
> x^2a+y^2b+2xy\sqrt{ab},\quad
> x^2a+y^2ab+2axy\sqrt b,\quad
> x^2b+y^2ab+2bxy\sqrt a.
> $$
> Conversely every displayed element is a nested square root with $r,t\in F$. Together with the elements of the three quadratic subfields (the cases where one coefficient vanishes), this is the complete list.

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[05 - Galois Theory/Concepts/Solvability by Radicals|Solvability by Radicals]]

## Notes

Degenerate square classes should first be reduced to a smaller extension.
