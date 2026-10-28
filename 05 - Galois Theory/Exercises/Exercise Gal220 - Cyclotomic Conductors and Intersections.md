---
title: "Exercise Gal220: Cyclotomic Conductors and Intersections"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.3, Exercise 9.3.5, printed p. 390, PDF p. 402"
source_refs:
  - "S7/ch-9/sec-3/ex-5"
created: 2026-10-28
---

# Exercise Gal220: Cyclotomic Conductors and Intersections

## Problem Statement

> [!question] Original Exercise 9.3.5
> Suppose $\rho:G_{\mathbb Q}\longrightarrow\mathbb C^*$ factors through both $\operatorname{Gal}(\mathbb Q(\mu_N)/\mathbb Q)$ and $\operatorname{Gal}(\mathbb Q(\mu_{N'})/\mathbb Q)$. Show it factors through $\operatorname{Gal}(\mathbb Q(\mu_n)/\mathbb Q)$ where $n=\gcd(N,N')$. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Work in the common cyclotomic quotient at $L=\operatorname{lcm}(N,N')$.

> [!hint]- Hint 2
> Prime by prime, the subgroups that are $1$ modulo the two prime powers are nested.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Set $L=\operatorname{lcm}(N,N')$. In $A=(\mathbb Z/L\mathbb Z)^*$ let $K_m$ be the kernel of reduction to $(\mathbb Z/m\mathbb Z)^*$ for $m\mid L$. The character on $A$ obtained from $\rho$ is trivial on both $K_N$ and $K_{N'}$, hence on their generated subgroup. Under Chinese remaindering, $A$ is the product of the unit groups for the prime-power divisors $r^c\Vert L$. If $r^a\Vert N$ and $r^b\Vert N'$ (allow exponent zero), the two local kernels are nested congruence subgroups, and their product is the kernel of reduction modulo $r^{\min(a,b)}$. The global product is therefore $K_n$. Reduction of unit groups modulo a divisor is onto, as follows from the same prime-power description. Consequently the character descends to $A/K_n\cong(\mathbb Z/n\mathbb Z)^*$, yielding the required factorization.
>
> Equivalently this proves $\mathbb Q(\mu_N)\cap\mathbb Q(\mu_{N'})=\mathbb Q(\mu_n)$ by finite Galois correspondence. The argument includes the cases where the conductors have redundant factors of two; no naive equality between conductor and a chosen modulus is needed.

## Related Concepts

- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
