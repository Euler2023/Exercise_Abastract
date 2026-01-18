---
title: Cosets and Lagrange Theorem
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
created: 2025-01-19
---

# Cosets and Lagrange's Theorem

## Cosets

> [!info] Definition (Left Coset)
> Let $H \leq G$ and $g \in G$. The **left coset** of $H$ containing $g$ is:
> $$gH = \{gh : h \in H\}$$

> [!info] Definition (Right Coset)
> The **right coset** of $H$ containing $g$ is:
> $$Hg = \{hg : h \in H\}$$

## Properties of Cosets

> [!tip] Key Properties
> 1. $gH = H \iff g \in H$
> 2. $|gH| = |H|$ for all $g \in G$
> 3. $aH = bH \iff a^{-1}b \in H \iff a \sim b$ (equivalence relation)
> 4. Cosets partition $G$: $G = \bigsqcup_{g \in G/H} gH$
> 5. $gH = Hg$ for all $g$ $\iff$ $H \trianglelefteq G$

## Index

> [!info] Definition (Index)
> The **index** of $H$ in $G$, written $[G:H]$, is the number of distinct left cosets of $H$ in $G$.

## Lagrange's Theorem

> [!abstract] Lagrange's Theorem
> If $G$ is a finite group and $H \leq G$, then:
> $$|G| = |H| \cdot [G:H]$$
> In particular, $|H|$ divides $|G|$.

## Corollaries

> [!abstract] Corollary 1: Order of Elements
> If $G$ is finite and $g \in G$, then $|g|$ divides $|G|$.

> [!abstract] Corollary 2: $g^{|G|} = e$
> For any $g$ in finite group $G$: $g^{|G|} = e$.

> [!abstract] Corollary 3: Prime Order Groups
> If $|G| = p$ (prime), then $G$ is cyclic.

> [!abstract] Corollary 4: Fermat's Little Theorem
> For prime $p$ and $a$ not divisible by $p$: $a^{p-1} \equiv 1 \pmod{p}$.

## Examples

> [!example] Example 1: Cosets of $3\mathbb{Z}$ in $\mathbb{Z}$
> $0 + 3\mathbb{Z} = \{\ldots, -6, -3, 0, 3, 6, \ldots\}$
> $1 + 3\mathbb{Z} = \{\ldots, -5, -2, 1, 4, 7, \ldots\}$
> $2 + 3\mathbb{Z} = \{\ldots, -4, -1, 2, 5, 8, \ldots\}$
>
> Index $[\mathbb{Z} : 3\mathbb{Z}] = 3$

> [!example] Example 2: Cosets in $S_3$
> Let $H = \{e, (12)\}$. The left cosets are:
> - $eH = H = \{e, (12)\}$
> - $(13)H = \{(13), (132)\}$
> - $(23)H = \{(23), (123)\}$
>
> Index $[S_3 : H] = 3$, and $|S_3| = 6 = 2 \cdot 3 = |H| \cdot [S_3:H]$

## Related Concepts

- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
