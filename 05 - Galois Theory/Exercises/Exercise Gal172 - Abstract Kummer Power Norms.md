---
title: 'Exercise Gal172: Abstract Kummer Power Norms'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 1, printed p. 305, PDF p. 324
source_refs:
- S4/ch-IV/sec-6/ex-1
created: '2026-10-23'
---

# Exercise Gal172: Abstract Kummer Power Norms

## Problem Statement

> [!question] Neukirch IV.§6, Exercise 1
> Let $n$ be a natural number, and assume the group $\mu_n=\{\xi\in A\mid\xi^n=1\}$ is cyclic of order $n$, and $A\subseteq A^n$. Let $K$ be a field such that $\mu_n\subseteq A_K$, and let $L/K$ be the maximal abelian extension of exponent $n$. If $L/K$ is finite, then one has $N_{L/K}A_L=A_K^n$.

## Hints

> [!hint]- Hint 1 — first step
> Write down the exponents of the two quotients $A_K/A_K^n$ and $A_K/N_{L/K}A_L$ before comparing their sizes.

> [!hint]- Hint 2 — proof route
> One inclusion follows because the reciprocity quotient has exponent dividing $n$. Compare the two finite indices using Kummer duality.

## Solution

> [!success]- Independent derivation
> Since $A^n\subseteq A$ always holds, the hypothesis $A\subseteq A^n$ means $n$-divisibility. Kummer theory gives
> $$
> A_K/A_K^n\cong\operatorname{Hom}(G(L/K),\mu_n).
> $$
> The maximal abelian extension of exponent dividing $n$ captures every continuous character of order dividing $n$. Finiteness of $L/K$ ensures that the groups on both sides are finite.
> The reciprocity isomorphism in this chapter gives $A_K/N_{L/K}A_L\cong G(L/K)$. Its exponent divides $n$, so $A_K^n\subseteq N_{L/K}A_L$. Conversely, the finite abelian group $G(L/K)$ has exponent dividing $n$, and therefore has the same order as its $\mu_n$-dual. Hence
> $$
> [A_K:A_K^n]=|\operatorname{Hom}(G(L/K),\mu_n)|
> =|G(L/K)|=[A_K:N_{L/K}A_L].
> $$
> The two subgroups, already known to be nested, have the same finite index and are therefore equal.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Theory]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Class Field Theory Context]]

## Notes

The statement was checked against the original 200 dpi page images. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 1, printed p.305, PDF p.324]. The solution is independently derived, using this chapter's conventions for abstract fields, continuous discrete $G$-modules, restrictions, and norms. Here "exponent $n$" means exponent dividing $n$, as in the correspondence of this chapter; finiteness is essential when comparing orders.
