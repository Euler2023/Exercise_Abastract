---
title: "Exercise R253: Clearing Denominators and Multivariate Irreducibility"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 27, printed p. 256, PDF p. 271"
created: 2026-09-06
---

# Exercise R253: Clearing Denominators and Multivariate Irreducibility

## Problem Statement

> [!question] Lang, Chapter V, Exercise 27
> Let $x_1,\ldots,x_n$ be algebraically independent over a field $k$. Let $y$ be algebraic over $k(x)=k(x_1,\ldots,x_n)$. Let $P(X_{n+1})$ be the irreducible polynomial of $y$ over $k(x)$. Let $\varphi(x)$ be the least common multiple of the denominators of the coefficients of $P$. Then the coefficients of $\varphi(x)P$ are elements of $k[x]$. Show that the polynomial
> $$
> f(X_1,\ldots,X_{n+1})=\varphi(X_1,\ldots,X_n)P(X_{n+1})
> $$
> is irreducible over $k$, as a polynomial in $n+1$ variables.
>
> Conversely, let $f(X_1,\ldots,X_{n+1})$ be an irreducible polynomial over $k$. Let $x_1,\ldots,x_n$ be algebraically independent over $k$. Show that
> $$
> f(x_1,\ldots,x_n,X_{n+1})
> $$
> is irreducible over $k(x_1,\ldots,x_n)$.

> [!warning] Source issue
> The printed converse omits $\deg_{X_{n+1}}f>0$. For instance $f=X_1$ becomes a unit over the fraction field. The original wording is retained; the proof establishes the converse with positive last-variable degree.

## Hints

> [!hint]- Hint 1
> Put $R=k[x_1,\ldots,x_n]$, a UFD, and prove that the cleared polynomial is primitive.

> [!hint]- Hint 2
> The converse must have positive degree in its last variable.

## Solution

> [!success]- Solution and proof status
> Write $R=k[x_1,\ldots,x_n]$ and $K=\operatorname{Frac}(R)$. Interpret $P$ as the monic minimal polynomial and write each coefficient in reduced fractional form. Let $\varphi$ be an lcm of their denominators.
>
> To show $\varphi P$ is primitive, consider an irreducible $\pi\in R$. If $\pi\nmid\varphi$, the leading coefficient $\varphi$ is not divisible by $\pi$. If $\pi\mid\varphi$, choose a coefficient whose reduced denominator has the largest $\pi$-exponent among all denominators. Multiplication by $\varphi$ clears exactly that exponent; its numerator is not divisible by $\pi$, so this coefficient of $\varphi P$ is not divisible by $\pi$. Thus no irreducible divides all coefficients.
>
> The polynomial $P$ is irreducible over $K$, and multiplying by the nonzero scalar $\varphi$ does not change irreducibility over $K$. Gauss's lemma now makes the primitive polynomial $\varphi P$ irreducible in $R[X_{n+1}]$. Algebraic independence identifies this ring with $k[X_1,\ldots,X_{n+1}]$.
>
> **Corrected converse.** Assume $\deg_{X_{n+1}}f>0$. View $f$ as a polynomial in $X_{n+1}$ over the UFD $k[X_1,\ldots,X_n]$. It is primitive: a nonunit common divisor of its coefficients would give a nontrivial factorization of $f$, since the other factor still has positive last-variable degree. Gauss's lemma implies irreducibility over $k(X_1,\ldots,X_n)$, and algebraic independence transfers this to $k(x_1,\ldots,x_n)$.
>
> **Counterexample to the unrestricted converse.** For $n\ge1$, the polynomial $f=X_1$ is irreducible in the multivariate polynomial ring, but becomes the nonzero constant $x_1$, a unit in $k(x_1,\ldots,x_n)[X_{n+1}]$. A unit is not irreducible.

## Related Concepts

- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]

## Notes

- **Imported input:** Gauss's lemma for primitive polynomials over a UFD [S2, Ch. IV, §2, printed pp. 181–182, PDF pp. 196–197].
- **Denominator convention:** Reduced fractions and monicity are essential to the lcm formulation. Denominators with artificially inserted common factors could introduce content.
- **Source context:** After this exercise the book defines a zero $(b_1,\ldots,b_n)$ by $f(b)=0$ and calls it nontrivial when not every coordinate is zero; this convention applies in V.28 and V.30.

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 27, printed p. 256, PDF p. 271]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
