---
title: "Exercise R115: Formal Power Series over the Reals Form a UFD"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - formal-power-series
  - unique-factorization
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 2, Unique Factorization Domains, Ex. 2.10, printed p. 379, PDF p. 391"
created: 2026-08-28
---

# Exercise R115: Formal Power Series over the Reals Form a UFD

## Problem Statement

> [!question] Exercise 2.10
> Prove that the ring $\mathbb R[[t]]$ of formal power series (Chapter 11, Exercise 2.2) is a unique factorization domain.

## Hints

> [!hint]- Hint 1
> A formal series is a unit exactly when its constant coefficient is nonzero.

> [!hint]- Hint 2
> Factor a nonzero series according to the first exponent with nonzero coefficient.

## Solution

> [!success]- Solution
> A series
>
> $$
> u(t)=a_0+a_1t+a_2t^2+\cdots
> $$
>
> is a unit in $\mathbb R[[t]]$ exactly when $a_0\neq0$. Indeed, if $u(t)v(t)=1$, then the constant terms give $a_0b_0=1$. Conversely, when $a_0\neq0$, define the coefficients of the inverse recursively by
>
> $$
> b_0=a_0^{-1},\qquad
> b_n=-a_0^{-1}\sum_{i=1}^{n}a_i b_{n-i}.
> $$
>
> Now let $0\neq f(t)\in\mathbb R[[t]]$, and let $n$ be the least index for which the coefficient of $t^n$ is nonzero. Then
>
> $$
> f(t)=t^n u(t),
> $$
>
> where $u$ has nonzero constant term and is therefore a unit. The integer $n=\operatorname{ord}_t(f)$ is uniquely determined by $f$, and
>
> $$
> \operatorname{ord}_t(fg)
> =\operatorname{ord}_t(f)+\operatorname{ord}_t(g).
> $$
>
> In particular, $t$ is irreducible: if $t=ab$, the two nonnegative orders add to $1$, so one factor has order $0$ and is a unit. Conversely, every irreducible is associated to $t$, because a nonzero nonunit is $t^nu$ with $n\ge1$, and it is reducible when $n\ge2$.
>
> Thus every nonzero nonunit factors as a unit times a power of the irreducible $t$, and the exponent is uniquely its $t$-order. This proves unique factorization.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Notes

- **Routing:** Ring Theory is primary because units, irreducibles, and factorization in a formal-series ring are the essential tools.
- **Generalization:** The same proof works for $F[[t]]$ over any field $F$.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.2, Ex. 2.10, printed p. 379, PDF p. 391]. The proof is independent.

