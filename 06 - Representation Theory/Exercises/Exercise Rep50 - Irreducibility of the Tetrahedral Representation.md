---
title: "Exercise Rep50: Irreducibility of the Tetrahedral Representation"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 2, Ex. 2.1, printed p. 314, PDF p. 326"
created: 2026-08-27
---

# Exercise Rep50: Irreducibility of the Tetrahedral Representation

## Problem Statement

> [!question] Exercise 2.1
> Prove that the standard three-dimensional representation of the tetrahedral group $T$ is irreducible as a complex representation.

## Hints

> [!hint]- Hint 1
> Compute the traces of rotations through $0$, $\pi$, and $\pm2\pi/3$.

> [!hint]- Hint 2
> Test whether the character has norm $1$.

## Solution

> [!success]- Solution
> The rotational tetrahedral group has conjugacy-class sizes $1,3,4,4$: the identity, the three half-turns, and the two classes of third-turns. In the standard representation, a rotation through angle $\theta$ has trace $1+2\cos\theta$. Hence its character is
>
> $$
> \chi=(3,-1,0,0).
> $$
>
> Its Hermitian norm is
>
> $$
> (\chi,\chi)=\frac1{12}\left(1\cdot 3^2+3\cdot(-1)^2+4\cdot0^2+4\cdot0^2\right)=1.
> $$
>
> A complex character has norm $1$ exactly when the representation is irreducible. Therefore the standard complex representation of $T$ is irreducible. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]

## Notes

- **Source input:** the character orthogonality criterion is proved in Artin §10.4.
- **Source status:** [S1, Ch. 10, §2, Ex. 2.1, printed p. 314, PDF p. 326]; the calculation is independent.

