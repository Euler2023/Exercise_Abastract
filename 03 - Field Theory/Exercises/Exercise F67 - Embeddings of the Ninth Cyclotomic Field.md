---
title: "Exercise F67: Embeddings of the Ninth Cyclotomic Field"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 5, printed p. 253, PDF p. 268"
created: 2026-09-06
---

# Exercise F67: Embeddings of the Ninth Cyclotomic Field

## Problem Statement

> [!question] Lang, Chapter V, Exercise 5
> If $\alpha$ is a complex root of $X^6+X^3+1$, find all homomorphisms $\sigma:\mathbb Q(\alpha)\to\mathbb C$.
>
> [Hint: The polynomial is a factor of $X^9-1$.]

## Hints

> [!hint]- Hint 1
> The roots are the primitive ninth roots of unity.

> [!hint]- Hint 2
> Apply Eisenstein at $3$ after replacing $X$ by $X+1$.

## Solution

> [!success]- Solution and proof status
> Let $f(X)=X^6+X^3+1$. Since
> $$
> (X^3-1)f(X)=X^9-1,
> $$
> and $f(\gamma)=3\ne0$ when $\gamma^3=1$, its roots are exactly the primitive ninth roots of unity. Moreover
> $$
> f(X+1)=X^6+6X^5+15X^4+21X^3+18X^2+9X+3
> $$
> is Eisenstein at $3$. Thus $f$ is irreducible over $\mathbb Q$ and is the minimal polynomial of $\alpha$.
>
> A field homomorphism is understood to preserve $1$, hence fixes $\mathbb Q$. It is determined by its value on $\alpha$, which must be a root of $f$. Conversely each root determines a homomorphism through $\mathbb Q[X]/(f)$. The six maps are therefore
> $$
> \sigma_r(\alpha)=\alpha^r,\qquad r\in\{1,2,4,5,7,8\}.
> $$
> For $h\in\mathbb Q[X]$, the formula is $\sigma_r(h(\alpha))=h(\alpha^r)$. Every element of $\mathbb Q(\alpha)$ has such a polynomial expression.

## Related Concepts

- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]

## Notes

- **Imported irreducibility criterion:** For an integer polynomial, if a prime divides every nonleading coefficient, does not divide the leading coefficient, and its square does not divide the constant coefficient, Eisenstein’s criterion gives irreducibility over the rationals [S2, Ch. IV, Thm. 3.1, printed pp. 183–184, PDF pp. 198–199]. All primes and shifts used above are specified explicitly.

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 5, printed p. 253, PDF p. 268]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
