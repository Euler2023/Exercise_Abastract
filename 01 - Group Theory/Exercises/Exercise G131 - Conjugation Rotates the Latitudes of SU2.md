---
title: "Exercise G131: Conjugation Rotates the Latitudes of SU2"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - conjugation
  - special-unitary-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 4, Ex. 4.5, printed p. 284, PDF p. 296"
created: 2026-08-24
---

# Exercise G131: Conjugation Rotates the Latitudes of SU2

## Problem Statement

> [!question] Exercise 4.5
> Prove that conjugation by an element of $SU_2$ rotates every latitude.

## Hints

> [!hint]- Hint 1
> Decompose a unit quaternion as $x_0+x$, with scalar part $x_0$ and pure imaginary part $x$.

> [!hint]- Hint 2
> Conjugation fixes the scalar part and applies the spin rotation to the imaginary part.

## Solution

> [!success]- Solution
> Identify $SU_2$ with the unit quaternions. A latitude is a set
>
> $$
> L_c=\{x_0+x:x_0=c,\ \|x\|^2=1-c^2\},
> \qquad -1\le c\le1,
> $$
>
> where $x$ is pure imaginary. If $Q\in SU_2$, then
>
> $$
> Q(x_0+x)Q^{-1}=x_0+QxQ^{-1}.
> $$
>
> The scalar coordinate $x_0$ is unchanged, while $x\mapsto QxQ^{-1}$ is the rotation $\gamma_Q\in SO_3$. Hence every $L_c$ is invariant, and conjugation restricts on it to the ordinary rotation $\gamma_Q$ of the sphere of radius $\sqrt{1-c^2}$.
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2, Quaternions, and the Spin Cover]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[01 - Group Theory/Concepts/Quaternion Group|Quaternion Group]]

## Notes

- At the degenerate latitudes $c=\pm1$, the “rotation” fixes the single point $\pm I$.
- **Source status:** Artin's latitude description and Ex. 4.5 were checked at [S1, Ch. 9, §9.3–§9.4, printed pp. 267–271 and 284, PDF pp. 279–283 and 296]. The conjugation calculation is independent.
