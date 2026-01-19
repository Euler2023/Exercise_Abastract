---
title: Euclidean Domains
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
created: 2026-01-19
---

# Euclidean Domains

## Definition

> [!info] Definition (Euclidean Domain)
> An integral domain $R$ is a **Euclidean domain** if there exists a function $\phi: R \setminus \{0\} \to \mathbb{N}_0$ (called a **Euclidean function** or **norm**) such that for all $a, b \in R$ with $b \neq 0$:
>
> There exist $q, r \in R$ with:
> $$a = bq + r$$
> where either $r = 0$ or $\phi(r) < \phi(b)$.

## Intuition

Euclidean domains are integral domains where we can perform "division with remainder" just like in the integers. The Euclidean function measures the "size" of elements, and we can always reduce the remainder to something smaller.

## Key Properties

1. Every Euclidean domain is a PID (hence also a UFD)
2. The Euclidean algorithm works for computing $\gcd$
3. Extended Euclidean algorithm gives Bézout's identity
4. Not every PID is a Euclidean domain

## Examples

> [!example] Example 1: $\mathbb{Z}$
> With $\phi(n) = |n|$:
> - For any $a, b$ with $b \neq 0$: $a = bq + r$ with $0 \leq r < |b|$

> [!example] Example 2: $F[x]$ for Field $F$
> With $\phi(f) = \deg(f)$:
> - Polynomial long division: $a = bq + r$ with $\deg(r) < \deg(b)$

> [!example] Example 3: $\mathbb{Z}[i]$ (Gaussian Integers)
> With $\phi(a + bi) = a^2 + b^2$ (the norm):
> - This makes $\mathbb{Z}[i]$ a Euclidean domain

> [!example] Example 4: $\mathbb{Z}[\omega]$ where $\omega = e^{2\pi i/3}$
> The Eisenstein integers with norm $\phi(a + b\omega) = a^2 - ab + b^2$ form a Euclidean domain.

## Non-Examples

> [!warning] Non-Example: $\mathbb{Z}[\frac{1+\sqrt{-19}}{2}]$
> This is a PID but **not** a Euclidean domain (proven by Motzkin, 1949).

## The Euclidean Algorithm

> [!abstract] Euclidean Algorithm for $\gcd$
> To find $\gcd(a, b)$ where $b \neq 0$:
> 1. Divide: $a = bq_1 + r_1$
> 2. If $r_1 = 0$, then $\gcd(a,b) = b$
> 3. Otherwise, repeat with $(b, r_1)$
>
> This terminates because $\phi(r_i)$ strictly decreases.

> [!abstract] Extended Euclidean Algorithm
> The algorithm can be extended to find $x, y$ such that:
> $$\gcd(a, b) = ax + by$$
> (Bézout's identity)

## Theorems

> [!abstract] Euclidean $\Rightarrow$ PID
> Every Euclidean domain is a PID.
>
> *Proof idea*: For ideal $I \neq (0)$, take $b \in I$ with minimal $\phi(b)$. For any $a \in I$, write $a = bq + r$. Then $r = a - bq \in I$, so $r = 0$ (minimality), thus $I = (b)$.

## Hierarchy

```
Fields ⊂ Euclidean Domains ⊂ PIDs ⊂ UFDs ⊂ Integral Domains
```

Each inclusion is proper.

## Related Concepts

- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
