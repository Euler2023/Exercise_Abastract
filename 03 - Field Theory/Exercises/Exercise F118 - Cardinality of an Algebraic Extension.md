---
title: "Exercise F118: Cardinality of an Algebraic Extension"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Appendix 2, Exercise 5, printed p. 893, PDF p. 908"
created: 2026-09-29
---

# Exercise F118: Cardinality of an Algebraic Extension

## Problem Statement

> [!question] Lang, Appendix 2, Exercise 5
> Let $K$ be an infinite field, and $E$ an algebraic extension of $K$. Show that
>
> $$
> \operatorname{card}(E)=\operatorname{card}(K).
> $$

## Hints

> [!hint]- Hint 1: Use algebraicity for every element
> Every element of $E$ is a root of a nonzero polynomial over $K$, and every one of those polynomials has only finitely many roots in $E$.

> [!hint]- Hint 2: Count polynomials by coefficient lists
> For each degree the coefficient lists form a finite power of $K$. A countable union of such sets has cardinality $|K|$.

## Solution

> [!success]- Complete independent derivation
> Let $\kappa=|K|$, an infinite cardinal. For each $d\ge0$, polynomials of degree at most $d$ identify with $K^{d+1}$, so there are $\kappa$ of them. A countable union gives $|K[t]|=\kappa$: the upper bound follows from $\kappa\aleph_0=\kappa$, and constant polynomials give the lower bound.
>
> For each nonzero $f\in K[t]$, its root set $R_f\subseteq E$ has at most $\deg f$ elements. This uses the factor theorem and induction on degree, and does not require separability. Algebraicity gives
>
> $$
> E=\bigcup_{0\ne f\in K[t]}R_f.
> $$
>
> Choose an enumeration of each finite root set. The disjoint union of these root sets injects into $(K[t]\setminus\{0\})\times\mathbb N$, and its projection onto $E$ is surjective. With choice this bounds $|E|$ by $\kappa\aleph_0=\kappa$. Equivalently, choose a polynomial for each root and record its position in that polynomial's root list. Finally $K\subseteq E$ gives $\kappa\le|E|$. Schroeder–Bernstein proves $|E|=|K|$.

## Related Concepts

- [[10 - Set Theory and Foundations/Concepts/Cardinality and Cardinal Arithmetic]]
- [[03 - Field Theory/Concepts/Algebraic Extensions]]
- [[03 - Field Theory/Concepts/Minimal Polynomials]]

## Notes

Statement checked at printed p. 893 / PDF p. 908. The proof is independent, and uses no algebraic closure or existence theorem that would make its use in Exercise 9 circular. Inseparable extensions are included because the bound concerns distinct roots, not their multiplicities. Infinity of $K$ is essential: an infinite algebraic extension of a finite field need not have the same cardinality as that finite field.
