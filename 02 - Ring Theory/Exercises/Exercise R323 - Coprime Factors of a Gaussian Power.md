---
title: "Exercise R323: Coprime Factors of a Gaussian Power"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §1, Exercise 2, printed p. 5, PDF p. 24"
created: 2026-09-29
---

# Exercise R323: Coprime Factors of a Gaussian Power

## Problem Statement

> [!question] Neukirch I.1.2
> Show that, in the ring $\mathbb Z[i]$, the relation $\alpha\beta=\varepsilon\gamma^n$, for $\alpha,\beta$ relatively prime numbers and $\varepsilon$ a unit, implies $\alpha=\varepsilon'\xi^n$ and $\beta=\varepsilon''\eta^n$, with $\varepsilon',\varepsilon''$ units.

## Hints

> [!hint]- Hint 1
> First separate the case $\alpha\beta=0$. For nonzero elements, factor in the Gaussian unique factorization domain.

> [!hint]- Hint 2
> For each Gaussian prime $\pi$, the sum of its exponents in $\alpha$ and $\beta$ is a multiple of $n$. Coprimality means at most one of those exponents is nonzero.

## Solution

> [!success]- Independent derivation
> We take $n$ to be a positive integer, as intended by the power notation. The ring $\mathbb Z[i]$ is Euclidean and hence a UFD, by the source's Proposition (1.2), printed pp. 1-2 / PDF pp. 20-21. Relatively prime means that every common divisor is a unit.
>
> **Zero case.** If $\alpha\beta=0$, the integral-domain property gives $\alpha=0$ or $\beta=0$. If $\alpha=0$, then $\beta$, being a common divisor of $0$ and $\beta$, must be a unit. Take $\xi=0$, $\eta=1$, $\varepsilon'=1$, and $\varepsilon''=\beta$. The case $\beta=0$ is symmetric. Both cannot vanish because a nonunit, such as $1+i$, would then be a common divisor.
>
> **Nonzero case.** Fix representatives of the Gaussian primes up to associates. Write
> $$
> \alpha=u\prod_\pi\pi^{a_\pi},\qquad
> \beta=v\prod_\pi\pi^{b_\pi},\qquad
> \gamma=w\prod_\pi\pi^{c_\pi},
> $$
> where $u,v,w$ are units, all exponents are nonnegative integers, and only finitely many are nonzero. Unique factorization applied to $\alpha\beta=\varepsilon\gamma^n$ gives
> $$
> a_\pi+b_\pi=nc_\pi
> $$
> for every $\pi$. Coprimality gives $\min(a_\pi,b_\pi)=0$. Thus the nonzero member of $a_\pi,b_\pi$, if there is one, equals $nc_\pi$, so both exponents are divisible by $n$.
>
> Consequently
> $$
> \xi=\prod_\pi\pi^{a_\pi/n},\qquad
> \eta=\prod_\pi\pi^{b_\pi/n}
> $$
> lie in $\mathbb Z[i]$, and $\alpha=u\xi^n$, $\beta=v\eta^n$. Taking $\varepsilon'=u$ and $\varepsilon''=v$ proves the assertion, including the case in which either product is empty.

## Related Concepts

- [[02 - Ring Theory/Concepts/Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Integral Domains]]
- [[02 - Ring Theory/Exercises/Exercise R322 - The Norm Criterion for Gaussian Units]]

## Notes

- **Source status:** [S4, Ch. I, §1, Ex. 2, printed p. 5, PDF p. 24]. The original statement was visually checked; the derivation above is independent.
- **Convention:** The source does not explicitly specify the range of $n$. This note uses $n\ge1$, the positive-integer power convention, and handles zero factors separately.
- **Proof input:** Gaussian unique factorization is proved in the source's Proposition (1.2), printed pp. 1-2 / PDF pp. 20-21. The exercise's conclusion follows by the exponent argument above.
- **Method boundary:** The unit factors cannot generally be removed. For example, with $n=2$, $\alpha=i$, $\beta=1$, $\gamma=1$, and $\varepsilon=i$, the hypotheses hold but $i$ is not a Gaussian square: $(a+bi)^2=i$ would require $2ab=1$.
- **Routing:** This is a coprimality and prime-factor-exponent argument in a UFD; the same proof applies to any UFD.
