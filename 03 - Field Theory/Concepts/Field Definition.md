---
title: Field Definition
topic: field-theory
tags:
  - concept
  - definition
  - field-theory
created: 2025-01-19
---

# Field Definition

## Definition

> [!info] Definition (Field)
> A **field** is a commutative ring $(F, +, \cdot)$ with unity $1 \neq 0$ such that every non-zero element has a multiplicative inverse.
>
> Equivalently: $(F, +)$ is an [[01 - Group Theory/Concepts/Abelian Groups|abelian group]], $(F^*, \cdot)$ is an [[01 - Group Theory/Concepts/Abelian Groups|abelian group]], and distributivity holds.

## Equivalent Characterizations

> [!tip] Equivalent Conditions
> For a commutative ring $R$ with $1 \neq 0$, the following are equivalent:
> 1. $R$ is a field
> 2. The only ideals of $R$ are $(0)$ and $R$
> 3. Every non-zero element is a unit
> 4. $R$ is a simple ring (no non-trivial two-sided ideals)
> 5. $(0)$ is a maximal ideal

## Characteristic

> [!info] Definition (Characteristic)
> The **characteristic** of a field $F$, written $\text{char}(F)$, is:
> - The smallest positive integer $p$ such that $\underbrace{1 + 1 + \cdots + 1}_{p} = 0$
> - 0 if no such integer exists

> [!tip] Key Fact
> The characteristic of a field is either 0 or a prime number.

## Prime Fields

> [!info] Definition (Prime Field)
> A field $F$ is a **prime field** if it has no proper subfields.

> [!abstract] Classification of Prime Fields
> Every prime field is isomorphic to:
> - $\mathbb{Q}$ if $\text{char}(F) = 0$
> - $\mathbb{F}_p = \mathbb{Z}/p\mathbb{Z}$ if $\text{char}(F) = p$

## Examples

> [!example] Example 1: $\mathbb{Q}, \mathbb{R}, \mathbb{C}$
> All have characteristic 0.

> [!example] Example 2: $\mathbb{F}_p = \mathbb{Z}/p\mathbb{Z}$
> For prime $p$. Has characteristic $p$ and $p$ elements.

> [!example] Example 3: $\mathbb{Q}(\sqrt{2})$
> $\{a + b\sqrt{2} : a, b \in \mathbb{Q}\}$ is a field containing $\mathbb{Q}$.

> [!example] Example 4: $\mathbb{F}_4$
> Constructed as $\mathbb{F}_2[x]/(x^2 + x + 1) = \{0, 1, \alpha, \alpha + 1\}$ where $\alpha^2 = \alpha + 1$.

## Non-Examples

> [!warning] Non-Example: $\mathbb{Z}$
> Not a field: $2$ has no multiplicative inverse in $\mathbb{Z}$.

> [!warning] Non-Example: $\mathbb{Z}/4\mathbb{Z}$
> Not a field: $\bar{2}$ has no inverse (and is a zero divisor).

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
