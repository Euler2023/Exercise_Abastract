---
title: "Exercise R356: The Index Criterion for Prime Decomposition"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §8, Exercise 5, printed p. 53, PDF p. 72"
created: 2026-10-20
---

# Exercise R356: The Index Criterion for Prime Decomposition

## Problem Statement

> [!question] Neukirch I.8.5
> For a number field $K$ the statement of proposition (8.3) concerning the prime decomposition in the extension $K(\theta)$ holds for all prime ideals $\mathfrak p\nmid(\mathcal O:\mathfrak o[\theta])$.

Here $\mathfrak o=\mathcal O_K$, $\theta$ is integral over $\mathfrak o$, $L=K(\theta)$, and $\mathcal O=\mathcal O_L$. The index $I=(\mathcal O:\mathfrak o[\theta])$ is the finite additive-group index; $\mathfrak p\nmid I$ means $I\notin\mathfrak p$.

## Hints

> [!hint]- Hint 1
> The quotient $\mathcal O/\mathfrak o[\theta]$ is a finite abelian group of order $I$. What multiplication annihilates it?

> [!hint]- Hint 2
> Compare $I\mathcal O$ with the conductor $\mathfrak F=\{x\in\mathcal O:x\mathcal O\subseteq\mathfrak o[\theta]\}$.

> [!hint]- Hint 3
> If $I\notin\mathfrak p$, then $\mathfrak p+I\mathfrak o=\mathfrak o$. Extend this equality to $\mathcal O$ and apply Proposition (8.3).

## Solution

> [!success]- Independent derivation
> Put $B=\mathfrak o[\theta]$. The powers $1,\theta,\ldots,\theta^{d-1}$, with $d=[L:K]$, are a $K$-basis, so $B$ is a full integer lattice in $L$ contained in the full lattice $\mathcal O$. Thus $I=[\mathcal O:B]$ is a finite positive integer.
>
> Every element of the finite additive group $\mathcal O/B$ is killed by its order $I$. Hence $I\mathcal O\subseteq B$. In fact
> $$
> I\mathcal O\subseteq\mathfrak F:
> \quad (Iy)\mathcal O\subseteq I\mathcal O\subseteq B
> \quad(y\in\mathcal O).
> $$
> If $I\notin\mathfrak p$, maximality of $\mathfrak p$ gives $\mathfrak p+I\mathfrak o=\mathfrak o$. Therefore
> $$
> \mathfrak p\mathcal O+\mathfrak F
> \supseteq\mathfrak p\mathcal O+I\mathcal O=\mathcal O.
> $$
> The conductor hypothesis of Proposition (8.3) holds.
>
> Explicitly, let $f(X)\in\mathfrak o[X]$ be the monic minimal polynomial of $\theta$, and write its reduction as
> $$
> \bar f(X)=\prod_{i=1}^r\bar f_i(X)^{e_i}
> $$
> with distinct monic irreducible factors over $\mathfrak o/\mathfrak p$ and monic lifts $f_i\in\mathfrak o[X]$. Proposition (8.3) now gives all its conclusions:
> $$
> \mathfrak P_i=\mathfrak p\mathcal O+f_i(\theta)\mathcal O,
> \qquad
> \mathfrak p\mathcal O=\prod_i\mathfrak P_i^{e_i},
> \qquad
> [\mathcal O/\mathfrak P_i:\mathfrak o/\mathfrak p]=\deg\bar f_i.
> $$
> The $\mathfrak P_i$ are exactly the distinct primes above $\mathfrak p$. Thus excluding primes dividing the integer index is sufficient.

## Related Concepts

- [[02 - Ring Theory/Concepts/Orders and Conductors]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals]]

## Notes

- **Source verification:** The complete problem was visually checked in [S4, Ch. I, §8, Exercise 5, printed p. 53, PDF p. 72]. No source figure is required.
- **Source inputs:** Proposition (8.3), including the conductor condition, prime generators, exponents, and residue degrees, was checked at [S4, printed pp. 47–48, PDF pp. 66–67]. Its preceding definition of the conductor is on printed p. 47 / PDF p. 66. The finite-module property of the integral closure in a separable finite extension is proved in (8.1), printed p. 45 / PDF p. 64.
- **Proof status and boundary:** The index-to-conductor argument is independent. It uses the elementary fact that the order of a finite abelian group annihilates that group. It does not use the false prescribed-conductor claim in Exercise I.8.2. The index condition is sufficient; no converse about index-dividing primes is asserted. Ring Theory is primary.

