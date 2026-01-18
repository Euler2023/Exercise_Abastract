---
title: "Exercise G3: Subgroup Test"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - subgroups
  - proof
source: "Dummit & Foote, Ch. 2"
created: 2025-01-19
---

# Exercise G3: Subgroup Test

## Problem Statement

> [!question] Exercise
> Let $G$ be a [[01 - Group Theory/Concepts/Group Definition|group]] and $H \subseteq G$ a non-empty subset. Prove that $H$ is a [[01 - Group Theory/Concepts/Subgroups|subgroup]] of $G$ if and only if for all $a, b \in H$, we have $ab^{-1} \in H$.

## Hints

> [!hint]- Hint 1
> For the forward direction, assume $H$ is a subgroup and use closure and existence of inverses.

> [!hint]- Hint 2
> For the backward direction, first show $e \in H$ by taking $a = b$.

> [!hint]- Hint 3
> Then show inverses exist by taking $a = e$.

## Solution

> [!success]- Solution
> ### Approach
> Prove both directions of the if and only if statement.
>
> ### Proof
> **($\Rightarrow$)** Suppose $H \leq G$. For any $a, b \in H$:
> - Since $H$ is a group, $b^{-1} \in H$
> - Since $H$ is closed, $ab^{-1} \in H$
>
> **($\Leftarrow$)** Suppose $ab^{-1} \in H$ for all $a, b \in H$.
>
> **Identity:** Since $H \neq \emptyset$, choose any $a \in H$.
> Then $aa^{-1} = e \in H$.
>
> **Inverses:** For any $a \in H$:
> $ea^{-1} = a^{-1} \in H$.
>
> **Closure:** For any $a, b \in H$:
> Since $b^{-1} \in H$, we have $a(b^{-1})^{-1} = ab \in H$.
>
> **Associativity:** Inherited from $G$.
>
> Therefore $H \leq G$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]

## Notes

This "one-step subgroup test" is often the most efficient way to verify that a subset is a subgroup.
