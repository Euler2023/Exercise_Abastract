---
title: "Exercise F48: Cyclotomic Minimal Polynomials over Q and Q(Zeta Three)"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - minimal-polynomials
  - cyclotomic-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 3, The Degree of a Field Extension, Ex. 3.4, printed p. 472, PDF p. 484"
created: 2026-08-28
---

# Exercise F48: Cyclotomic Minimal Polynomials over Q and Q(Zeta Three)

## Problem Statement

> [!question] Exercise 3.4
> Let $\zeta_n=e^{2\pi i/n}$. Determine the irreducible polynomial over $\mathbb Q$ and over $\mathbb Q(\zeta_3)$ of
>
> **(a)** $\zeta_4$, **(b)** $\zeta_6$, **(c)** $\zeta_8$, **(d)** $\zeta_9$, **(e)** $\zeta_{10}$, **(f)** $\zeta_{12}$.

## Hints

> [!hint]- Hint 1
> Over $\mathbb Q$, use the cyclotomic polynomials. Over $K=\mathbb Q(\zeta_3)$, first decide whether $K$ is contained in or disjoint from the relevant cyclotomic field.

## Solution

> [!success]- Solution
> Put $K=\mathbb Q(\zeta_3)$. The answers are:
>
> | element | irreducible polynomial over $\mathbb Q$ | irreducible polynomial over $K$ |
> |---|---|---|
> | $\zeta_4$ | $x^2+1$ | $x^2+1$ |
> | $\zeta_6$ | $x^2-x+1$ | $x-(1+\zeta_3)$ |
> | $\zeta_8$ | $x^4+1$ | $x^4+1$ |
> | $\zeta_9$ | $x^6+x^3+1$ | $x^3-\zeta_3$ |
> | $\zeta_{10}$ | $x^4-x^3+x^2-x+1$ | $x^4-x^3+x^2-x+1$ |
> | $\zeta_{12}$ | $x^4-x^2+1$ | $x^2-(1+\zeta_3)$ |
>
> Indeed, $\zeta_6=1+\zeta_3$, $\zeta_9^3=\zeta_3$, and $\zeta_{12}^2=\zeta_6=1+\zeta_3$. The degree ratios show that the last two displayed polynomials over $K$ have degrees $3$ and $2$, respectively.
>
> The field $K=\mathbb Q(\sqrt{-3})$ is distinct from $\mathbb Q(i)$. It is also not one of the quadratic subfields $\mathbb Q(i)$, $\mathbb Q(\sqrt2)$, $\mathbb Q(\sqrt{-2})$ of $\mathbb Q(\zeta_8)$, nor the quadratic field $\mathbb Q(\sqrt5)$ inside $\mathbb Q(\zeta_{10})=\mathbb Q(\zeta_5)$. Thus adjoining $K$ does not lower the degrees of $\zeta_4$, $\zeta_8$, or $\zeta_{10}$, proving the remaining entries.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]

## Notes

- **Routing:** Field Theory is primary because the task is to compute minimal polynomials after a base-field extension.
- **Source status:** [S1, Ch. 15, §15.3, Ex. 3.4, printed p. 472, PDF p. 484]. The table and degree checks are independent.
