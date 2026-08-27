---
title: "Exercise R98: A Unit-Ideal Certificate for Three Polynomials"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - ideals
  - polynomial-systems
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §9, Ex. 9.12, printed p. 358, PDF p. 370"
created: 2026-08-27
---

# Exercise R98: A Unit-Ideal Certificate for Three Polynomials

## Problem Statement

> [!question] Exercise 9.12
> Prove in two ways that
>
> $$
> f_1=t^2+x^2-2,\qquad f_2=tx-1,\qquad f_3=t^3+5tx^2+1
> $$
>
> generate the unit ideal in $\mathbb C[x,y]$: show that they have no common zeros, and write $1$ as a polynomial linear combination of them.

> [!warning] Source notation issue
> The printed problem names the ambient ring $\mathbb C[x,y]$ but writes all three polynomials in the variables $t,x$. The intended ambient ring is therefore interpreted as $\mathbb C[t,x]$ below; no polynomial is otherwise changed.

## Hints

> [!hint]- Hint 1
> From $tx=1$ and $t^2+x^2=2$, derive $(t^2-1)^2=0$.

## Solution

> [!success]- Solution
> If $(t,x)$ were a common zero, then $tx=1$. Substituting $x=t^{-1}$ into $t^2+x^2=2$ gives
>
> $$
> (t^2-1)^2=0,
> $$
>
> so $t=x=1$ or $t=x=-1$. But $f_3(1,1)=7$ and $f_3(-1,-1)=-5$, a contradiction. Thus there is no common zero.
>
> An explicit algebraic certificate is
>
> $$
> 1=A f_1+B f_2+C f_3,
> $$
>
> where
>
> $$
> A=\frac{12t^3-142t^2-340tx+47t}{1225},
> $$
>
> $$
> B=\frac{48t^2x+272t^2-568tx+48t+68x-1248}{1225},
> $$
>
> $$
> C=\frac{-12t^2+142t+68x-23}{1225}.
> $$
>
> Direct expansion verifies the identity, so the three polynomials generate $(1)$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Computational verification:** The displayed exact rational certificate was checked by symbolic expansion; the polynomial identity itself is a complete algebraic proof.
- **Source issue:** The ambient-variable mismatch is preserved and resolved explicitly above rather than silently corrected.
- **Source status:** The problem is from [S1, Ch. 11, §9, Ex. 9.12, printed p. 358, PDF p. 370]. The certificate is independently derived and is not printed in the source.
