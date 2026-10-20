---
title: "Exercise LA541: Discriminants Grow with the Degree"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §6, Exercise 5, printed p. 38, PDF p. 57"
created: 2026-10-20
---

# Exercise LA541: Discriminants Grow with the Degree

## Problem Statement

> [!question] Neukirch I.6.5
> Show that the absolute value of the discriminant $|d_K|$ tends to $\infty$ with the degree $n$ of the field.

## Hints

> [!hint]- Hint 1: Make the quantifiers uniform
> Find a lower bound depending only on $n$, independent of the field and its signature.

> [!hint]- Hint 2: Use Minkowski and the degree constraint
> Combine the bound on a nonzero integer norm with $s\le n/2$ to get $\sqrt{|d_K|}\ge(\pi/4)^{n/2}n^n/n!$.

> [!hint]- Hint 3: Use an elementary exponential lower bound
> The ratios of $n^n/n!$ are at least $2$. This produces $|d_K|\ge\pi^n/4$.

## Solution

> [!success]- Independent derivation
>
> The precise assertion is: for every real $B>0$ there is an integer $N$ such that every number field $K$ with $[K:\mathbb Q]\ge N$ has $|d_K|>B$. It is not necessary to fix a signature.
>
> Let $n=r+2s\ge1$. Applying I.5.3 to $\mathcal O_K$ gives a nonzero integral element with positive integer absolute norm at most $(n!/n^n)(4/\pi)^s\sqrt{|d_K|}$. Therefore
> $$
> \sqrt{|d_K|}\ge\left(\frac\pi4\right)^s\frac{n^n}{n!}
> \ge\left(\frac\pi4\right)^{n/2}\frac{n^n}{n!}.
> $$
> The second inequality follows from $s\le n/2$ and $\pi/4<1$. To estimate the last factor, put $a_n=n^n/n!$. The identity
> $$
> \frac{a_{n+1}}{a_n}=\left(1+\frac1n\right)^n\ge2,
> \qquad a_1=1
> $$
> follows by keeping the first two nonnegative terms of the binomial expansion. Hence $a_n\ge2^{n-1}$ and
> $$
> |d_K|\ge\left(\left(\frac\pi4\right)^{n/2}2^{n-1}\right)^2
> =\frac{\pi^n}{4}.
> $$
> Since $\pi>1$, this tends to infinity with $n$. Explicitly choose $N\ge1$ such that $\pi^N>4B$; then every field of degree $n\ge N$ satisfies $|d_K|\ge\pi^n/4>B$. This proves the claimed uniform divergence and covers arbitrary sequences of number fields whose degrees tend to infinity.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Minkowski Lattices and Covolumes]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA539 - Minkowskis Bound for Elements of an Ideal|Minkowski's Norm Bound]]
- [[02 - Ring Theory/Concepts/Orders and Conductors|Field Discriminants]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked in [S4, Ch. I, §6, Exercise 5, printed p. 38, PDF p. 57]. No source figure is required.
- **Source and proof status:** The exercise is stated on the checked original page. Its independent solution uses I.5.3, [S4, Ch. I, §5, Exercise 3, printed p. 34, PDF p. 53], via LA539. The norm-integrality input and all elementary estimates are explicit. No asymptotic factorial formula or discriminant table is assumed.
- **Scope:** This is a degree-dependent lower bound. It is not a proof that only finitely many fields have a given bounded discriminant and degree; that stronger finiteness assertion is not needed here.
- **Routing:** The main tool is the dimension dependence of a Minkowski bound, followed by uniform scalar inequalities.
