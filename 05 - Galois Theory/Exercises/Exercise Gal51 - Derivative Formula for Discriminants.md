---
title: "Exercise Gal51: Derivative Formula for Discriminants"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, discriminant, cyclotomic-extensions]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 10, Ex. 10.9, printed p. 510, PDF p. 522"
created: 2026-08-12
---

# Exercise Gal51: Derivative Formula for Discriminants

## Problem Statement

> [!question] Exercise 10.9
> For $f(x)=\prod(x-\alpha_i)$: (a) prove $\operatorname{disc}(f)=\pm\prod f'(\alpha_i)$ and determine the sign; (b) compute the discriminant of $x^p-1$ and reprove Theorem 16.10.12.

## Hints

> [!hint]- Hint 1
> Expand $f'(\alpha_i)=\prod_{j\ne i}(\alpha_i-\alpha_j)$.

## Solution

> [!success]- Solution
> Multiplying gives each unordered difference twice, once in each orientation:
> $$
> \prod_i f'(\alpha_i)=(-1)^{n(n-1)/2}\prod_{i<j}(\alpha_i-\alpha_j)^2.
> $$
> Hence
> $$
> \operatorname{disc}(f)=(-1)^{n(n-1)/2}\prod_i f'(\alpha_i).
> $$
>
> For $x^p-1$, $f'(\alpha)=p\alpha^{p-1}$. Multiplying over all $p$-th roots gives
> $$
> \operatorname{disc}(x^p-1)=(-1)^{(p-1)(p-2)/2}p^p.
> $$
> Dividing off the factor $x-1$ gives
> $$
> \operatorname{disc}(\Phi_p)=(-1)^{(p-1)/2}p^{p-2}.
> $$
> Its square class is $(-1)^{(p-1)/2}p$, so the unique quadratic subfield is $\mathbb Q(\sqrt{(-1)^{(p-1)/2}p})$, reproving Theorem 16.10.12.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]

## Notes

The first displayed formula fixes the sign convention explicitly.
