---
title: "Exercise Gal121: Finite Number of Abelian Extensions via Kummer Theory"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - abelian-extensions
  - kummer-theory
  - finite-generation
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 37, printed p. 327, PDF p. 342"
created: 2026-09-12
---

# Exercise Gal121: Finite Number of Abelian Extensions via Kummer Theory

## Problem Statement

> [!question]
> Let $k$ be a field of characteristic 0. Assume that for each finite extension $E$ of $k$, the index $(E^* : E^{*n})$ is finite for every positive integer $n$. Show that for each positive integer $n$, there exists only a finite number of abelian extensions of $k$ of degree $n$.

## Hints

> [!hint]- Weak Hint
> Reduce the problem from general abelian extensions of degree $n$ to abelian extensions containing roots of unity, where Kummer theory applies.

> [!hint]- Moderate Hint
> Let $E = k(\boldsymbol{\mu}_n)$ be the cyclotomic extension obtained by adjoining all $n$-th roots of unity to $k$. Show that $E/k$ is a finite extension. If $K/k$ is an abelian extension of degree $n$, what can be said about $K E / E$?

> [!hint]- Strong Hint
> Over $E$, Kummer theory establishes a bijection between abelian extensions of exponent dividing $n$ and subgroups of $E^* / E^{*n}$. Since $(E^* : E^{*n})$ is finite, there are only finitely many such subgroups. Form the compositum $M$ of all such extensions of $E$, and use the fact that $M/k$ is finite to conclude that $M$ contains only finitely many subfields.

## Solution

> [!success]- Complete Derivation
> Let $k$ be a field of characteristic 0, and fix a positive integer $n \ge 1$.
>
> ### 1. Adjunction of Roots of Unity
> Let $\zeta_n$ be a primitive $n$-th root of unity in an algebraic closure $\bar{k}$, and let
> $$
> E = k(\zeta_n).
> $$
> Since $k$ has characteristic 0, the cyclotomic polynomial $\Phi_n(X)$ has degree $\varphi(n)$, so $E/k$ is a finite abelian Galois extension with
> $$
> [E : k] \le \varphi(n) < \infty.
> $$
> By the problem's hypothesis, for every positive integer $m$, the index $(E^* : E^{*m})$ is finite; in particular,
> $$
> (E^* : E^{*n}) < \infty.
> $$
>
> ### 2. Lifting Abelian Extensions to $E$
> Let $K/k$ be an abelian extension of degree $[K : k] = n$.
> Consider the compositum $L = K E = K(\zeta_n)$ over $E$.
>
> - **Galois and Abelian Property:** Since $K/k$ and $E/k$ are both abelian Galois extensions, their compositum $L = KE$ is an abelian Galois extension of $k$. Therefore, $L/E$ is also an abelian Galois extension.
> - **Degree Bound:** The Galois group $\operatorname{Gal}(L/E)$ embeds into $\operatorname{Gal}(K / K \cap E)$ via restriction. Thus:
>   $$
>   [L : E] = [K : K \cap E] \le [K : k] = n.
>   $$
> - **Exponent Bound:** The Galois group $\operatorname{Gal}(K/k)$ is an abelian group of order $n$, so the order of every element in $\operatorname{Gal}(K/k)$ divides $n$. Consequently, the exponent of $\operatorname{Gal}(L/E)$ divides $n$.
>
> ### 3. Application of Kummer Theory
> The field $E$ contains all $n$-th roots of unity $\boldsymbol{\mu}_n$ because $\zeta_n \in E$.
>
> By Kummer theory, any abelian extension of $E$ of exponent dividing $n$ is of the form $E(\Delta^{1/n})$ for some subgroup $\Delta \le E^*$ containing $E^{*n}$.
> The correspondence
> $$
> \Delta / E^{*n} \longleftrightarrow L = E(\Delta^{1/n})
> $$
> is an inclusion-preserving bijection between:
> - subgroups of the quotient group $E^* / E^{*n}$;
> - abelian extensions of $E$ of exponent dividing $n$.
>
> Moreover, $[L : E] = (\Delta : E^{*n})$. Since $[L : E] \le n$, the subgroup $\Delta / E^{*n}$ must be a finite subgroup of $E^* / E^{*n}$ of order $\le n$.
>
> ### 4. Finiteness of Subgroups and the Compositum $M$
> By hypothesis, the group
> $$
> A = E^* / E^{*n}
> $$
> is a **finite** abelian group (of exponent $n$).
> A finite group contains only finitely many subgroups. Therefore, there are only finitely many subgroups $\Delta / E^{*n} \le A$.
>
> Consequently, there exist only **finitely many** fields $L_1, L_2, \dots, L_r$ that can occur as abelian extensions of $E$ of exponent dividing $n$.
>
> Let $M$ be the compositum of all these finitely many fields:
> $$
> M = L_1 L_2 \cdots L_r.
> $$
> Each $L_i/E$ is a finite extension, so the compositum $M/E$ is a finite extension.
> Since $[E : k] \le \varphi(n)$, by the tower property:
> $$
> [M : k] = [M : E] [E : k] < \infty.
> $$
> That is, $M$ is a **finite** extension of $k$.
>
> ### 5. Finiteness of Subfields
> For every abelian extension $K/k$ of degree $n$, the compositum $L = KE$ is an abelian extension of $E$ of exponent dividing $n$, so $L$ must be one of the fields $L_i$.
> In particular,
> $$
> K \subseteq L \subseteq M.
> $$
> Thus every abelian extension $K/k$ of degree $n$ is an intermediate subfield of the finite separable extension $M/k$:
> $$
> k \subseteq K \subseteq M.
> $$
> Since $k$ has characteristic 0, $M/k$ is separable. By the Primitive Element Theorem and the fundamental theorem of Galois theory, any finite separable field extension has only finitely many intermediate subfields.
>
> Therefore, the number of such intermediate fields $K$ is finite.
> This proves that there exist only finitely many abelian extensions of $k$ of degree $n$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer Extensions]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem of Galois Theory]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]

## Notes

- This finiteness property is satisfied by algebraic number fields (finite extensions of $\mathbf{Q}$) and local fields ($p$-adic fields $\mathbf{Q}_p$):
  - For a number field $k$, the Dirichlet Unit Theorem and the finiteness of the class number imply that $(E^* : E^{*n}) < \infty$ when restricted to extensions unramified outside a finite set of primes (Hermite-Minkowski theorem).
  - For a $p$-adic field, $(E^* : E^{*n}) < \infty$ follows because the unit group $\mathcal{O}_E^*$ is a compact $p$-adic Lie group.
