---
title: "Exercise R116: Evaluation Kernels at Two Quadratic Numbers"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - evaluation-homomorphisms
  - primitive-polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 3, Gauss's Lemma, Ex. 3.1, printed p. 379, PDF p. 391"
created: 2026-08-28
---

# Exercise R116: Evaluation Kernels at Two Quadratic Numbers

## Problem Statement

> [!question] Exercise 3.1
> Let $\varphi$ denote the homomorphism $\mathbb Z[x]\to\mathbb R$ defined by
>
> **(a)** $\varphi(x)=1+\sqrt2$;
>
> **(b)** $\varphi(x)=\frac12+\sqrt2$.
>
> Is the kernel of $\varphi$ a principal ideal? If so, find a generator.

## Hints

> [!hint]- Hint 1
> Find the primitive integer polynomial of least degree satisfied by each image of $x$.

> [!hint]- Hint 2
> A primitive polynomial that divides an integer polynomial in $\mathbb Q[x]$ already divides it in $\mathbb Z[x]$.

## Solution

> [!success]- Solution
> **(a)** Put $\alpha=1+\sqrt2$. Then
>
> $$
> (\alpha-1)^2=2,
> $$
>
> so $\alpha$ is a root of
>
> $$
> m_1(x)=x^2-2x-1.
> $$
>
> Its discriminant is $8$, which is not a square in $\mathbb Q$, so $m_1$ is irreducible over $\mathbb Q$. If $f\in\mathbb Z[x]$ satisfies $f(\alpha)=0$, minimality implies $m_1\mid f$ in $\mathbb Q[x]$. Since $m_1$ is primitive, Gauss's lemma implies $m_1\mid f$ in $\mathbb Z[x]$. Hence
>
> $$
> \ker\varphi=(x^2-2x-1).
> $$
>
> **(b)** Put $\beta=\frac12+\sqrt2$. From $(\beta-\frac12)^2=2$ we obtain
>
> $$
> m_2(x)=4x^2-4x-7,
> $$
>
> and $m_2(\beta)=0$. The polynomial is primitive, and its discriminant is $128$, not a square in $\mathbb Q$, so it is irreducible over $\mathbb Q$. The same minimal-polynomial and Gauss-lemma argument gives
>
> $$
> \ker\varphi=(4x^2-4x-7).
> $$
>
> Thus both kernels are principal. Each displayed generator is determined up to multiplication by the units $\pm1$ of $\mathbb Z[x]$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Homomorphisms|Ring Homomorphisms]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

- **Routing:** Ring Theory is primary because the goal is to identify ideals of $\mathbb Z[x]$; minimal polynomials provide the field-theoretic input.
- **Key distinction:** The second generator is primitive but not monic because $\frac12+\sqrt2$ is not an algebraic integer.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.3, Ex. 3.1, printed p. 379, PDF p. 391]. The proof is independent.

