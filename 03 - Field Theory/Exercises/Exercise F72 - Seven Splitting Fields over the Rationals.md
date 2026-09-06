---
title: "Exercise F72: Seven Splitting Fields over the Rationals"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 11, printed p. 253, PDF p. 268"
created: 2026-09-06
---

# Exercise F72: Seven Splitting Fields over the Rationals

## Problem Statement

> [!question] Lang, Chapter V, Exercise 11
> Describe the splitting fields of the following polynomials over $\mathbb Q$, and find the degree of each such splitting field.
>
> (a) $X^2-2$; (b) $X^2-1$; (c) $X^3-2$; (d) $(X^3-2)(X^2-2)$; (e) $X^2+X+1$; (f) $X^6+X^3+1$; (g) $X^5-7$.

## Hints

> [!hint]- Hint 1
> For $X^m-a$, adjoin one root and the necessary $m$th roots of unity.

> [!hint]- Hint 2
> Use coprime degrees and distinguish real fields from imaginary quadratic extensions.

## Solution

> [!success]- Solution and proof status
> Take the positive real roots $\rho=\sqrt[3]2$, $\eta=\sqrt[5]7$, and primitive roots of unity $\zeta_m=e^{2\pi i/m}$.
>
> | Part | Splitting field | Degree over $\mathbb Q$ |
> |---|---|---:|
> | (a) | $\mathbb Q(\sqrt2)$ | $2$ |
> | (b) | $\mathbb Q$ | $1$ |
> | (c) | $\mathbb Q(\rho,\zeta_3)$ | $6$ |
> | (d) | $\mathbb Q(\rho,\sqrt2,\zeta_3)$ | $12$ |
> | (e) | $\mathbb Q(\zeta_3)$ | $2$ |
> | (f) | $\mathbb Q(\zeta_9)$ | $6$ |
> | (g) | $\mathbb Q(\eta,\zeta_5)$ | $20$ |
>
> **(a), (b), (e).** The roots are respectively $\pm\sqrt2$, $\pm1$, and $\zeta_3,\zeta_3^2$. The indicated quadratic polynomials in (a) and (e) are irreducible over $\mathbb Q$.
>
> **(c).** Eisenstein at $2$ gives $[\mathbb Q(\rho):\mathbb Q]=3$. This field is real, whereas $\zeta_3$ is not. Its quadratic polynomial therefore stays irreducible over $\mathbb Q(\rho)$, giving degree six.
>
> **(d).** The real field $\mathbb Q(\rho,\sqrt2)$ has degree six by the coprime-degree compositum argument of V.7. Adjoining the nonreal root $\zeta_3$ has degree two, so the total is twelve.
>
> **(f).** The roots are precisely the primitive ninth roots. The shift
> $$
> (X+1)^6+(X+1)^3+1
> =X^6+6X^5+15X^4+21X^3+18X^2+9X+3
> $$
> is Eisenstein at $3$, proving degree six.
>
> **(g).** Eisenstein at $7$ gives $[\mathbb Q(\eta):\mathbb Q]=5$. The polynomial $\Phi_5(X)=X^4+X^3+X^2+X+1$ is irreducible because $\Phi_5(X+1)$ is Eisenstein at $5$, so $[\mathbb Q(\zeta_5):\mathbb Q]=4$. Coprimality gives compositum degree twenty. Its elements include all roots $\eta\zeta_5^j$, and conversely the splitting field contains $\eta$ and the ratio $\zeta_5$ of two roots. This verifies minimality of the stated splitting field.

## Related Concepts

- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]

## Notes

- **Imported irreducibility criterion:** For an integer polynomial, if a prime divides every nonleading coefficient, does not divide the leading coefficient, and its square does not divide the constant coefficient, Eisenstein’s criterion gives irreducibility over the rationals [S2, Ch. IV, Thm. 3.1, printed pp. 183–184, PDF pp. 198–199]. All primes and shifts used above are specified explicitly.

- **Dependencies:** The coprime-degree argument is proved in [[03 - Field Theory/Exercises/Exercise F69 - Degree Bound for a Compositum|V.7 / F69]]. All seven parts remain in this single note.

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 11, printed p. 253, PDF p. 268]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
