---
title: Sylow Theorems
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
created: 2025-01-19
---

# Sylow Theorems

The Sylow theorems are powerful tools for analyzing the structure of finite groups through their $p$-subgroups.

## Definitions

> [!info] Definition ($p$-group)
> A group $G$ is a **$p$-group** if $|G| = p^k$ for some prime $p$ and $k \geq 0$.

> [!info] Definition (Sylow $p$-subgroup)
> Let $|G| = p^n m$ where $p \nmid m$. A **Sylow $p$-subgroup** of $G$ is a subgroup of order $p^n$.

## The Three Sylow Theorems

> [!abstract] Sylow I (Existence)
> Let $|G| = p^n m$ with $p \nmid m$. Then $G$ has a Sylow $p$-subgroup.
> More generally: for each $0 \leq k \leq n$, $G$ has a subgroup of order $p^k$.

> [!abstract] Sylow II (Conjugacy)
> All Sylow $p$-subgroups of $G$ are conjugate.
> Hence: any $p$-subgroup is contained in some Sylow $p$-subgroup.

> [!abstract] Sylow III (Counting)
> Let $n_p$ be the number of Sylow $p$-subgroups. Then:
> 1. $n_p \equiv 1 \pmod{p}$
> 2. $n_p$ divides $m = |G|/p^n$
> 3. $n_p = [G : N_G(P)]$ where $P$ is any Sylow $p$-subgroup

## Key Consequences

> [!tip] Uniqueness Criterion
> $n_p = 1$ iff the Sylow $p$-subgroup is normal.

> [!tip] Normality Test
> If $n_p = 1$, then $P \trianglelefteq G$ (unique Sylow $p$-subgroup is normal).

## Examples

> [!example] Example 1: Groups of order 15
> $|G| = 15 = 3 \cdot 5$
> - $n_3 | 5$ and $n_3 \equiv 1 \pmod 3 \Rightarrow n_3 = 1$
> - $n_5 | 3$ and $n_5 \equiv 1 \pmod 5 \Rightarrow n_5 = 1$
> - Both Sylow subgroups normal $\Rightarrow G \cong \mathbb{Z}/15\mathbb{Z}$

> [!example] Example 2: Groups of order 12
> $|G| = 12 = 2^2 \cdot 3$
> - $n_3 | 4$ and $n_3 \equiv 1 \pmod 3 \Rightarrow n_3 \in \{1, 4\}$
> - $n_2 | 3$ and $n_2 \equiv 1 \pmod 2 \Rightarrow n_2 \in \{1, 3\}$
> - Groups: $\mathbb{Z}/12\mathbb{Z}$, $\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/6\mathbb{Z}$, $A_4$, $D_6$, $\text{Dic}_3$

> [!example] Example 3: $S_5$
> $|S_5| = 120 = 2^3 \cdot 3 \cdot 5$
> - $n_5 | 24$ and $n_5 \equiv 1 \pmod 5 \Rightarrow n_5 \in \{1, 6\}$
> - Actually $n_5 = 6$ (count 5-cycles)

## Applications

1. **Classifying groups** of small order
2. **Proving non-simplicity**: if $n_p = 1$ for some $p$, group has [[01 - Group Theory/Concepts/Normal Subgroups|normal subgroup]]
3. **Counting elements**: Sylow subgroups may overlap only at identity

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
