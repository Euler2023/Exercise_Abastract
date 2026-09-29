---
title: "Exercise LA448: Real and Imaginary Hermitian Parts of an Operator"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - adjoints
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 6, printed p. 596, PDF p. 611"
created: 2026-09-29
---

# Exercise LA448: Real and Imaginary Hermitian Parts of an Operator

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 6
> Let $E$ be as in Exercise 5. Let $T$ be a $\mathbb C$-linear map of $E$ into itself. Let
>
> $$
> A=\frac12(T+T^*).
> $$
>
> Show that $A$ is hermitian. Show that $T$ can be written in the form $A+iB$ where $A,B$ are hermitian, and are uniquely determined.

> [!info] Inherited setting
> Here $E$ is a finite-dimensional complex vector space with a positive definite Hermitian form. The symbol $T^*$ is its adjoint, characterized by $\langle Tx,y\rangle=\langle x,T^*y\rangle$. No family $S$ from Exercise 5 is needed in this exercise.

## Hints

> [!hint]- Hint 1: Take the adjoint of the average
> Use $(T^*)^*=T$ and $(cT)^*=\overline c\,T^*$.

> [!hint]- Hint 2: Subtract the adjoint
> If $T=A+iB$ with $A^*=A$ and $B^*=B$, then $T^*=A-iB$. Add and subtract these equations.

## Solution

> [!success]- Independent solution
> The defining adjoint identity and nondegeneracy give $(X+Y)^*=X^*+Y^*$, $(cX)^*=\overline c\,X^*$, and $(X^*)^*=X$: in each case substitute the proposed adjoint into the identity and use uniqueness. Therefore
>
> $$
> A^*=\frac12(T^*+T)=A.
> $$
>
> Define
>
> $$
> B=\frac{T-T^*}{2i}.
> $$
>
> Since the conjugate of $1/(2i)$ is $-1/(2i)$,
>
> $$
> B^*=-\frac{T^*-T}{2i}=B.
> $$
>
> Thus both operators are Hermitian, and direct addition gives
>
> $$
> A+iB=\frac{T+T^*}{2}+\frac{T-T^*}{2}=T.
> $$
>
> Conversely, any representation $T=C+iD$ with $C,D$ Hermitian has $T^*=C-iD$. Adding and subtracting shows $C=(T+T^*)/2=A$ and $D=(T-T^*)/(2i)=B$. This proves uniqueness.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Adjoints and Hermitian operators]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source and proof status:** [S2, Ch. XV, Ex. 6, printed p. 596, PDF p. 611], checked visually. The adjoint computations and uniqueness proof are independent derivations.
- **Boundary:** The Hermitian operators form a real vector space, not a complex vector space. The decomposition is the operator analogue of real and imaginary parts; it does not assert that $A$ and $B$ commute.
