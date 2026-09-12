---
title: "Exercise Gal107: Realizing Finite Abelian Groups as Galois Groups over Number Fields"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - inverse-galois-problem
  - abelian-extensions
  - cyclotomic-extensions
  - dirichlet-theorem
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 23, printed pp. 324–325, PDF pp. 339–340"
created: 2026-09-12
---

# Exercise Gal107: Realizing Finite Abelian Groups as Galois Groups over Number Fields

## Problem Statement

> [!question] Exercise VI.23
> (a) Let $G$ be a finite abelian group. Prove that there exists an abelian extension of $\mathbb Q$ whose Galois group is $G$.
>
> (b) Let $k$ be a finite extension of $\mathbb Q$, and let $G$ be a finite abelian group. Prove that there exist infinitely many abelian extensions of $k$ whose Galois group is $G$.

## Hints

> [!hint]- Hint 1: Decomposition of Finite Abelian Groups
> Decompose $G \cong \prod_{i=1}^m C_{n_i}$ into a product of finite cyclic groups. By the Galois correspondence for composita of linearly disjoint extensions, it suffices to realize each cyclic component $C_{n_i}$ with linearly disjoint splitting fields.

> [!hint]- Hint 2: Cyclotomic Subfields
> For a prime $p \equiv 1 \pmod n$, the cyclotomic extension $\mathbb Q(\zeta_p)/\mathbb Q$ is cyclic of degree $p - 1$. Since $n \mid (p - 1)$, there is a unique subfield $K \subseteq \mathbb Q(\zeta_p)$ with $\operatorname{Gal}(K/\mathbb Q) \cong C_n$.

> [!hint]- Hint 3: Part (b) via Ramification and Linear Disjointness
> The only prime ramifying in $\mathbb Q(\zeta_p)$ is $p$. Choose primes $p$ that do not divide the discriminant of $k$. Show that $K$ and $k$ are linearly disjoint over $\mathbb Q$.

## Solution

> [!success]- Solution
>
> ### (a) Realizing $G$ over $\mathbb Q$
>
> By the fundamental theorem of finite abelian groups, every finite abelian group $G$ can be decomposed as a direct product of finite cyclic groups:
> $$
> G \cong C_{n_1} \times C_{n_2} \times \dots \times C_{n_m},
> $$
> where each $n_i \ge 2$ is an integer.
>
> 1. **Cyclic Extensions via Cyclotomic Fields:**
>    By [[05 - Galois Theory/Exercises/Exercise Gal105 - Cyclotomic Prime Divisors and Infinitude of Primes Congruent to One Modulo n|Exercise Gal105]] (Dirichlet's theorem for primes $\equiv 1 \pmod n$), there are infinitely many primes congruent to $1$ modulo any given integer.
>    We can therefore choose $m$ **distinct** prime numbers $p_1, p_2, \dots, p_m$ such that
>    $$
>    p_i \equiv 1 \pmod{n_i} \quad \text{for each } i \in \{1, \dots, m\}.
>    $$
>
> 2. **Subfield Construction:**
>    For each $i$, the cyclotomic field $\mathbb Q(\zeta_{p_i})$ is a cyclic Galois extension of $\mathbb Q$ with Galois group
>    $$
>    \operatorname{Gal}(\mathbb Q(\zeta_{p_i})/\mathbb Q) \cong (\mathbb Z/p_i\mathbb Z)^\times \cong C_{p_i - 1}.
>    $$
>    Since $n_i$ divides $p_i - 1$, the cyclic group $C_{p_i - 1}$ has a unique subgroup $H_i$ of index $n_i$.
>    By the Fundamental Theorem of Galois Theory, the fixed field
>    $$
>    K_i = \mathbb Q(\zeta_{p_i})^{H_i}
>    $$
>    is a cyclic Galois extension of $\mathbb Q$ with
>    $$
>    \operatorname{Gal}(K_i/\mathbb Q) \cong C_{p_i - 1} / H_i \cong C_{n_i}.
>    $$
>
> 3. **Linear Disjointness:**
>    The only prime ramifying in $\mathbb Q(\zeta_{p_i})$ is $p_i$.
>    Since $K_i \subseteq \mathbb Q(\zeta_{p_i})$, the only prime that can ramify in $K_i$ is $p_i$.
>    Because $p_1, \dots, p_m$ are distinct primes, the discriminant of $K_i$ and the discriminant of the compositum $\prod_{j \neq i} K_j$ are coprime.
>    By the discriminant-disjointness theorem, the fields $K_1, \dots, K_m$ are mutually linearly disjoint over $\mathbb Q$.
>
> 4. **Compositum:**
>    Let $K = K_1 K_2 \dots K_m$. Then $K/\mathbb Q$ is an abelian Galois extension, and
>    $$
>    \operatorname{Gal}(K/\mathbb Q) \cong \prod_{i=1}^m \operatorname{Gal}(K_i/\mathbb Q) \cong C_{n_1} \times \dots \times C_{n_m} \cong G.
>    $$
>
> ---
>
> ### (b) Infinitely Many Abelian Extensions over a Number Field $k$
>
> Let $k$ be a finite extension of $\mathbb Q$ with discriminant $\Delta_k \in \mathbb Z$.
> Write $G \cong C_{n_1} \times \dots \times C_{n_m}$.
>
> 1. **Choosing Primes Disjoint from $k$:**
>    The discriminant $\Delta_k$ has only finitely many prime factors.
>    By Exercise Gal105, for each $n_i$ there are infinitely many primes $p \equiv 1 \pmod{n_i}$.
>    We can choose an infinite sequence of disjoint $m$-tuples of distinct primes
>    $$
>    \mathcal S_r = \{p_{1, r}, p_{2, r}, \dots, p_{m, r}\}, \qquad r = 1, 2, 3, \dots
>    $$
>    such that:
>    - $p_{i, r} \equiv 1 \pmod{n_i}$;
>    - $p_{i, r} \nmid \Delta_k$;
>    - All primes across all tuples $\mathcal S_r$ are mutually distinct.
>
> 2. **Linear Disjointness over $k$:**
>    For each tuple $\mathcal S_r$, construct the cyclic extensions $K_{i, r}/\mathbb Q$ of degree $n_i$ inside $\mathbb Q(\zeta_{p_{i, r}})$ as in part (a), and form their compositum $K_r = K_{1, r} \dots K_{m, r}$.
>    The only primes that ramify in $K_r/\mathbb Q$ are $p_{1, r}, \dots, p_{m, r}$.
>    Because none of these primes divides $\Delta_k$, the field extension $k/\mathbb Q$ is completely unramified at every prime $p_{i, r}$.
>    Therefore, the discriminants of $K_r$ and $k$ are coprime:
>    $$
>    \gcd(\Delta_{K_r}, \Delta_k) = 1.
>    $$
>    This implies that $K_r$ and $k$ are linearly disjoint over $\mathbb Q$:
>    $$
>    K_r \cap k = \mathbb Q.
>    $$
>
> 3. **Galois Group over $k$:**
>    By standard Galois theory of linearly disjoint extensions:
>    $$
>    \operatorname{Gal}(k K_r / k) \cong \operatorname{Gal}(K_r / (K_r \cap k)) = \operatorname{Gal}(K_r / \mathbb Q) \cong G.
>    $$
>    Thus $L_r = k K_r$ is an abelian extension of $k$ with Galois group $G$.
>
> 4. **Infinitude:**
>    In the extension $L_r/k$, the primes of $k$ lying above $p_{1, r}, \dots, p_{m, r}$ are ramified.
>    Since the sets of primes $\{p_{1, r}, \dots, p_{m, r}\}$ are pairwise disjoint for distinct indices $r$, the fields $L_r$ have distinct ramification loci in $k$, and hence are pairwise distinct fields.
>    Therefore, there exist infinitely many abelian extensions of $k$ with Galois group $G$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[05 - Galois Theory/Exercises/Exercise Gal105 - Cyclotomic Prime Divisors and Infinitude of Primes Congruent to One Modulo n|Exercise Gal105]]
- [[05 - Galois Theory/Concepts/Composita and Restriction Maps|Composita and Restriction Maps]]

## Notes

- **Routing:** Galois Theory is primary because solving the Inverse Galois Problem for abelian groups over number fields uses cyclotomic subfields and ramification-theoretic linear disjointness.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 23, printed pp. 324–325, PDF pp. 339–340.
