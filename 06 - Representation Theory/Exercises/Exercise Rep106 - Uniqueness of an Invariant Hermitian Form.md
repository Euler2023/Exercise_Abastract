---
title: "Exercise Rep106: Uniqueness of an Invariant Hermitian Form"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Miscellaneous Ex. M.6, printed p. 321, PDF p. 333"
created: 2026-08-27
---

# Exercise Rep106: Uniqueness of an Invariant Hermitian Form

## Problem Statement

> [!question] Miscellaneous Exercise M.6
> Let $\rho$ be an irreducible representation of a finite group $G$. How unique is the positive definite $G$-invariant Hermitian form?

## Hints

> [!hint]- Hint 1
> Compare two forms using a positive self-adjoint operator and apply Schur's lemma.

## Solution

> [!success]- Solution
> Fix one invariant form $B$. Any other Hermitian form $B'$ has a unique $B$-self-adjoint operator $T$ with $B'(v,w)=B(Tv,w)$. Invariance of both forms implies $T\rho(g)=\rho(g)T$. By Schur's lemma, $T=cI$. Positive definiteness forces $c>0$. Thus every positive definite invariant Hermitian form is a unique positive real scalar multiple of any fixed one. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[06 - Representation Theory/Exercises/Exercise Rep1 - Schurs Lemma|Exercise Rep1: Schur's Lemma]]

## Notes

- **Source status:** [S1, Ch. 10, Misc. Ex. M.6, printed p. 321, PDF p. 333].

