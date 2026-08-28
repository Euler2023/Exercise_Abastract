---
title: "Exercise R113: Gaussian Division with Remainder"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - gaussian-integers
  - euclidean-division
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 2, Unique Factorization Domains, Ex. 2.8, printed p. 379, PDF p. 391"
created: 2026-08-28
---

# Exercise R113: Gaussian Division with Remainder

## Problem Statement

> [!question] Exercise 2.8
> Describe a systematic way to do division with remainder in $\mathbb Z[i]$. Use it to divide $4+36i$ by $5+i$.

## Hints

> [!hint]- Hint 1
> Compute the complex quotient and round its real and imaginary parts to nearest integers.

> [!hint]- Hint 2
> The chosen remainder has norm at most one half of the divisor's norm.

## Solution

> [!success]- Solution
> For $\alpha,\beta\in\mathbb Z[i]$ with $\beta\neq0$, compute $z=\alpha/\beta\in\mathbb C$. Choose $q\in\mathbb Z[i]$ by rounding the real and imaginary parts of $z$ to nearest integers, and set
>
> $$
> r=\alpha-\beta q.
> $$
>
> Then $z-q=u+vi$ with $|u|,|v|\le1/2$, so
>
> $$
> N(r)=N(\beta)N(z-q)
> \le N(\beta)\left(\frac14+\frac14\right)
> <N(\beta).
> $$
>
> This is a systematic Euclidean division procedure.
>
> For the requested numbers,
>
> $$
> \frac{4+36i}{5+i}
> =\frac{(4+36i)(5-i)}{26}
> =\frac{28}{13}+\frac{88}{13}i.
> $$
>
> Rounding gives $q=2+7i$. Therefore
>
> $$
> (5+i)(2+7i)=3+37i
> $$
>
> and
>
> $$
> 4+36i=(5+i)(2+7i)+(1-i).
> $$
>
> Finally,
>
> $$
> N(1-i)=2<26=N(5+i),
> $$
>
> so $1-i$ is a valid remainder.

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Notes

- **Routing:** Ring Theory is primary because the task constructs and applies Euclidean division in $\mathbb Z[i]$.
- **Boundary:** If a coordinate lies exactly halfway between two integers, either rounding choice gives a valid remainder.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.2, Ex. 2.8, printed p. 379, PDF p. 391]. The solution is independent.

