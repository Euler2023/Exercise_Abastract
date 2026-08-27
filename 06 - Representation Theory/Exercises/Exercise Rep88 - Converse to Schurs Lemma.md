---
title: "Exercise Rep88: Converse to Schur's Lemma"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 7, Ex. 7.1, printed p. 319, PDF p. 331"
created: 2026-08-27
---

# Exercise Rep88: Converse to Schur's Lemma

## Problem Statement

> [!question] Exercise 7.1
> Prove a converse to Schur's Lemma: If $\rho$ is a representation, and if the only $G$-invariant linear operators on $V$ are multiplications by scalars, then $\rho$ is irreducible.

## Hints

> [!hint]- Hint 1
> If $W$ is invariant, average an inner product and project orthogonally onto $W$.

## Solution

> [!success]- Solution
> Suppose $0\ne W\ne V$ is invariant. Averaging gives a $G$-invariant Hermitian form, and then $V=W\oplus W^\perp$ with both summands invariant. The orthogonal projection $P:V\to W$ commutes with $G$, but it has eigenvalues $1$ on $W$ and $0$ on $W^\perp$, so it is not scalar. This contradicts the hypothesis. Hence no proper nonzero invariant subspace exists and $\rho$ is irreducible. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[06 - Representation Theory/Exercises/Exercise Rep1 - Schurs Lemma|Exercise Rep1: Schur's Lemma]]

## Notes

- **Source status:** [S1, Ch. 10, §7, Ex. 7.1, printed p. 319, PDF p. 331].

