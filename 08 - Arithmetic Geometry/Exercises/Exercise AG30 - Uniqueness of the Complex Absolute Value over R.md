---
title: 'Exercise AG30: Uniqueness of the Complex Absolute Value over R'
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §3, Exercise 1, printed p. 123, PDF p. 142
source_refs:
- S4/ch-II/sec-3/ex-1
created: '2026-10-23'
---

# Exercise AG30: Uniqueness of the Complex Absolute Value over R

## Problem Statement

> [!question] Neukirch II.3.1
> Show that $|z|=(z\bar z)^{1/2}=\sqrt{|N_{\mathbb C/\mathbb R}(z)|}$ is the only valuation of $\mathbb C$ which extends the absolute value $|\ |$ of $\mathbb R$.

## Hints

> [!hint]- Hint 1
> Any such absolute value satisfies $\|i\|=1$.

> [!hint]- Hint 2
> Bound $\|z\|$ by $\sqrt2|z|$, and apply the bound to $z^n$ before taking $n$-th roots.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> Write $\|\ \|$ for an extension of the ordinary real absolute value. Since $i^2=-1$, multiplicativity gives $\|i\|^2=1$ and hence $\|i\|=1$. For $z=a+bi$ the triangle inequality gives
> $$
> \|z\|\le |a|+|b|\le\sqrt2\sqrt{a^2+b^2}=\sqrt2|z|.
> $$
> Apply this to $z^n$: $\|z\|^n\le\sqrt2|z|^n$. Taking $n$-th roots and letting $n\to\infty$ gives $\|z\|\le|z|$. If $z\ne0$, apply that inequality to $z^{-1}$ to get $\|z\|^{-1}\le|z|^{-1}$, so the reverse inequality holds too. Both vanish at zero. Finally the determinant of multiplication by $a+bi$ on the real basis $(1,i)$ is $a^2+b^2=z\bar z$, proving the norm formula and its compatibility with the unique extension.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §3, Exercise 1, printed p. 123, PDF p. 142].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
