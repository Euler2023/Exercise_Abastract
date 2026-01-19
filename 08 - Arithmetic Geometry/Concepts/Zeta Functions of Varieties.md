---
title: Zeta Functions of Varieties
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
created: 2026-01-19
---

# Zeta Functions of Varieties

## Definition

> [!info] Definition (Zeta Function over $\mathbb{F}_q$)
> For a variety $X$ over $\mathbb{F}_q$:
> $$Z(X, t) = \exp\left(\sum_{n=1}^{\infty} \#X(\mathbb{F}_{q^n}) \frac{t^n}{n}\right)$$

Equivalently:
$$Z(X, t) = \prod_{x \in |X|} \frac{1}{1 - t^{\deg(x)}}$$
where $|X|$ is the set of closed points and $\deg(x) = [\kappa(x) : \mathbb{F}_q]$.

## Weil Conjectures

> [!abstract] Theorem (Weil Conjectures, proved by Deligne 1974)
> For smooth projective $X/\mathbb{F}_q$ of dimension $n$:
>
> 1. **Rationality**: $Z(X, t) \in \mathbb{Q}(t)$
>
> 2. **Functional equation**:
> $$Z(X, 1/q^n t) = \pm q^{n\chi/2} t^\chi Z(X, t)$$
> where $\chi$ is the Euler characteristic.
>
> 3. **Riemann hypothesis**: Writing
> $$Z(X, t) = \frac{P_1(t) P_3(t) \cdots P_{2n-1}(t)}{P_0(t) P_2(t) \cdots P_{2n}(t)}$$
> the roots of $P_i(t)$ have absolute value $q^{-i/2}$.

## Connection to Étale Cohomology

$$P_i(t) = \det(1 - \text{Frob}_q \cdot t \mid H^i_{\text{ét}}(X_{\bar{\mathbb{F}}_q}, \mathbb{Q}_\ell))$$

So point counts are encoded in Galois representations!

## Examples

> [!example] Example 1: Projective space $\mathbb{P}^n$
> $\#\mathbb{P}^n(\mathbb{F}_q) = 1 + q + q^2 + \cdots + q^n$
>
> $$Z(\mathbb{P}^n, t) = \frac{1}{(1-t)(1-qt)\cdots(1-q^n t)}$$

> [!example] Example 2: Elliptic curve
> $\#E(\mathbb{F}_q) = q + 1 - a$ where $|a| \leq 2\sqrt{q}$ (Hasse bound).
>
> $$Z(E, t) = \frac{1 - at + qt^2}{(1-t)(1-qt)}$$
> Roots of numerator have absolute value $q^{-1/2}$.

> [!example] Example 3: Point
> $Z(\text{Spec}(\mathbb{F}_q), t) = \frac{1}{1-t}$

## Hasse-Weil L-function

> [!info] Definition (L-function over $\mathbb{Q}$)
> For smooth projective $X/\mathbb{Q}$, the **Hasse-Weil L-function**:
> $$L(X, s) = \prod_p L_p(X, p^{-s})^{-1}$$
> where $L_p$ are local factors from $X \mod p$.

## For Elliptic Curves

$$L(E, s) = \prod_{p \nmid N} \frac{1}{1 - a_p p^{-s} + p^{1-2s}} \cdot \prod_{p | N} (\text{factors})$$

This is the L-function appearing in [[08 - Arithmetic Geometry/Concepts/BSD Conjecture|BSD]]!

## Motivic Perspective

> [!tip] Big Picture
> The zeta function packages all point counts. The Weil conjectures say this is controlled by:
> - Cohomology (rationality, Betti numbers)
> - Poincaré duality (functional equation)
> - Hodge theory / Galois action (Riemann hypothesis)

## Dedekind Zeta Function

For $K$ a number field, $\mathcal{O}_K$ its ring of integers:
$$\zeta_K(s) = \prod_{\mathfrak{p}} \frac{1}{1 - N(\mathfrak{p})^{-s}} = \sum_{\mathfrak{a}} \frac{1}{N(\mathfrak{a})^s}$$

This is $Z(\text{Spec}(\mathcal{O}_K), q^{-s})$ in some sense.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Etale Cohomology|Étale Cohomology]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]
