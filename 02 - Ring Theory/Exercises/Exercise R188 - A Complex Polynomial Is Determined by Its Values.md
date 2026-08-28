---
title: "Exercise R188: A Complex Polynomial Is Determined by Its Values"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-identities
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 3, Identities, Ex. 3.1, printed p. 437, PDF p. 449"
created: 2026-08-28
---

# Exercise R188: A Complex Polynomial Is Determined by Its Values

## Problem Statement

> [!question] Exercise 3.1
> Let $\widetilde f$ denote the function on $\mathbb C^n$ defined by evaluation of a formal complex polynomial $f(x_1,\ldots,x_n)$. Prove that if $\widetilde f$ is the zero function, then $f$ is the zero polynomial.

## Hints

> [!hint]- Hint 1
> Induct on the number of variables, viewing $f$ as a polynomial in $x_n$ whose coefficients lie in $\mathbb C[x_1,\ldots,x_{n-1}]$.

## Solution

> [!success]- Solution
> For $n=1$, a nonzero polynomial of degree $d$ over the field $\mathbb C$ has at most $d$ roots, so it cannot vanish everywhere.
>
> Assume the assertion for $n-1$ variables and write
>
> $$
> f(x_1,\ldots,x_n)=\sum_{j=0}^d g_j(x_1,\ldots,x_{n-1})x_n^j.
> $$
>
> Fix any $a=(a_1,\ldots,a_{n-1})\in\mathbb C^{n-1}$. The one-variable polynomial
>
> $$
> f(a_1,\ldots,a_{n-1},x_n)
> $$
>
> vanishes for every $x_n\in\mathbb C$, hence is the zero polynomial. Therefore $g_j(a)=0$ for every $j$. As $a$ was arbitrary, each $g_j$ defines the zero function on $\mathbb C^{n-1}$, so the induction hypothesis gives $g_j=0$. Thus $f=0$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Notes

- **Routing:** Ring Theory is primary because formal polynomials and evaluation homomorphisms are the central tools.
- **Hypothesis boundary:** The proof works over every infinite integral domain. It fails over finite fields, where a nonzero polynomial such as $x^p-x$ vanishes at every element of $\mathbb F_p$.
- **Source status:** [S1, Ch. 14, §14.3, Ex. 3.1, printed p. 437, PDF p. 449]. The induction is independent.
