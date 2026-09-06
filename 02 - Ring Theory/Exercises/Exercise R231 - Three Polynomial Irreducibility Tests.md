---
title: "Exercise R231: Three Polynomial Irreducibility Tests"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 5, printed p. 213, PDF p. 228"
created: 2026-09-06
---

# Exercise R231: Three Polynomial Irreducibility Tests

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 5
>
> (a) Show that the polynomials $X^4+1$ and $X^6+X^3+1$ are irreducible over the rational numbers.
>
> (b) Show that a polynomial of degree $3$ over a field is either irreducible or has a root in the field. Is $X^3-5X^2+1$ irreducible over the rational numbers?
>
> (c) Show that the polynomial in two variables $X^2+Y^2-1$ is irreducible over the rational numbers. Is it irreducible over the complex numbers?

## Hints

> [!hint]- Hint 1
> For (a), translate $X$ by $1$ and use Eisenstein at $2$ and $3$.

> [!hint]- Hint 2
> For (c), view the polynomial as a quadratic in $X$ over $\mathbb C(Y)$. A square rational function has even valuation at every linear factor.

## Solution

> [!success]- Solution
> ### Approach
> For (a), translate $X$ by $1$ and use Eisenstein at $2$ and $3$.
>
> ### Proof
> **(a)** The translate of $X^4+1$ is
> $$
> (X+1)^4+1=X^4+4X^3+6X^2+4X+2,
> $$
> which is Eisenstein at $2$. For $P=X^6+X^3+1$, in $\mathbb F_3[X]$,
> $$
> P(X+1)=(X^3+1)^2+(X^3+1)+1=X^6.
> $$
> Its integer constant coefficient is $P(1)=3$, and its leading coefficient is $1$, so it is Eisenstein at $3$. In both cases all nonleading coefficients are divisible by the indicated prime and the constant coefficient is not divisible by its square. Translation is an automorphism of $\mathbb Q[X]$, so the original polynomials are irreducible.
>
> **(b)** A nontrivial factorization of a cubic has factor degrees $1$ and $2$, so one factor has a root in the field. Conversely a root yields a linear factor by division. For $X^3-5X^2+1$, the integral root test leaves only the candidates $1,-1$, whose values are $-3,-5$. Thus it has no rational root and is irreducible over $\mathbb Q$.
>
> **(c)** In $\mathbb C(Y)[X]$, the quadratic $X^2-(1-Y^2)$ is reducible exactly when $1-Y^2$ is a square in $\mathbb C(Y)$. If $(P/Q)^2=1-Y^2$ with coprime $P,Q\in\mathbb C[Y]$, comparison of multiplicities of the factor $Y-1$ in $P^2=(1-Y^2)Q^2$ gives an even integer on the left and an odd integer on the right. This is impossible. The quadratic is primitive as a polynomial over $\mathbb C[Y]$, so Gauss's lemma implies irreducibility in $\mathbb C[X,Y]$. A factorization over $\mathbb Q$ would remain one over $\mathbb C$. It is therefore irreducible over both fields.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Exercises/Exercise R232 - The Integral Root Test over a UFD|R232 — The Integral Root Test over a UFD]]

## Notes

- **Imported inputs:** Gauss’s lemma and Eisenstein’s criterion [S2, Ch. IV, §2, Theorem 2.1 and Corollary 2.2, printed pp. 181-182, PDF pp. 196-197; §3, Theorem 3.1, printed pp. 183-184, PDF pp. 198-199]. The integral root test is proved in R232. The affine-conic argument can also be compared with [[02 - Ring Theory/Exercises/Exercise R135 - Irreducibility of a Complex Affine Conic|R135]].

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 5, printed p. 213, PDF p. 228]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
