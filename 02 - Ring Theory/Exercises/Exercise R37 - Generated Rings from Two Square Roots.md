---
title: "Exercise R37: Generated Rings from Two Square Roots"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - subrings
  - algebraic-elements
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §1, Ex. 1.3, printed p. 354, PDF p. 366"
created: 2026-08-27
---

# Exercise R37: Generated Rings from Two Square Roots

## Problem Statement

> [!question] Exercise 1.3
> Let $\mathbb{Q}[\alpha,\beta]$ denote the smallest subring of $\mathbb{C}$ containing $\mathbb{Q}$ and the elements $\alpha=\sqrt2$ and $\beta=\sqrt3$. Let $\gamma=\alpha+\beta$. Is $\mathbb{Q}[\alpha,\beta]=\mathbb{Q}[\gamma]$? Is $\mathbb{Z}[\alpha,\beta]=\mathbb{Z}[\gamma]$?

## Hints

> [!hint]- Hint 1
> Use $\gamma^{-1}=\beta-\alpha$ and the equation $\gamma^4-10\gamma^2+1=0$.

> [!hint]- Hint 2
> In the integral case, track the parities of the coefficients of $\alpha$ and $\beta$ in powers of $\gamma$.

## Solution

> [!success]- Solution
> Since $(\alpha+\beta)(\beta-\alpha)=1$, we have $\gamma^{-1}=\beta-\alpha$. Also
>
> $$
> \gamma^4-10\gamma^2+1=0,
> $$
>
> so $\gamma^{-1}=10\gamma-\gamma^3\in\mathbb{Q}[\gamma]$. Consequently
>
> $$
> \alpha=\frac{\gamma-\gamma^{-1}}2,
> \qquad
> \beta=\frac{\gamma+\gamma^{-1}}2,
> $$
>
> and therefore $\mathbb{Q}[\alpha,\beta]=\mathbb{Q}[\gamma]$.
>
> The integral equality fails. In the basis $1,\alpha,\beta,\alpha\beta$, every odd power of $\gamma$ has coefficients of $\alpha$ and $\beta$ with the same parity, while every even power has zero $\alpha$- and $\beta$-coefficients. Hence the same parity condition holds for every element of $\mathbb{Z}[\gamma]$. It fails for $\alpha$, whose two coefficients are $1$ and $0$. Thus $\alpha\notin\mathbb{Z}[\gamma]$, and
>
> $$
> \mathbb{Z}[\gamma]\subsetneq\mathbb{Z}[\alpha,\beta].
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Subrings|Subrings]]
- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]

## Notes

- **Routing rationale:** The problem compares generated subrings, so its primary toolkit is ring generation; the algebraic-number calculation is a cross-topic input.
- **Source status:** The statement is from [S1, Ch. 11, §1, Ex. 1.3, printed p. 354, PDF p. 366]. The solution is independently derived.

