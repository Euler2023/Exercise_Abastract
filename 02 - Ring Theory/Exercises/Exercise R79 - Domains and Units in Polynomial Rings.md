---
title: "Exercise R79: Domains and Units in Polynomial Rings"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-rings
  - integral-domains
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §7, Ex. 7.2, printed p. 357, PDF p. 369"
created: 2026-08-27
---

# Exercise R79: Domains and Units in Polynomial Rings

## Problem Statement

> [!question] Exercise 7.2
> Let $R$ be a domain. Prove that $R[x]$ is a domain, and identify the units in $R[x]$.

## Hints

> [!hint]- Hint 1
> Track leading coefficients and degrees of products.

## Solution

> [!success]- Solution
> If $f,g\ne0$ have leading coefficients $a,b$, then the leading coefficient of $fg$ is $ab\ne0$ because $R$ is a domain. Hence $fg\ne0$, so $R[x]$ is a domain.
>
> Moreover,
>
> $$
> \deg(fg)=\deg f+\deg g
> $$
>
> for nonzero $f,g$. If $fg=1$, both degrees are zero, so $f,g\in R$. Therefore the units of $R[x]$ are exactly the constant polynomials whose values lie in $R^\times$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Notes

- **Hypothesis boundary:** Over a ring with nilpotents, nonconstant polynomials can be units; the domain assumption is essential.
- **Source status:** The problem is from [S1, Ch. 11, §7, Ex. 7.2, printed p. 357, PDF p. 369]. The degree proof is independent.

