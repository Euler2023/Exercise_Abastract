---
title: Ring Definition
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
created: 2025-01-19
---

# Ring Definition

## Definition

> [!info] Definition (Ring)
> A **ring** is a triple $(R, +, \cdot)$ where $R$ is a non-empty set and $+, \cdot$ are binary operations satisfying:
>
> 1. $(R, +)$ is an [[01 - Group Theory/Concepts/Abelian Groups|abelian group]] (with identity $0$)
> 2. **Associativity of $\cdot$**: $(a \cdot b) \cdot c = a \cdot (b \cdot c)$
> 3. **Distributivity**: $a \cdot (b + c) = a \cdot b + a \cdot c$ and $(a + b) \cdot c = a \cdot c + b \cdot c$

> [!info] Ring with Unity
> A ring has **unity** (or identity) if there exists $1 \in R$ such that $1 \cdot a = a \cdot 1 = a$ for all $a \in R$.

> [!info] Commutative Ring
> A ring is **commutative** if $a \cdot b = b \cdot a$ for all $a, b \in R$.

## Terminology Conventions

| Term | Meaning |
|------|---------|
| Ring (this vault) | Has unity unless stated otherwise |
| Commutative ring | Commutative with unity |
| Rng (ring without i) | No unity required |

## Key Properties

1. **$0 \cdot a = a \cdot 0 = 0$** for all $a \in R$
2. **$(-a) \cdot b = a \cdot (-b) = -(a \cdot b)$**
3. **$(-a)(-b) = ab$**
4. Unity $1$ is unique (if it exists)
5. If $R \neq \{0\}$ and $R$ has unity, then $1 \neq 0$

## Units and Zero Divisors

> [!info] Definition (Unit)
> An element $u \in R$ is a **unit** if there exists $v \in R$ such that $uv = vu = 1$.
> The set of units $R^*$ forms a group under multiplication.

> [!info] Definition (Zero Divisor)
> A non-zero element $a \in R$ is a **zero divisor** if there exists non-zero $b \in R$ such that $ab = 0$ or $ba = 0$.

## Examples

> [!example] Example 1: $\mathbb{Z}$
> The integers form a commutative ring with unity.
> - Units: $\{1, -1\}$
> - No zero divisors

> [!example] Example 2: $\mathbb{Z}/n\mathbb{Z}$
> Integers modulo $n$ form a commutative ring with unity.
> - Units: elements coprime to $n$
> - Zero divisors: non-zero elements not coprime to $n$

> [!example] Example 3: $M_n(R)$
> $n \times n$ matrices over ring $R$ form a ring (non-commutative if $n > 1$).
> - Unity: identity matrix $I_n$
> - Units: invertible matrices

> [!example] Example 4: $R[x]$
> Polynomials over ring $R$ form a ring.
> - If $R$ is commutative with unity, so is $R[x]$
> - Units of $R[x]$: units of $R$ (if $R$ is an integral domain)

## Non-Examples

> [!warning] Non-Example: $2\mathbb{Z}$
> Even integers under usual operations form a ring **without** unity.

## Related Concepts

- [[02 - Ring Theory/Concepts/Subrings|Subrings]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
