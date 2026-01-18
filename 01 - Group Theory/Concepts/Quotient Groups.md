---
title: Quotient Groups
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
created: 2025-01-19
---

# Quotient Groups

## Definition

> [!info] Definition (Quotient Group)
> Let $G$ be a [[01 - Group Theory/Concepts/Group Definition|group]] and $N \trianglelefteq G$ a [[01 - Group Theory/Concepts/Normal Subgroups|normal subgroup]]. The **quotient group** (or factor group) is:
> $$G/N = \{gN : g \in G\}$$
> with the operation $(aN)(bN) = (ab)N$.

## Why Normality is Required

> [!warning] Normality is Essential
> The operation $(aN)(bN) = (ab)N$ is well-defined **only if** $N$ is normal.
>
> **Proof:** Suppose $aN = a'N$ and $bN = b'N$. We need $(ab)N = (a'b')N$.
> - $a' = an_1$ and $b' = bn_2$ for some $n_1, n_2 \in N$
> - $a'b' = an_1 bn_2 = ab(b^{-1}n_1 b)n_2$
> - This is in $(ab)N$ only if $b^{-1}n_1 b \in N$, i.e., only if $N$ is normal.

## Properties

1. $G/N$ is a group with identity $N = eN$
2. Inverse of $gN$ is $g^{-1}N$
3. The natural projection $\pi: G \to G/N$ defined by $\pi(g) = gN$ is a surjective [[01 - Group Theory/Concepts/Group Homomorphisms|homomorphism]]
4. $\ker(\pi) = N$
5. $|G/N| = [G:N]$ (when $G$ is finite)

## Examples

> [!example] Example 1: $\mathbb{Z}/n\mathbb{Z}$
> - $G = \mathbb{Z}$, $N = n\mathbb{Z}$
> - $\mathbb{Z}/n\mathbb{Z} = \{0 + n\mathbb{Z}, 1 + n\mathbb{Z}, \ldots, (n-1) + n\mathbb{Z}\}$
> - This is the cyclic group of order $n$

> [!example] Example 2: $S_n / A_n$
> - $A_n \trianglelefteq S_n$ (index 2, so normal)
> - $S_n / A_n \cong \mathbb{Z}/2\mathbb{Z}$
> - Cosets: even permutations, odd permutations

> [!example] Example 3: $GL_n(\mathbb{R}) / SL_n(\mathbb{R})$
> - $SL_n(\mathbb{R}) = \ker(\det) \trianglelefteq GL_n(\mathbb{R})$
> - $GL_n(\mathbb{R}) / SL_n(\mathbb{R}) \cong \mathbb{R}^*$
> - Isomorphism given by determinant

## The Correspondence Theorem

> [!abstract] Correspondence Theorem (Fourth Isomorphism Theorem)
> Let $N \trianglelefteq G$. There is a bijection:
> $$\{ \text{[[01 - Group Theory/Concepts/Subgroups|subgroups]] of } G \text{ containing } N\} \leftrightarrow \{\text{[[01 - Group Theory/Concepts/Subgroups|subgroups]] of } G/N\}$$
> given by $H \mapsto H/N$ and $\bar{H} \mapsto \pi^{-1}(\bar{H})$.
>
> This preserves:
> - Inclusion: $H_1 \leq H_2 \iff H_1/N \leq H_2/N$
> - Normality: $H \trianglelefteq G \iff H/N \trianglelefteq G/N$
> - Index: $[G:H] = [G/N : H/N]$

## Related Concepts

- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
