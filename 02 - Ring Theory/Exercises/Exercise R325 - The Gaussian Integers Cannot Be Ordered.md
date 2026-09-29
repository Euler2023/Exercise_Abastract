---
title: "Exercise R325: The Gaussian Integers Cannot Be Ordered"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §1, Exercise 4, printed p. 5, PDF p. 24"
created: 2026-09-29
---

# Exercise R325: The Gaussian Integers Cannot Be Ordered

## Problem Statement

> [!question] Neukirch I.1.4
> Show that the ring $\mathbb Z[i]$ cannot be ordered.

## Hints

> [!hint]- Hint 1
> In an ordered integral domain, every nonzero square is positive.

> [!hint]- Hint 2
> Compare the squares $1^2$ and $i^2$.

## Solution

> [!success]- Independent derivation
> Here an ordering means a total order compatible with addition and multiplication: $a<b$ implies $a+c<b+c$, and $0<a$, $0<b$ imply $0<ab$.
>
> In any ring with such an order, if $a\ne0$, totality gives $a>0$ or $a<0$. In the first case $a^2>0$. In the second, $-a>0$, so again $a^2=(-a)^2>0$.
>
> Suppose $\mathbb Z[i]$ admitted an ordering. The nonzero elements $1$ and $i$ would then satisfy
> $$
> 1=1^2>0,\qquad -1=i^2>0.
> $$
> Translating $-1>0$ by $1$ gives $0>1$, contradicting $1>0$. Hence no such ring ordering exists.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Domains]]
- [[02 - Ring Theory/Concepts/Ring Definition]]
- [[03 - Field Theory/Concepts/Ordered and Real Closed Fields]]

## Notes

- **Source status:** [S4, Ch. I, §1, Ex. 4, printed p. 5, PDF p. 24]. The original page image was checked. The argument above is an independent derivation.
- **Meaning of ordered:** The claim excludes a total order compatible with the ring operations. It does not assert that the underlying set has no total order.
- **Proof boundary:** The obstruction is already $i^2=-1$; unique factorization and the classification of Gaussian primes are unnecessary.
- **Routing:** This is an incompatibility between ring multiplication and an ordered-ring structure.
