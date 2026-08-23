---
title: "Exercise LA148: Jordan Forms for Two Eigenvalues"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - jordan-form
  - source-issue
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §7, Ex. 7.4, printed p. 129, PDF p. 141"
created: 2026-08-23
---

# Exercise LA148: Jordan Forms for Two Eigenvalues

## Problem Statement

> [!question] Exercise 7.4
> (a) Determine all Jordan forms with characteristic polynomial $(t+2)^2(t-5)^3$.
>
> (b) The printed exercise asks for the possibilities when “the space of eigenvectors with eigenvalue $2$ is one-dimensional” and the eigenspace for $5$ is two-dimensional.

## Hints

> [!hint]- Hint 1
> Jordan block sizes for each eigenvalue form a partition of its algebraic multiplicity; the eigenspace dimension is the number of blocks.

## Solution

> [!success]- Solution
> (a) For $-2$, the partitions of $2$ are $2$ and $1+1$; for $5$, the partitions of $3$ are $3$, $2+1$, and $1+1+1$. Thus the six forms are
>
> $$
> \begin{aligned}
> &J_2(-2)\oplus J_3(5),\\
> &J_2(-2)\oplus J_2(5)\oplus[5],\\
> &J_2(-2)\oplus[5]\oplus[5]\oplus[5],\\
> &[-2]\oplus[-2]\oplus J_3(5),\\
> &[-2]\oplus[-2]\oplus J_2(5)\oplus[5],\\
> &[-2]\oplus[-2]\oplus[5]\oplus[5]\oplus[5].
> \end{aligned}
> $$
>
> (b) Read literally, there is no such matrix: $2$ is not a root of the characteristic polynomial, so its eigenspace has dimension zero. With the intended eigenvalue $-2$, a one-dimensional eigenspace forces one block $J_2(-2)$, while the two-dimensional $5$-eigenspace forces two blocks of sizes $2$ and $1$. The intended unique answer is
>
> $$
> J_2(-2)\oplus J_2(5)\oplus[5].
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source issue:** Printed part (b) says eigenvalue $2$, inconsistent with $(t+2)^2(t-5)^3$. The likely intended value is $-2$; both the literal and corrected readings are reported rather than silently changing the source.
- **Source status:** The sign was visually verified at [S1, Ch. 4, §7, Ex. 7.4, printed p. 129, PDF p. 141]. The classification is independent.
