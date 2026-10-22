---
title: 'Exercise R378: The Chinese Remainder and Valuation Approximation Theorems'
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §3, Exercise 2, printed p. 123, PDF p. 142
source_refs:
- S4/ch-II/sec-3/ex-2
created: '2026-10-23'
---

# Exercise R378: The Chinese Remainder and Valuation Approximation Theorems

## Problem Statement

> [!question] Neukirch II.3.2
> What is the relation between the Chinese remainder theorem and the approximation theorem (3.4)?

## Hints

> [!hint]- Hint 1
> For a discrete valuation, a sufficiently small ball is a congruence class modulo a prime power.

> [!hint]- Hint 2
> Clear the denominators of prescribed elements of a number field before applying the ideal version of CRT.

## Solution

> [!success]- Independent derivation and stated source corrections
> For distinct nonzero primes $\mathfrak p_i$ of a Dedekind domain $A$ with fraction field $K$, the valuation inequality $v_i(x-a_i)\ge N_i$ is a congruence modulo $\mathfrak p_i^{N_i}$ when $x,a_i\in A$. The prime powers are pairwise comaximal, and CRT produces an integral $x$ satisfying all the inequalities.
>
> For arbitrary $a_i\in K$, choose $0\ne d\in A$ with $da_i\in A$. Choose integers $M_i\ge0$ with $M_i-v_i(d)\ge N_i$. CRT produces $y\in A$ such that $y-da_i\in\mathfrak p_i^{M_i}$ for all $i$. Then $x=y/d$ satisfies the requested approximation. Thus (3.4) for this finite family of nonarchimedean prime valuations follows from CRT; varying $N_i$ gives any prescribed positive error bounds.
>
> In the familiar case $A=\mathbb Z$, one can also recover CRT from weak approximation without silently assuming the rational approximant integral. Given $a_i\in\mathbb Z$ and prime powers $p_i^{N_i}$, approximation gives a rational $x=b/d$ in lowest terms with $v_{p_i}(x-a_i)\ge N_i$. This forces $p_i\nmid d$. Put $M=\prod p_i^{N_i}$. Bézout supplies $u$ with $ud\equiv1\pmod M$. The integer $ub$ is congruent to $a_i$ modulo every $p_i^{N_i}$, as required.
>
> The general theorem (3.4), whose statement is printed p. 117 / PDF p. 136, permits arbitrary pairwise inequivalent valuations, including archimedean ones; these latter conditions are not ideal congruences. CRT explains its nonarchimedean congruence form, while the theorem extends that approximation principle beyond ideals. Weak approximation alone does not assert that an approximant has no poles at places outside the specified finite set.

## Related Concepts

- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §3, Exercise 2, printed p. 123, PDF p. 142].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
