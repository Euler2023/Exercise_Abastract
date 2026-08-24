---
title: "Exercise Rep18: Generators in SUn and the Lorentz Group"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - one-parameter-groups
  - lorentz-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 5, Ex. 5.4, printed p. 285, PDF p. 297"
created: 2026-08-24
---

# Exercise Rep18: Generators in SUn and the Lorentz Group

## Problem Statement

> [!question] Exercise 5.4
> Find the conditions on a matrix $A$ so that $e^{tA}$ is a one-parameter group in
>
> (a) the special unitary group $SU_n$;
>
> (b) the Lorentz group $O_{3,1}$.

## Hints

> [!hint]- Hint 1
> Differentiate each defining matrix equation at $t=0$.

> [!hint]- Hint 2
> Use $\det(e^{tA})=e^{t\operatorname{tr}A}$.

## Solution

> [!success]- Solution
> **(a)** The unitary equation differentiated at $t=0$ gives
>
> $$
> A^*+A=0.
> $$
>
> The determinant condition is
>
> $$
> 1=\det(e^{tA})=e^{t\operatorname{tr}A}
> $$
>
> for all real $t$, hence $\operatorname{tr}A=0$. Conversely, these two conditions imply both unitarity and determinant one. Thus
>
> $$
> e^{tA}\in SU_n\ \text{for all }t
> \iff A^*=-A\ \text{and }\operatorname{tr}A=0.
> $$
>
> **(b)** Put $J=I_{3,1}=\operatorname{diag}(1,1,1,-1)$. Differentiating
>
> $$
> (e^{tA})^{\mathsf T}Je^{tA}=J
> $$
>
> at $t=0$ gives
>
> $$
> A^{\mathsf T}J+JA=0.
> $$
>
> Conversely, if this identity holds, the derivative of $(e^{tA})^{\mathsf T}Je^{tA}$ is zero, so that expression is constantly $J$. Therefore this condition is necessary and sufficient.
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[04 - Linear Algebra and Modules/Concepts/Indefinite Bilinear Forms and Lorentz Groups|Indefinite Bilinear Forms and Lorentz Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- These are the defining equations of the Lie algebras $\mathfrak{su}_n$ and $\mathfrak{o}_{3,1}$.
- **Source status:** Ex. 5.4 was visually checked at [S1, Ch. 9, §9.5, printed p. 285, PDF p. 297]. The differentiation and converse arguments are independent.

