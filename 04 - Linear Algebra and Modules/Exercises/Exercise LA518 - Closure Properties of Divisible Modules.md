---
title: "Exercise LA518: Closure Properties of Divisible Modules"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 22, printed p. 830, PDF p. 845"
created: 2026-09-29
---

# Exercise LA518: Closure Properties of Divisible Modules

## Problem Statement

> [!question] Lang XX.22
> Show that a factor module, direct summand, direct product, and direct sum of divisible modules are divisible.

## Hints

> [!hint]- Hint 1
> Fix a nonzero scalar and solve the division equation before passing to a quotient.

> [!hint]- Hint 2
> For a direct sum, choose zero in all components outside the finite support.

## Solution

> [!success]- Independent derivation
> Work over a domain $A$ with the divisibility convention of XX.19: $aM=M$ for every $a\ne0$. The same proof applies if a specified multiplicative set of scalars is used.
>
> For a quotient $M/N$ and $m+N$, choose $x\in M$ with $ax=m$; then $a(x+N)=m+N$. Thus a quotient of a divisible module is divisible.
>
> If $M=P\oplus Q$ is divisible and $p\in P$, choose $x\in M$ with $ax=p$. Projection gives $a\pi_P(x)=p$, so $P$ is divisible.
>
> For a product $\prod_iM_i$, solve $ax_i=m_i$ in every component. The tuple $(x_i)$ solves the required equation; this uses choice for arbitrary families.
>
> For a direct sum $\bigoplus_iM_i$, an element $(m_i)$ has finite support. Choose solutions on that finite set and set $x_i=0$ elsewhere. This is an element of the direct sum and satisfies the division equation.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Injective Modules and Baer Criterion]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules]]

## Notes

- **Source status:** [S2, Ch. XX, Ex. 22, printed p. 830, PDF p. 845]. The original page image was checked; the solution above is an independent derivation.
- Divisibility for abelian groups is the case $A=\mathbb Z$.
