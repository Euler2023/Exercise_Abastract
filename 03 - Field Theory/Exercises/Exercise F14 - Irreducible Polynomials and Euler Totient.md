---
title: "Exercise F14: Irreducible Polynomials and Euler Totient"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - finite-fields
  - euler-totient
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 7, Ex. 7.14, printed p. 474, PDF p. 486"
created: 2026-08-10
---

# Exercise F14: Irreducible Polynomials and Euler Totient

## Problem Statement

> [!question] Exercise
> Find a formula in terms of the Euler $\varphi$ function for the number of irreducible polynomials of degree $n$ over $\mathbb F_p$.

## Hints

> [!hint]- Hint 1
> Classify a nonzero element of $\mathbb F_{p^n}$ by its multiplicative order $d$.

> [!hint]- Hint 2
> Such an element has degree $n$ over $\mathbb F_p$ exactly when the multiplicative order of $p$ modulo $d$ is $n$.

## Solution

> [!success]- Solution
> Let $I_p(n)$ denote the number of monic irreducible polynomials of degree $n$ over $\mathbb F_p$. A nonzero element $\alpha\in\mathbb F_{p^n}$ of multiplicative order $d$ has degree
> $$
> [\mathbb F_p(\alpha):\mathbb F_p]=\operatorname{ord}_d(p),
> $$
> because $\alpha\in\mathbb F_{p^m}$ exactly when $d\mid p^m-1$. The cyclic group $\mathbb F_{p^n}^\times$ contains $\varphi(d)$ elements of order $d$ for each $d\mid p^n-1$. Hence the number of nonzero elements of degree exactly $n$ is
> $$
> \sum_{\substack{d\mid p^n-1\\ \operatorname{ord}_d(p)=n}}\varphi(d).
> $$
> Every monic irreducible polynomial of degree $n$ contributes exactly $n$ Frobenius-conjugate roots. For $n>1$ this gives
> $$
> I_p(n)=\frac1n
> \sum_{\substack{d\mid p^n-1\\ \operatorname{ord}_d(p)=n}}\varphi(d).
> $$
> For $n=1$, one must also count the root $0$, so a uniform formula is
> $$
> I_p(n)=\delta_{n,1}+\frac1n
> \sum_{\substack{d\mid p^n-1\\ \operatorname{ord}_d(p)=n}}\varphi(d).
> $$
> Here $\operatorname{ord}_d(p)$ is the multiplicative order of $p$ modulo $d$, with the harmless convention $\operatorname{ord}_1(p)=1$.
> This agrees with the equivalent Möbius formula
> $$
> I_p(n)=\frac1n\sum_{e\mid n}\mu(e)p^{n/e}.
> $$

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

The first displayed count is the requested Euler-totient formulation. The convention is that irreducible polynomials are monic; counting all nonzero scalar associates multiplies the answer by $p-1$.
