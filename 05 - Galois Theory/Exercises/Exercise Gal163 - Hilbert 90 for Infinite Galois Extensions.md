---
title: 'Exercise Gal163: Hilbert 90 for Infinite Galois Extensions'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 7, printed p. 284, PDF p. 303
source_refs:
- S4/ch-IV/sec-3/ex-7
created: '2026-10-23'
---

# Exercise Gal163: Hilbert 90 for Infinite Galois Extensions

## Problem Statement

> [!question] Neukirch IV.3.7
> Even for infinite Galois extensions $L|K$, one has Hilbert's theorem 90: $H^1(G(L|K),L^*)=1$.

## Hints

> [!hint]- Hint 1
> Give $L^\times$ the discrete topology. A continuous cocycle has finite image, so it descends to a finite Galois subextension.

> [!hint]- Hint 2
> Use finite Noether–Hilbert 90 to find an element of the same finite subextension witnessing a coboundary, then return to the whole group.

## Solution

> [!success]- Independent derivation
> Write $G=G(L/K)$ and give $L^\times$ the discrete topology, making it a continuous module under its natural Galois action. Let $f:G\to L^\times$ be a continuous cocycle. Its image is finite. Choose an open normal subgroup $N$ such that $f|_N=1$ and $N$ fixes every image element. Such a subgroup is obtained using compactness, finiteness of the image, and the normal cores of finitely many stabilizers.
>
> Then $f$ factors through the finite group $G/N$ with values in $E^\times$, where $E=L^N$ is a finite Galois extension of $E/K$. The proved Noether formulation (3.8) gives $b\in E^\times$ such that
> $$
> f(\sigma N)=b^{\sigma-1}\quad(\sigma\in G).
> $$
> This finite statement and its proof were checked against the page image [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, printed p. 283, PDF p. 302]. It concerns only finite Galois extensions, so using it here does not circularly invoke the infinite conclusion. Viewed in $L^\times$, the formula also makes the original cocycle a coboundary. Thus every class is trivial and $H^1(G,L^\times)=1$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Hilbert's Theorem 90|Hilbert 90]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Extensions]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Continuous Cohomology]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 7, printed p. 284, PDF p. 303]. Independent descent to a finite level; the only input is the finite statement (3.8) proved in the book.
- **Topology:** Here $H^1$ uses continuous cocycles. The proof does not extend to cocycles without the continuity assumption.
