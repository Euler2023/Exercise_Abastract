---
title: "Exercise R213: The Gaussian Integers Form a Principal Ring"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - gaussian-integers
  - euclidean-domains
  - principal-ideal-domains
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, Rings, Exercise 9, printed p. 115, PDF p. 130"
created: 2026-08-28
---

# Exercise R213: The Gaussian Integers Form a Principal Ring

## Problem Statement

> [!question] Exercise 9
> Let $i$ be the complex number $\sqrt{-1}$. Show that the ring $\mathbb Z[i]$ is principal, and hence factorial. What are the units?

## Hints

> [!hint]- Hint 1
> For $z\in\mathbb C$, choose a Gaussian integer by rounding both coordinates of $z$ to nearest integers.

> [!hint]- Hint 2
> Use the norm $N(a+bi)=a^2+b^2$ as a Euclidean function.

## Solution

> [!success]- Solution
> For $\alpha=a+bi\in\mathbb Z[i]$, define
>
> $$
> N(\alpha)=\alpha\overline\alpha=a^2+b^2.
> $$
>
> The norm is multiplicative. Given $\alpha,\beta\in\mathbb Z[i]$ with $\beta\ne0$, choose $q=m+ni\in\mathbb Z[i]$ by rounding the real and imaginary parts of $\alpha/\beta$ to nearest integers. Then
>
> $$
> \left|\frac\alpha\beta-q\right|^2
> \le\frac14+\frac14=\frac12.
> $$
>
> With $r=\alpha-q\beta$, this gives
>
> $$
> N(r)=N(\beta)\left|\frac\alpha\beta-q\right|^2
> \le\frac12N(\beta)<N(\beta).
> $$
>
> Thus $\mathbb Z[i]$ is Euclidean.
>
> Let $I\ne(0)$ be an ideal and choose $0\ne\delta\in I$ with minimal norm. For any $\alpha\in I$, Euclidean division gives $\alpha=q\delta+r$ with either $r=0$ or $N(r)<N(\delta)$. Since $r\in I$, minimality forces $r=0$. Hence every $\alpha\in I$ belongs to $(\delta)$, while $\delta\in I$ gives the reverse inclusion. Therefore $I=(\delta)$, so $\mathbb Z[i]$ is principal and hence factorial.
>
> Finally, $u$ is a unit exactly when $N(u)=1$. The integer solutions of
>
> $$
> a^2+b^2=1
> $$
>
> are $(\pm1,0)$ and $(0,\pm1)$. Thus
>
> $$
> \mathbb Z[i]^\times=\{\pm1,\pm i\}.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Exercises/Exercise R113 - Gaussian Division with Remainder|Exercise R113]]

## Notes

- **Cross-source boundary:** Artin Exercise R113 constructs the same Euclidean division algorithm for a numerical example; Lang II.9 asks for the structural PID and unit conclusions, so the two numbered tasks remain separate notes.
- **Source status:** The statement was visually checked at [S2, Ch. II, Ex. 9, printed p. 115, PDF p. 130]. The proof is independent.

