---
title: Prime and Maximal Ideals
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
created: 2026-01-19
---

# Prime and Maximal Ideals

## Definitions

> [!info] Definition (Prime Ideal)
> An ideal $P$ of a commutative ring $R$ is **prime** if $P \neq R$ and:
> $$ab \in P \Rightarrow a \in P \text{ or } b \in P$$
> for all $a, b \in R$.

> [!info] Definition (Maximal Ideal)
> An ideal $M$ of $R$ is **maximal** if $M \neq R$ and there is no ideal $I$ with $M \subsetneq I \subsetneq R$.

## Characterizations

> [!tip] Quotient Characterizations
> For a commutative ring $R$ with ideal $I \neq R$:
> - $I$ is prime $\Leftrightarrow$ $R/I$ is an integral domain
> - $I$ is maximal $\Leftrightarrow$ $R/I$ is a field

## Key Properties

1. Every maximal ideal is prime (since every field is an integral domain)
2. The converse is false in general (e.g., $(0)$ in $\mathbb{Z}$ is prime but not maximal)
3. In a PID, every nonzero prime ideal is maximal
4. Every proper ideal is contained in a maximal ideal (by Zorn's Lemma)
5. $(0)$ is prime if and only if $R$ is an integral domain

## Examples

> [!example] Example 1: Prime Ideals in $\mathbb{Z}$
> The prime ideals of $\mathbb{Z}$ are:
> - $(0)$ (since $\mathbb{Z}$ is an integral domain)
> - $(p)$ for each prime number $p$
>
> The maximal ideals are exactly $(p)$ for prime $p$.

> [!example] Example 2: $\mathbb{Z}[x]$
> In $\mathbb{Z}[x]$:
> - $(2)$ is prime but not maximal (since $\mathbb{Z}[x]/(2) \cong \mathbb{Z}_2[x]$ is a domain but not a field)
> - $(2, x)$ is maximal (since $\mathbb{Z}[x]/(2,x) \cong \mathbb{Z}_2$ is a field)

> [!example] Example 3: $\mathbb{R}[x, y]$
> In $\mathbb{R}[x, y]$:
> - $(x)$ is prime but not maximal
> - $(x, y)$ is maximal
> - $(x - a, y - b)$ for $a, b \in \mathbb{R}$ are all maximal ideals

## Theorems

> [!abstract] Prime Avoidance Lemma
> If an ideal $I$ is contained in a union of prime ideals $P_1 \cup \cdots \cup P_n$, then $I \subseteq P_i$ for some $i$.

> [!abstract] Existence of Maximal Ideals
> Every proper ideal of a ring with identity is contained in a maximal ideal.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[03 - Field Theory/Concepts/Field Definition|Field Definition]]
