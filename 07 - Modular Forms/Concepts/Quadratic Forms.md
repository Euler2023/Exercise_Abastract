---
title: Quadratic Forms and Theta Series
topic: modular-forms
tags:
  - concept
  - definition
  - modular-forms
  - number-theory
created: 2026-01-19
---

# Quadratic Forms and Theta Series

## Quadratic Forms

> [!info] Definition (Integral Quadratic Form)
> A **positive definite integral quadratic form** in $n$ variables is:
> $$Q(x_1, \ldots, x_n) = \sum_{i \leq j} a_{ij} x_i x_j$$
> with $a_{ij} \in \mathbb{Z}$ and $Q(x) > 0$ for $x \neq 0$.

## Theta Series of Quadratic Forms

> [!info] Definition (Theta Series)
> For a quadratic form $Q$ of rank $n$:
> $$\Theta_Q(\tau) = \sum_{m \in \mathbb{Z}^n} q^{Q(m)} = \sum_{k=0}^{\infty} r_Q(k) q^k$$
> where $r_Q(k)$ counts the number of representations of $k$ by $Q$.

## Modularity

> [!abstract] Theorem
> If $Q$ is a positive definite quadratic form of rank $n$ and level $N$ (the smallest $N$ such that $NQ^{-1}$ is integral), then:
> $$\Theta_Q \in M_{n/2}(\Gamma_0(N), \chi)$$
> where $\chi$ is a character depending on $Q$.

## Classical Examples

### Sums of Squares

> [!example] Two squares: $Q(x,y) = x^2 + y^2$
> $$\Theta_Q(\tau) = \theta(\tau)^2 = \sum r_2(n) q^n$$
> where $r_2(n) = 4(d_1(n) - d_3(n))$.

> [!example] Four squares: $Q = x_1^2 + x_2^2 + x_3^2 + x_4^2$
> $$r_4(n) = 8\sum_{d|n, 4 \nmid d} d$$
> proving **Lagrange's theorem**: every positive integer is a sum of four squares.

> [!example] Eight squares
> $$r_8(n) = 16\sum_{d|n}(-1)^{n+d} d^3$$

## Representation Numbers

The representation number $r_Q(n)$ can often be computed using:
1. Modular form theory
2. [[07 - Modular Forms/Concepts/Hecke Operators|Hecke operators]]
3. Siegel's formula (average over genus)

## Siegel-Weil Formula

> [!abstract] Theorem (Siegel)
> The weighted average of theta series over a genus of quadratic forms equals an [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein series]]:
> $$\sum_{Q \in \text{gen}} \frac{\Theta_Q}{|\text{Aut}(Q)|} = c \cdot E_k$$

## Root Lattices

| Lattice | Rank | Theta series |
|---------|------|--------------|
| $A_1$ | 1 | $\theta(\tau)$ |
| $D_4$ | 4 | $\theta^4 + \theta_2^4$ |
| $E_8$ | 8 | $E_4(\tau)$ |
| Leech | 24 | $\Theta_{24}$ (unique even unimodular) |

> [!example] Example: $E_8$ lattice
> The theta series of the $E_8$ root lattice is exactly $E_4(\tau)$!

## Ternary Forms

> [!abstract] Theorem (Duke-Schulze-Pillot)
> A positive definite ternary quadratic form represents all sufficiently large integers in appropriate arithmetic progressions.

## Binary Forms

For binary forms $Q(x,y) = ax^2 + bxy + cy^2$ of discriminant $D = b^2 - 4ac < 0$:
- $\Theta_Q$ is a weight 1 modular form
- Related to class numbers: $\sum_Q \Theta_Q = H(|D|) \cdot E_1$ (weighted)

## 15 and 290 Theorems

> [!abstract] Theorem (Conway-Schneeberger)
> A positive definite quadratic form represents all positive integers if and only if it represents 1, 2, 3, 5, 6, 7, 10, 14, 15.

> [!abstract] Theorem (Bhargava-Hanke)
> A positive definite quadratic form represents all **odd** positive integers if and only if it represents 1, 3, 5, 7, 11, 15, 33.

## Related Concepts

- [[07 - Modular Forms/Concepts/Theta Functions|Theta Functions]]
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]
