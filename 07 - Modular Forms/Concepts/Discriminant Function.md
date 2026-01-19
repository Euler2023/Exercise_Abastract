---
title: Discriminant Function
topic: modular-forms
tags:
  - concept
  - definition
  - modular-forms
created: 2026-01-19
---

# Discriminant Function

## Definition

> [!info] Definition (Modular Discriminant)
> The **modular discriminant** $\Delta: \mathbb{H} \to \mathbb{C}$ is defined by:
> $$\Delta(\tau) = q \prod_{n=1}^{\infty} (1 - q^n)^{24}$$
> where $q = e^{2\pi i \tau}$.

## Alternative Formulas

> [!abstract] In terms of Eisenstein series
> $$\Delta = \frac{E_4^3 - E_6^2}{1728} = \frac{g_2^3 - 27g_3^2}{(2\pi)^{12}}$$
> where $g_2 = 60G_4$ and $g_3 = 140G_6$.

> [!abstract] Dedekind eta function
> $$\Delta(\tau) = \eta(\tau)^{24}$$
> where $\eta(\tau) = q^{1/24} \prod_{n=1}^{\infty}(1-q^n)$ is the [[07 - Modular Forms/Concepts/Eta Function|Dedekind eta function]].

## Key Properties

1. $\Delta$ is a [[07 - Modular Forms/Concepts/Cusp Forms|cusp form]] of weight 12
2. $\Delta(\tau) \neq 0$ for all $\tau \in \mathbb{H}$
3. $\Delta$ is the unique normalized cusp form of weight 12
4. $S_k = \Delta \cdot M_{k-12}$ for all $k$

## Ramanujan Tau Function

> [!info] Definition (Ramanujan Tau Function)
> The Fourier coefficients of $\Delta$ define the **Ramanujan tau function**:
> $$\Delta(\tau) = \sum_{n=1}^{\infty} \tau(n) q^n$$

First values:
| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|-----|---|---|---|---|---|---|---|---|
| $\tau(n)$ | 1 | -24 | 252 | -1472 | 4830 | -6048 | -16744 | 84480 |

## Ramanujan Conjectures

> [!abstract] Theorem (Ramanujan, proved by various)
> 1. **Multiplicativity**: $\tau(mn) = \tau(m)\tau(n)$ when $\gcd(m,n) = 1$
> 2. **Recurrence**: $\tau(p^{n+1}) = \tau(p)\tau(p^n) - p^{11}\tau(p^{n-1})$
> 3. **Bound** (Deligne, 1974): $|\tau(p)| \leq 2p^{11/2}$

## Connection to Elliptic Curves

For an elliptic curve $E: y^2 = 4x^3 - g_2 x - g_3$ over $\mathbb{C}$:
- The discriminant is $\Delta_E = g_2^3 - 27g_3^2$
- $E$ is nonsingular iff $\Delta_E \neq 0$
- The modular discriminant $\Delta(\tau)$ computes $\Delta_E$ when $E = \mathbb{C}/(\mathbb{Z} + \mathbb{Z}\tau)$

## Transformation Property

$$\Delta\left(\frac{a\tau + b}{c\tau + d}\right) = (c\tau + d)^{12} \Delta(\tau)$$

for all $\begin{pmatrix} a & b \\ c & d \end{pmatrix} \in \text{SL}_2(\mathbb{Z})$.

## Examples

> [!example] Example 1: Value at $i$
> $$\Delta(i) = \frac{1}{1728} \left(\frac{\Gamma(1/4)^8}{(2\pi)^6}\right)$$

> [!example] Example 2: Infinite product expansion
> $$\Delta = q - 24q^2 + 252q^3 - 1472q^4 + 4830q^5 - \cdots$$

> [!example] Example 3: No zeros
> Since $\Delta(\tau) = \eta(\tau)^{24}$ and $\eta$ has no zeros in $\mathbb{H}$, neither does $\Delta$.

## L-function

The [[07 - Modular Forms/Concepts/L-functions|L-function]] of $\Delta$ is:
$$L(\Delta, s) = \sum_{n=1}^{\infty} \frac{\tau(n)}{n^s} = \prod_p \frac{1}{1 - \tau(p)p^{-s} + p^{11-2s}}$$

## Related Concepts

- [[07 - Modular Forms/Concepts/Cusp Forms|Cusp Forms]]
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Eta Function|Eta Function]]
- [[07 - Modular Forms/Concepts/j-Invariant|j-Invariant]]
- [[07 - Modular Forms/Concepts/Elliptic Curves and Modularity|Elliptic Curves and Modularity]]
