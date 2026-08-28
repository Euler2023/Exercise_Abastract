---
title: "Exercise R207: Surjective Images of Local Rings"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - local-rings
  - quotient-rings
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, Rings, Exercise 2, printed p. 115, PDF p. 130"
created: 2026-08-28
---

# Exercise R207: Surjective Images of Local Rings

## Problem Statement

> [!question] Exercise 2
> Let $f:A\to A'$ be a surjective homomorphism of rings, and assume that $A$ is local and $A'\ne0$. Show that $A'$ is local.

## Hints

> [!hint]- Hint 1
> Write $A'\cong A/\ker f$ and use the correspondence between maximal ideals of a quotient and maximal ideals containing the kernel.

## Solution

> [!success]- Solution
> Let $\mathfrak m$ be the unique maximal ideal of the local ring $A$. Since $A'\ne0$, the kernel $I=\ker f$ is a proper ideal. Every proper ideal is contained in a maximal ideal, and $A$ has only $\mathfrak m$, so
>
> $$
> I\subseteq\mathfrak m.
> $$
>
> Surjectivity gives $A'\cong A/I$. Under the ideal correspondence, maximal ideals of $A/I$ are exactly the ideals $\mathfrak n/I$ for maximal ideals $\mathfrak n$ of $A$ containing $I$. The only such maximal ideal is $\mathfrak m$. Consequently $A/I$ has the unique maximal ideal $\mathfrak m/I$, and hence $A'$ is local.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Homomorphisms|Ring Homomorphisms]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]

## Notes

- **Nonzero hypothesis:** If $A'=0$, its zero ideal is not a proper maximal ideal under the convention used here, so the hypothesis is essential.
- **Source status:** The statement was visually checked at [S2, Ch. II, Ex. 2, printed p. 115, PDF p. 130]. The quotient-ring proof is independent.
