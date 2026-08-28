---
title: "Exercise R144: Gaussian Primes in the Disk of Radius Ten"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - gaussian-integers
  - prime-elements
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 5, Gauss Primes, Ex. 5.4, printed p. 381, PDF p. 393"
created: 2026-08-28
---

# Exercise R144: Gaussian Primes in the Disk of Radius Ten

## Problem Statement

> [!question] Exercise 5.4
> Make a neat drawing showing the primes in the ring of Gauss integers in a reasonable size range.

## Hints

> [!hint]- Hint 1
> Off the coordinate axes, $a+bi$ is Gaussian prime exactly when $a^2+b^2$ is an ordinary prime.

> [!hint]- Hint 2
> On an axis, $\pm p$ and $\pm pi$ are Gaussian prime exactly when the ordinary prime $p$ is congruent to $3$ modulo $4$.

## Solution

> [!success]- Solution
> Choose the closed disk $|z|\le10$ as the size range. For $a,b\neq0$, the point $a+bi$ is marked prime exactly when
>
> $$
> N(a+bi)=a^2+b^2
> $$
>
> is an ordinary prime. On the axes, the marked points are the associates of the ordinary primes $3$ and $7$, the primes below $10$ congruent to $3$ modulo $4$. This criterion exhausts all Gaussian primes in the disk.

## Prime Diagram

![[Attachments/artin-algebra-2e-ch12-ex-5.4-gaussian-primes.png]]

The pale points are all Gaussian integers in the disk; the black points are precisely the Gaussian primes.

## Related Concepts

- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- **Routing:** Ring Theory is primary because the norm and prime-element classification select the plotted lattice points.
- **Asset provenance:** The figure is a new TikZ construction derived from the stated Gaussian-prime criterion, not a source crop. Editable source: [[Attachments/artin-algebra-2e-ch12-ex-5.4-gaussian-primes.tex]]. Vector output: [[Attachments/artin-algebra-2e-ch12-ex-5.4-gaussian-primes.pdf]].
- **Source status:** The drawing request is from [S1, Ch. 12, §12.5, Ex. 5.4, printed p. 381, PDF p. 393]. The range choice, classification, and figure are independent.

