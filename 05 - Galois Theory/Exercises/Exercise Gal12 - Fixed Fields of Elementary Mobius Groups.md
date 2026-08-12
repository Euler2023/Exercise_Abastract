---
title: "Exercise Gal12: Fixed Fields of Elementary Mobius Groups"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, fixed-fields]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 5, Ex. 5.1, printed p. 506, PDF p. 518"
created: 2026-08-12
---

# Exercise Gal12: Fixed Fields of Elementary Möbius Groups

## Problem Statement

> [!question] Exercise 5.1
> For automorphisms of $\mathbb C(t)$, determine the generated group and fixed field:
> (a) $t\mapsto t^{-1}$; (b) $t\mapsto it$; (c) $t\mapsto-t,\ t\mapsto t^{-1}$; (d) $t\mapsto\omega t,\ t\mapsto t^{-1}$.

## Hints

> [!hint]- Hint 1
> Average a simple monomial over each orbit.

## Solution

> [!success]- Solution
> In (a) the group is $C_2$, and $t$ satisfies $X^2-(t+t^{-1})X+1$, so the fixed field is $\mathbb C(t+t^{-1})$.
>
> In (b) the group is $C_4$, and the fixed field is $\mathbb C(t^4)$.
>
> In (c) the commuting involutions generate $C_2\times C_2$; the invariant $t^2+t^{-2}$ has orbit-degree $4$, hence the fixed field is $\mathbb C(t^2+t^{-2})$.
>
> In (d) the relations $r^3=s^2=1,\ srs=r^{-1}$ give $D_3\cong S_3$; the invariant $t^3+t^{-3}$ has degree $6$, so the fixed field is $\mathbb C(t^3+t^{-3})$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Fixed Fields|Fixed Fields]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Galois Correspondence]]

## Notes

Degree comparison proves each displayed invariant generates the full fixed field.
