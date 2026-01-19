---
title: Heights
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
created: 2026-01-19
---

# Heights

## Motivation

Heights measure the "arithmetic complexity" of rational points. They are essential for:
- Proving finiteness results (Mordell-Weil, Faltings)
- Counting rational points
- Descent methods

## Naive Height

> [!info] Definition (Naive Height on $\mathbb{P}^n$)
> For $P = [a_0 : \cdots : a_n] \in \mathbb{P}^n(\mathbb{Q})$ with $a_i \in \mathbb{Z}$, $\gcd(a_0, \ldots, a_n) = 1$:
> $$H(P) = \max(|a_0|, \ldots, |a_n|)$$

> [!info] Definition (Logarithmic Height)
> $$h(P) = \log H(P)$$

## Properties

1. $H(P) \geq 1$ for all $P \in \mathbb{P}^n(\mathbb{Q})$
2. For each $B$, the set $\{P \in \mathbb{P}^n(\mathbb{Q}) : H(P) \leq B\}$ is finite
3. $H$ is well-defined (independent of representative choice)

## Weil Height Machine

> [!abstract] Theorem (Weil Height Machine)
> For each divisor class $D$ on a variety $X$ over a number field, there exists a **height function**:
> $$h_D: X(\bar{K}) \to \mathbb{R}$$
> satisfying:
> 1. **Additivity**: $h_{D_1 + D_2} = h_{D_1} + h_{D_2} + O(1)$
> 2. **Functoriality**: $h_{\phi^* D} = h_D \circ \phi + O(1)$
> 3. **Normalization**: On $\mathbb{P}^n$, $h_{\mathcal{O}(1)} = h$ (naive height)

## Néron-Tate Height

> [!info] Definition (Canonical Height)
> On an elliptic curve $E$ (or abelian variety), the **Néron-Tate height** (or canonical height) is:
> $$\hat{h}(P) = \lim_{n \to \infty} \frac{h([n]P)}{n^2}$$

Properties:
- $\hat{h}(P) = 0 \iff P$ is torsion
- $\hat{h}([n]P) = n^2 \hat{h}(P)$
- $\hat{h}$ is a **quadratic form** on $E(K)/E(K)_{\text{tors}}$

## Height and Mordell-Weil

> [!abstract] Theorem
> The Néron-Tate pairing:
> $$\langle P, Q \rangle = \frac{1}{2}(\hat{h}(P+Q) - \hat{h}(P) - \hat{h}(Q))$$
> is a positive-definite bilinear form on $E(K)/E(K)_{\text{tors}} \otimes \mathbb{R}$.

This is key to proving the [[08 - Arithmetic Geometry/Concepts/Mordell-Weil Theorem|Mordell-Weil theorem]]!

## Examples

> [!example] Example 1: Points in $\mathbb{P}^1(\mathbb{Q})$
> - $[1:1]$: $H = 1$
> - $[3:4]$: $H = 4$
> - $[17:23]$: $H = 23$

> [!example] Example 2: Counting
> $\#\{P \in \mathbb{P}^1(\mathbb{Q}) : H(P) \leq B\} \sim 12B^2/\pi^2$ as $B \to \infty$.

> [!example] Example 3: Elliptic curve
> On $E: y^2 = x^3 + 17$, the point $P = (2, 5)$ has:
> - Naive height $h(P) = \log 5 \approx 1.61$
> - Canonical height $\hat{h}(P) \approx 0.80$

## Northcott Property

> [!abstract] Theorem (Northcott)
> For any bound $B$ and degree $d$:
> $$\#\{P \in \mathbb{P}^n(\bar{\mathbb{Q}}) : [K(P):\mathbb{Q}] \leq d, H(P) \leq B\} < \infty$$

This "finiteness" property is crucial for Diophantine applications.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Rational Points|Rational Points]]
- [[08 - Arithmetic Geometry/Concepts/Mordell-Weil Theorem|Mordell-Weil Theorem]]
- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves]]
- [[08 - Arithmetic Geometry/Concepts/Faltings Theorem|Faltings' Theorem]]
