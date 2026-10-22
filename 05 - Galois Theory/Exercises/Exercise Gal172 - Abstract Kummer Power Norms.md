---
title: 'Exercise Gal172: Abstract Kummer Power Norms'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 1, printed p. 305, PDF p. 324
source_refs:
- S4/ch-IV/sec-6/ex-1
created: '2026-10-23'
---

# Exercise Gal172: Abstract Kummer Power Norms

## Problem Statement

> [!question] Neukirch IV.§6, Exercise 1
> Let $n$ be a natural number, and assume the group $\mu_n=\{\xi\in A\mid\xi^n=1\}$ is cyclic of order $n$, and $A\subseteq A^n$. Let $K$ be a field such that $\mu_n\subseteq A_K$, and let $L/K$ be the maximal abelian extension of exponent $n$. If $L/K$ is finite, then one has $N_{L/K}A_L=A_K^n$.

## Hints

> [!hint]- Hint 1 — first step
> Write down the exponents of the two quotients $A_K/A_K^n$ and $A_K/N_{L/K}A_L$ before comparing their sizes.

> [!hint]- Hint 2 — proof route
> One inclusion follows because the reciprocity quotient has exponent dividing $n$. Compare the two finite indices using Kummer duality.

## Solution

> [!success]- 独立推导
> 因 $A^n\subseteq A$ 总成立，题设 $A\subseteq A^n$ 即 $n$-可除性。Kummer 理论给
> $$
> A_K/A_K^n\cong\operatorname{Hom}(G(L/K),\mu_n).
> $$
> 这里最大 exponent 整除 $n$ 的阿贝尔扩张吸收全部阶整除 $n$ 的连续特征；$L/K$ 有限保证两边为有限群。
> 本章互反同构给 $A_K/N_{L/K}A_L\cong G(L/K)$。其 exponent 整除 $n$，所以 $A_K^n\subseteq N_{L/K}A_L$。另一方面，有限阿贝尔群 $G(L/K)$ 的 exponent 整除 $n$，因此其 $\mu_n$-对偶与它同阶。于是
> $$
> [A_K:A_K^n]=|\operatorname{Hom}(G(L/K),\mu_n)|
> =|G(L/K)|=[A_K:N_{L/K}A_L].
> $$
> 已包含的两个有限指数子群指数相同，故相等。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Theory]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Class Field Theory Context]]

## Notes

题面已与原书200 dpi页面图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 1, printed p.305, PDF p.324]。解答为独立推导，沿用本章的抽象域、连续离散 $G$-模、限制与范数约定。“exponent $n$”按本章对应理解为 exponent 整除 $n$；有限性是比较阶数时的实际假设。
