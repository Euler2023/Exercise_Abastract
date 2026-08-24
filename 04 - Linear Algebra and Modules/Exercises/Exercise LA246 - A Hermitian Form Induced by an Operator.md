---
title: "Exercise LA246: A Hermitian Form Induced by an Operator"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - hermitian-forms
  - hermitian-operators
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.10, printed p. 257, PDF p. 269"
created: 2026-08-24
---

# Exercise LA246: A Hermitian Form Induced by an Operator

## Problem Statement

> [!question] Exercise 6.10
> Prove that if $T$ is a Hermitian operator on a Hermitian space $V$, the rule $\{v,w\}=(v,Tw)$ defines a second Hermitian form on $V$.

## Hints

> [!hint]- Hint 1
> Sesquilinearity is immediate; use $(Tv,w)=(v,Tw)$ for Hermitian symmetry.

## Solution

> [!success]- Solution
> Because the original form is conjugate-linear in its first variable, linear in its second, and $T$ is linear, the rule $\{v,w\}=(v,Tw)$ is sesquilinear.
>
> Furthermore,
>
> $$
> \overline{\{v,w\}}
> =\overline{(v,Tw)}
> =(Tw,v).
> $$
>
> Since $T$ is Hermitian,
>
> $$
> (Tw,v)=(w,Tv)=\{w,v\}.
> $$
>
> Thus $\{w,v\}=\overline{\{v,w\}}$, so the new rule is a Hermitian form.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]

## Notes

- The new form need not be positive definite; that occurs exactly when $T$ is positive definite.
- **Source status:** Verified at [S1, Ch. 8, §6, Ex. 6.10, printed p. 257, PDF p. 269]. The proof is independent.

