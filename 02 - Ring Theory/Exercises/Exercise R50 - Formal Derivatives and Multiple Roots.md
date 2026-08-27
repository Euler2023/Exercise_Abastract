---
title: "Exercise R50: Formal Derivatives and Multiple Roots"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-rings
  - derivatives
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §3, Ex. 3.5, printed p. 355, PDF p. 367"
created: 2026-08-27
---

# Exercise R50: Formal Derivatives and Multiple Roots

## Problem Statement

> [!question] Exercise 3.5
> The derivative of $f\in F[x]$ is defined by the usual formal formula, with integer coefficients interpreted through $\mathbb Z\to F$.
>
> **(a)** Prove the product rule $(fg)'=f'g+fg'$ and chain rule $(f\circ g)'=(f'\circ g)g'$.
>
> **(b)** Let $\alpha\in F$. Prove that $\alpha$ is a multiple root of $f$ if and only if it is a common root of $f$ and $f'$.

## Hints

> [!hint]- Hint 1
> Verify the two rules first on monomials and extend by linearity.

> [!hint]- Hint 2
> Write $f=(x-\alpha)q$ and evaluate the derivative at $\alpha$.

## Solution

> [!success]- Solution
> **(a)** For monomials, differentiating $x^{m+n}$ gives $(m+n)x^{m+n-1}$, equal to the product-rule expression. Bilinearity extends this to all products. Likewise, for $f=x^m$, differentiation of $g^m$ gives $m g^{m-1}g'$ by repeated use of the product rule; linearity then proves the chain rule for every $f$.
>
> **(b)** If $f=(x-\alpha)^2h$, the product rule gives $f(\alpha)=f'(\alpha)=0$. Conversely, $f(\alpha)=0$ gives $f=(x-\alpha)q$. Differentiating,
>
> $$
> f'=q+(x-\alpha)q',
> $$
>
> so $f'(\alpha)=q(\alpha)$. If this is zero, then $q=(x-\alpha)h$, and $(x-\alpha)^2$ divides $f$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]

## Notes

- **Characteristic boundary:** The argument remains valid in positive characteristic because integer coefficients are interpreted in $F$ exactly as stated.
- **Source status:** The problem is from [S1, Ch. 11, §3, Ex. 3.5, printed p. 355, PDF p. 367]. The proof is independent.

