---
title: "Exercise Gal109: Cyclic Absolute Galois Group and Topological Generation"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - infinite-galois-theory
  - profinite-groups
  - quasi-finite-fields
  - fixed-fields
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 25, printed p. 325, PDF p. 340"
created: 2026-09-12
---

# Exercise Gal109: Cyclic Absolute Galois Group and Topological Generation

## Problem Statement

> [!question] Exercise VI.25
> Let $k$ be a field such that every finite extension is cyclic. Show that there exists an automorphism $\sigma$ of $k^a$ over $k$ such that $k$ is the fixed field of $\sigma$.

## Hints

> [!hint]- Hint 1: Uniqueness of Finite Extensions
> If $E_1, E_2$ are two extensions of $k$ of degree $n$, their compositum $E_1 E_2$ is a finite extension of $k$, hence cyclic. How many subfields of degree $n$ can a cyclic extension contain?

> [!hint]- Hint 2: Inverse Limit of Generators
> For each finite extension $k_n/k$, the Galois group $\operatorname{Gal}(k_n/k)$ is cyclic. Use the projective limit property (or compactness of profinite groups) to find an element $\sigma \in \operatorname{Gal}(k^a/k)$ whose restriction to each $k_n$ is a generator.

> [!hint]- Hint 3: Fixed Field Calculation
> Any element $x \in k^a$ fixed by $\sigma$ lies in some finite extension $k_n$. What is the fixed field of $\sigma|_{k_n}$ in $k_n$?

## Solution

> [!success]- Solution
>
> Let $k$ be a field with the property that every finite extension of $k$ in an algebraic closure $k^a$ is cyclic.
>
> ### 1. Uniqueness of Finite Extensions of a Given Degree
>
> Let $n \ge 1$ be an integer. Suppose $E_1, E_2 \subset k^a$ are two finite extensions of $k$ of degree $n$:
> $$
> [E_1 : k] = [E_2 : k] = n.
> $$
> The compositum $L = E_1 E_2$ is a finite extension of $k$.
> By hypothesis, $L/k$ is cyclic, so its Galois group $G = \operatorname{Gal}(L/k)$ is a finite cyclic group.
>
> In a finite cyclic group, for every divisor $d$ of $|G|$, there is a unique subgroup of index $d$.
> By the Fundamental Theorem of Galois Theory, $L$ contains a unique intermediate field of degree $n$ over $k$.
> Since both $E_1$ and $E_2$ are subfields of $L$ of degree $n$ over $k$, we must have
> $$
> E_1 = E_2.
> $$
>
> Therefore, for each integer $n \ge 1$, $k$ has at most one extension of degree $n$ inside $k^a$.
> If it exists, let this unique extension be denoted by $k_n$.
> Since $k_n/k$ is cyclic of degree $n$,
> $$
> \operatorname{Gal}(k_n/k) \cong \mathbb Z/n\mathbb Z.
> $$
>
> ---
>
> ### 2. Construction of the Automorphism $\sigma \in \operatorname{Gal}(k^a/k)$
>
> Let $\mathcal I = \{n \in \mathbb Z^+ \mid [k_n : k] = n\}$ be the set of degrees of finite extensions of $k$.
> Under divisibility, $\mathcal I$ is a directed partially ordered set (if $m, n \in \mathcal I$, their compositum $k_m k_n$ has degree $\operatorname{lcm}(m, n) \in \mathcal I$).
>
> The algebraic closure $k^a$ is the union of all finite extensions $k_n$ for $n \in \mathcal I$:
> $$
> k^a = \bigcup_{n \in \mathcal I} k_n.
> $$
> By infinite Galois theory, the absolute Galois group $G_{k^a/k} = \operatorname{Gal}(k^a/k)$ is the projective limit of the finite cyclic Galois groups:
> $$
> \operatorname{Gal}(k^a/k) = \varprojlim_{n \in \mathcal I} \operatorname{Gal}(k_n/k).
> $$
> For each $n \in \mathcal I$, let $S_n \subset \operatorname{Gal}(k_n/k)$ be the non-empty set of generators of the cyclic group $\operatorname{Gal}(k_n/k)$.
> For $m, n \in \mathcal I$ with $n \mid m$, the natural restriction homomorphism
> $$
> \pi_{m, n}: \operatorname{Gal}(k_m/k) \longrightarrow \operatorname{Gal}(k_n/k)
> $$
> is surjective. Since any surjective homomorphism between finite cyclic groups maps generators to generators, $\pi_{m, n}(S_m) \subseteq S_n$.
>
> Giving each finite set $S_n$ the discrete topology, each $S_n$ is a non-empty compact Hausdorff space.
> By the projective limit theorem for compact non-empty Hausdorff spaces (or the universal property of inverse limits), the projective limit
> $$
> S = \varprojlim_{n \in \mathcal I} S_n
> $$
> is non-empty.
>
> Let $\sigma = (\sigma_n)_{n \in \mathcal I} \in S \subseteq \operatorname{Gal}(k^a/k)$.
> By construction, for every $n \in \mathcal I$, the restriction of $\sigma$ to $k_n$ is a generator of $\operatorname{Gal}(k_n/k)$:
> $$
> \langle \sigma|_{k_n} \rangle = \operatorname{Gal}(k_n/k).
> $$
>
> ---
>
> ### 3. Fixed Field of $\sigma$
>
> Let $(k^a)^{\langle \sigma \rangle} = \{x \in k^a \mid \sigma(x) = x\}$.
> Clearly $k \subseteq (k^a)^{\langle \sigma \rangle}$ because $\sigma$ fixes $k$ pointwise.
>
> Conversely, let $x \in (k^a)^{\langle \sigma \rangle}$.
> Since $x \in k^a$, $x$ is algebraic over $k$, so the extension $k(x)/k$ is finite.
> By Section 1, $k(x)$ is contained in the unique extension $k_n$ of degree $n = [k(x) : k] \in \mathcal I$.
>
> Because $x$ is fixed by $\sigma$, $x$ is fixed by the restriction $\sigma|_{k_n}$:
> $$
> \sigma|_{k_n}(x) = x.
> $$
> But as established in Section 2, $\sigma|_{k_n}$ generates the entire Galois group $\operatorname{Gal}(k_n/k)$.
> Therefore, $x$ is fixed by every element of $\operatorname{Gal}(k_n/k)$:
> $$
> \tau(x) = x \quad \text{for all } \tau \in \operatorname{Gal}(k_n/k).
> $$
> By the Fundamental Theorem of Galois Theory for the finite Galois extension $k_n/k$, the fixed field of $\operatorname{Gal}(k_n/k)$ in $k_n$ is precisely the base field $k$:
> $$
> k_n^{\operatorname{Gal}(k_n/k)} = k.
> $$
> Thus $x \in k$.
>
> This proves that $(k^a)^{\langle \sigma \rangle} \subseteq k$.
> Consequently,
> $$
> (k^a)^{\langle \sigma \rangle} = k.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclic Extensions|Cyclic Extensions]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Fixed Fields|Fixed Fields]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem of Galois Theory]]
- [[05 - Galois Theory/Concepts/Finite Fields Galois|Galois Theory of Finite Fields]]

## Notes

- **Routing:** Galois Theory is primary because the result characterizes fields whose absolute Galois group is topologically generated by a single automorphism (procyclic Galois groups).
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 25, printed p. 325, PDF p. 340.
