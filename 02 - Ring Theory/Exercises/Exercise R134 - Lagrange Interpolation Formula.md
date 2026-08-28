---
title: "Exercise R134: Lagrange Interpolation Formula"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - interpolation
  - polynomial-evaluation
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 4, Factoring Integer Polynomials, Ex. 4.13, printed p. 380, PDF p. 392"
created: 2026-08-28
---

# Exercise R134: Lagrange Interpolation Formula

## Problem Statement

> [!question] Exercise 4.13 — Lagrange interpolation formula
> **(a)** Let $a_0,\ldots,a_n$ be distinct complex numbers. Determine a polynomial $p(x)$ of degree $n$ which has $a_1,\ldots,a_n$ as roots and such that $p(a_0)=1$.
>
> **(b)** Let $a_0,\ldots,a_d$ and $b_0,\ldots,b_d$ be complex numbers, and suppose that the $a_i$ are distinct. There is a unique polynomial $g$ of degree at most $d$ such that $g(a_i)=b_i$ for each $i=0,\ldots,d$. Determine $g$ explicitly in terms of $a_i$ and $b_i$.

## Hints

> [!hint]- Hint 1
> Normalize the product of the prescribed linear factors in part (a).

> [!hint]- Hint 2
> Build polynomials $L_i$ that equal $1$ at $a_i$ and $0$ at every other interpolation node.

## Solution

> [!success]- Solution
> **(a)** The required normalized product is
>
> $$
> p(x)=
> \prod_{i=1}^{n}\frac{x-a_i}{a_0-a_i}.
> $$
>
> It has degree $n$, vanishes at $a_1,\ldots,a_n$, and satisfies $p(a_0)=1$.
>
> **(b)** For $0\le i\le d$, define the Lagrange basis polynomial
>
> $$
> L_i(x)=
> \prod_{\substack{0\le j\le d\\j\ne i}}
> \frac{x-a_j}{a_i-a_j}.
> $$
>
> The denominators are nonzero because the $a_i$ are distinct, and
>
> $$
> L_i(a_j)=
> \begin{cases}
> 1,&j=i,\\
> 0,&j\ne i.
> \end{cases}
> $$
>
> Therefore
>
> $$
> \boxed{
> g(x)=\sum_{i=0}^{d}b_iL_i(x)
> =
> \sum_{i=0}^{d}b_i
> \prod_{\substack{0\le j\le d\\j\ne i}}
> \frac{x-a_j}{a_i-a_j}
> }.
> $$
>
> This polynomial has degree at most $d$ and takes the prescribed values. If two such polynomials existed, their difference would have the $d+1$ distinct roots $a_0,\ldots,a_d$ while having degree at most $d$, so the difference would be zero. This proves uniqueness.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]

## Notes

- **Routing:** Ring Theory is primary because polynomial evaluation and divisibility determine the construction; the formula also has a linear-algebra interpretation.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.4, Ex. 4.13, printed p. 380, PDF p. 392]. The formula and uniqueness proof are independent.

