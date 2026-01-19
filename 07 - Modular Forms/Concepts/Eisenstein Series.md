---
title: Eisenstein Series
topic: modular-forms
tags:
  - concept
  - definition
  - modular-forms
created: 2026-01-19
---

# Eisenstein Series

## Definition

> [!info] Definition (Eisenstein Series $G_k$)
> For even $k \geq 4$, the **Eisenstein series** of weight $k$ is:
> $$G_k(\tau) = \sum_{\substack{(m,n) \in \mathbb{Z}^2 \\ (m,n) \neq (0,0)}} \frac{1}{(m\tau + n)^k}$$

> [!info] Definition (Normalized Eisenstein Series $E_k$)
> $$E_k(\tau) = \frac{G_k(\tau)}{2\zeta(k)} = 1 - \frac{2k}{B_k} \sum_{n=1}^{\infty} \sigma_{k-1}(n) q^n$$
> where $B_k$ is the $k$-th Bernoulli number and $\sigma_{k-1}(n) = \sum_{d|n} d^{k-1}$.

## Fourier Expansions

> [!abstract] Theorem (q-expansion)
> $$E_k(\tau) = 1 - \frac{2k}{B_k} \sum_{n=1}^{\infty} \sigma_{k-1}(n) q^n$$

Explicit formulas:
$$E_4(\tau) = 1 + 240 \sum_{n=1}^{\infty} \sigma_3(n) q^n = 1 + 240q + 2160q^2 + \cdots$$

$$E_6(\tau) = 1 - 504 \sum_{n=1}^{\infty} \sigma_5(n) q^n = 1 - 504q - 16632q^2 + \cdots$$

## Key Properties

1. $E_k \in M_k$ (modular form of weight $k$)
2. $E_k$ is **not** a [[07 - Modular Forms/Concepts/Cusp Forms|cusp form]] (constant term is 1)
3. $E_k$ spans the complement of $S_k$ in $M_k$ for $k \geq 4$
4. $E_2$ transforms with an extra term (quasi-modular)

## The Quasi-Modular $E_2$

> [!warning] $E_2$ is Not Modular
> $$E_2(\tau) = 1 - 24 \sum_{n=1}^{\infty} \sigma_1(n) q^n$$
> satisfies:
> $$E_2\left(\frac{a\tau+b}{c\tau+d}\right) = (c\tau+d)^2 E_2(\tau) + \frac{6c(c\tau+d)}{\pi i}$$

## Structure Theorem

> [!abstract] Theorem (Generators)
> The graded ring of modular forms is:
> $$M_* = \mathbb{C}[E_4, E_6]$$
> with the relation that $E_4^3$ and $E_6^2$ both have weight 12.

## Relation to Discriminant

$$\Delta = \frac{E_4^3 - E_6^2}{1728}$$

This follows from dimension counting: both sides are cusp forms of weight 12.

## Examples

> [!example] Example 1: First few divisor sums
> - $\sigma_3(1) = 1$, $\sigma_3(2) = 9$, $\sigma_3(3) = 28$
> - So $E_4 = 1 + 240(1)q + 240(9)q^2 + \cdots = 1 + 240q + 2160q^2 + \cdots$

> [!example] Example 2: $E_8 = E_4^2$
> Since $\dim M_8 = 1$, we have $E_8 = E_4^2$ (both are normalized).

> [!example] Example 3: Weight 10
> $\dim M_{10} = 1$, so $E_{10} = E_4 E_6$ (up to normalization).

## Bernoulli Numbers

| $k$ | $B_k$ | $-2k/B_k$ |
|-----|-------|-----------|
| 4 | $-1/30$ | 240 |
| 6 | $1/42$ | -504 |
| 8 | $-1/30$ | 480 |
| 10 | $5/66$ | -264 |
| 12 | $-691/2730$ | 65520/691 |

## Eisenstein Series for Congruence Subgroups

For [[07 - Modular Forms/Concepts/Congruence Subgroups|congruence subgroups]] $\Gamma$, Eisenstein series are defined using sums over cosets, one for each cusp of $\Gamma$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/Cusp Forms|Cusp Forms]]
- [[07 - Modular Forms/Concepts/Discriminant Function|Discriminant Function]]
- [[07 - Modular Forms/Concepts/j-Invariant|j-Invariant]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]
