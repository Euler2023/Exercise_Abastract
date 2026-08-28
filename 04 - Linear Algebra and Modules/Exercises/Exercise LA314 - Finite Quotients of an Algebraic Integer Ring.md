---
title: "Exercise LA314: Finite Quotients of an Algebraic-Integer Ring"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - algebraic-integers
  - quotient-modules
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 1, Modules, Ex. 1.3, printed p. 437, PDF p. 449"
created: 2026-08-28
---

# Exercise LA314: Finite Quotients of an Algebraic-Integer Ring

## Problem Statement

> [!question] Exercise 1.3 — printed statement
> Let $R=\mathbb Z[\alpha]$ be the ring generated over $\mathbb Z$ by an algebraic integer $\alpha$. Prove that for any integer $m$, $R/mR$ is finite, and determine its order.

> [!warning] Source issue
> The claim needs $m\ne0$. For $m=0$, the quotient is $R$, which is infinite. The solution below states the corrected nonzero case and separately records $m=0$.

## Hints

> [!hint]- Hint 1
> If the minimal polynomial of $\alpha$ has degree $n$, use $1,\alpha,\ldots,\alpha^{n-1}$ as a $\mathbb Z$-basis.

## Solution

> [!success]- Solution
> Let the monic minimal polynomial of $\alpha$ have degree $n$. Reduction of higher powers by this polynomial shows that
>
> $$
> R=\mathbb Z[\alpha]
> $$
>
> is generated over $\mathbb Z$ by $1,\alpha,\ldots,\alpha^{n-1}$. Their linear independence follows from minimality, so they form a $\mathbb Z$-basis. Hence, for $m\ne0$,
>
> $$
> R/mR\cong(\mathbb Z/m\mathbb Z)^n
> $$
>
> as abelian groups. Therefore
>
> $$
> \boxed{|R/mR|=|m|^n\qquad(m\ne0).}
> $$
>
> For $m=\pm1$, this gives the one-element quotient. For $m=0$, one has $R/0R=R$, an infinite group.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]
- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]

## Notes

- **Routing:** Module Theory is primary because the quotient is computed from the finite-rank free $\mathbb Z$-module structure of $R$.
- **Source issue status:** The word “any” and the $m=0$ counterexample are both recorded explicitly; no silent restriction was made.
- **Source status:** [S1, Ch. 14, §14.1, Ex. 1.3, printed p. 437, PDF p. 449].
