---
title: "Exercise R285: Prime and Primary Ideal Correspondence under Localization"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - prime-ideals
  - primary-ideals
  - localization
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, Exercise 6, printed p. 443, PDF p. 458"
created: 2026-09-22
---

# Exercise R285: Prime and Primary Ideal Correspondence under Localization

## Problem Statement

> [!question] Lang, Chapter X, Exercise 6
> If $\mathfrak a$ is an ideal of $A$, let $\mathfrak a_S=S^{-1}\mathfrak a$. If $\varphi_S:A\to S^{-1}A$ is the canonical map, abbreviate $\varphi_S^{-1}(\mathfrak a_S)$ by $\mathfrak a_S\cap A$, even though $\varphi_S$ is not injective. Show that there is a bijection between the prime ideals of $A$ which do not intersect $S$ and the prime ideals of $S^{-1}A$, given by
>
> $$
> \mathfrak p\longmapsto\mathfrak p_S
> \qquad\text{and}\qquad
> \mathfrak p_S\longmapsto\mathfrak p_S\cap A=\mathfrak p.
> $$
>
> Prove a similar statement for primary ideals instead of prime ideals.

## Hints

> [!hint]- Hint 1
> Every ideal $J$ of $S^{-1}A$ is the extension of its contraction, because $a/s\in J$ if and only if $a/1\in J$.

> [!hint]- Hint 2
> For an ideal $I$ of $A$, extension followed by contraction consists of the elements $a$ for which $sa\in I$ for some $s\in S$. Show that prime and primary ideals disjoint from $S$ already satisfy this condition only for $a\in I$.

## Solution

> [!success]- Independently derived solution
> Put $B=S^{-1}A$, and write $J^c=\varphi_S^{-1}(J)$ for contraction. For every ideal $I\subseteq A$, the fraction membership criterion gives
>
> $$
> (S^{-1}I)^c
> =\{a\in A:sa\in I\text{ for some }s\in S\}.
> $$
>
> For every ideal $J\subseteq B$, we have $S^{-1}(J^c)=J$: the element $s/1$ is a unit in $B$, so $a/s$ belongs to $J$ exactly when $a/1$ belongs to $J$. These assertions do not assume that $\varphi_S$ is injective.
>
> **Prime ideals.** Let $\mathfrak p$ be prime and disjoint from $S$. Its extension is proper, since $1\in S^{-1}\mathfrak p$ would imply $s\in\mathfrak p$ for some $s\in S$. If
>
> $$
> (a/s)(b/t)\in S^{-1}\mathfrak p,
> $$
>
> then $uab\in\mathfrak p$ for some $u\in S$. Because $u\notin\mathfrak p$ and $\mathfrak p$ is prime, $a\in\mathfrak p$ or $b\in\mathfrak p$. Thus $a/s$ or $b/t$ lies in $S^{-1}\mathfrak p$, proving primality. Also $sa\in\mathfrak p$, with $s\in S$, implies $a\in\mathfrak p$, so $(S^{-1}\mathfrak p)^c=\mathfrak p$.
>
> Conversely, if $P$ is a prime ideal of $B$, its inverse image $P^c$ is prime: $ab\in P^c$ means $(a/1)(b/1)\in P$, forcing one factor into $P$. It is proper, and it avoids $S$ since the images of elements of $S$ are units. The two extension-contraction identities therefore give the claimed bijection.
>
> **Primary ideals.** The corresponding assertion is a bijection
>
> $$
> \{\text{primary }\mathfrak q\subset A:\mathfrak q\cap S=\varnothing\}
> \longleftrightarrow
> \{\text{primary ideals }Q\subset B\}.
> $$
>
> If $\mathfrak q$ is primary and disjoint from $S$, its extension is primary by [[02 - Ring Theory/Exercises/Exercise R284 - Localization Preserves Primary Ideals Away from Their Radical|Exercise R284]]. Moreover, $sa\in\mathfrak q$ with $s\in S$ and $a\notin\mathfrak q$ would imply $s^n\in\mathfrak q$ for some $n\ge1$, a contradiction. Thus $(S^{-1}\mathfrak q)^c=\mathfrak q$.
>
> Conversely, let $Q\subset B$ be primary. Its contraction $\mathfrak q=Q^c$ is proper and disjoint from $S$. If $ab\in\mathfrak q$ and $a\notin\mathfrak q$, then
>
> $$
> (a/1)(b/1)\in Q,\qquad a/1\notin Q.
> $$
>
> Hence $(b/1)^n\in Q$ for some $n\ge1$, so $b^n\in\mathfrak q$. This proves that $\mathfrak q$ is primary. Finally $S^{-1}\mathfrak q=Q$ by the identity for arbitrary ideals of $B$, completing the bijection.
>
> The prime belonging to a primary ideal corresponds under the same map, since radicals commute with inverse images and, in this situation, with localization.

## Related Concepts

- [[02 - Ring Theory/Concepts/Primary Ideals and Primary Decomposition|Primary Ideals and Primary Decomposition]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Exercises/Exercise R284 - Localization Preserves Primary Ideals Away from Their Radical|Exercise R284]]

## Notes

- **Source status:** The statement, including the warning about the noninjective canonical map, was visually checked at [S2, Ch. X, Ex. 6, printed p. 443, PDF p. 458]. The proof is independent.
- **Notation:** Every expression $J\cap A$ in this exercise denotes an inverse image, not a literal set-theoretic intersection after embedding $A$ into $B$.
- **Scope:** The primary correspondence requires disjointness from $S$; it is equivalent to disjointness of the radical by Exercise 5. Neither correspondence requires $A$ to be Noetherian.
