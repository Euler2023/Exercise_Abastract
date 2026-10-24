---
title: "Exercise R345: Counting Integral Ideals of a Given Norm"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §6, Exercise 1, printed p. 38, PDF p. 57"
created: 2026-10-20
---

# Exercise R345: Counting Integral Ideals of a Given Norm

## Problem Statement

> [!question] Neukirch I.6.1
> How many integral ideals $\mathfrak a$ are there with the given norm $\mathfrak N(\mathfrak a)=n$?

## Hints

> [!hint]- Hint 1: Factor the integer and the ideals
> Write $n=\prod_p p^{a_p}$. For each rational prime $p\mid n$, list the distinct primes $\mathfrak p_{p,1},\ldots,\mathfrak p_{p,g_p}$ above $p$ and their residue degrees $f_{p,i}$.

> [!hint]- Hint 2: Translate the norm condition
> If $\mathfrak a$ has exponent $v_{p,i}\ge0$ at $\mathfrak p_{p,i}$, its $p$-part of the norm is $p^{\sum_i f_{p,i}v_{p,i}}$.

> [!hint]- Hint 3: Count independent exponent choices
> For each $p$, count the nonnegative integer solutions of $\sum_i f_{p,i}v_i=a_p$, then multiply over the different rational primes.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
>
> Fix the number field $K$ and take $n\ge1$; the ideals counted are nonzero integral ideals. Factor
> $$
> n=\prod_{p\mid n}p^{a_p},\qquad
> p\mathcal O_K=\prod_{i=1}^{g_p}\mathfrak p_{p,i}^{e_{p,i}},\qquad
> \mathfrak N(\mathfrak p_{p,i})=p^{f_{p,i}}.
> $$
> The source inputs are unique prime-ideal factorization in $\mathcal O_K$ and the multiplicativity of the absolute ideal norm, Proposition (6.1). Thus every counted ideal has a unique factorization
> $$
> \mathfrak a=\prod_{p\mid n}\prod_{i=1}^{g_p}\mathfrak p_{p,i}^{v_{p,i}},\qquad v_{p,i}\ge0.
> $$
> No prime above a rational prime outside $n$ can occur: its norm is a positive power of that rational prime and would divide $\mathfrak N(\mathfrak a)$. The norm condition is exactly
> $$
> \sum_{i=1}^{g_p} f_{p,i}v_{p,i}=a_p\quad\text{for each }p\mid n.
> $$
> Conversely every family of such exponent vectors defines a unique integral ideal of norm $n$. Choices for different $p$ are independent. Consequently the exact answer is
> $$
> \boxed{\displaystyle
> a_K(n)=\prod_{p\mid n}
> \#\left\{(v_1,\ldots,v_{g_p})\in\mathbb Z_{\ge0}^{g_p}:\sum_i f_{p,i}v_i=a_p\right\}.}
> $$
> Equivalently, a finite coefficient calculation gives
> $$
> a_K(n)=\prod_{p\mid n}[T^{a_p}]\prod_{i=1}^{g_p}(1-T^{f_{p,i}})^{-1}.
> $$
> Indeed each geometric series chooses the exponent of one prime ideal. The sets are finite because $0\le v_i\le a_p/f_{p,i}$. The empty product gives $a_K(1)=1$, corresponding to $\mathcal O_K$.
>
> For a quadratic field, a split prime gives $a_K(p^a)=a+1$, an inert prime gives $1$ when $a$ is even and $0$ when $a$ is odd, and a ramified prime gives $1$. These follow respectively from the residue-degree lists $(1,1)$, $(2)$, and $(1)$. Ramification indices do not bound the exponents of an arbitrary ideal, which is why only the residue degrees occur in the formula. For $K=\mathbb Q$, it reduces to the unique ideal $n\mathbb Z$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Norms and Class Groups]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked in [S4, Ch. I, §6, Exercise 1, printed p. 38, PDF p. 57]. No source figure is required.
- **Source inputs and proof status:** Prime factorization is the Dedekind-domain input from §3. The ideal-norm formula and its proof were checked at [S4, Ch. I, §6, Proposition (6.1), printed p. 35, PDF p. 54]; the residue-field norm $p^f$ is used in the proof of (6.3), printed p. 36 / PDF p. 55. The counting formula and quadratic specializations are independent deductions, not a quoted source solution.
- **Scope:** The answer depends on the splitting data of the fixed field. Here $n$ is a positive integer; the zero ideal has no finite index in $\mathcal O_K$.
- **Routing:** Prime-ideal exponents and multiplicative ideal norms supply the computation, so Ring Theory is primary.
