---
title: "Exercise F90: Finite Generation of Subextensions of Function Fields"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - function-fields
  - transcendence-basis
  - finite-generation
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VIII, printed p. 374, PDF p. 389, Exercise 4"
created: 2026-09-15
---

# Exercise F90: Finite Generation of Subextensions of Function Fields

## Problem Statement

> [!question]
> Let $K/k$ be a finitely generated extension, and let $K \supset E \supset k$ be a subextension. Show that $E/k$ is finitely generated.

## Hints

> [!hint]- Hint 1: Transcendence degree is finite
> Since $K/k$ is finitely generated, its transcendence degree $r = \operatorname{tr.deg}(K/k)$ is finite. By additivity of transcendence degree, what can you say about $m = \operatorname{tr.deg}(E/k)$?

> [!hint]- Hint 2: Complete a transcendence base of $E/k$
> Choose a transcendence base $\{t_1, \ldots, t_m\}$ of $E/k$. By the Steinitz exchange lemma, this can be completed to a transcendence base $\{t_1, \ldots, t_m, s_1, \ldots, s_{r-m}\}$ of $K/k$. What is the degree of $K$ over $k(t, s)$?

> [!hint]- Hint 3: Finiteness via linear disjointness
> Consider the purely transcendental field $F = k(t)$ and $L = F(s) = k(t, s)$. Show that $[K : L] < \infty$. Then show that $E$ and $L$ are linearly disjoint over $F$, and bound $[E : F]$ by $[K : L]$.

## Solution

> [!success]-
> ### Step 1: Finiteness of transcendence degree
> 
> Let $K = k(x_1, \ldots, x_n)$ be a finitely generated extension of $k$.
> A maximal algebraically independent subset of the finite generating set $\{x_1, \ldots, x_n\}$ is a transcendence basis, so the transcendence degree
> $$
> r = \operatorname{tr.deg}(K/k) \le n < \infty.
> $$
> 
> For the intermediate field $k \subset E \subset K$, Exercise F89 gives:
> $$
> \operatorname{tr.deg}(K/k) = \operatorname{tr.deg}(K/E) + \operatorname{tr.deg}(E/k).
> $$
> Thus $m = \operatorname{tr.deg}(E/k) \le r < \infty$.
> 
> ### Step 2: Choosing and completing a transcendence base
> 
> Let $T = \{t_1, \ldots, t_m\} \subset E$ be a transcendence base of $E/k$.
> By definition:
> 1. $T$ is algebraically independent over $k$;
> 2. $E$ is an **algebraic extension** of the purely transcendental subfield $F = k(t_1, \ldots, t_m)$.
> 
> By the completion theorem for transcendence bases, we can extend $T$ to a transcendence base of $K/k$ by adding elements $S = \{s_1, \ldots, s_d\} \subset K$, where $d = r - m$:
> $$
> B = T \cup S = \{t_1, \ldots, t_m, s_1, \ldots, s_d\}.
> $$
> Let $L = k(B) = k(t_1, \ldots, t_m, s_1, \ldots, s_d) = F(s_1, \ldots, s_d)$.
> 
> ### Step 3: Finiteness of $[K : L]$
> 
> By definition of a transcendence base, $K$ is algebraic over $L$.
> Furthermore, $K$ is finitely generated over $k$, so $K = L(x_1, \ldots, x_n)$.
> Since each $x_i$ is algebraic over $L$, $K$ is a finite algebraic extension of $L$:
> $$
> [K : L] < \infty.
> $$
> 
> ### Step 4: Bounding $[E : F]$
> 
> We examine the subfield $E \cdot L \subset K$:
> - $E \cdot L = E(s_1, \ldots, s_d)$ is the compositum of $E$ and $L = F(s_1, \ldots, s_d)$ inside $K$.
> - Since $L \subset E \cdot L \subset K$, we have the inequality of field extension degrees:
>   $$
>   [E \cdot L : L] \le [K : L] < \infty.
>   $$
> 
> Now observe the relation between $E$ and $L$ over $F = k(t)$:
> - $E$ is an algebraic extension of $F$.
> - $L = F(s_1, \ldots, s_d)$ is a purely transcendental extension of $F$, where $s_1, \ldots, s_d$ are algebraically independent over $F$.
> - Moreover, because $T \cup S$ is algebraically independent over $k$ and $E$ is algebraic over $F = k(T)$, the elements $s_1, \ldots, s_d$ remain algebraically independent over $E$!
> - Therefore, $E$ and $L$ are **linearly disjoint** over $F$.
> 
> Linear disjointness implies that the natural map
> $$
> E \otimes_F L \to E \cdot L
> $$
> is injective. Its source is an algebraic domain over $L$, hence a field: every nonzero element is algebraic over $L$ and its inverse is an $L$-polynomial in that element. The image is therefore the compositum $E\cdot L$, so the map is an isomorphism. In particular, any $F$-basis of $E$ remains linearly independent over $L$.
> Taking vector space dimensions:
> $$
> [E : F] = [E \cdot L : L].
> $$
> 
> Combining this with the inequality $[E \cdot L : L] \le [K : L]$, we obtain:
> $$
> [E : F] \le [K : L] < \infty.
> $$
> 
> ### Step 5: Conclusion
> 
> Since $[E : F] < \infty$, $E$ is a finite extension of $F = k(t_1, \ldots, t_m)$.
> A finite extension of a field is always finitely generated as a field extension:
> there exist $\alpha_1, \ldots, \alpha_p \in E$ such that
> $$
> E = F(\alpha_1, \ldots, \alpha_p) = k(t_1, \ldots, t_m, \alpha_1, \ldots, \alpha_p).
> $$
> Hence $E$ is generated over $k$ by the finite set of elements $\{t_1, \ldots, t_m, \alpha_1, \ldots, \alpha_p\}$.
> Therefore, $E/k$ is finitely generated.

## Related Concepts

- [[03 - Field Theory/Concepts/Transcendence Bases and Transcendence Degree|Transcendence Bases and Transcendence Degree]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]

## Notes

- **Source and proof status**: [S2, Ch. VIII, Exercise 4, printed p. 374, PDF p. 389]. The solution is an independent derivation from transcendence bases, finite algebraic degrees, and linear disjointness of an algebraic extension from a pure transcendental extension.
- **Field generation**: Here “finitely generated” means generated as a field extension. The corresponding assertion for arbitrary subrings of finitely generated algebras is false.
