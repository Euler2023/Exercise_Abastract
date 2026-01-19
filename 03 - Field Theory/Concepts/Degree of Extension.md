---
title: Degree of Extension
topic: field-theory
tags:
  - concept
  - definition
  - field-theory
created: 2026-01-19
---

# Degree of Extension

## Definition

> [!info] Definition (Degree)
> The **degree** of a field extension $E/F$, denoted $[E:F]$, is the dimension of $E$ as a vector space over $F$:
> $$[E:F] = \dim_F(E)$$

> [!info] Definition (Finite Extension)
> An extension $E/F$ is **finite** if $[E:F] < \infty$.

## Key Properties

1. $[F:F] = 1$ for any field $F$
2. If $[E:F] = n$, then every element of $E$ can be written uniquely as $a_1 e_1 + \cdots + a_n e_n$ where $\{e_1, \ldots, e_n\}$ is an $F$-basis of $E$
3. Finite extensions are algebraic extensions
4. The converse is false: algebraic need not imply finite

## Tower Law

> [!abstract] Tower Law (Multiplicativity of Degrees)
> If $F \subseteq K \subseteq E$ are fields, then:
> $$[E:F] = [E:K] \cdot [K:F]$$
> (with the convention that $\infty \cdot n = \infty$ for $n \geq 1$)

> [!tip] Proof Idea
> If $\{e_1, \ldots, e_m\}$ is a $K$-basis of $E$ and $\{k_1, \ldots, k_n\}$ is an $F$-basis of $K$, then $\{e_i k_j : 1 \leq i \leq m, 1 \leq j \leq n\}$ is an $F$-basis of $E$.

## Examples

> [!example] Example 1: $[\mathbb{C}:\mathbb{R}] = 2$
> Basis: $\{1, i\}$
> - Every complex number: $a + bi$ with $a, b \in \mathbb{R}$

> [!example] Example 2: $[\mathbb{Q}(\sqrt{2}):\mathbb{Q}] = 2$
> Basis: $\{1, \sqrt{2}\}$
> - Minimal polynomial $x^2 - 2$ has degree 2

> [!example] Example 3: $[\mathbb{Q}(\sqrt[3]{2}):\mathbb{Q}] = 3$
> Basis: $\{1, \sqrt[3]{2}, \sqrt[3]{4}\}$
> - Minimal polynomial $x^3 - 2$ has degree 3

> [!example] Example 4: Tower Example
> $[\mathbb{Q}(\sqrt{2}, \sqrt{3}):\mathbb{Q}] = 4$
> - $[\mathbb{Q}(\sqrt{2}):\mathbb{Q}] = 2$
> - $[\mathbb{Q}(\sqrt{2}, \sqrt{3}):\mathbb{Q}(\sqrt{2})] = 2$ (since $\sqrt{3} \notin \mathbb{Q}(\sqrt{2})$)
> - By tower law: $2 \cdot 2 = 4$

> [!example] Example 5: Infinite Extension
> $[\overline{\mathbb{Q}}:\mathbb{Q}] = \infty$
> - Contains $\sqrt[n]{2}$ for all $n$, each of degree $n$

## Applications

> [!abstract] Degree Divides Degree
> If $F \subseteq K \subseteq E$ with $[E:F]$ finite, then $[K:F]$ divides $[E:F]$.

> [!abstract] Impossibility of Certain Constructions
> Doubling the cube (constructing $\sqrt[3]{2}$) is impossible with compass and straightedge because $[\mathbb{Q}(\sqrt[3]{2}):\mathbb{Q}] = 3$ is not a power of 2.

## Theorems

> [!abstract] Simple Extension Degree
> For algebraic $\alpha$ over $F$:
> $$[F(\alpha):F] = \deg(\text{min}_F(\alpha))$$

> [!abstract] Finite = Algebraic for Simple Extensions
> $[F(\alpha):F] < \infty$ if and only if $\alpha$ is algebraic over $F$.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]
- [[Vector Spaces]]
