---
title: 'Exercise Gal197: Independent Cyclic Extensions and Splitting Primes'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §3, Exercise 4, printed p. 379, PDF p. 398
source_refs:
- S4/ch-VI/sec-3/ex-4
created: '2026-10-23'
---

# Exercise Gal197: Independent Cyclic Extensions and Splitting Primes

## Problem Statement

> [!question] Neukirch VI.3.4
> Let $L_1,\ldots,L_r|K$ be cyclic extensions of prime degree $p$ such that $L_i\cap L_j=K$ for $i\ne j$. Then there are infinitely many primes $\mathfrak p$ of $K$ which split completely in $L_i$, for $i>1$, but which are nonsplit in $L_1$.

> [!warning] Source issue / proof scope
> Pairwise disjoint cyclic extensions need not be independent from their compositum. The solution gives an explicit biquadratic counterexample and proves the corrected criterion.

## Hints

> [!hint]- Hint
> Pairwise disjointness need not give independence from a compositum. Test three quadratic fields before proving a corrected statement.

> [!hint]- Stronger hint
> Test Q(sqrt(6)), Q(sqrt(2)), Q(sqrt(3)); after strengthening the hypothesis, choose Frobenius trivial on the latter compositum and nontrivial on L_1.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> **Source issue / counterexample.** Take $K=\mathbb Q$, $L_1=\mathbb Q(\sqrt6)$, $L_2=\mathbb Q(\sqrt2)$, and $L_3=\mathbb Q(\sqrt3)$. Their pairwise intersections are $\mathbb Q$. However, an unramified prime splitting completely in both fields $L_2,L_3$ splits completely in their compositum, and therefore also in its subfield $L_1$. The original conclusion is false.
> The intended corrected condition is $L_1\not\subseteq F=L_2\cdots L_r$. Since $[L_1:K]=p$, this is equivalent to $L_1\cap F=K$. Put $M=L_1F$. Then
> $$
> \operatorname{Gal}(M/F)\xrightarrow{\sim}\operatorname{Gal}(L_1/K)=C_p.
> $$
> Choose a nonidentity element $\sigma$ of this subgroup. It is trivial on each $L_i$ for $i>1$, but restricts on $L_1$ to a generator of order $p$. By the existence part of Čebotarev (Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, VII.(13.4), printed p.545/PDF564), infinitely many primes have Frobenius $\sigma$. The group $M/K$ is abelian, so there is no conjugacy ambiguity. These primes have exactly the required splitting behavior.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original page images. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §3, Exercise 4, printed p.379, PDF p.398]. The solution is independently derived.
