---
title: "Exercise Gal86: Galois Groups of Seven Rational Cubics"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - cubic-polynomials
  - discriminant
  - galois-group
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 2, printed p. 321, PDF p. 336"
created: 2026-09-12
---

# Exercise Gal86: Galois Groups of Seven Rational Cubics

## Problem Statement

> [!question] Exercise VI.2
> Find the Galois groups over $\mathbb Q$ of the following polynomials.
>
> (a) $X^3 + X + 1$
>
> (b) $X^3 - X + 1$
>
> (c) $X^3 + 2X + 1$
>
> (d) $X^3 - 2X + 1$
>
> (e) $X^3 - X - 1$
>
> (f) $X^3 - 12X + 8$
>
> (g) $X^3 + X^2 - 2X - 1$

## Hints

> [!hint]- Hint 1: Reducibility and the Rational Root Theorem
> First check whether each polynomial has a rational root. A cubic over $\mathbb Q$ is reducible if and only if it possesses a root in $\mathbb Q$. If it factors into a linear term and an irreducible quadratic, the Galois group is $C_2 \cong \mathbb Z/2\mathbb Z$.

> [!hint]- Hint 2: Cubic Discriminant
> For an irreducible cubic polynomial $f(X) = X^3 + pX + q$, the discriminant is
> $$
> \Delta = -4p^3 - 27q^2.
> $$
> For a general monic cubic $X^3 + bX^2 + cX + d$, the discriminant is
> $$
> \Delta = 18bcd - 4b^3d + b^2c^2 - 4c^3 - 27d^2.
> $$
> The Galois group over $\mathbb Q$ is $A_3 \cong \mathbb Z/3\mathbb Z$ if $\Delta$ is a non-zero square in $\mathbb Q$, and $S_3$ otherwise.

## Solution

> [!success]- Solution
>
> ### (a) $X^3 + X + 1$
> Testing the possible rational roots $\pm 1$ yields $f(1) = 3$ and $f(-1) = -1$. Neither is zero, so $f(X)$ is irreducible over $\mathbb Q$.
> With $p = 1$ and $q = 1$, the discriminant is
> $$
> \Delta = -4(1)^3 - 27(1)^2 = -31.
> $$
> Since $-31 < 0$, it is not a square in $\mathbb Q$. Therefore,
> $$
> \operatorname{Gal}(f/\mathbb Q) \cong S_3.
> $$
>
> ### (b) $X^3 - X + 1$
> The possible rational roots are $\pm 1$. We have $f(1) = 1 \neq 0$ and $f(-1) = 1 \neq 0$, so $f$ is irreducible over $\mathbb Q$.
> With $p = -1$ and $q = 1$, the discriminant is
> $$
> \Delta = -4(-1)^3 - 27(1)^2 = 4 - 27 = -23.
> $$
> Since $-23$ is not a rational square,
> $$
> \operatorname{Gal}(f/\mathbb Q) \cong S_3.
> $$
>
> ### (c) $X^3 + 2X + 1$
> Testing $\pm 1$ gives $f(1) = 4$ and $f(-1) = -2$, so $f$ is irreducible over $\mathbb Q$.
> With $p = 2$ and $q = 1$, the discriminant is
> $$
> \Delta = -4(2)^3 - 27(1)^2 = -32 - 27 = -59.
> $$
> Since $-59$ is not a square in $\mathbb Q$,
> $$
> \operatorname{Gal}(f/\mathbb Q) \cong S_3.
> $$
>
> ### (d) $X^3 - 2X + 1$
> Notice that $X = 1$ is a root: $1^3 - 2(1) + 1 = 0$. Factoring out $X - 1$ gives
> $$
> X^3 - 2X + 1 = (X - 1)(X^2 + X - 1).
> $$
> The quadratic factor has discriminant $1^2 - 4(1)(-1) = 5$, which is not a rational square. Thus the roots of $f$ are $1$ and $(-1 \pm \sqrt{5})/2$.
> The splitting field is the quadratic field $\mathbb Q(\sqrt{5})$, so the Galois group is
> $$
> \operatorname{Gal}(f/\mathbb Q) \cong C_2 \cong \mathbb Z/2\mathbb Z.
> $$
>
> ### (e) $X^3 - X - 1$
> Testing $\pm 1$ gives $f(1) = -1$ and $f(-1) = -1$, showing $f$ is irreducible over $\mathbb Q$.
> The discriminant is
> $$
> \Delta = -4(-1)^3 - 27(-1)^2 = 4 - 27 = -23.
> $$
> As $-23$ is not a square,
> $$
> \operatorname{Gal}(f/\mathbb Q) \cong S_3.
> $$
>
> ### (f) $X^3 - 12X + 8$
> The possible rational roots are the divisors of 8: $\pm 1, \pm 2, \pm 4, \pm 8$. Direct evaluation:
> - $f(1) = -3$, $f(-1) = 19$;
> - $f(2) = -8$, $f(-2) = 24$;
> - $f(4) = 24$, $f(-4) = -8$;
> - $f(8) = 424$, $f(-8) = -408$.
>
> None of these values is zero, so $f$ is irreducible over $\mathbb Q$.
> With $p = -12$ and $q = 8$, the discriminant is
> $$
> \Delta = -4(-12)^3 - 27(8)^2 = -4(-1728) - 27(64) = 6912 - 1728 = 5184.
> $$
> We observe that
> $$
> 5184 = 72^2.
> $$
> Because the discriminant is a non-zero square in $\mathbb Q$, all roots generate a splitting field of degree 3 over $\mathbb Q$, and
> $$
> \operatorname{Gal}(f/\mathbb Q) \cong A_3 \cong C_3 \cong \mathbb Z/3\mathbb Z.
> $$
>
> ### (g) $X^3 + X^2 - 2X - 1$
> Testing $\pm 1$: $f(1) = -1$ and $f(-1) = 1$, so $f$ has no rational roots and is irreducible over $\mathbb Q$.
> Using the general cubic discriminant formula with $b = 1, c = -2, d = -1$:
> $$
> \begin{aligned}
> \Delta &= 18(1)(-2)(-1) - 4(1)^3(-1) + (1)^2(-2)^2 - 4(-2)^3 - 27(-1)^2 \\
> &= 36 + 4 + 4 + 32 - 27 \\
> &= 49 = 7^2.
> \end{aligned}
> $$
> Because $\Delta = 49$ is a non-zero rational square, the Galois group is
> $$
> \operatorname{Gal}(f/\mathbb Q) \cong A_3 \cong C_3 \cong \mathbb Z/3\mathbb Z.
> $$
> *(Geometric remark: $f(X)$ is the minimal polynomial of $2\cos(2\pi/7) = \zeta_7 + \zeta_7^{-1}$, generating the maximal totally real subfield $\mathbb Q(\zeta_7)^+$, which is indeed cyclic of degree 3 over $\mathbb Q$.)*

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]

## Notes

- **Routing:** Galois Theory is primary because determining the Galois group of cubic polynomials over $\mathbb Q$ through root-testing and discriminant analysis is standard Galois theory.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 2, printed p. 321, PDF p. 336.
