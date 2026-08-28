---
title: "Exercise R147: Residue Rings of the Gaussian Integers"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - gaussian-integers
  - quotient-rings
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 5, Gauss Primes, Ex. 5.7, printed p. 381, PDF p. 393"
created: 2026-08-28
---

# Exercise R147: Residue Rings of the Gaussian Integers

## Problem Statement

> [!question] Exercise 5.7
> Describe the residue ring $\mathbb Z[i]/(p)$ for each prime $p$.

## Hints

> [!hint]- Hint 1
> Use $\mathbb Z[i]/(p)\cong\mathbb F_p[x]/(x^2+1)$.

> [!hint]- Hint 2
> Treat separately $p=2$, $p\equiv1\pmod4$, and $p\equiv3\pmod4$.

## Solution

> [!success]- Solution
> The presentation $\mathbb Z[i]\cong\mathbb Z[x]/(x^2+1)$ gives
>
> $$
> \mathbb Z[i]/(p)
> \cong\mathbb F_p[x]/(x^2+1).
> $$
>
> There are three cases.
>
> **(i) $p=2$.** In $\mathbb F_2[x]$,
>
> $$
> x^2+1=(x+1)^2.
> $$
>
> Therefore
>
> $$
> \mathbb Z[i]/(2)
> \cong\mathbb F_2[\varepsilon]/(\varepsilon^2),
> \qquad \varepsilon=i+1.
> $$
>
> This four-element ring has a nonzero nilpotent.
>
> **(ii) $p\equiv1\pmod4$.** Then $-1$ is a square modulo $p$. Choose $a\in\mathbb F_p$ with $a^2=-1$. Since $p$ is odd,
>
> $$
> x^2+1=(x-a)(x+a)
> $$
>
> with distinct relatively prime factors. The Chinese remainder theorem gives
>
> $$
> \mathbb Z[i]/(p)\cong\mathbb F_p\times\mathbb F_p.
> $$
>
> **(iii) $p\equiv3\pmod4$.** Then $x^2+1$ is irreducible over $\mathbb F_p$, so
>
> $$
> \mathbb Z[i]/(p)\cong\mathbb F_{p^2}.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Routing:** Ring Theory is primary because quotient presentations and the Chinese remainder theorem classify the residue rings.
- **Structure boundary:** Only the third case is a field; the split case is reduced but not a domain, and the ramified case has nilpotents.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.5, Ex. 5.7, printed p. 381, PDF p. 393]. The three-case description is independent.

