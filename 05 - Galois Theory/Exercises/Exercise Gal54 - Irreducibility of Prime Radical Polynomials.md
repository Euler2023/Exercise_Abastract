---
title: "Exercise Gal54: Irreducibility of Prime Radical Polynomials"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, kummer-extensions]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 11, Ex. 11.2, printed p. 510, PDF p. 522"
created: 2026-08-12
---

# Exercise Gal54: Irreducibility of Prime Radical Polynomials

## Problem Statement

> [!question] Exercise 11.2
> (a) Prove Proposition 16.11.2 without Galois theory. (b) For arbitrary $F$, prove that if $x^p-a$ is reducible in $F[x]$, then it has a root in $F$.

## Hints

> [!hint]- Hint 1
> Multiply a proper subset of the roots and compare its $p$-th power.

## Solution

> [!success]- Solution
> If $F$ contains a primitive $p$-th root $\zeta$ and $\beta^p=a$, every root is $\zeta^j\beta$. A monic factor of degree $r$, $0<r<p$, has constant term $(-1)^r\zeta^m\beta^r\in F$. Raising to the $p$-th power shows $a^r$ is a $p$-th power in $F$. Choose integers $u,v$ with $ur+vp=1$; then $a=(a^r)^u(a^p)^v$ is a $p$-th power, so the polynomial has a root and then splits.
>
> For arbitrary $F$, extend to $F(\zeta)$, whose degree divides $p-1$. Reducibility supplies a root over an extension whose degree divides both a proper factor degree $<p$ and $p$; the same constant-term/Bezout descent shows the $p$-th root is already in $F$. Thus reducibility implies a root in $F$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer Extensions]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

Part (b) is the prime-exponent binomial irreducibility lemma; characteristic $p$ is included, where Frobenius makes the conclusion immediate.
