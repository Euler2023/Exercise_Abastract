---
title: "Exercise LA520: Split Sequences and Summands of Injective Modules"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 24, printed p. 831, PDF p. 846"
created: 2026-09-29
---

# Exercise LA520: Split Sequences and Summands of Injective Modules

## Problem Statement

> [!question] Lang XX.24
> Let $0\to I_1\to I_2\to I_3\to0$ be exact, and assume $I_1,I_2$ are injective.
>
> **(a)** Show that the sequence splits.
>
> **(b)** Show that $I_3$ is injective.
>
> **(c)** If $I$ is injective and $I=M\oplus N$, show that $M$ is injective.

## Hints

> [!hint]- Hint 1
> Extend the identity on the submodule $I_1$ to a retraction from $I_2$.

> [!hint]- Hint 2
> Extend a map into a summand by first including it in the whole module, then projecting.

## Solution

> [!success]- Independent derivation
> **(a)** Identify $I_1$ with its image in $I_2$. Injectivity of $I_1$ extends $\operatorname{id}_{I_1}$ to $r:I_2\to I_1$. Then $I_2=I_1\oplus\ker r$: write $x=r(x)+(x-r(x))$, and the intersection is zero. The quotient map restricts to an isomorphism $\ker r\to I_3$. Its inverse supplies a section, so the sequence splits.
>
> **(c)** Given $X'\subseteq X$ and $f:X'\to M$, include $M$ in $I$, extend the resulting map to $F:X\to I$ by injectivity, and compose with the projection $I\to M$. This extends $f$, proving $M$ injective.
>
> **(b)** By (a), $I_3$ is isomorphic to the direct summand $\ker r$ of the injective module $I_2$. Part (c) gives its injectivity.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Injective Modules and Baer Criterion]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum]]

## Notes

- **Source status:** [S2, Ch. XX, Ex. 24, printed p. 831, PDF p. 846]. The original page image was checked; the solution above is an independent derivation.
