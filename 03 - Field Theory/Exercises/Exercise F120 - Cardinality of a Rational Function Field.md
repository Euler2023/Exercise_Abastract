---
title: "Exercise F120: Cardinality of a Rational Function Field"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Appendix 2, Exercise 10, printed p. 893, PDF p. 908"
created: 2026-09-29
---

# Exercise F120: Cardinality of a Rational Function Field

## Problem Statement

> [!question] Lang, Appendix 2, Exercise 10
> Let $K$ be an infinite field. Show that the field of rational functions $K(t)$ has the same cardinality as $K$.

## Hints

> [!hint]- Hint 1: Count numerator and denominator polynomials
> A polynomial is a finite coefficient list. A rational function has a polynomial numerator and a nonzero polynomial denominator.

> [!hint]- Hint 2: Use a surjection
> The quotient map from pairs $(f,g)$ to $f/g$ bounds the cardinality above. Constant rational functions supply the lower bound.

## Solution

> [!success]- Complete independent derivation
> Put $\kappa=|K|$. Polynomials of degree at most $d$ correspond to coefficient lists in $K^{d+1}$, of cardinality $\kappa$. Since every polynomial has some finite degree, the countable-union bound gives $|K[t]|\le\kappa\aleph_0=\kappa$. Constant polynomials yield equality.
>
> Every element of $K(t)$ is $f/g$ for $f,g\in K[t]$ with $g\ne0$. Hence the map
>
> $$
> K[t]\times(K[t]\setminus\{0\})\twoheadrightarrow K(t),\qquad (f,g)\mapsto f/g
> $$
>
> is surjective. The domain has cardinality at most $\kappa^2=\kappa$, so $|K(t)|\le\kappa$. No uniqueness of the chosen fraction is needed: a surjection provides the upper bound under the choice convention of the appendix. The embedding $K\hookrightarrow K(t)$ by constants gives the opposite inequality. Schroeder–Bernstein finishes the proof.
>
> Infinity is used twice, in the finite-product and countable-union bounds. Over a finite field, $K(t)$ is denumerably infinite, so the asserted equality would fail.

## Related Concepts

- [[10 - Set Theory and Foundations/Concepts/Cardinality and Cardinal Arithmetic]]
- [[03 - Field Theory/Concepts/Field Extensions]]

## Notes

Statement checked at printed p. 893 / PDF p. 908. The solution is independent and uses the construction of the fraction field of $K[t]$ together with the cardinal arithmetic proved in the linked concept. Its coefficient and numerator–denominator computation determines the Field Theory routing.
