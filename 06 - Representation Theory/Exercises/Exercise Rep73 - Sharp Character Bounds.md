---
title: "Exercise Rep73: Sharp Character Bounds"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 5, Ex. 5.4, printed p. 318, PDF p. 330"
created: 2026-08-27
---

# Exercise Rep73: Sharp Character Bounds

## Problem Statement

> [!question] Exercise 5.4
> Let $\chi$ be the character of a representation $\rho$ of dimension $d$. Prove that $|\chi(g)|\le d$ for all $g\in G$, and that if $|\chi(g)|=d$, then $\rho(g)=\zeta I$ for some root of unity $\zeta$. Moreover, if $\chi(g)=d$, then $\rho(g)$ is the identity operator.

## Hints

> [!hint]- Hint 1
> The eigenvalues of a finite-order matrix lie on the unit circle.

## Solution

> [!success]- Solution
> If the eigenvalues of $\rho(g)$ are $\lambda_1,\ldots,\lambda_d$, each is a root of unity and has absolute value $1$. Hence
>
> $$
> |\chi(g)|=|\lambda_1+\cdots+\lambda_d|\le d.
> $$
>
> Equality in the triangle inequality holds exactly when all $\lambda_j$ have the same argument, so all equal a root of unity $\zeta$. Since $\rho(g)$ has finite order, it is diagonalizable, hence $\rho(g)=\zeta I$. If the sum equals the positive real number $d$, then $\zeta=1$, so $\rho(g)=I$. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]

## Notes

- **Source status:** [S1, Ch. 10, §5, Ex. 5.4, printed p. 318, PDF p. 330].

