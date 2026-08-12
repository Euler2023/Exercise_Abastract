---
title: "Exercise Gal25: Factoring x4 - 2 over Intermediate Fields"
topic: galois-theory
difficulty: intermediate
status: not-started
tags: [exercise, galois-theory, polynomial-factorization]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 7, Ex. 7.8, printed p. 507, PDF p. 519"
created: 2026-08-12
---

# Exercise Gal25: Factoring $x^4-2$ over Intermediate Fields

## Problem Statement

> [!question] Exercise 7.8
> With $\alpha=\sqrt[4]2>0$, factor $x^4-2$ into irreducibles over $\mathbb Q$, $\mathbb Q(\sqrt2)$, $\mathbb Q(\sqrt2,i)$, $\mathbb Q(\alpha)$, and $\mathbb Q(\alpha,i)$.

## Hints

> [!hint]- Hint 1
> The roots are $\pm\alpha,\pm i\alpha$.

## Solution

> [!success]- Solution
> The factorizations into irreducibles are
> $$
> \begin{array}{c|l}
> \mathbb Q&x^4-2\\
> \mathbb Q(\sqrt2)&(x^2-\sqrt2)(x^2+\sqrt2)\\
> \mathbb Q(\sqrt2,i)&(x^2-\sqrt2)(x^2+\sqrt2)\\
> \mathbb Q(\alpha)&(x-\alpha)(x+\alpha)(x^2+\sqrt2)\\
> \mathbb Q(\alpha,i)&(x-\alpha)(x+\alpha)(x-i\alpha)(x+i\alpha).
> \end{array}
> $$
> Eisenstein proves the first irreducible. Over $\mathbb Q(\sqrt2)$, neither $\sqrt2$ nor $-\sqrt2$ is a square; adjoining $i$ does not add $\alpha$, so the two quadratics remain irreducible. Over the real field $\mathbb Q(\alpha)$, $x^2+\sqrt2$ has no root.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

Irreducibility over $\mathbb Q(\sqrt2,i)$ also follows from the degree $[\mathbb Q(\alpha,i):\mathbb Q(\sqrt2,i)]=2$.
