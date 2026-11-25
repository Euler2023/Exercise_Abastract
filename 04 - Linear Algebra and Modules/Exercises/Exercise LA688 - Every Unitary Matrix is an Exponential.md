---
title: "Exercise LA688: Every Unitary Matrix is an Exponential"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 19, printed p. 75, PDF p. 87"
source_refs:
  - "S10/ch-3/sec-9/ex-19"
created: 2026-11-25
---

# Exercise LA688: Every Unitary Matrix is an Exponential

## Problem Statement

> [!question] Original Chapter 3, Exercise 19
> Show that the exponential map from $\mathfrak u(n)$ to $U(n)$ is onto, but not one-to-one.
>
> *Hint:* Every unitary matrix has an orthonormal basis of eigenvectors.

## Hints

> [!hint]- Hint 1
> In an orthonormal eigenbasis, a unitary matrix is diagonal with eigenvalues on the unit circle. Write each diagonal entry as a scalar exponential.

> [!hint]- Hint 2
> Put the purely imaginary exponents into a diagonal matrix. Changing an argument by $2\pi$ leaves the scalar exponential fixed.

## Solution

> [!success]- Solution
> Hall's Proposition 3.24 identifies $\mathfrak u(n)$ with the skew-Hermitian matrices, those satisfying $X^*=-X$ [S10, §3.4, printed p. 58, PDF p. 70]. Here $n\ge1$.
>
> For $U\in U(n)$, use the unitary case of the spectral theorem, stated in Hall's Theorem A.3 [S10, Appendix A, printed p. 411, PDF p. 415]. There is a unitary matrix $Q$ with
> $$
> U=Q\operatorname{diag}(\lambda_1,\ldots,\lambda_n)Q^*,
> \qquad |\lambda_j|=1.
> $$
> Choose $\theta_j\in\mathbb R$ with $\lambda_j=e^{i\theta_j}$. Define $D=\operatorname{diag}(i\theta_1,\ldots,i\theta_n)$ and $X=QDQ^*$. Since $D^*=-D$, we have $X^*=QD^*Q^*=-X$. Thus $X\in\mathfrak u(n)$.
>
> Taking powers gives $X^m=QD^mQ^*$ for every nonnegative integer $m$. Summing the power series and exponentiating the diagonal entries separately gives
> $$
> e^X=Qe^DQ^*
>     =Q\operatorname{diag}(e^{i\theta_1},\ldots,e^{i\theta_n})Q^*
>     =U.
> $$
> This proves surjectivity. The distinct skew-Hermitian matrices $0$ and $2\pi iI$ both exponentiate to $I$, which proves failure of injectivity.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Logarithms|Matrix Logarithms]]

## Notes

- **Source status:** The exercise and printed hint were checked at 200 dpi on printed p. 75 / PDF p. 87. The solution is independent. Theorem A.3 is a named input stated in the appendix, and the exercise explicitly permits its unitary case.
- **Concrete verification:** For $U=\operatorname{diag}(-1,i)$, both $\operatorname{diag}(i\pi,i\pi/2)$ and $\operatorname{diag}(-i\pi,i\pi/2)$ are skew-Hermitian logarithms.
- **Routing:** The proof uses unitary diagonalization and scalar arguments of unit complex numbers.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
