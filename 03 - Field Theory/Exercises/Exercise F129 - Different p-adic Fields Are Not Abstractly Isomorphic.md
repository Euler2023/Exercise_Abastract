---
title: 'Exercise F129: Different p-adic Fields Are Not Abstractly Isomorphic'
topic: field-theory
difficulty: advanced
status: not-started
tags:
- exercise
- field-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §2, Exercise 6, printed p. 115, PDF p. 134
source_refs:
- S4/ch-II/sec-2/ex-6
created: '2026-10-23'
---

# Exercise F129: Different p-adic Fields Are Not Abstractly Isomorphic

## Problem Statement

> [!question] Neukirch II.2.6
> The fields $\mathbb Q_p$ and $\mathbb Q_q$ are not isomorphic, unless $p=q$.

## Hints

> [!hint]- Hint 1
> An abstract field isomorphism fixes every rational number. Find a rational polynomial equation solvable for every $x\in\mathbb Z_p$ but not for $x=1/q$ over $\mathbb Q_q$.

> [!hint]- Hint 2
> Choose an integer $c$ divisible by $p$ (by $8$ if $p=2$) and a nonsquare unit at $q$. Examine $y^2=1+cx^2$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> Suppose $p\ne q$. Choose an integer $c$ by the Chinese remainder theorem as follows: require $p\mid c$ if $p$ is odd, or $8\mid c$ if $p=2$. At an odd $q$, require $c\bmod q$ to be a nonzero nonsquare. If $q=2$ (so $p$ is odd), require $c\equiv3\pmod8$. These conditions involve coprime moduli and hence have a common solution.
>
> For every $x\in\mathbb Z_p$, $1+cx^2$ is a square in $\mathbb Q_p$. For odd $p$, construct a square root starting at $1$ modulo $p$ and lift one digit at a time: if $y_n^2\equiv1+cx^2\pmod{p^n}$, the next digit is the unique solution of a linear congruence with coefficient $2y_n$ nonzero modulo $p$. At $p=2$, every $A\equiv1\pmod8$ has a square root: starting at $y_2=1$, maintain $y_n^2\equiv A\pmod{2^{n+1}}$ and choose $y_{n+1}=y_n+t2^n$, $t\in\{0,1\}$, so that $y_nt\equiv(A-y_n^2)/2^{n+1}\pmod2$. Then $y_{n+1}^2\equiv A\pmod{2^{n+2}}$. Compatible roots define a root in the inverse limit.
>
> An isomorphism $\sigma:\mathbb Q_p\to\mathbb Q_q$ fixes $c$ and $1/q$. Since $1/q\in\mathbb Z_p$, the preceding solvability would imply that $1+c/q^2$ is a square in $\mathbb Q_q$, or equivalently that $q^2+c$ is a square there. At odd $q$, $q^2+c$ is a unit with nonsquare residue. A square unit has square residue, so this is impossible. At $q=2$, $4+c\equiv7\pmod8$, whereas every odd square is $1$ modulo $8$. This is again impossible. Thus no abstract isomorphism exists; no continuity assumption was used.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §2, Exercise 6, printed p. 115, PDF p. 134].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
- The root-lifting argument explicitly handles 2; an appeal only to continuous isomorphisms would not answer this exercise.
