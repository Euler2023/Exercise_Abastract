---
title: "Exercise F47: A Fifth Root of Unity Is Not in the Seventh Cyclotomic Field"
topic: field-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - field-theory
  - roots-of-unity
  - cyclotomic-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 3, The Degree of a Field Extension, Ex. 3.3, printed p. 472, PDF p. 484"
created: 2026-08-28
---

# Exercise F47: A Fifth Root of Unity Is Not in the Seventh Cyclotomic Field

## Problem Statement

> [!question] Exercise 3.3
> Let $\zeta_n=e^{2\pi i/n}$. Prove that $\zeta_5\notin\mathbb Q(\zeta_7)$.

## Hints

> [!hint]- Hint 1
> Compare the cyclotomic degrees $\varphi(5)$ and $\varphi(7)$.

## Solution

> [!success]- Solution
> The fifth and seventh cyclotomic polynomials are irreducible over $\mathbb Q$, so
>
> $$
> [\mathbb Q(\zeta_5):\mathbb Q]=\varphi(5)=4,
> \qquad
> [\mathbb Q(\zeta_7):\mathbb Q]=\varphi(7)=6.
> $$
>
> If $\zeta_5$ belonged to $\mathbb Q(\zeta_7)$, then $\mathbb Q(\zeta_5)$ would be an intermediate field of $\mathbb Q(\zeta_7)/\mathbb Q$. The tower law would force $4$ to divide $6$, a contradiction. Hence $\zeta_5\notin\mathbb Q(\zeta_7)$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]

## Notes

- **Routing:** Field Theory is primary because the obstruction is purely the divisibility of extension degrees.
- **Source status:** [S1, Ch. 15, §15.3, Ex. 3.3, printed p. 472, PDF p. 484]. The proof is independent.
