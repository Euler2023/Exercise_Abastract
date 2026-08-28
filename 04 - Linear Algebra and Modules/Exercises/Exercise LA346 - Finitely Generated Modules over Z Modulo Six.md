---
title: "Exercise LA346: Finitely Generated Modules over Z/(6)"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - product-rings
  - finite-modules
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Miscellaneous Problem M.2, printed p. 440, PDF p. 452"
created: 2026-08-28
---

# Exercise LA346: Finitely Generated Modules over Z/(6)

## Problem Statement

> [!question] Miscellaneous Problem M.2
> Classify finitely generated modules over the ring $\mathbb Z/(6)$.

## Hints

> [!hint]- Hint 1
> Use $\mathbb Z/6\mathbb Z\cong\mathbb F_2\times\mathbb F_3$ and the complementary idempotents $3$ and $4$.

## Solution

> [!success]- Solution
> Put $R=\mathbb Z/6\mathbb Z$. The Chinese remainder theorem gives
>
> $$
> R\cong\mathbb F_2\times\mathbb F_3.
> $$
>
> The elements $e_2=3$ and $e_3=4$ satisfy
>
> $$
> e_2^2=e_2,
> \qquad
> e_3^2=e_3,
> \qquad
> e_2e_3=0,
> \qquad
> e_2+e_3=1.
> $$
>
> Hence every $R$-module decomposes canonically as
>
> $$
> M=e_2M\oplus e_3M,
> $$
>
> where $e_2M$ is an $\mathbb F_2$-vector space and $e_3M$ an $\mathbb F_3$-vector space. Finite generation is equivalent to both dimensions being finite. Therefore, for unique $a,b\ge0$,
>
> $$
> \boxed{M\cong(R/(2))^a\oplus(R/(3))^b.}
> $$
>
> As an abelian group this is $(\mathbb Z/2)^a\oplus(\mathbb Z/3)^b$, with the $R$-action determined by reduction modulo $2$ or $3$ on the respective summands.

## Related Concepts

- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]

## Notes

- **Routing:** Module Theory is primary because central idempotents split every module into two vector-space components.
- **Source status:** [S1, Ch. 14, Misc. M.2, printed p. 440, PDF p. 452]. The classification is independent.
