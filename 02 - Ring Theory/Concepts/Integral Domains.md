---
title: Integral Domains
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
created: 2026-01-19
---

# Integral Domains

## Definition

> [!info] Definition (Integral Domain)
> An **integral domain** is a commutative ring $R$ with identity $1 \neq 0$ that has no zero divisors. That is, for all $a, b \in R$:
> $$ab = 0 \Rightarrow a = 0 \text{ or } b = 0$$

> [!info] Definition (Zero Divisor)
> A nonzero element $a$ in a ring $R$ is a **zero divisor** if there exists a nonzero $b \in R$ such that $ab = 0$ or $ba = 0$.

## Intuition

Integral domains are rings where multiplication behaves "nicely" like in the integers. The absence of zero divisors means we can cancel: if $ac = bc$ and $c \neq 0$, then $a = b$.

## Key Properties

1. **Cancellation Law**: In an integral domain, $ac = bc$ with $c \neq 0$ implies $a = b$
2. Every field is an integral domain
3. Every finite integral domain is a field
4. The characteristic of an integral domain is either $0$ or a prime $p$
5. If $R$ is an integral domain, so is $R[x]$

## Examples

> [!example] Example 1: $\mathbb{Z}$
> The integers form an integral domain:
> - Commutative ring with $1 \neq 0$
> - $mn = 0$ implies $m = 0$ or $n = 0$

> [!example] Example 2: Fields
> Every field ($\mathbb{Q}, \mathbb{R}, \mathbb{C}, \mathbb{F}_p$) is an integral domain.

> [!example] Example 3: Polynomial Rings
> If $R$ is an integral domain, then $R[x]$ is an integral domain.

> [!example] Example 4: Gaussian Integers
> $\mathbb{Z}[i] = \{a + bi : a, b \in \mathbb{Z}\}$ is an integral domain.

## Non-Examples

> [!warning] Non-Example: $\mathbb{Z}/6\mathbb{Z}$
> The ring $\mathbb{Z}/6\mathbb{Z}$ is **not** an integral domain:
> - $[2] \cdot [3] = [6] = [0]$
> - Neither $[2]$ nor $[3]$ is zero

> [!warning] Non-Example: $\mathbb{Z} \times \mathbb{Z}$
> The product ring is not an integral domain:
> - $(1, 0) \cdot (0, 1) = (0, 0)$

## Theorems

> [!abstract] Field of Fractions
> Every integral domain $R$ can be embedded in a field $\text{Frac}(R)$ called its **field of fractions**:
> $$\text{Frac}(R) = \left\{\frac{a}{b} : a, b \in R, b \neq 0\right\}$$
> with equivalence $\frac{a}{b} = \frac{c}{d}$ iff $ad = bc$.

> [!abstract] Finite Integral Domains
> A finite integral domain is a field.
>
> *Proof sketch*: For nonzero $a$, the map $x \mapsto ax$ is injective (by cancellation), hence surjective (finite set), so $1 = ax$ for some $x$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[03 - Field Theory/Concepts/Field Definition|Field Definition]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
