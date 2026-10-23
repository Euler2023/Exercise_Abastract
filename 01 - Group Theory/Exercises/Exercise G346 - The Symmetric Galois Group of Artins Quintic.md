---
title: 'Exercise G346: The Symmetric Galois Group of Artins Quintic'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 4, printed p. 414, PDF p. 433
source_refs:
- S4/ch-VI/sec-7/ex-4
created: '2026-10-23'
---

# Exercise G346: The Symmetric Galois Group of Artins Quintic

## Problem Statement

> [!question] Neukirch VI.7.4
> The decomposition field $K|\mathbb Q$ of $f(X)$ has as Galois group the symmetric group $S_5$, i.e., it is of degree $120$.

## Hints

> [!hint]- Hint
> The factorization modulo $2$ has degrees $2$ and $3$, yielding a transposition by cubing. A transitive group of prime degree containing a transposition is symmetric.

> [!hint]- Stronger hint
> Cube the (2)(3) Frobenius permutation modulo 2. The graph of conjugate transpositions is connected because the action is transitive of prime degree.

## Solution

> [!success]- Independent derivation
> Irreducibility from the preceding exercise makes $G\le S_5$ transitive on the five roots. Modulo $2$, one has
> $$
> X^5+X+1=(X^2+X+1)(X^3+X^2+1),
> $$
> Both factors are irreducible and distinct. Since $2\nmid2869$, the unramified Frobenius has cycle type $(2)(3)$; its cube is a single transposition.
> To avoid using the classification of transitive quintic subgroups, consider all conjugates of this transposition in $G$. Form a graph on the five roots, with an edge for each pair exchanged by such a conjugate. The group $G$ permutes its connected components. Transitivity makes the components have equal sizes dividing the prime $5$. The graph has an edge, so its components cannot all be singletons. It must therefore be connected.
> The edge transpositions of a connected graph generate all of $S_5$: successive conjugations along a path produce the transposition of any two vertices. Thus the conjugate transpositions generate $S_5\subseteq G$, and $G=S_5$, with $[K:\mathbb Q]=120$. The factorization modulo $2$ has also been checked by symbolic computation.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

The statement was checked against the original pages rendered at 200 dpi. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 4, printed p.414, PDF p.433]. The solution is an independent derivation. The Frobenius cycle type uses the proved theorem on factorization at unramified primes; $S_5$ is not inferred merely from the discriminant being nonsquare.
