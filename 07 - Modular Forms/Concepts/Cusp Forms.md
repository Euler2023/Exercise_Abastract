---
title: Cusp Forms
topic: modular-forms
tags:
  - concept
  - definition
  - modular-forms
created: 2026-01-19
---

# Cusp Forms

## Definition

> [!info] Definition (Cusp Form)
> A **cusp form** of weight $k$ for $\text{SL}_2(\mathbb{Z})$ is a [[07 - Modular Forms/Concepts/Modular Forms Definition|modular form]] $f \in M_k$ that vanishes at all cusps.
>
> Equivalently, in the $q$-expansion $f(\tau) = \sum_{n=0}^{\infty} a_n q^n$:
> $$a_0 = 0$$

> [!info] Definition (Space of Cusp Forms)
> $$S_k = S_k(\text{SL}_2(\mathbb{Z})) = \{f \in M_k : a_0 = 0\}$$

## Key Properties

1. $S_k$ is a subspace of $M_k$
2. $\dim S_k = \dim M_k - 1$ (for $k \geq 4$ even, since there's one Eisenstein series)
3. Cusp forms decay rapidly as $\text{Im}(\tau) \to \infty$
4. $S_k \cdot S_l \subseteq S_{k+l}$ (product of cusp forms is a cusp form)

## Dimension Formula

> [!abstract] Theorem
> For $k \geq 2$ even:
> $$\dim S_k = \begin{cases}
> 0 & \text{if } k < 12 \\
> 1 & \text{if } k = 12 \\
> \lfloor k/12 \rfloor & \text{if } k \equiv 2 \pmod{12} \\
> \lfloor k/12 \rfloor & \text{otherwise for } k \geq 14
> \end{cases}$$

| $k$ | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 |
|-----|---|---|---|---|----|----|----|----|----|----|----|----|
| $\dim S_k$ | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | 2 |

## The First Cusp Form: $\Delta$

> [!example] The Discriminant
> The [[07 - Modular Forms/Concepts/Discriminant Function|discriminant function]] $\Delta(\tau)$ is the unique (up to scalar) cusp form of weight 12:
> $$\Delta(\tau) = q \prod_{n=1}^{\infty}(1-q^n)^{24} = \sum_{n=1}^{\infty} \tau(n) q^n$$
> where $\tau(n)$ is the **Ramanujan tau function**.

## Structure of Cusp Forms

> [!abstract] Theorem
> Every cusp form is divisible by $\Delta$:
> $$S_k = \Delta \cdot M_{k-12}$$
> for $k \geq 12$.

This gives another proof of $\dim S_k$:
$$\dim S_k = \dim M_{k-12} \text{ for } k \geq 12$$

## Petersson Inner Product

> [!info] Definition
> The [[07 - Modular Forms/Concepts/Petersson Inner Product|Petersson inner product]] on $S_k$ is:
> $$\langle f, g \rangle = \iint_{\mathcal{F}} f(\tau) \overline{g(\tau)} y^k \, \frac{dx \, dy}{y^2}$$
> where $\tau = x + iy$ and $\mathcal{F}$ is the fundamental domain.

This makes $S_k$ a finite-dimensional Hilbert space.

## Hecke Eigenforms

> [!tip] Eigenforms
> Cusp forms that are simultaneous eigenfunctions of all [[07 - Modular Forms/Concepts/Hecke Operators|Hecke operators]] are called **eigenforms** (or **Hecke eigenforms**).
>
> They have multiplicative Fourier coefficients and correspond to [[07 - Modular Forms/Concepts/L-functions|L-functions]] with Euler products.

## Examples

> [!example] Example 1: $\Delta(\tau)$
> The unique normalized cusp form of weight 12:
> $$\Delta = q - 24q^2 + 252q^3 - 1472q^4 + \cdots$$

> [!example] Example 2: Weight 16
> $S_{16}$ is 1-dimensional, spanned by $\Delta \cdot E_4$.

> [!example] Example 3: Weight 24
> $S_{24}$ is 2-dimensional, spanned by $\Delta^2$ and $\Delta \cdot E_4 \cdot E_6$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/Discriminant Function|Discriminant Function]]
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]
