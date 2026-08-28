---
title: "Exercise R199: Factorization into Irreducible Rational Polynomials"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - irreducible-polynomials
  - induction
source: "Michael Artin, Algebra, 2nd ed., Appendix, Background Material, Section A.1, About Proofs, Ex. A.7, printed p. 521, PDF p. 533"
created: 2026-08-28
---

# Exercise R199: Factorization into Irreducible Rational Polynomials

## Problem Statement

> [!question] Exercise A.7
> A nonconstant polynomial with rational coefficients is called irreducible if it is not a product of two nonconstant polynomials with rational coefficients. Prove that every polynomial with rational coefficients can be written as a product of irreducible polynomials.

> [!warning] Source issue
> The printed phrase “every polynomial” includes the zero polynomial literally, but $0$ has no factorization into irreducibles. The standard intended statement is for a nonzero polynomial, allowing a nonzero rational constant as a unit factor; a constant polynomial then has an empty irreducible product.

## Hints

> [!hint]- Hint 1
> Induct on degree. If the polynomial is reducible, both nonconstant factors have smaller degree.

## Solution

> [!success]- Solution
> Let $f\in\mathbb Q[x]$ be nonzero. We prove the intended statement by induction on $\deg f$.
>
> A nonzero constant is already a rational unit times an empty product. Now suppose $\deg f>0$. If $f$ is irreducible, there is nothing to prove. If it is reducible, then
>
> $$
> f=gh
> $$
>
> with $g,h\in\mathbb Q[x]$ nonconstant. Both degrees are strictly smaller than $\deg f$. By induction, each of $g$ and $h$ is a rational unit times a finite product of irreducible polynomials. Multiplying the two factorizations gives one for $f$.
>
> Thus every nonzero rational polynomial factors into finitely many irreducibles, up to a nonzero rational unit. This proves existence, not uniqueness.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Mathematical Induction and Peano Arithmetic|Mathematical Induction and Peano Arithmetic]]

## Notes

- **Routing:** Ring Theory is primary because the exercise establishes existence of irreducible factorizations in $\mathbb Q[x]$.
- **Method boundary:** Degree induction proves existence only; uniqueness requires additional divisibility results.
- **Source status:** [S1, Appendix, §A.1, Ex. A.7, printed p. 521, PDF p. 533]. The printed boundary issue is preserved above; the corrected standard statement is proved independently.
