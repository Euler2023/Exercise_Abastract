---
title: "Exercise G275: Direct Sums of Two Finite Cyclic Groups"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - cyclic-groups
  - smith-normal-form
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 7, Structure of Abelian Groups, Ex. 7.6, printed p. 439, PDF p. 451"
created: 2026-08-28
---

# Exercise G275: Direct Sums of Two Finite Cyclic Groups

## Problem Statement

> [!question] Exercise 7.6
> **(a)** Let $a$ and $b$ be relatively prime positive integers. By manipulating the diagonal matrix with diagonal entries $a$ and $b$, prove that $C_{ab}$ is isomorphic to $C_a\oplus C_b$.
>
> **(b)** What can you say if the assumption that $a$ and $b$ are relatively prime is dropped?

## Hints

> [!hint]- Hint 1
> The Smith form of $\operatorname{diag}(a,b)$ has invariant factors $\gcd(a,b)$ and $\operatorname{lcm}(a,b)$.

## Solution

> [!success]- Solution
> Let $g=\gcd(a,b)$ and $\ell=\operatorname{lcm}(a,b)=ab/g$. The entry gcd of $\operatorname{diag}(a,b)$ is $g$, and its determinant is $ab=g\ell$. Hence its Smith form is
>
> $$
> \operatorname{diag}(g,\ell).
> $$
>
> Taking cokernels gives the general formula
>
> $$
> \boxed{C_a\oplus C_b\cong C_g\oplus C_\ell.}
> $$
>
> **(a)** If $a$ and $b$ are relatively prime, then $g=1$ and $\ell=ab$, so
>
> $$
> C_a\oplus C_b\cong C_{ab}.
> $$
>
> **(b)** Without coprimality, the direct sum is cyclic exactly when $g=1$. Otherwise it has the two nontrivial invariant factors $g$ and $\ell$.

## Related Concepts

- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]

## Notes

- **Routing:** Group Theory is primary because the Smith calculation classifies a direct sum of cyclic groups.
- **Source status:** [S1, Ch. 14, §14.7, Ex. 7.6, printed p. 439, PDF p. 451]. The general invariant-factor formula is independent.
