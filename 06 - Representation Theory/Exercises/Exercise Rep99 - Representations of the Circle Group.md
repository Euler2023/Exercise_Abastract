---
title: "Exercise Rep99: Representations of the Circle Group"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 8, Ex. 8.6, printed p. 320, PDF p. 332"
created: 2026-08-27
---

# Exercise Rep99: Representations of the Circle Group

## Problem Statement

> [!question] Exercise 8.6
> All representations are assumed differentiable functions of $\theta$. Let $G=\{e^{i\theta}\}$ be the circle group. **(a)** Produce a positive definite $G$-invariant Hermitian form. **(b)** Prove Maschke's theorem for $G$. **(c)** Describe its representations using one-parameter groups and prove that the irreducibles are one-dimensional. **(d)** Verify the orthogonality relations using the analogue of the Hermitian product (10.9.6).

## Hints

> [!hint]- Hint 1
> Replace the finite average by $(2\pi)^{-1}\int_0^{2\pi}\cdots d\theta$.

## Solution

> [!success]- Solution
> Average any Hermitian form by
>
> $$
> \langle v,w\rangle_G=\frac1{2\pi}\int_0^{2\pi}\langle\rho(e^{i\theta})v,\rho(e^{i\theta})w\rangle\,d\theta.
> $$
>
> It is positive definite and invariant. Orthogonal complements of invariant subspaces are invariant, proving complete reducibility.
>
> A differentiable representation is a periodic one-parameter group $\rho(e^{i\theta})=e^{\theta A}$. Unitarity makes $A$ skew-Hermitian, so it is unitarily diagonalizable with eigenvalues $ik_j$. Periodicity forces $k_j\in\mathbb Z$. Hence every representation is a sum of characters
>
> $$
> \chi_k(e^{i\theta})=e^{ik\theta},\qquad k\in\mathbb Z,
> $$
>
> and these are all irreducible. Finally
>
> $$
> \frac1{2\pi}\int_0^{2\pi}e^{i(k-l)\theta}\,d\theta=\delta_{kl},
> $$
>
> which is character orthogonality. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Notes

- **Source status:** [S1, Ch. 10, §8, Ex. 8.6, printed p. 320, PDF p. 332]; all four parts are independently derived.

