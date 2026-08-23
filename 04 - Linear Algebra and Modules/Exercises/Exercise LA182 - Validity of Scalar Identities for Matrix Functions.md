---
title: "Exercise LA182: Validity of Scalar Identities for Matrix Functions"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-functions
  - matrix-exponential
  - noncommutativity
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §4, Ex. 4.7, printed p. 152, PDF p. 164"
created: 2026-08-24
---

# Exercise LA182: Validity of Scalar Identities for Matrix Functions

## Problem Statement

> [!question] Exercise 4.7
> Discuss the range of validity of
>
> (a) $\cos^2A+\sin^2A=I$;
>
> (b) $e^{iA}=\cos A+i\sin A$;
>
> (c) $\sin(A+B)=\sin A\cos B+\cos A\sin B$;
>
> (d) $e^{2\pi iA}=I$;
>
> (e) $\dfrac{d(e^{A(t)})}{dt}=e^{A(t)}\dfrac{dA}{dt}$ for differentiable matrix-valued $A(t)$.

## Hints

> [!hint]- Hint 1
> Identities involving only one matrix inherit commutativity from its powers. Identities involving two matrices need additional hypotheses.

## Solution

> [!success]- Solution
> (a) This holds for every square complex matrix $A$. The power-series proof of the scalar identity uses only powers of the single matrix $A$, which commute.
>
> (b) Euler's identity also holds for every square complex matrix, directly by separating the even and odd terms of the exponential series.
>
> (c) The addition formula holds whenever $AB=BA$. It can fail otherwise: for $A=E_{12}$ and $B=E_{21}$, the right side is $A+B$, while $\sin(A+B)=\sin(1)(A+B)$.
>
> (d) Over $\mathbb C$,
>
> $$
> e^{2\pi iA}=I
> $$
>
> holds exactly when $A$ is diagonalizable and all its eigenvalues are integers. Integral eigenvalues make the exponential of the diagonal form equal to $I$; any nontrivial Jordan nilpotent part produces a nontrivial unipotent factor.
>
> (e) The displayed derivative formula holds if $A(t)$ commutes with $A'(t)$ for each $t$. In general the correct formula is
>
> $$
> \frac{d}{dt}e^{A(t)}
> =\int_0^1e^{(1-s)A(t)}A'(t)e^{sA(t)}\,ds.
> $$
>
> For example, at $t=0$ take $A(t)=\operatorname{diag}(1,0)+tE_{12}$. The actual derivative is $(e-1)E_{12}$, whereas $e^{A(0)}A'(0)=eE_{12}$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA179 - Exponential of a Sum of Commuting Matrices|Exercise LA179]]

## Notes

- **External standard input:** The integral derivative formula is the standard Fréchet derivative of the matrix exponential; only the commuting special case is needed to validate Artin's displayed identity.
- **Source status:** All five identities were visually checked at [S1, Ch. 5, §4, Ex. 4.7, printed p. 152, PDF p. 164]. The validity analysis and counterexamples are independent.

