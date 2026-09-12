---
title: "Exercise Gal87: Galois Groups of Six Rational Function Cubics"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - rational-function-field
  - cubic-polynomials
  - discriminant
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 3, printed p. 321, PDF p. 336"
created: 2026-09-12
---

# Exercise Gal87: Galois Groups of Six Rational Function Cubics

## Problem Statement

> [!question] Exercise VI.3
> Let $k = \mathbb C(t)$ be the field of rational functions in one variable. Find the Galois group over $k$ of the following polynomials:
>
> (a) $X^3 + X + t$
>
> (b) $X^3 - X + t$
>
> (c) $X^3 + tX + 1$
>
> (d) $X^3 - 2tX + t$
>
> (e) $X^3 - X - t$
>
> (f) $X^3 + t^2X - t^3$

## Hints

> [!hint]- Hint 1: Irreducibility over $\mathbb C(t)$
> A polynomial $f(X) \in k[X]$ can be cleared of denominators and viewed as an element of $\mathbb C[t][X] \cong \mathbb C[X][t]$. By Gauss's lemma, irreducibility in $\mathbb C[X, t]$ guarantees irreducibility in $\mathbb C(t)[X]$. For degree 3 polynomials, irreducibility is also equivalent to having no root in $\mathbb C(t)$.

> [!hint]- Hint 2: Squares in $\mathbb C(t)$
> An element $g(t) \in \mathbb C[t]$ is a square in $\mathbb C(t)$ if and only if every linear factor $t - c$ appears with an even multiplicity in the prime factorization of $g(t)$ over $\mathbb C$. For an irreducible cubic with discriminant $\Delta(t)$, the Galois group is $A_3 \cong \mathbb Z/3\mathbb Z$ if $\Delta(t)$ is a square in $\mathbb C(t)$, and $S_3$ otherwise.

> [!hint]- Hint 3: Substitution in part (f)
> Look for a scaling substitution of the form $X = t Y$.

## Solution

> [!success]- Solution
>
> ### (a) $X^3 + X + t$
> Regarded in $\mathbb C[X][t]$, the polynomial is linear in $t$:
> $$
> t + (X^3 + X).
> $$
> The coefficients in $\mathbb C[X]$ are $1$ and $X^3 + X$. Their greatest common divisor is $1$. By Gauss's lemma, the polynomial is irreducible in $\mathbb C[X, t]$, and hence irreducible in $\mathbb C(t)[X]$.
> With $p = 1$ and $q = t$, the discriminant is
> $$
> \Delta(t) = -4(1)^3 - 27t^2 = -4 - 27t^2 = -27\left(t - \frac{2i}{3\sqrt{3}}\right)\left(t + \frac{2i}{3\sqrt{3}}\right).
> $$
> Over $\mathbb C$, $\Delta(t)$ factors into two distinct linear factors of multiplicity 1. Thus $\Delta(t)$ is not a square in $\mathbb C(t)$, and
> $$
> \operatorname{Gal}(f/k) \cong S_3.
> $$
>
> ### (b) $X^3 - X + t$
> In $\mathbb C[X][t]$, the polynomial is $t + (X^3 - X)$. The content in $\mathbb C[X]$ is $\gcd(1, X^3 - X) = 1$, so it is irreducible in $\mathbb C(t)[X]$.
> Its discriminant is
> $$
> \Delta(t) = -4(-1)^3 - 27t^2 = 4 - 27t^2 = -27\left(t - \frac{2}{3\sqrt{3}}\right)\left(t + \frac{2}{3\sqrt{3}}\right).
> $$
> The roots are distinct and simple, so $\Delta(t)$ is not a square in $\mathbb C(t)$. Therefore,
> $$
> \operatorname{Gal}(f/k) \cong S_3.
> $$
>
> ### (c) $X^3 + tX + 1$
> In $\mathbb C[X][t]$, the polynomial is $t X + (X^3 + 1)$. Since $\gcd(X, X^3 + 1) = 1$, it is irreducible in $\mathbb C[X, t]$ and has no constant roots in $\mathbb C$. Thus it is irreducible in $\mathbb C(t)[X]$.
> With $p = t$ and $q = 1$, the discriminant is
> $$
> \Delta(t) = -4t^3 - 27(1)^2 = -4t^3 - 27 = -4\left(t^3 + \frac{27}{4}\right).
> $$
> The roots of $t^3 + 27/4$ in $\mathbb C$ are three distinct complex numbers. Since all roots have multiplicity 1, $\Delta(t)$ is not a square in $\mathbb C(t)$. Hence
> $$
> \operatorname{Gal}(f/k) \cong S_3.
> $$
>
> ### (d) $X^3 - 2tX + t$
> In $\mathbb C[X][t]$, the polynomial is $t(1 - 2X) + X^3$. Because $\gcd(1 - 2X, X^3) = 1$, it is irreducible in $\mathbb C(t)[X]$.
> With $p = -2t$ and $q = t$, the discriminant is
> $$
> \Delta(t) = -4(-2t)^3 - 27t^2 = 32t^3 - 27t^2 = t^2(32t - 27).
> $$
> While $t^2$ is a square, the linear factor $32t - 27$ has odd multiplicity 1. Thus $\Delta(t)$ is not a square in $\mathbb C(t)$, and
> $$
> \operatorname{Gal}(f/k) \cong S_3.
> $$
>
> ### (e) $X^3 - X - t$
> In $\mathbb C[X][t]$, the polynomial is $-t + (X^3 - X)$, which is irreducible by Gauss's lemma.
> With $p = -1$ and $q = -t$, the discriminant is
> $$
> \Delta(t) = -4(-1)^3 - 27(-t)^2 = 4 - 27t^2.
> $$
> As in part (b), this has two distinct simple roots in $\mathbb C$, so it is not a square in $\mathbb C(t)$. Thus
> $$
> \operatorname{Gal}(f/k) \cong S_3.
> $$
>
> ### (f) $X^3 + t^2X - t^3$
> Substitute $X = t Y$ into the polynomial:
> $$
> (tY)^3 + t^2(tY) - t^3 = t^3 Y^3 + t^3 Y - t^3 = t^3(Y^3 + Y - 1).
> $$
> Over the algebraically closed field $\mathbb C$, the cubic polynomial $Y^3 + Y - 1$ factors completely into linear factors:
> $$
> Y^3 + Y - 1 = (Y - \alpha_1)(Y - \alpha_2)(Y - \alpha_3), \qquad \alpha_1, \alpha_2, \alpha_3 \in \mathbb C.
> $$
> Multiplying back by $t$, the three roots of $X^3 + t^2 X - t^3$ are
> $$
> X_1 = \alpha_1 t, \quad X_2 = \alpha_2 t, \quad X_3 = \alpha_3 t.
> $$
> Since $\alpha_1, \alpha_2, \alpha_3 \in \mathbb C \subset k = \mathbb C(t)$, all three roots already belong to the base field $k$.
> Consequently, the polynomial splits completely into linear factors over $k = \mathbb C(t)$, the splitting field is $k$ itself, and the Galois group is trivial:
> $$
> \operatorname{Gal}(f/k) \cong \{1\} \quad (\text{the trivial group}).
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Routing:** Galois Theory is primary because computing the Galois group of cubic extensions over rational function fields exercises discriminant criteria and field automorphisms.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 3, printed p. 321, PDF p. 336.
