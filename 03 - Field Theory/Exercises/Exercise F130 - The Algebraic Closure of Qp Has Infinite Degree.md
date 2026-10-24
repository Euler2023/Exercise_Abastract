---
title: 'Exercise F130: The Algebraic Closure of Qp Has Infinite Degree'
topic: field-theory
difficulty: advanced
status: not-started
tags:
- exercise
- field-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §2, Exercise 7, printed p. 115, PDF p. 134
source_refs:
- S4/ch-II/sec-2/ex-7
created: '2026-10-23'
---

# Exercise F130: The Algebraic Closure of Qp Has Infinite Degree

## Problem Statement

> [!question] Neukirch II.2.7
> The algebraic closure of $\mathbb Q_p$ has infinite degree.

## Hints

> [!hint]- Hint 1
> For every positive integer $m$, consider $X^m-p$.

> [!hint]- Hint 2
> Apply Eisenstein over the discrete valuation ring $\mathbb Z_p$; unbounded finite subextension degrees preclude a finite algebraic closure.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> For every $m\ge1$, $X^m-p$ is irreducible over $\mathbb Q_p$. Here is the Eisenstein argument in this instance. By Gauss's lemma for a UFD, a hypothetical factorization of this primitive monic polynomial over the fraction field would give monic positive-degree factors $g,h\in\mathbb Z_p[X]$. The ring $\mathbb Z_p$ is a PID by (2.4), printed p. 112 / PDF p. 131. Reducing modulo $p$ gives $\bar g\bar h=X^m$ over $\mathbb F_p$, so both reductions are positive powers of $X$. Consequently $p$ divides both constant coefficients. Their product, the constant term $-p$, would then be divisible by $p^2$, a contradiction.
>
> Choose a root $\alpha_m$ in an algebraic closure. Its minimal polynomial has degree $m$, so $[\mathbb Q_p(\alpha_m):\mathbb Q_p]=m$. If the whole closure had finite degree $d$, every finite subextension would have degree at most $d$ by the tower law. Taking $m>d$ contradicts this. Gauss's lemma is the named elementary polynomial input; its hypotheses hold because every PID is a UFD.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §2, Exercise 7, printed p. 115, PDF p. 134].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
