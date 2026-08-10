---
title: "Exercise F11: Zero Derivative over a Finite Field"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - finite-fields
  - polynomial-derivatives
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 7, Ex. 7.10, printed p. 474, PDF p. 486"
created: 2026-08-10
---

# Exercise F11: Zero Derivative over a Finite Field

## Problem Statement

> [!question] Exercise
> Let $F$ be a finite field, and let $f(x)$ be a nonconstant polynomial whose derivative is the zero polynomial. Prove that $f$ cannot be irreducible over $F$.

## Hints

> [!hint]- Hint 1
> If $\operatorname{char}F=p$, then every exponent occurring in $f$ is divisible by $p$.

> [!hint]- Hint 2
> Frobenius is surjective on a finite field.

## Solution

> [!success]- Solution
> Let $\operatorname{char}F=p$. From $f'=0$, every nonzero term of $f$ has exponent divisible by $p$, so
> $$
> f(x)=\sum_i a_i x^{pi}.
> $$
> The Frobenius map $u\mapsto u^p$ is injective on every field and therefore bijective on the finite set $F$. Choose $b_i\in F$ with $b_i^p=a_i$. Then, using the freshman's dream in characteristic $p$,
> $$
> f(x)=\sum_i b_i^p x^{pi}
> =\left(\sum_i b_i x^i\right)^p.
> $$
> Because $f$ is nonconstant, the polynomial inside the parentheses is nonconstant. Thus $f$ is a nontrivial $p$th power and is reducible.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

Finiteness is used precisely to make Frobenius surjective. Over an imperfect infinite field, a polynomial such as $x^p-a$ may have zero derivative and still be irreducible.
