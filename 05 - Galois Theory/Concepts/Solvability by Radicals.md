---
title: Solvability by Radicals
topic: galois-theory
tags:
  - concept
  - theorem
  - galois-theory
created: 2026-01-19
---

# Solvability by Radicals

Galois theory provides a complete criterion for when a polynomial equation can be solved using only arithmetic operations and root extractions.

## Definitions

> [!info] Definition (Radical Extension)
> A field extension $E/F$ is a **radical extension** if there exists a tower:
> $$F = F_0 \subset F_1 \subset \cdots \subset F_n = E$$
> where each $F_{i+1} = F_i(\sqrt[n_i]{a_i})$ for some $a_i \in F_i$ and $n_i \in \mathbb{N}$.

> [!info] Definition (Solvable by Radicals)
> A polynomial $f(x) \in F[x]$ is **solvable by radicals** over $F$ if its splitting field is contained in some radical extension of $F$.
>
> Equivalently: all roots can be expressed using $+, -, \times, \div$ and $\sqrt[n]{\cdot}$ applied to elements of $F$.

## The Main Theorem

> [!abstract] Galois' Criterion
> Let $F$ be a field of characteristic 0, and $f(x) \in F[x]$. Then:
>
> **$f$ is solvable by radicals** $\iff$ **$\text{Gal}(f)$ is a solvable group**
>
> where $\text{Gal}(f) = \text{Gal}(E/F)$ for $E$ the splitting field of $f$.

## Solvable Groups

> [!info] Definition (Solvable Group)
> A group $G$ is **solvable** if there exists a chain:
> $$\{1\} = G_0 \trianglelefteq G_1 \trianglelefteq \cdots \trianglelefteq G_n = G$$
> where each quotient $G_{i+1}/G_i$ is abelian.

> [!tip] Key Facts About Solvable Groups
> - Abelian groups are solvable
> - $S_n$ is solvable for $n \leq 4$
> - $S_n$ is **not** solvable for $n \geq 5$ (since $A_n$ is simple for $n \geq 5$)
> - Subgroups and quotients of solvable groups are solvable

## Classical Results

> [!abstract] Solvability of Low-Degree Polynomials
>
> | Degree | General Galois Group | Solvable? | Formula Exists? |
> |--------|---------------------|-----------|-----------------|
> | 2 | $S_2 \cong \mathbb{Z}/2\mathbb{Z}$ | Yes | Quadratic formula |
> | 3 | $S_3$ | Yes | Cardano's formula |
> | 4 | $S_4$ | Yes | Ferrari's formula |
> | $\geq 5$ | $S_n$ | **No** | No general formula |

> [!abstract] Abel-Ruffini Theorem
> There is no general algebraic formula for the roots of a polynomial of degree 5 or higher in terms of its coefficients.

## Examples

> [!example] Example 1: Quadratic $x^2 + bx + c$
> - Galois group: subgroup of $S_2$ (always solvable)
> - Solution: $x = \frac{-b \pm \sqrt{b^2 - 4c}}{2}$

> [!example] Example 2: $x^5 - 1$ (Cyclotomic)
> - Galois group: $(\mathbb{Z}/5\mathbb{Z})^* \cong \mathbb{Z}/4\mathbb{Z}$ (cyclic, hence solvable)
> - Roots expressible by radicals: $\zeta_5 = e^{2\pi i/5}$

> [!example] Example 3: $x^5 - 4x + 2$ over $\mathbb{Q}$
> - Galois group: $S_5$ (not solvable)
> - **Cannot** be solved by radicals

> [!example] Example 4: $x^5 - 2$ over $\mathbb{Q}$
> - Galois group: $\mathbb{Z}/5\mathbb{Z} \rtimes \mathbb{Z}/4\mathbb{Z}$ (order 20, solvable)
> - Roots **can** be expressed by radicals

## Proof Outline

> [!tip] Why the Criterion Works
> 1. Adjoining an $n$-th root creates an extension with cyclic (hence abelian) Galois group
> 2. A radical tower corresponds to a subnormal series with abelian factors
> 3. Solvable Galois group ↔ can build the splitting field via radical extensions

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
