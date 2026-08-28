---
title: "Exercise R114: Laurent Polynomial Rings Are Principal Ideal Domains"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - laurent-polynomials
  - principal-ideal-domains
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 2, Unique Factorization Domains, Ex. 2.9, printed p. 379, PDF p. 391"
created: 2026-08-28
---

# Exercise R114: Laurent Polynomial Rings Are Principal Ideal Domains

## Problem Statement

> [!question] Exercise 2.9
> Let $F$ be a field. Prove that the ring $F[x,x^{-1}]$ of Laurent polynomials (Chapter 11, Exercise 5.7) is a principal ideal domain.

## Hints

> [!hint]- Hint 1
> Intersect a nonzero ideal of the Laurent polynomial ring with $F[x]$.

> [!hint]- Hint 2
> Multiplication by a sufficiently large power of the unit $x$ turns any Laurent polynomial into an ordinary polynomial.

## Solution

> [!success]- Solution
> Let $L=F[x,x^{-1}]$ and let $I\neq(0)$ be an ideal of $L$. Choose $0\neq h\in I$. For some $n\ge0$, the Laurent polynomial $x^nh$ lies in $F[x]$. Since $x^n\in L$, it also lies in $I$. Hence
>
> $$
> J=I\cap F[x]
> $$
>
> is a nonzero ideal of $F[x]$.
>
> The ring $F[x]$ is a principal ideal domain, so $J=(g)$ for some $g\in F[x]$. Because $g\in J\subseteq I$, the Laurent ideal $(g)_L$ is contained in $I$.
>
> Conversely, take $f\in I$. Choose $m\ge0$ so that $x^mf\in F[x]$. Then
>
> $$
> x^mf\in I\cap F[x]=J=(g),
> $$
>
> so $x^mf=gq$ for some $q\in F[x]$. Since $x$ is a unit in $L$,
>
> $$
> f=g(x^{-m}q)\in(g)_L.
> $$
>
> Therefore $I=(g)_L$. Every nonzero ideal is principal, and $L$ is an integral domain because it is a subring of $F(x)$. Thus $F[x,x^{-1}]$ is a principal ideal domain.

## Related Concepts

- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]

## Notes

- **Routing:** Ring Theory is primary because the proof classifies ideals after inverting $x$.
- **Alternative approach:** This is also the standard fact that a localization of a PID is again a PID.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.2, Ex. 2.9, printed p. 379, PDF p. 391]. The proof is independent.

