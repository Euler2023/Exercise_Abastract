---
title: "Exercise R118: Gauss's Lemma over Euclidean Domains"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - gauss-lemma
  - primitive-polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 3, Gauss's Lemma, Ex. 3.3, printed p. 379, PDF p. 391"
created: 2026-08-28
---

# Exercise R118: Gauss's Lemma over Euclidean Domains

## Problem Statement

> [!question] Exercise 3.3
> State and prove a version of Gauss's Lemma for Euclidean domains.

## Hints

> [!hint]- Hint 1
> Call a polynomial primitive when the greatest common divisor of its coefficients is a unit.

> [!hint]- Hint 2
> If an irreducible $\pi$ divided every coefficient of a product, reduce both factors modulo $(\pi)$.

## Solution

> [!success]- Solution
> **Gauss's Lemma over a Euclidean domain.** Let $R$ be a Euclidean domain, and call $f\in R[x]$ primitive if no nonunit of $R$ divides all of its coefficients. If $f$ and $g$ are primitive, then $fg$ is primitive.
>
> Because every Euclidean domain is a PID and hence a UFD, every nonunit has an irreducible divisor, and every irreducible element $\pi$ is prime. Suppose for contradiction that $fg$ is not primitive. Then some irreducible $\pi\in R$ divides every coefficient of $fg$.
>
> Reduce coefficients modulo $(\pi)$. Since $\pi$ is prime, $R/(\pi)$ is an integral domain. Primitivity says that not every coefficient of either $f$ or $g$ is divisible by $\pi$, so their reductions $\overline f$ and $\overline g$ are both nonzero in $(R/(\pi))[x]$. But all coefficients of $fg$ are divisible by $\pi$, so
>
> $$
> \overline f\,\overline g=0.
> $$
>
> This contradicts the fact that a polynomial ring over an integral domain is an integral domain. Hence $fg$ is primitive.
>
> Equivalently, if $c(h)$ denotes a greatest common divisor of the coefficients of $h$, defined up to a unit, then
>
> $$
> c(fg)\sim c(f)c(g),
> $$
>
> where $\sim$ denotes association in $R$. In particular, if $K$ is the fraction field of $R$, a primitive positive-degree polynomial is irreducible in $R[x]$ exactly when it is irreducible in $K[x]$: any factorization over $K$ can be cleared of denominators and normalized into primitive factors, and the content formula forces the remaining scalar to be a unit.

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Routing:** Ring Theory is primary because the result transfers divisibility and irreducibility between $R[x]$ and the polynomial ring over its fraction field.
- **Hypotheses:** The proof uses that a Euclidean domain is a PID, hence irreducibles are prime. The same lemma holds more generally for every UFD.
- **Source status:** The exercise is stated in [S1, Ch. 12, §12.3, Ex. 3.3, printed p. 379, PDF p. 391]. The general statement and proof here are independent.

