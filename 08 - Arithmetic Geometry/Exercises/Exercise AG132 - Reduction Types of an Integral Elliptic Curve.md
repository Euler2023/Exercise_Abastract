---
title: "Exercise AG132: Reduction Types of an Integral Elliptic Curve"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.3, Exercise 8.3.7, printed p. 333, PDF p. 346"
source_refs:
  - "S7/ch-8/sec-3/ex-7"
created: 2026-10-28
---

# Exercise AG132: Reduction Types of an Integral Elliptic Curve

## Problem Statement

> [!question] Original Exercise 8.3.7
> Show that $E:y^2+xy=x^3+x^2+44x+55$ is in global minimal form. What are the primes of good, multiplicative, and additive reduction?

## Hints

> [!hint]- Hint 1
> Compute $b_2,b_4,b_6,b_8$, then factor the discriminant.

> [!hint]- Hint 2
> At a prime with discriminant valuation twelve, use the transformation weight of $c_4$ to rule out lowering the model.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> Here $(a_1,a_2,a_3,a_4,a_6)=(1,1,0,44,55)$. The defining formulas give
> $$
> b_2=5,\quad b_4=88,\quad b_6=220,\quad b_8=-1661,
> $$
> and consequently
> $$
> c_4=-2087,\qquad c_6=-31805,\qquad\Delta=-5845851=-3^{12}\cdot11.
> $$
> These exact invariants and the factorization were also computed independently by symbolic arithmetic.
>
> Only $3$ and $11$ divide the discriminant. At $11$ the discriminant exponent is one, hence cannot be decreased by a positive multiple of twelve. At $3$ the discriminant exponent is twelve, but $c_4=-2087\not\equiv0\pmod3$. A change lowering that exponent would have $\nu_3(u)\ge1$ and hence $c_4'=c_4/u^4$ with negative $3$-adic valuation, impossible for an integral equation. At every other prime the discriminant exponent is zero and already minimal. Thus the equation is globally minimal.
>
> At both $3$ and $11$, $c_4$ is nonzero modulo the prime ($-2087\equiv1\pmod3$ and $\equiv3\pmod{11}$). Their singular reductions are nodal, hence multiplicative. There are no additive primes. Every prime different from $3,11$ gives good reduction.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 333 / PDF p. 346. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Computational verification:** Exact polynomial evaluation gave the displayed invariants, and integer factorization gave $-3^{12}\cdot11$. The minimality argument uses the weights rather than assuming that valuation twelve implies nonminimality.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
