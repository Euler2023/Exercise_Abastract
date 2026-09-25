---
title: "Exercise LA402: Inverting Identity plus a Nilpotent Matrix"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - nilpotence
  - invertible-matrices
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Matrices and Linear Maps, Exercise 10, printed p. 546, PDF p. 561"
created: 2026-09-26
---

# Exercise LA402: Inverting Identity plus a Nilpotent Matrix

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 10
> If $N$ is a nilpotent $n\times n$ matrix, show that $I+N$ is invertible.

## Hints

> [!hint]- Hint 1
> Replace the infinite geometric series by a finite one, using $N^m=0$.

> [!hint]- Hint 2
> Multiply $I+N$ by $I-N+N^2-\cdots+(-N)^{m-1}$.

## Solution

> [!success]- Independent derivation
> Choose $m\ge1$ with $N^m=0$ and define
> $$
> S=\sum_{j=0}^{m-1}(-N)^j=I-N+N^2-\cdots+(-1)^{m-1}N^{m-1}.
> $$
> As $N$ commutes with every polynomial in $N$, the finite geometric identity holds on both sides:
> $$
> (I+N)S=S(I+N)=I-(-N)^m=I.
> $$
> Therefore $(I+N)^{-1}=S$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]

## Notes

- The statement was checked against [S2, Ch. XIII, Exercise 10, printed p. 546, PDF p. 561]. The inverse formula is independently derived.
- The same finite geometric argument works for a nilpotent element in any unital associative ring.
