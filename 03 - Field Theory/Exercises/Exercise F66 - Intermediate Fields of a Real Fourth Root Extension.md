---
title: "Exercise F66: Intermediate Fields of a Real Fourth Root Extension"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 4, printed p. 253, PDF p. 268"
created: 2026-09-06
---

# Exercise F66: Intermediate Fields of a Real Fourth Root Extension

## Problem Statement

> [!question] Lang, Chapter V, Exercise 4
> Let $\alpha$ be the real positive fourth root of $2$. Find all intermediate fields in the extension $\mathbb Q(\alpha)$ of $\mathbb Q$.

## Hints

> [!hint]- Hint 1
> Every proper nontrivial intermediate field has degree two.

> [!hint]- Hint 2
> Use the automorphism $\tau(\alpha)=-\alpha$ and its fixed elements.

## Solution

> [!success]- Solution and proof status
> Eisenstein's criterion at $2$ makes $X^4-2$ irreducible. Hence $E=\mathbb Q(\alpha)$ has basis $1,\alpha,\alpha^2,\alpha^3$ and degree four. Any proper nontrivial intermediate field $M$ has degree two.
>
> Substitution $\tau(\alpha)=-\alpha$ defines an automorphism of $E$. Its fixed elements are exactly $\mathbb Q+\mathbb Q\alpha^2=\mathbb Q(\sqrt2)$. Write $M=\mathbb Q(\beta)$ with $\beta^2=d\in\mathbb Q$ and $\beta\notin\mathbb Q$: completing the square in a quadratic minimal polynomial gives such a generator. Since $\tau(\beta)^2=d$, either $\tau(\beta)=\beta$ or $\tau(\beta)=-\beta$.
>
> In the second case the basis expansion forces $\beta=b\alpha+c\alpha^3$ with $b,c\in\mathbb Q$. Then
> $$
> \beta^2=4bc+(b^2+2c^2)\alpha^2.
> $$
> Because $\alpha^2$ is irrational, $b^2+2c^2=0$. Rational squares are nonnegative, so $b=c=0$, a contradiction. Thus $\tau(\beta)=\beta$, and $M=\mathbb Q(\sqrt2)$.
>
> All intermediate fields, including endpoints, are
> $$
> \mathbb Q,\qquad\mathbb Q(\sqrt2),\qquad\mathbb Q(\sqrt[4]2).
> $$

## Related Concepts

- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[05 - Galois Theory/Concepts/Automorphisms|Automorphisms]]

## Notes

- **Imported irreducibility criterion:** For an integer polynomial, if a prime divides every nonleading coefficient, does not divide the leading coefficient, and its square does not divide the constant coefficient, Eisenstein’s criterion gives irreducibility over the rationals [S2, Ch. IV, Thm. 3.1, printed pp. 183–184, PDF pp. 198–199]. All primes and shifts used above are specified explicitly.

- **Routing:** The proof uses basis coefficients, quadratic generators, and the tower law. It does not require a Galois correspondence for the nonnormal quartic extension.

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 4, printed p. 253, PDF p. 268]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
