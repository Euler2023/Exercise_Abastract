---
title: Torsion Modules
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
created: 2026-01-19
---

# Torsion Modules

## Definition

> [!info] Definition (Torsion Element)
> Let $M$ be an $R$-[[04 - Linear Algebra and Modules/Concepts/Module Definition|module]] where $R$ is an [[02 - Ring Theory/Concepts/Integral Domains|integral domain]]. An element $m \in M$ is a **torsion element** if:
> $$rm = 0 \text{ for some } r \in R, r \neq 0$$
> The element $r$ is called an **annihilator** of $m$.

> [!info] Definition (Torsion Submodule)
> The **torsion submodule** of $M$ is:
> $$T(M) = \{m \in M : rm = 0 \text{ for some } r \neq 0\}$$

> [!info] Definition (Torsion and Torsion-Free)
> - $M$ is a **torsion module** if $T(M) = M$
> - $M$ is **torsion-free** if $T(M) = \{0\}$

## Key Properties

1. $T(M)$ is a [[04 - Linear Algebra and Modules/Concepts/Submodules|submodule]] of $M$
2. $M/T(M)$ is always torsion-free
3. [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free modules]] are torsion-free
4. Torsion-free does not imply free (in general)

## Annihilator

> [!info] Definition (Annihilator)
> The **annihilator** of $m \in M$ is:
> $$\text{Ann}(m) = \{r \in R : rm = 0\}$$
> This is an ideal of $R$.
>
> The **annihilator** of $M$ is:
> $$\text{Ann}(M) = \{r \in R : rm = 0 \text{ for all } m \in M\}$$

## Structure Theorem

> [!abstract] Theorem (over PID)
> For a [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|finitely generated]] module $M$ over a [[02 - Ring Theory/Concepts/Principal Ideal Domains|PID]] $R$:
> $$M \cong T(M) \oplus R^r$$
> where $T(M)$ is the torsion part and $R^r$ is the free part.
>
> The torsion part decomposes as:
> $$T(M) \cong R/(a_1) \oplus \cdots \oplus R/(a_k)$$

## Examples

> [!example] Example 1: Finite abelian groups
> Every finite abelian group is a torsion $\mathbb{Z}$-module.

> [!example] Example 2: $\mathbb{Z}/n\mathbb{Z}$
> Pure torsion: every element $a$ satisfies $na = 0$.

> [!example] Example 3: $\mathbb{Q}$
> $\mathbb{Q}$ is torsion-free as a $\mathbb{Z}$-module (but not free!).

> [!example] Example 4: $\mathbb{Z}$
> $\mathbb{Z}$ is torsion-free and free as a $\mathbb{Z}$-module.

> [!example] Example 5: Mixed module
> $\mathbb{Z} \oplus \mathbb{Z}/2\mathbb{Z}$ has torsion submodule $\{0\} \oplus \mathbb{Z}/2\mathbb{Z}$.

## Primary Decomposition

> [!abstract] Theorem (Primary Decomposition)
> For a torsion module $M$ over a PID:
> $$M = \bigoplus_{p \text{ prime}} M_p$$
> where $M_p = \{m \in M : p^n m = 0 \text{ for some } n\}$ is the **$p$-primary component**.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]] (torsion $\mathbb{Z}$-modules)
