---
title: "Exercise AG137: Complements and Cardinalities of Affine Curve Pieces"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.5, Exercise 8.5.7, printed p. 351, PDF p. 364"
source_refs:
  - "S7/ch-8/sec-5/ex-7"
created: 2026-10-28
---

# Exercise AG137: Complements and Cardinalities of Affine Curve Pieces

## Problem Statement

> [!question] Original Exercise 8.5.7
> (a) Show that any nonempty affine piece of a nonsingular projective algebraic curve is all but finitely many points of the curve. (Hints for this exercise are at the end of the book.)
>
> (b) Show that any nonempty affine piece of a nonsingular projective algebraic curve is infinite.

## Hints

> [!hint]- Hint 1
> A proper closed subset of an integral curve has dimension zero.

> [!hint]- Hint 2
> Use a nonconstant rational function to map the projective curve surjectively to the projective line.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> Interpret points geometrically, over an algebraic closure $\bar k$, as throughout the section. Let $C$ be the integral projective curve and $U$ its nonempty affine open piece.
>
> (a) The complement $Z=C\setminus U$ is a proper Zariski closed subset of an integral curve. Every irreducible component of a proper closed subset has dimension zero: a positive-dimensional component would contain the generic point of $C$ and equal $C$. A projective curve is Noetherian, so $Z$ has finitely many irreducible components. Each zero-dimensional component over $\bar k$ is one point. Thus $Z$ is finite. For a coordinate-chart affine piece this also says that a hyperplane not containing $C$ meets it in finitely many points, by the same dimension argument.
>
> (b) Choose a nonconstant rational function $f\in\bar k(C)$, possible because that function field has transcendence degree one. On the nonsingular projective curve it defines a morphism $C\to\mathbb P^1$. Its image is closed by properness and is not one point; hence it is all of $\mathbb P^1$. The algebraically closed field $\bar k$ is infinite, so $\mathbb P^1(\bar k)$ is infinite and therefore $C(\bar k)$ is infinite. Removing the finite complement from (a) leaves $U(\bar k)$ infinite.
>
> If the word “points” were restricted to $k$-rational points over a finite field, (b) would be false: every such set is finite. The geometric interpretation is essential and is the interpretation used for the divisor groups in the section.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 351 / PDF p. 364. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Scope of points:** Infinitude is for geometric points. No claim is made that an affine curve over a finite field has infinitely many rational points.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
