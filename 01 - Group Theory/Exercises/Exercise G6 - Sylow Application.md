---
title: "Exercise G6: Sylow Theorems Application"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - sylow-theorems
  - proof
source: "Dummit & Foote, Ch. 4"
created: 2025-01-19
---

# Exercise G6: Sylow Theorems Application

## Problem Statement

> [!question] Exercise
> Let $G$ be a [[01 - Group Theory/Concepts/Group Definition|group]] of order $15$. Prove that $G$ is cyclic.

## Hints

> [!hint]- Hint 1
> Factor $15 = 3 \cdot 5$ and apply the Sylow theorems.

> [!hint]- Hint 2
> Find the number of Sylow 3-subgroups and Sylow 5-subgroups.

> [!hint]- Hint 3
> Show that both Sylow subgroups are normal, then use the direct product.

## Solution

> [!success]- Solution
> ### Approach
> Use Sylow theorems to show unique Sylow subgroups, then show $G$ is a direct product.
>
> ### Proof
> Let $|G| = 15 = 3 \cdot 5$.
>
> **Sylow 5-subgroups:**
> - $n_5 \equiv 1 \pmod{5}$ and $n_5 | 3$
> - So $n_5 \in \{1\}$
> - Thus there's a unique Sylow 5-subgroup $P_5$, which is normal
>
> **Sylow 3-subgroups:**
> - $n_3 \equiv 1 \pmod{3}$ and $n_3 | 5$
> - So $n_3 \in \{1\}$ (since $4 \nmid 5$ and $4 \not\equiv 1 \pmod 3$ anyway)
> - Wait: $n_3 | 5$ means $n_3 \in \{1, 5\}$, and $n_3 \equiv 1 \pmod 3$ means $n_3 \in \{1, 4, 7, \ldots\}$
> - So $n_3 = 1$
> - Thus there's a unique Sylow 3-subgroup $P_3$, which is normal
>
> **Structure of $G$:**
> - $P_3 \cap P_5 = \{e\}$ (orders are coprime)
> - $|P_3 P_5| = |P_3| \cdot |P_5| / |P_3 \cap P_5| = 3 \cdot 5 / 1 = 15 = |G|$
> - So $G = P_3 P_5$
> - Since both are normal and intersect trivially: $G \cong P_3 \times P_5$
>
> **Conclusion:**
> - $P_3 \cong \mathbb{Z}/3\mathbb{Z}$ and $P_5 \cong \mathbb{Z}/5\mathbb{Z}$
> - $G \cong \mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/5\mathbb{Z} \cong \mathbb{Z}/15\mathbb{Z}$
>
> Therefore $G$ is cyclic. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

This generalizes: any group of order $pq$ with primes $p < q$ and $p \nmid (q-1)$ is cyclic.
