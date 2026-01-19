---
title: Petersson Inner Product
topic: modular-forms
tags:
  - concept
  - definition
  - modular-forms
created: 2026-01-19
---

# Petersson Inner Product

## Definition

> [!info] Definition (Petersson Inner Product)
> For [[07 - Modular Forms/Concepts/Cusp Forms|cusp forms]] $f, g \in S_k(\Gamma)$, the **Petersson inner product** is:
> $$\langle f, g \rangle = \iint_{\mathcal{F}_\Gamma} f(\tau) \overline{g(\tau)} y^k \, \frac{dx \, dy}{y^2}$$
> where $\tau = x + iy$ and $\mathcal{F}_\Gamma$ is a [[07 - Modular Forms/Concepts/Fundamental Domain|fundamental domain]] for $\Gamma$.

## Well-Definedness

The integrand $f(\tau)\overline{g(\tau)} y^k \cdot y^{-2}$ is:
1. **$\Gamma$-invariant**: transforms trivially under $\Gamma$
2. **Integrable**: cusp forms decay exponentially, ensuring convergence

## Key Properties

1. **Sesquilinear**: linear in $f$, conjugate-linear in $g$
2. **Hermitian**: $\langle f, g \rangle = \overline{\langle g, f \rangle}$
3. **Positive definite**: $\langle f, f \rangle > 0$ for $f \neq 0$
4. Makes $S_k$ a **finite-dimensional Hilbert space**

## Hecke Operators are Self-Adjoint

> [!abstract] Theorem
> The [[07 - Modular Forms/Concepts/Hecke Operators|Hecke operators]] $T_n$ are self-adjoint:
> $$\langle T_n f, g \rangle = \langle f, T_n g \rangle$$

> [!tip] Consequence
> - Hecke eigenvalues are real
> - Eigenspaces for distinct eigenvalues are orthogonal
> - $S_k$ has an orthonormal basis of Hecke eigenforms

## Orthogonality of Eigenforms

> [!abstract] Theorem
> If $f$ and $g$ are normalized Hecke eigenforms with different eigenvalues for some $T_n$, then:
> $$\langle f, g \rangle = 0$$

## Petersson Norm

> [!info] Definition
> The **Petersson norm** of $f$ is:
> $$\|f\|^2 = \langle f, f \rangle$$

For the [[07 - Modular Forms/Concepts/Discriminant Function|discriminant]]:
$$\|\Delta\|^2 = \frac{\pi}{6} \cdot \frac{(10!)}{(4\pi)^{11}}$$

## Connection to L-functions

> [!abstract] Theorem (Rankin-Selberg)
> For normalized eigenforms $f, g \in S_k$:
> $$\langle f, g \rangle = \frac{(k-1)!}{(4\pi)^k} \cdot L(f \otimes \bar{g}, k)$$
> where $L(f \otimes \bar{g}, s)$ is the Rankin-Selberg L-function.

## Period Integrals

The Petersson inner product relates to **period integrals**:
$$\int_0^{i\infty} f(\tau) \tau^j d\tau$$

These periods appear in:
- Algebraicity results for [[07 - Modular Forms/Concepts/L-functions|L-values]]
- [[07 - Modular Forms/Concepts/Elliptic Curves and Modularity|Modularity]] and BSD conjecture

## Spectral Theory

> [!abstract] Theorem (Spectral Decomposition)
> The space $S_k$ decomposes as an orthogonal direct sum:
> $$S_k = \bigoplus_f \mathbb{C} \cdot f$$
> where $f$ runs over normalized Hecke eigenforms.

## Examples

> [!example] Example 1: $S_{12}$
> $S_{12} = \mathbb{C} \cdot \Delta$ is one-dimensional, so $\Delta$ is automatically orthogonal to nothing.

> [!example] Example 2: $S_{24}$
> $S_{24}$ is 2-dimensional. The orthogonal basis consists of two Hecke eigenforms.

## Related Concepts

- [[07 - Modular Forms/Concepts/Cusp Forms|Cusp Forms]]
- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]
- [[07 - Modular Forms/Concepts/Fundamental Domain|Fundamental Domain]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
