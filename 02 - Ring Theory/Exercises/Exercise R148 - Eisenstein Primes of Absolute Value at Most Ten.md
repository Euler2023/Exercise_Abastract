---
title: "Exercise R148: Eisenstein Primes of Absolute Value at Most Ten"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - eisenstein-integers
  - prime-elements
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 5, Gauss Primes, Ex. 5.8, printed p. 381, PDF p. 393"
created: 2026-08-28
---

# Exercise R148: Eisenstein Primes of Absolute Value at Most Ten

## Problem Statement

> [!question] Exercise 5.8
> Let $R=\mathbb Z[\omega]$, where $\omega=e^{2\pi i/3}$. Make a drawing showing the prime elements of absolute value at most $10$ in $R$.

## Hints

> [!hint]- Hint 1
> Use $N(a+b\omega)=a^2-ab+b^2=|a+b\omega|^2$.

> [!hint]- Hint 2
> An Eisenstein integer is prime when its norm is a rational prime, or when it is associate to a rational prime $p\equiv2\pmod3$.

## Solution

> [!success]- Solution
> The range $|a+b\omega|\le10$ is equivalent to
>
> $$
> N(a+b\omega)=a^2-ab+b^2\le100.
> $$
>
> Within this range, the prime elements have norm
>
> $$
> 3,4,7,13,19,25,31,37,43,61,67,73,79,\text{ or }97.
> $$
>
> The prime norms $3$ and those congruent to $1$ modulo $3$ come from split or ramified rational primes. The square norms $4$ and $25$ are the norms of associates of the inert rational primes $2$ and $5$. Plotting exactly the lattice points with these norms gives the diagram below.

## Prime Diagram

![[Attachments/artin-algebra-2e-ch12-ex-5.8-eisenstein-primes.png]]

The pale points are all Eisenstein integers in the disk; the black points are precisely the prime elements.

## Related Concepts

- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- **Routing:** Ring Theory is primary because the Eisenstein norm and prime-element classification select the plotted lattice points.
- **Asset provenance:** The figure is a new TikZ construction derived from the norm criterion, not a source crop. Editable source: [[Attachments/artin-algebra-2e-ch12-ex-5.8-eisenstein-primes.tex]]. Vector output: [[Attachments/artin-algebra-2e-ch12-ex-5.8-eisenstein-primes.pdf]].
- **Source status:** The drawing request is from [S1, Ch. 12, §12.5, Ex. 5.8, printed p. 381, PDF p. 393]. The classification and figure are independent.

