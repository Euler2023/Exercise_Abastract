---
title: "Exercise Rep114: A Two-Dimensional Representation with Eigenvalue One"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Miscellaneous Ex. M.14, printed p. 322, PDF p. 334"
created: 2026-08-27
---

# Exercise Rep114: A Two-Dimensional Representation with Eigenvalue One

## Problem Statement

> [!question] Miscellaneous Exercise M.14
> Let $\rho:G\to GL(V)$ be a two-dimensional representation of a finite group $G$, and assume that $1$ is an eigenvalue of $\rho_g$ for every $g\in G$. Prove that $\rho$ is a sum of two one-dimensional representations.

## Hints

> [!hint]- Hint 1
> The second eigenvalue is $\det\rho(g)$.

## Solution

> [!success]- Solution
> Let $\delta(g)=\det\rho(g)$, a one-dimensional character. Since the eigenvalues of $\rho(g)$ are $1$ and $\delta(g)$, its character satisfies
>
> $$
> \chi_\rho(g)=1+\delta(g).
> $$
>
> Thus $\chi_\rho$ is the character of the direct sum of the trivial representation and $\delta$. Finite complex representations are semisimple and are determined by their characters, so
>
> $$
> \rho\cong1\oplus\delta.
> $$
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** [S1, Ch. 10, Misc. Ex. M.14, printed p. 322, PDF p. 334].

