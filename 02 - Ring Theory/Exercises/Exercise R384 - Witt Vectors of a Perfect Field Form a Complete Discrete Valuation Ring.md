---
title: 'Exercise R384: Witt Vectors of a Perfect Field Form a Complete Discrete Valuation Ring'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §4, Exercise 6, printed p. 134, PDF p. 153
source_refs:
- S4/ch-II/sec-4/ex-6
created: '2026-10-23'
---

# Exercise R384: Witt Vectors of a Perfect Field Form a Complete Discrete Valuation Ring

## Problem Statement

> [!question] Neukirch II.4.6
> If $k$ is a perfect field of characteristic $p$, then $W(k)$ is a complete discrete valuation ring with residue class field $k$.

## Hints

> [!hint]- Hint 1
> Perfectness makes $F$ bijective. From $p=VF$ obtain $p^rW(k)=V^rW(k)$.

> [!hint]- Hint 2
> Prove that a vector is a unit exactly when its first coordinate is nonzero. Then factor every nonzero vector into a power of $p$ times a unit.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> The projection $a\mapsto a_0$ is a ring homomorphism $W(k)\to k$, since $S_0=a_0+b_0$ and $P_0=a_0b_0$. Its kernel is $VW(k)$. The coordinate Frobenius is bijective because $k$ is perfect. II.4.5 therefore gives $pW(k)=VW(k)$, and inductively $p^rW(k)=V^rW(k)$. Multiplication by $p=VF$ is injective, since both maps are injective.
>
> An element $a$ with $a_0=0$ cannot be a unit, by projection. If $a_0\ne0$, solve $ab=(1,0,\ldots)$ recursively. Set $b_0=a_0^{-1}$. In the $n$-th Witt multiplication polynomial the coefficient of $b_n$ modulo $p$ is $a_0^{p^n}$, and all other terms depend only on the earlier $b_i$ and given $a_i$: this follows from the triangular ghost equation by isolating $p^nb_n$ and reducing its quotient modulo $p$. Thus the equation for coordinate $n$ has exactly one solution in $k$. This constructs $b$ and proves the unit criterion.
>
> For $a\ne0$, let $r$ be its first nonzero coordinate index. Then $a=V^rb$ with $b_0\ne0$, and, since $F$ commutes with $V$,
> $$
> a=p^rF^{-r}b,
> $$
> where the last factor is a unit. Products of these factorizations show that $W(k)$ is a domain: $p$ is not a zero divisor and units cannot vanish. If $I\ne0$ is an ideal, choose an element with least possible $r$; dividing by its unit shows $p^r\in I$. Every element of $I$ has exponent at least $r$, so $I=p^rW(k)$. Hence this local PID is a DVR, with uniformizer $p$ and residue field $W(k)/pW(k)=k$.
>
> Lastly, $p^rW(k)=V^rW(k)$ consists of vectors whose first $r$ coordinates vanish. A compatible family modulo these ideals fixes successive initial coordinate strings and therefore determines exactly one infinite vector. Thus $W(k)\simeq\varprojlim_rW(k)/p^rW(k)$, proving completeness and separatedness. For $k=\mathbb F_p$ this specializes to $W(k)\cong\mathbb Z_p$; perfectness is essential to identify $VW(k)$ with $pW(k)$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Witt Vectors and Artin-Schreier-Witt Theory|Witt Vectors and Artin-Schreier-Witt Theory]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §4, Exercise 6, printed p. 134, PDF p. 153].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
