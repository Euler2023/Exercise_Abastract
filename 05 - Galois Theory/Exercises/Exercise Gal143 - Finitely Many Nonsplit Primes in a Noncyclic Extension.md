---
title: "Exercise Gal143: Finitely Many Nonsplit Primes in a Noncyclic Extension"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §9, Exercise 1, printed p. 58, PDF p. 77"
created: 2026-10-20
---

# Exercise Gal143: Finitely Many Nonsplit Primes in a Noncyclic Extension

## Problem Statement

> [!question] Neukirch I.9.1
> If $L/K$ is a Galois extension of algebraic number fields with noncyclic Galois group, then there are at most finitely many nonsplit prime ideals of $K$.

In the source, nonsplit means that there is only one prime of $L$ above the base prime. It does not mean merely “not totally split.”

## Hints

> [!hint]- Hint 1
> For an unramified prime of a number field, the decomposition group is isomorphic to a Galois group of finite residue fields.

> [!hint]- Hint 2
> Finite-field Galois groups are cyclic. If a prime is nonsplit, its decomposition group is the whole Galois group.

> [!hint]- Hint 3
> Conclude that every nonsplit prime must ramify. Use the finiteness of ramified primes in a finite separable extension.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Let $G=\operatorname{Gal}(L/K)$, assumed noncyclic, and let $\mathfrak p$ be unramified. For a prime $\mathfrak P$ above it, the decomposition-inertia exact sequence is
> $$
> 1\longrightarrow I_{\mathfrak P}\longrightarrow D_{\mathfrak P}
> \longrightarrow\operatorname{Gal}(\kappa(\mathfrak P)/\kappa(\mathfrak p))
> \longrightarrow1.
> $$
> Number-field residue fields are finite: $\mathcal O_K$ is a finite integer module and $\mathfrak p$ contains a rational prime. They are therefore perfect, and unramifiedness gives $I_{\mathfrak P}=1$.
>
> For completeness the residue Galois group is cyclic. Write $\kappa(\mathfrak p)=\mathbb F_q$ and $\kappa(\mathfrak P)=\mathbb F_{q^f}$. The map $x\mapsto x^q$ is an automorphism fixing $\mathbb F_q$. Its order is $f$: its $f$-th power is the identity, while for $0<j<f$ the polynomial $X^{q^j}-X$ has degree smaller than $q^f$ and cannot vanish on the entire field. A degree-$f$ extension has at most $f$ automorphisms, so this order-$f$ cyclic subgroup is its entire Galois group. Thus $D_{\mathfrak P}$ is cyclic.
>
> By transitivity, the number of primes above $\mathfrak p$ is $[G:D_{\mathfrak P}]$. If $\mathfrak p$ were nonsplit, this index would be $1$, forcing $G=D_{\mathfrak P}$ to be cyclic, a contradiction. Every nonsplit prime is consequently ramified. Only finitely many primes ramify in a finite separable extension, so the required set is finite.

## Related Concepts

- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups]]
- [[05 - Galois Theory/Concepts/Finite Fields Galois]]
- [[05 - Galois Theory/Concepts/Galois Extensions]]

## Notes

- **Source verification:** The complete problem was visually checked in [S4, Ch. I, §9, Exercise 1, printed p. 58, PDF p. 77]. No source figure is required.
- **Source inputs:** Nonsplit is explicitly defined as one prime above the base prime on [S4, printed p. 49, PDF p. 68] and characterized by $D_{\mathfrak P}=G$ on printed p. 54 / PDF p. 73. The exact sequence and unramified-inertia criterion are in (9.4)–(9.6) and the following discussion, printed pp. 56–58 / PDF pp. 75–77. Finiteness of ramification is (8.4), printed p. 49 / PDF p. 68.
- **Proof status and boundary:** The argument is independent; the finite-field cyclicity check is included. No density theorem or Chebotarev theorem is needed. The conclusion concerns primes with a single factor, not the much larger complement of the completely split primes. Galois Theory is primary.

