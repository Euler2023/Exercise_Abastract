---
title: "Exercise R330: An Algebraic Integer Hidden in a Quadratic Fraction"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §2, Exercise 1, printed p. 15, PDF p. 34"
created: 2026-10-11
---

# Exercise R330: An Algebraic Integer Hidden in a Quadratic Fraction

## Problem Statement

> [!question] Neukirch I.2.1
> Is $\dfrac{3+2\sqrt6}{1-\sqrt6}$ an algebraic integer?

## Hints

> [!hint]- Hint 1
> A denominator in the displayed expression does not by itself decide integrality. Multiply numerator and denominator by $1+\sqrt6$.

> [!hint]- Hint 2
> After simplifying, find a monic polynomial with integer coefficients by isolating the square root and squaring.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Put $\alpha=(3+2\sqrt6)/(1-\sqrt6)$. Since $\sqrt6\ne1$, the denominator is nonzero. Rationalizing gives
> $$
> \alpha=\frac{(3+2\sqrt6)(1+\sqrt6)}{1-6}
> =\frac{15+5\sqrt6}{-5}=-3-\sqrt6.
> $$
> Therefore $(\alpha+3)^2=6$, and hence
> $$
> \alpha^2+6\alpha+3=0.
> $$
> The polynomial $X^2+6X+3$ is monic and belongs to $\mathbb Z[X]$. By the definition of an algebraic integer, **the answer is yes**.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

- **Source status:** [S4, Ch. I, §2, Exercise 1, printed p. 15, PDF p. 34]. The numerator, denominator, and square-root signs were checked on the rendered original. No source figure is needed.
- **Proof scope:** This is an independent derivation using only arithmetic and the definition of integrality, which is given in [S4, Ch. I, §2, Definition (2.1), printed p. 6, PDF p. 25]. The polynomial need not be proved minimal to establish integrality.
- **Routing:** Ring Theory is primary because the task is to exhibit a monic integer equation. The quadratic field supplies the setting.
