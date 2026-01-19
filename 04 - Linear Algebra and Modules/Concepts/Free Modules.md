---
title: Free Modules
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
created: 2026-01-19
---

# Free Modules

## Definition

> [!info] Definition (Free Module)
> An $R$-[[04 - Linear Algebra and Modules/Concepts/Module Definition|module]] $F$ is **free** if it has a [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|basis]], i.e., a subset $B \subseteq F$ such that:
> 1. $B$ is linearly independent: $\sum r_i b_i = 0 \Rightarrow$ all $r_i = 0$
> 2. $B$ spans $F$: every element is a finite $R$-linear combination of elements of $B$

> [!info] Definition (Rank)
> If $R$ is commutative, the **rank** of a free module is the cardinality of any basis (well-defined by the Invariant Basis Number property).

## Characterizations

> [!abstract] Theorem
> The following are equivalent for an $R$-module $F$:
> 1. $F$ is free
> 2. $F \cong R^{(I)}$ for some index set $I$ (direct sum of copies of $R$)
> 3. $F$ has the universal property below

> [!abstract] Universal Property
> For a set $X$, the free $R$-module on $X$ satisfies: for any $R$-module $M$ and function $f: X \to M$, there exists a unique homomorphism $\tilde{f}: F(X) \to M$ extending $f$.

## Key Properties

1. Every [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|vector space]] is a free module
2. Submodules of free modules need not be free (unlike subspaces)
3. Over a [[02 - Ring Theory/Concepts/Principal Ideal Domains|PID]], submodules of free modules are free
4. $R^n \cong R^m \Rightarrow n = m$ for commutative rings with IBN

## Examples

> [!example] Example 1: $R^n$
> $R^n$ is free with standard basis $\{e_1, \ldots, e_n\}$.

> [!example] Example 2: Polynomial ring
> $R[x]$ is free as an $R$-module with basis $\{1, x, x^2, \ldots\}$.

> [!example] Example 3: Vector spaces
> Every vector space is a free module over its field.

> [!example] Example 4: Not free
> $\mathbb{Z}/n\mathbb{Z}$ is **not** a free $\mathbb{Z}$-module (no basis exists).

## Free vs Projective

| Property | Free | Projective |
|----------|------|------------|
| Has basis | Yes | Not necessarily |
| Direct summand of free | Yes | Yes |
| Over PID | Same | Same |
| Over local ring | Same | Same |

## Structure Theorem Connection

> [!abstract] Fundamental Theorem (Modules over PID)
> Every [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|finitely generated]] module over a [[02 - Ring Theory/Concepts/Principal Ideal Domains|PID]] decomposes as:
> $$M \cong R^r \oplus R/(a_1) \oplus \cdots \oplus R/(a_k)$$
> where $R^r$ is the free part (rank $r$).

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]] (free modules over fields)
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
