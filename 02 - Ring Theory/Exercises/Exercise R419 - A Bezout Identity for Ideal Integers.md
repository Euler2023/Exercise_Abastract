---
title: 'Exercise R419: A Bezout Identity for Ideal Integers'
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §7, Exercise 2, printed p. 493, PDF p. 512
source_refs:
- S4/ch-VII/sec-7/ex-2
created: '2026-10-23'
---

# Exercise R419: A Bezout Identity for Ideal Integers

## Problem Statement

> [!question] Neukirch VII.7.2
> Let $\widehat{\mathfrak o}$ be the semigroup of all ideal integers. If $\widetilde d=(a,b)$ is the gcd of $a,b$, then there exist elements $x,y\in\widehat{\mathfrak o}\cup\{0\}$ such that
> $$
> d=xa+yb.
> $$
> Furthermore, we have $x\sim d/a$, resp. $y\sim d/b$, unless $x=0$, resp. $y=0$. Here the notation $\alpha\sim\beta$ means $\alpha\beta^{-1}\in K^*$.

## Hints

> [!hint]- Hint 1
> Divide by $d$. The ideals of $A=a/d$ and $B=b/d$ are coprime.

> [!hint]- Hint 2
> Choose ordinary elements $s\in(A)$ and $t\in(B)$ with $s+t=1$, then put $x=s/A$ and $y=t/B$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> The source constructs a multiplicative group $\widehat K^*$ with a surjective ideal map $a\mapsto(a)$ and exact sequence
> $$
> 1\longrightarrow\mathfrak o^*\longrightarrow\widehat K^*\longrightarrow J\longrightarrow1.
> $$
> Its integral ideal numbers are $\widehat{\mathfrak o}=\{a:(a)\subseteq\mathfrak o\}$, and $a\sim b$ means $a/b\in K^*$. This multiplicative set is not generally a ring. Sums below are formed only among elements in a common $K$-multiple, where ordinary addition is defined.
>
> Put $A=a/d$ and $B=b/d$. By the definition of the ideal-number gcd, $(d)=(a)+(b)$, so $(A)$ and $(B)$ are integral ideals and
> $$
> (A)+(B)=\mathfrak o.
> $$
> Choose ordinary algebraic integers $s\in(A)$, $t\in(B)$ with $s+t=1$. If $s\ne0$, set $x=s/A$; since $(s)\subseteq(A)$, the ideal $(x)=(s)(A)^{-1}$ is integral, so $x\in\widehat{\mathfrak o}$. Moreover $x/(d/a)=s\in K^*$, proving $x\sim d/a$. If $s=0$, set $x=0$. Define $y=t/B$ or $0$ in the same way. Then
> $$
> xa=\frac{s}{a/d}\,a=sd,\qquad yb=td,
> $$
> including zero terms. Both summands belong to the same one-dimensional $K$-multiple $dK$, so their addition is meaningful, and
> $$
> xa+yb=(s+t)d=d.
> $$
> This proves the equality and both stated equivalence conditions without assuming that the ideal integers form a ring.
>
> When $a=b=d$, take $s=1,t=0$ to obtain $x=1,y=0$. Over $K=\mathbb Q$, $a=6,b=10,d=2$, the ordinary Bezout choice $x=2,y=-1$ gives $12-10=2$; negative ordinary integers are permitted because integrality is an ideal condition, not positivity.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Hecke Characters and Their Finite and Infinite Parts|Hecke Characters and Their Finite and Infinite Parts]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]

## Notes

- **Source status:** Every qualification, including the two zero exceptions and the meaning of $\sim$, was visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §7, Exercise 2, printed p. 493, PDF p. 512]. The ideal-number construction and all notations were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §7, Proposition (7.1) and following definitions, printed pp. 485–486, PDF pp. 504–505]; the residue classes and Proposition (7.3) at [printed p. 487, PDF p. 506]. The source's hats denote ideal numbers, not a completion. No source figure is required.
- **Proof scope:** Independent coprime-ideal argument. The ordinary ideal equality $(A)+(B)=\mathfrak o$ supplies the two ordinary coefficients, after which their ideal-number quotients are proved integral.
