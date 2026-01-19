---
title: Finite Fields
topic: field-theory
tags:
  - concept
  - definition
  - field-theory
created: 2026-01-19
---

# Finite Fields

## Definition

> [!info] Definition (Finite Field)
> A **finite field** (or **Galois field**) is a field with finitely many elements. The number of elements is called the **order** of the field.

## Classification

> [!abstract] Fundamental Classification Theorem
> 1. Every finite field has order $p^n$ for some prime $p$ and positive integer $n$
> 2. For each prime power $p^n$, there exists a unique (up to isomorphism) field of order $p^n$
> 3. This field is denoted $\mathbb{F}_{p^n}$ or $GF(p^n)$

## Key Properties

1. The characteristic of $\mathbb{F}_{p^n}$ is $p$
2. $\mathbb{F}_{p^n}$ contains $\mathbb{F}_{p^m}$ as a subfield iff $m | n$
3. The multiplicative group $\mathbb{F}_{p^n}^*$ is cyclic of order $p^n - 1$
4. Every element of $\mathbb{F}_{p^n}$ satisfies $x^{p^n} = x$
5. $\mathbb{F}_{p^n}$ is the splitting field of $x^{p^n} - x$ over $\mathbb{F}_p$

## Construction

> [!info] Constructing $\mathbb{F}_{p^n}$
> 1. Find an irreducible polynomial $f(x)$ of degree $n$ over $\mathbb{F}_p$
> 2. Then $\mathbb{F}_{p^n} \cong \mathbb{F}_p[x]/(f(x))$
>
> Elements are represented as polynomials of degree $< n$.

## Examples

> [!example] Example 1: $\mathbb{F}_2 = \{0, 1\}$
> The field with 2 elements:
> - $1 + 1 = 0$
> - Only field of characteristic 2 with 2 elements

> [!example] Example 2: $\mathbb{F}_4$
> Using irreducible $x^2 + x + 1$ over $\mathbb{F}_2$:
> - Elements: $\{0, 1, \alpha, \alpha + 1\}$ where $\alpha^2 = \alpha + 1$
> - $\alpha^3 = 1$ (generator of multiplicative group)

> [!example] Example 3: $\mathbb{F}_9$
> Using irreducible $x^2 + 1$ over $\mathbb{F}_3$:
> - Elements: $\{a + bi : a, b \in \mathbb{F}_3\}$ where $i^2 = -1 = 2$
> - 9 elements total

> [!example] Example 4: $\mathbb{F}_8$
> Using irreducible $x^3 + x + 1$ over $\mathbb{F}_2$:
> - Elements: polynomials in $\alpha$ of degree $\leq 2$
> - $\mathbb{F}_8^*$ is cyclic of order 7

## Theorems

> [!abstract] Frobenius Automorphism
> The map $\phi: x \mapsto x^p$ is an automorphism of $\mathbb{F}_{p^n}$ fixing $\mathbb{F}_p$.
> $$\text{Gal}(\mathbb{F}_{p^n}/\mathbb{F}_p) = \langle \phi \rangle \cong \mathbb{Z}/n\mathbb{Z}$$

> [!abstract] Subfield Criterion
> $\mathbb{F}_{p^m} \subseteq \mathbb{F}_{p^n}$ if and only if $m | n$.
>
> When this holds, $\mathbb{F}_{p^m} = \{x \in \mathbb{F}_{p^n} : x^{p^m} = x\}$.

> [!abstract] Existence of Primitive Elements
> The multiplicative group $\mathbb{F}_{p^n}^*$ is cyclic. A generator is called a **primitive element**.

## Applications

- Coding theory (Reed-Solomon codes)
- Cryptography (AES uses $\mathbb{F}_{2^8}$)
- Error correction
- Combinatorics (Latin squares)

## Related Concepts

- [[03 - Field Theory/Concepts/Field Definition|Field Definition]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
