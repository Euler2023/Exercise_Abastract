---
title: p-adic Numbers
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - number-theory
created: 2026-01-19
---

# p-adic Numbers

## Motivation

The real numbers $\mathbb{R}$ complete $\mathbb{Q}$ using the usual absolute value. But there are other ways to measure "size" - the $p$-adic valuations give rise to different completions, essential for arithmetic geometry.

## Definition

> [!info] Definition (p-adic Valuation)
> For prime $p$, the **$p$-adic valuation** $v_p: \mathbb{Q}^* \to \mathbb{Z}$ is:
> $$v_p\left(\frac{a}{b}\right) = \text{ord}_p(a) - \text{ord}_p(b)$$
> where $\text{ord}_p(n)$ is the largest power of $p$ dividing $n$.

> [!info] Definition (p-adic Absolute Value)
> $$|x|_p = p^{-v_p(x)}$$
> Convention: $|0|_p = 0$.

> [!info] Definition (p-adic Numbers)
> The **$p$-adic numbers** $\mathbb{Q}_p$ is the completion of $\mathbb{Q}$ with respect to $|\cdot|_p$.

## Key Properties

> [!abstract] Ultrametric Inequality
> $$|x + y|_p \leq \max(|x|_p, |y|_p)$$
> with equality if $|x|_p \neq |y|_p$.

This is **much stronger** than the triangle inequality!

> [!tip] Consequences
> - In $\mathbb{Q}_p$, a series $\sum a_n$ converges iff $a_n \to 0$
> - All triangles are isoceles
> - Every point of a "disk" is its center

## The Ring of p-adic Integers

> [!info] Definition ($\mathbb{Z}_p$)
> $$\mathbb{Z}_p = \{x \in \mathbb{Q}_p : |x|_p \leq 1\} = \{x \in \mathbb{Q}_p : v_p(x) \geq 0\}$$
> This is the **ring of $p$-adic integers**, the closure of $\mathbb{Z}$ in $\mathbb{Q}_p$.

Properties:
- $\mathbb{Z}_p$ is a local ring with maximal ideal $(p) = p\mathbb{Z}_p$
- Residue field: $\mathbb{Z}_p/(p) \cong \mathbb{F}_p$
- $\mathbb{Z}_p$ is a DVR (discrete valuation ring)
- $\mathbb{Z}_p = \varprojlim \mathbb{Z}/p^n\mathbb{Z}$

## p-adic Expansions

> [!info] Theorem
> Every $x \in \mathbb{Z}_p$ has a unique expansion:
> $$x = \sum_{n=0}^{\infty} a_n p^n, \quad a_n \in \{0, 1, \ldots, p-1\}$$
> Every $x \in \mathbb{Q}_p^*$ has: $x = p^{v_p(x)} \cdot u$ where $u \in \mathbb{Z}_p^*$.

## Examples

> [!example] Example 1: $-1$ in $\mathbb{Z}_p$
> In $\mathbb{Z}_5$: $-1 = 4 + 4 \cdot 5 + 4 \cdot 5^2 + \cdots = \sum_{n=0}^{\infty} 4 \cdot 5^n$
>
> Check: $1 + (-1) = (1 + 4) + 4 \cdot 5 + \cdots = 5 + 4 \cdot 5 + \cdots = 0$

> [!example] Example 2: $1/2$ in $\mathbb{Z}_5$
> Since $\gcd(2, 5) = 1$, we have $2^{-1} \in \mathbb{Z}_5$.
> $1/2 = 3 + 2 \cdot 5 + 2 \cdot 5^2 + \cdots$ (since $2 \cdot 3 = 6 = 1 + 5$)

> [!example] Example 3: $\sqrt{2}$ in $\mathbb{Q}_7$
> $2 \equiv 2 \pmod 7$ is a quadratic residue mod 7 (since $3^2 = 9 \equiv 2$).
> By Hensel's lemma, $\sqrt{2} \in \mathbb{Q}_7$.

## Hensel's Lemma

> [!abstract] Hensel's Lemma
> If $f(x) \in \mathbb{Z}_p[x]$ and $a \in \mathbb{Z}_p$ satisfies:
> - $f(a) \equiv 0 \pmod{p}$
> - $f'(a) \not\equiv 0 \pmod{p}$
>
> Then there exists unique $\alpha \in \mathbb{Z}_p$ with $f(\alpha) = 0$ and $\alpha \equiv a \pmod{p}$.

This is "$p$-adic Newton's method always converges!"

## Structure of $\mathbb{Q}_p^*$

$$\mathbb{Q}_p^* \cong p^{\mathbb{Z}} \times \mathbb{Z}_p^*$$
$$\mathbb{Z}_p^* \cong \mu_{p-1} \times (1 + p\mathbb{Z}_p)$$

where $\mu_{p-1}$ is the $(p-1)$-th roots of unity.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[08 - Arithmetic Geometry/Concepts/Local-Global Principles|Local-Global Principles]]
- [[08 - Arithmetic Geometry/Concepts/Rational Points|Rational Points]]
