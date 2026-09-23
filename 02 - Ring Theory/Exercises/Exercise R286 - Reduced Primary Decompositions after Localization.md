---
title: "Exercise R286: Reduced Primary Decompositions after Localization"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - primary-decomposition
  - localization
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, Exercise 7, printed p. 443, PDF p. 458"
created: 2026-09-22
---

# Exercise R286: Reduced Primary Decompositions after Localization

## Problem Statement

> [!question] Lang, Chapter X, Exercise 7
> Let $\mathfrak a=\mathfrak q_1\cap\cdots\cap\mathfrak q_r$ be a reduced primary decomposition of an ideal. Assume that $\mathfrak q_1,\ldots,\mathfrak q_i$ do not intersect $S$, but that $\mathfrak q_j$ intersects $S$ for $j>i$. Show that
>
> $$
> \mathfrak a_S=\mathfrak q_{1S}\cap\cdots\cap\mathfrak q_{iS}
> $$
>
> is a reduced primary decomposition of $\mathfrak a_S$.

## Hints

> [!hint]- Hint 1
> Localization commutes with finite intersections of ideals. For a fraction belonging to every localized ideal, multiply the finitely many membership multipliers in $S$.

> [!hint]- Hint 2
> For each surviving component $\mathfrak q_k$, choose a witness in every original component except $\mathfrak q_k$. Use the extension-contraction identity for $\mathfrak q_k$ to prove that its image still witnesses irredundancy.

## Solution

> [!success]- Independently derived solution
> Put $B=S^{-1}A$ and $\mathfrak p_j=\sqrt{\mathfrak q_j}$. Reducedness means both that these primes are pairwise distinct and that no component can be omitted.
>
> **The intersection identity.** For finitely many ideals $I_1,\ldots,I_r$,
>
> $$
> S^{-1}\left(\bigcap_{j=1}^r I_j\right)
> =\bigcap_{j=1}^r S^{-1}I_j.
> $$
>
> The inclusion from left to right follows from the ideal inclusions. Conversely, if $a/s$ lies in every $S^{-1}I_j$, choose $u_j\in S$ with $u_ja\in I_j$. Then $u=\prod_j u_j$ belongs to $S$ and $ua\in I_j$ for all $j$, which proves membership in the left side.
>
> For $j>i$, an element of $S\cap\mathfrak q_j$ becomes a unit in $\mathfrak q_{jS}$, so $\mathfrak q_{jS}=B$. Therefore the intersection identity becomes precisely
>
> $$
> \mathfrak a_S=\bigcap_{j=1}^i\mathfrak q_{jS}.
> $$
>
> For $j\le i$, [[02 - Ring Theory/Exercises/Exercise R284 - Localization Preserves Primary Ideals Away from Their Radical|Exercise R284]] proves that $\mathfrak q_{jS}$ is proper and $\mathfrak p_{jS}$-primary.
>
> **The surviving primes are distinct.** If $\mathfrak p_{jS}=\mathfrak p_{kS}$ for $j,k\le i$, contract to $A$ and apply [[02 - Ring Theory/Exercises/Exercise R285 - Prime and Primary Ideal Correspondence under Localization|Exercise R285]]. This gives $\mathfrak p_j=\mathfrak p_k$, hence $j=k$.
>
> **No surviving component is redundant.** Fix $k\le i$. Reducedness of the original decomposition supplies
>
> $$
> x_k\in\bigcap_{\substack{1\le j\le r\\j\ne k}}\mathfrak q_j,
> \qquad x_k\notin\mathfrak q_k.
> $$
>
> Its image $x_k/1$ belongs to every surviving $\mathfrak q_{jS}$ with $j\ne k$. It does not belong to $\mathfrak q_{kS}$, because the contraction of that ideal is exactly $\mathfrak q_k$. Thus deleting $\mathfrak q_{kS}$ enlarges the intersection. This holds for every surviving component, proving reducedness.

## Related Concepts

- [[02 - Ring Theory/Concepts/Primary Ideals and Primary Decomposition|Primary Ideals and Primary Decomposition]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Exercises/Exercise R284 - Localization Preserves Primary Ideals Away from Their Radical|Exercise R284]]
- [[02 - Ring Theory/Exercises/Exercise R285 - Prime and Primary Ideal Correspondence under Localization|Exercise R285]]

## Notes

- **Source status:** The full statement and displayed formula were visually checked at [S2, Ch. X, Ex. 7, printed p. 443, PDF p. 458]. The proof is independent. Lang defines reducedness at [S2, Ch. X, §3, printed p. 422, PDF p. 437].
- **What must be checked:** Obtaining a finite intersection of primary ideals alone does not establish reducedness. The proof separately verifies distinct radicals and irredundancy.
- **Empty surviving family:** If $i=0$, then $\mathfrak a_S=B$. The formula remains valid when the empty intersection is understood as $B$; it is an empty decomposition of the unit ideal. If primary decompositions are reserved for proper ideals with at least one component, the conclusion is instead stated as $\mathfrak a_S=B$ in this case.
- **Scope:** No Noetherian assumption is required once the finite reduced primary decomposition is given.
