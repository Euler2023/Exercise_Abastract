---
title: "Exercise G4: Lagrange's Theorem"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - cosets
  - proof
source: "Dummit & Foote, Ch. 3"
created: 2025-01-19
---

# Exercise G4: Lagrange's Theorem

## Problem Statement

> [!question] Exercise
> Let $G$ be a [[01 - Group Theory/Concepts/Group Definition|finite group]] and $H \leq G$ a [[01 - Group Theory/Concepts/Subgroups|subgroup]]. Prove that $|H|$ divides $|G|$.
>
> Furthermore, show that $|G| = |H| \cdot [G:H]$, where $[G:H]$ is the index of $H$ in $G$ (the number of left cosets of $H$ in $G$).

## Hints

> [!hint]- Hint 1
> Show that all left cosets of $H$ have the same cardinality as $H$.

> [!hint]- Hint 2
> Show that different left cosets are disjoint.

> [!hint]- Hint 3
> Show that $G$ is the disjoint union of all left cosets.

## Solution

> [!success]- Solution
> ### Approach
> Partition $G$ into left cosets and count elements.
>
> ### Proof
> **Step 1: Cosets have equal size.**
>
> For any $g \in G$, define $\phi: H \to gH$ by $\phi(h) = gh$.
> - Injective: $gh_1 = gh_2 \Rightarrow h_1 = h_2$
> - Surjective: Every $gh \in gH$ is the image of $h$
>
> Thus $|gH| = |H|$ for all $g \in G$.
>
> **Step 2: Cosets partition $G$.**
>
> Define $a \sim b$ iff $a^{-1}b \in H$ (equivalently, $aH = bH$).
> This is an equivalence relation, so the cosets partition $G$:
> $$G = \bigsqcup_{i=1}^{[G:H]} g_i H$$
>
> **Step 3: Count elements.**
>
> $$|G| = \sum_{i=1}^{[G:H]} |g_i H| = \sum_{i=1}^{[G:H]} |H| = |H| \cdot [G:H]$$
>
> Therefore $|H|$ divides $|G|$. $\square$

## Corollaries

> [!abstract] Corollary 1
> The order of any element divides the order of the group.

> [!abstract] Corollary 2
> Groups of prime order are cyclic.

> [!abstract] Corollary 3
> If $|G| = p$ (prime), then $G \cong \mathbb{Z}/p\mathbb{Z}$.

## Related Concepts

- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]

## Notes

Lagrange's Theorem is fundamental to finite group theory. The converse is false: a divisor of $|G|$ doesn't guarantee a subgroup of that order (e.g., $A_4$ has no subgroup of order 6).
