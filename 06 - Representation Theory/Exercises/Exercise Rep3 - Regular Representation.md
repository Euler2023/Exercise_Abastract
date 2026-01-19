---
title: "Exercise Rep1: Character of Regular Representation"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - representation-theory
  - characters
source: "Serre, Linear Representations of Finite Groups"
created: 2025-01-19
---

# Exercise Rep1: Character of Regular Representation

## Problem Statement

> [!question] Exercise
> Let $G$ be a finite group and let $\rho_{\text{reg}}: G \to GL(FG)$ be the (left) regular representation.
>
> Compute the character $\chi_{\text{reg}}$ and show that:
> $$\chi_{\text{reg}}(g) = \begin{cases} |G| & \text{if } g = e \\ 0 & \text{if } g \neq e \end{cases}$$

## Hints

> [!hint]- Hint 1
> The regular representation acts on the vector space $FG$ with basis $\{h : h \in G\}$.

> [!hint]- Hint 2
> For $g \in G$, compute $\rho_{\text{reg}}(g)(h) = gh$ and determine when this contributes to the trace.

> [!hint]- Hint 3
> The trace counts diagonal entries. When does $gh = h$?

## Solution

> [!success]- Solution
> ### Proof
> The regular representation has $FG$ as the underlying vector space with basis $\{h : h \in G\}$.
>
> The action is $\rho_{\text{reg}}(g)(h) = gh$.
>
> **Matrix of $\rho_{\text{reg}}(g)$:**
> In the basis $\{h : h \in G\}$, the $(h', h)$-entry of the matrix is:
> $$[\rho_{\text{reg}}(g)]_{h',h} = \begin{cases} 1 & \text{if } gh = h' \\ 0 & \text{otherwise} \end{cases}$$
>
> **Computing the trace:**
> $$\chi_{\text{reg}}(g) = \text{tr}(\rho_{\text{reg}}(g)) = \sum_{h \in G} [\rho_{\text{reg}}(g)]_{h,h}$$
>
> The diagonal entry at position $h$ is 1 iff $gh = h$, i.e., iff $g = e$.
>
> **Case 1: $g = e$**
> Every diagonal entry is 1, so $\chi_{\text{reg}}(e) = |G|$.
>
> **Case 2: $g \neq e$**
> No diagonal entry is 1 (since $gh \neq h$ for all $h$), so $\chi_{\text{reg}}(g) = 0$.
>
> Therefore:
> $$\chi_{\text{reg}}(g) = \begin{cases} |G| & \text{if } g = e \\ 0 & \text{if } g \neq e \end{cases} \quad \square$$

## Corollary

> [!abstract] Decomposition of Regular Representation
> Over $\mathbb{C}$:
> $$\chi_{\text{reg}} = \sum_i (\dim \rho_i) \chi_i$$
> where the sum is over all irreducible representations.
>
> Each irreducible $\rho_i$ appears with multiplicity $\dim \rho_i$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Group Algebra|Group Algebra]]
