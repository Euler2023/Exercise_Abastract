---
title: j-Invariant
topic: modular-forms
tags:
  - concept
  - definition
  - modular-forms
created: 2026-01-19
---

# j-Invariant

## Definition

> [!info] Definition (j-Invariant)
> The **j-invariant** (or **modular invariant**) is:
> $$j(\tau) = 1728 \frac{E_4(\tau)^3}{\Delta(\tau)} = \frac{E_4(\tau)^3}{E_4(\tau)^3 - E_6(\tau)^2}$$

> [!info] Alternative Formula
> $$j(\tau) = \frac{1}{q} + 744 + 196884q + 21493760q^2 + \cdots$$

## Key Properties

1. $j$ is a [[07 - Modular Forms/Concepts/Modular Functions|modular function]] of weight 0
2. $j$ is holomorphic on $\mathbb{H}$ but has a simple pole at $i\infty$
3. $j$ is $\Gamma$-invariant: $j(\gamma \cdot \tau) = j(\tau)$ for $\gamma \in \text{SL}_2(\mathbb{Z})$
4. $j$ gives an isomorphism $\mathbb{H}/\text{PSL}_2(\mathbb{Z}) \xrightarrow{\sim} \mathbb{C}$

## Fundamental Property

> [!abstract] Theorem (Classification)
> Two points $\tau_1, \tau_2 \in \mathbb{H}$ satisfy $j(\tau_1) = j(\tau_2)$ if and only if $\tau_2 = \gamma \cdot \tau_1$ for some $\gamma \in \text{SL}_2(\mathbb{Z})$.

This means $j$ parametrizes elliptic curves up to isomorphism.

## Special Values

| Point | $j$-value | Significance |
|-------|-----------|--------------|
| $i$ | $1728$ | CM by $\mathbb{Z}[i]$ |
| $\rho = e^{2\pi i/3}$ | $0$ | CM by $\mathbb{Z}[\omega]$ |
| $i\infty$ | $\infty$ | Cusp |

> [!tip] Complex Multiplication
> When $\tau$ is a quadratic irrational, $j(\tau)$ is an algebraic integer.

## Connection to Elliptic Curves

For an elliptic curve $E: y^2 = x^3 + Ax + B$:
$$j(E) = 1728 \frac{4A^3}{4A^3 + 27B^2}$$

Two elliptic curves over $\mathbb{C}$ are isomorphic iff they have the same $j$-invariant.

## Fourier Coefficients

$$j(\tau) = \frac{1}{q} + 744 + \sum_{n=1}^{\infty} c(n) q^n$$

| $n$ | $c(n)$ |
|-----|--------|
| 1 | 196884 |
| 2 | 21493760 |
| 3 | 864299970 |
| 4 | 20245856256 |

> [!tip] Monstrous Moonshine
> The coefficients $c(n)$ are related to dimensions of representations of the Monster group!
> $$196884 = 1 + 196883$$
> where $196883$ is the dimension of the smallest non-trivial Monster representation.

## The j-function as a Hauptmodul

> [!abstract] Theorem
> $j$ generates the field of modular functions:
> $$\mathbb{C}(\mathbb{H}/\text{PSL}_2(\mathbb{Z})) = \mathbb{C}(j)$$

Every modular function is a rational function of $j$.

## Singular Moduli

> [!info] Definition
> A **singular modulus** is a value $j(\tau)$ where $\tau$ is imaginary quadratic.

Examples:
- $j(i) = 1728$
- $j(\frac{1+i\sqrt{3}}{2}) = 0$
- $j(i\sqrt{2}) = 8000$

## Examples

> [!example] Example 1: Elliptic curve classification
> $E_1: y^2 = x^3 - x$ has $j = 1728$, so $E_1 \cong \mathbb{C}/\mathbb{Z}[i]$.

> [!example] Example 2: $j = 0$ curves
> $E: y^2 = x^3 + 1$ has $j = 0$, corresponding to $\tau = \rho$.

> [!example] Example 3: Modular equation
> The **modular polynomial** $\Phi_n(X, j)$ relates $j(\tau)$ and $j(n\tau)$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Functions|Modular Functions]]
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Discriminant Function|Discriminant Function]]
- [[07 - Modular Forms/Concepts/Elliptic Curves and Modularity|Elliptic Curves and Modularity]]
- [[07 - Modular Forms/Concepts/Fundamental Domain|Fundamental Domain]]
- [[06 - Representation Theory/Concepts/Monstrous Moonshine|Monstrous Moonshine]]
- [[06 - Representation Theory/Concepts/Monster Group|Monster Group]]
