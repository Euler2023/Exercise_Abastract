---
title: "Exercise R108: Square Roots of Two Modulo Eight"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - quotient-rings
  - congruences
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 2, Unique Factorization Domains, Ex. 2.3, printed p. 379, PDF p. 391"
created: 2026-08-28
---

# Exercise R108: Square Roots of Two Modulo Eight

## Problem Statement

> [!question] Exercise 2.3
> How many roots does the polynomial $x^2-2$ have modulo $8$?

## Hints

> [!hint]- Hint 1
> Separate even and odd residue classes.

> [!hint]- Hint 2
> Every odd square is $1$ modulo $8$, while an even square is $0$ or $4$ modulo $8$.

## Solution

> [!success]- Solution
> If $x$ is odd, write $x=2k+1$. Then
>
> $$
> x^2=4k(k+1)+1\equiv1\pmod 8,
> $$
>
> because one of $k,k+1$ is even. If $x=2k$ is even, then
>
> $$
> x^2=4k^2\equiv0\ \text{or}\ 4\pmod 8,
> $$
>
> according as $k$ is even or odd. Thus the only square residues modulo $8$ are $0,1,4$, and none equals $2$.
>
> Therefore $x^2-2$ has
>
> $$
> \boxed{0}
> $$
>
> roots modulo $8$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Routing:** Ring Theory is primary because the question is a polynomial equation in the quotient ring $\mathbb Z/8\mathbb Z$.
- **Boundary:** The quotient ring is not a field, so the usual field bound on the number of roots is not the argument used here.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.2, Ex. 2.3, printed p. 379, PDF p. 391]. The solution is independent.

