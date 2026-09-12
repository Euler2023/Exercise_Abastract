---
title: "Exercise Gal100: Bases of Subfields from a Normal Basis"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - normal-basis
  - fixed-fields
  - cosets
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 16, printed p. 323, PDF p. 338"
created: 2026-09-12
---

# Exercise Gal100: Bases of Subfields from a Normal Basis

## Problem Statement

> [!question] Exercise VI.16
> Let $K/k$ be a finite Galois extension with group $G$. Let $\alpha \in K$ be such that $\{\sigma\alpha\}_{\sigma \in G}$ is a normal basis. For each subset $S$ of $G$ let $S(\alpha) = \sum_{\sigma \in S} \sigma\alpha$. Let $H$ be a subgroup of $G$ and let $F$ be the fixed field of $H$. Show that there exists a basis of $F$ over $k$ consisting of elements of the form $S(\alpha)$.

## Hints

> [!hint]- Hint 1: Action of $H$ on Subsets of $G$
> An element $S(\alpha) = \sum_{\sigma \in S} \sigma\alpha$ is fixed by all $\tau \in H$ if and only if $\tau S = S$ for all $\tau \in H$. Identify subsets of $G$ that are invariant under left multiplication by $H$.

> [!hint]- Hint 2: Partition by Right Cosets
> Partition $G$ into disjoint right cosets of $H$: $G = \bigcup_{i=1}^m H g_i$, where $m = [G:H] = [F:k]$. Show that each right coset $S_i = H g_i$ yields an element $S_i(\alpha) \in F$.

> [!hint]- Hint 3: Linear Independence from the Normal Basis
> Write a linear relation $\sum_{i=1}^m c_i S_i(\alpha) = 0$ over $k$ as a linear combination of the normal basis elements $\{\sigma\alpha\}_{\sigma \in G}$. Conclude that all $c_i = 0$.

## Solution

> [!success]- Solution
>
> Let $K/k$ be a finite Galois extension with Galois group $G = \operatorname{Gal}(K/k)$, and let $\alpha \in K$ generate a normal basis, meaning that $\{\sigma\alpha : \sigma \in G\}$ is a vector space basis of $K$ over $k$.
> Let $H \le G$ be a subgroup, and let $F = K^H$ be the fixed field of $H$. By the Fundamental Theorem of Galois Theory,
> $$
> [F:k] = [G:H] = m.
> $$
>
> ### 1. Construction of Invariant Subsets
>
> For any subset $S \subseteq G$ and any $\tau \in H$, applying $\tau$ to $S(\alpha) = \sum_{\sigma \in S} \sigma(\alpha)$ yields:
> $$
> \tau(S(\alpha)) = \sum_{\sigma \in S} \tau(\sigma\alpha) = \sum_{\sigma \in S} (\tau\sigma)(\alpha) = \sum_{\rho \in \tau S} \rho(\alpha) = (\tau S)(\alpha).
> $$
> Thus $S(\alpha)$ is fixed by every $\tau \in H$ if and only if $\tau S = S$ for all $\tau \in H$.
>
> A subset $S \subseteq G$ satisfies $\tau S = S$ for all $\tau \in H$ if and only if $S$ is a union of right cosets of $H$ in $G$.
>
> Let $g_1, g_2, \dots, g_m \in G$ be a complete set of representatives for the right cosets of $H$ in $G$, so that $G$ is the disjoint union:
> $$
> G = \bigcup_{i=1}^m S_i, \qquad \text{where } S_i = H g_i.
> $$
> For each $i \in \{1, \dots, m\}$ and any $\tau \in H$, we have $\tau S_i = \tau(H g_i) = (\tau H) g_i = H g_i = S_i$.
> Therefore,
> $$
> \tau(S_i(\alpha)) = S_i(\alpha) \quad \text{for all } \tau \in H.
> $$
> Because $F = K^H$ is the fixed field of $H$, this proves that
> $$
> S_i(\alpha) \in F \quad \text{for every } i \in \{1, \dots, m\}.
> $$
>
> ---
>
> ### 2. Linear Independence over $k$
>
> Suppose there is a linear dependence relation over $k$:
> $$
> \sum_{i=1}^m c_i S_i(\alpha) = 0, \qquad c_i \in k.
> $$
> Substituting the definition $S_i(\alpha) = \sum_{\sigma \in H g_i} \sigma(\alpha)$:
> $$
> \sum_{i=1}^m c_i \left( \sum_{\sigma \in H g_i} \sigma(\alpha) \right) = 0.
> $$
> Since the right cosets $S_1, \dots, S_m$ form a partition of $G$, each $\sigma \in G$ belongs to exactly one right coset $H g_i$. We can rewrite the sum as:
> $$
> \sum_{\sigma \in G} a_\sigma \sigma(\alpha) = 0,
> $$
> where the coefficient $a_\sigma \in k$ is defined by:
> $$
> a_\sigma = c_i \quad \text{for the unique } i \text{ such that } \sigma \in H g_i.
> $$
>
> By assumption, $\{\sigma\alpha : \sigma \in G\}$ is a normal basis of $K$ over $k$, so its elements are linearly independent over $k$.
> Therefore, all coefficients in the linear combination must vanish:
> $$
> a_\sigma = 0 \quad \text{for all } \sigma \in G.
> $$
> Since $a_\sigma = c_i$ for all $\sigma \in H g_i$, it follows that
> $$
> c_i = 0 \quad \text{for each } i \in \{1, \dots, m\}.
> $$
> Thus the elements $S_1(\alpha), S_2(\alpha), \dots, S_m(\alpha)$ are linearly independent over $k$.
>
> ---
>
> ### 3. Spanning and Conclusion
>
> The set $\{S_1(\alpha), \dots, S_m(\alpha)\}$ consists of $m$ linearly independent vectors in $F$ over $k$.
> Since
> $$
> \dim_k F = [F:k] = [G:H] = m,
> $$
> any linearly independent set of $m$ vectors in $F$ spans $F$ as a $k$-vector space.
>
> Therefore, $\{S_1(\alpha), \dots, S_m(\alpha)\}$ is a basis of $F$ over $k$.
> Each basis element is of the form $S(\alpha)$ with $S = H g_i \subseteq G$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Normal Basis Theorem|Normal Basis Theorem]]
- [[05 - Galois Theory/Concepts/Fixed Fields|Fixed Fields]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem of Galois Theory]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]

## Notes

- **Routing:** Galois Theory is primary because constructing subfield bases from group coset sums and normal bases is a direct application of the Galois correspondence and the Normal Basis Theorem.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 16, printed p. 323, PDF p. 338.
