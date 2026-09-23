---
title: "Exercise LA384: Primary Decompositions and Quotient Modules"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, Exercise 1, printed p. 443, PDF p. 458"
created: 2026-09-22
---

# Exercise LA384: Primary Decompositions and Quotient Modules

## Problem Statement

> [!question] Lang, Chapter X, Exercise 1
> Let $A$ be a commutative ring. Let $M$ be a module, and $N$ a submodule. Let $N=Q_1\cap\cdots\cap Q_r$ be a primary decomposition of $N$. Let $\overline Q_i=Q_i/N$. Show that $0=\overline Q_1\cap\cdots\cap\overline Q_r$ is a primary decomposition of $0$ in $M/N$. State and prove the converse.

## Hints

> [!hint]- Hint 1
> Compare $(M/N)/(Q/N)$ with $M/Q$, including multiplication by every scalar.

> [!hint]- Hint 2
> Use inverse images under $M\to M/N$ for the converse. These preserve intersections; check the primary condition on the quotient.

## Solution

> [!success]- Independent derivation
> Lang calls $Q\subsetneq M$ primary if multiplication by every $a\in A$ on $M/Q$ is either injective or nilpotent. Its belonging prime is $\sqrt{\operatorname{ann}_A(M/Q)}$ [S2, Ch. X, §3, printed p. 421, PDF p. 436].
>
> Write $\pi:M\to M/N$. For each $Q\supseteq N$, the map
> $$
> (M/N)/(Q/N)\longrightarrow M/Q,\qquad (m+N)+(Q/N)\longmapsto m+Q
> $$
> is a well-defined $A$-linear isomorphism, conjugating multiplication by every scalar. Thus $Q$ is primary exactly when $Q/N$ is primary, and their belonging primes agree. Properness is preserved because $Q/N=M/N$ exactly when $Q=M$.
>
> A class $m+N$ lies in every $Q_i/N$ exactly when $m$ lies in every $Q_i$, so
> $$
> \bigcap_i(Q_i/N)=\left(\bigcap_i Q_i\right)/N=N/N=0.
> $$
> This proves the forward assertion.
>
> **Converse.** Given a primary decomposition $0=\bigcap_i\overline Q_i$ in $M/N$, set $Q_i=\pi^{-1}(\overline Q_i)$. The quotient isomorphism proves that each $Q_i$ is primary, and
> $$
> \bigcap_i Q_i=\pi^{-1}\left(\bigcap_i\overline Q_i\right)=\pi^{-1}(0)=N.
> $$
> The two constructions are inverse. They also preserve reduced decompositions: belonging primes are unchanged, and deleting any subfamily preserves the intersection upstairs if and only if it does downstairs.

## Related Concepts

- [[02 - Ring Theory/Concepts/Primary Ideals and Primary Decomposition|Primary Ideals and Primary Decomposition]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Submodules|Submodules]]

## Notes

- Statement checked against the rendered original page [S2, Ch. X, Exercise 1, printed p. 443, PDF p. 458].
- This correspondence is also explained in the source discussion [S2, Ch. X, §3, printed p. 422, PDF p. 437]. The detailed derivation above is independently supplied.
- No Noetherian or finite-generation hypothesis is needed: a decomposition is assumed given. Its existence for arbitrary submodules is not asserted.
- Routing uses quotient modules and scalar endomorphisms, with a cross-topic link to primary ideals.

