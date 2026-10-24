---
title: "Exercise LA540: Nontrivial Number Fields Have Discriminant Greater than One"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §6, Exercise 4, printed p. 38, PDF p. 57"
created: 2026-10-20
---

# Exercise LA540: Nontrivial Number Fields Have Discriminant Greater than One

## Problem Statement

> [!question] Neukirch I.6.4
> Show that the absolute value of the discriminant $|d_K|$ is $>1$ for every algebraic number field $K\ne\mathbb Q$ (Minkowski's theorem on the discriminant, see chap. III, (2.17)).

## Hints

> [!hint]- Hint 1: Apply the element bound to the integer ring
> A nonzero algebraic integer has nonzero integer norm, so I.5.3 applied to $\mathcal O_K$ gives $1\le(n!/n^n)(4/\pi)^s\sqrt{|d_K|}$.

> [!hint]- Hint 2: Remove the signature
> Because $2s\le n$ and $\pi/4<1$, obtain $\sqrt{|d_K|}\ge(\pi/4)^{n/2}n^n/n!$.

> [!hint]- Hint 3: Bound the factorial uniformly
> For $a_n=n^n/n!$, show $a_{n+1}/a_n=(1+1/n)^n\ge2$. Thus $a_n\ge2^{n-1}$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
>
> Let $n=[K:\mathbb Q]=r+2s$. Since $K\ne\mathbb Q$, one has $n\ge2$. Apply the independently proved I.5.3 to the integral ideal $\mathcal O_K$, whose index is $1$. A resulting nonzero $\alpha\in\mathcal O_K$ has $|N(\alpha)|\ge1$, because its field norm is a nonzero integer. Consequently
> $$
> \sqrt{|d_K|}\ge\left(\frac\pi4\right)^s\frac{n^n}{n!}.
> $$
> As $s\le n/2$ and $0<\pi/4<1$, this implies
> $$
> \sqrt{|d_K|}\ge\left(\frac\pi4\right)^{n/2}\frac{n^n}{n!}.
> $$
> For completeness, put $a_n=n^n/n!$. Then $a_1=1$ and the binomial theorem gives
> $$
> \frac{a_{n+1}}{a_n}=\left(1+\frac1n\right)^n
> \ge1+n\frac1n=2.
> $$
> Induction yields $a_n\ge2^{n-1}$. Substituting this into the preceding inequality and squaring yields
> $$
> \sqrt{|d_K|}\ge\frac{\pi^{n/2}}2,
> \qquad |d_K|\ge\frac{\pi^n}{4}.
> $$
> For $n\ge2$, the right side is at least $\pi^2/4>1$. Hence $|d_K|>1$, as required. The case $K=\mathbb Q$ is excluded correctly: it has $d_K=1$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Minkowski Lattices and Covolumes]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA539 - Minkowskis Bound for Elements of an Ideal|Minkowski's Norm Bound]]
- [[02 - Ring Theory/Concepts/Orders and Conductors|Field Discriminants]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked in [S4, Ch. I, §6, Exercise 4, printed p. 38, PDF p. 57]. No source figure is required.
- **Inputs and proof status:** The only geometry-of-numbers input is I.5.3, [S4, Ch. I, §5, Exercise 3, printed p. 34, PDF p. 53], independently proved in LA539. Integrality of the field norm is explained there. All signature and factorial estimates are proved here. The printed Chapter III pointer is retained, but is not used as a checked proof input.
- **Uniformity:** The bound $|d_K|\ge\pi^n/4$ is deliberately weaker than the signature-dependent bound; it applies uniformly to all signatures.
- **Routing:** The proof turns a Minkowski lattice estimate into a dimension-dependent inequality. Linear Algebra and Modules is primary.
