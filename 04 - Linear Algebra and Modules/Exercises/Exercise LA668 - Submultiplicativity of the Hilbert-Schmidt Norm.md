---
title: "Exercise LA668: Submultiplicativity of the Hilbert-Schmidt Norm"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 2, Section 2.6, Exercise 1, printed p. 46, PDF p. 58"
source_refs:
  - "S10/ch-2/sec-6/ex-1"
created: 2026-11-17
---

# Exercise LA668: Submultiplicativity of the Hilbert-Schmidt Norm

## Problem Statement

> [!question] Original Chapter 2, Exercise 1
> The Cauchy–Schwarz inequality from elementary analysis tells us that for all $u=(u_1,\ldots,u_n)$ and $v=(v_1,\ldots,v_n)$ in $\mathbb C^n$, we have
> $$
> |u_1v_1+\cdots+u_nv_n|^2
> \le\left(\sum_{j=1}^{n}|u_j|^2\right)
> \left(\sum_{k=1}^{n}|v_k|^2\right).
> $$
> Use this to verify that $\|XY\|\le\|X\|\|Y\|$ for all $X,Y\in M_n(\mathbb C)$, where $\|\cdot\|$ is the Hilbert–Schmidt norm in Definition 2.2.

## Hints

> [!hint]- Hint 1
> Apply the given inequality separately to each entry $(XY)_{jk}$.

> [!hint]- Hint 2
> After summing over $j,k$, factor the product of a row-norm sum and a column-norm sum.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Hall's Definition 2.2 is
> $$
> \|X\|=\left(\sum_{j,k=1}^{n}|X_{jk}|^2\right)^{1/2}.
> $$
> [S10, Ch. 2, Definition 2.2, printed p. 32, PDF p. 44]
>
> For fixed $j,k$, matrix multiplication and the given Cauchy–Schwarz inequality give
> $$
> |(XY)_{jk}|^2=\left|\sum_{\ell=1}^{n}X_{j\ell}Y_{\ell k}\right|^2
> \le\left(\sum_{\ell=1}^{n}|X_{j\ell}|^2\right)
> \left(\sum_{m=1}^{n}|Y_{mk}|^2\right).
> $$
> Sum over $j,k$. The first factor depends only on $j$ and the second only on $k$, so
> $$
> \begin{aligned}
> \|XY\|^2
> &\le\sum_{j,k=1}^{n}
> \left(\sum_{\ell=1}^{n}|X_{j\ell}|^2\right)
> \left(\sum_{m=1}^{n}|Y_{mk}|^2\right)\\
> &=\left(\sum_{j,\ell=1}^{n}|X_{j\ell}|^2\right)
> \left(\sum_{m,k=1}^{n}|Y_{mk}|^2\right)
> =\|X\|^2\|Y\|^2.
> \end{aligned}
> $$
> All quantities are nonnegative; taking square roots proves the assertion.
>
> For a concrete equality case in dimension two, take $X=E_{12}$ and $Y=E_{21}$. Their norms are 1 and $XY=E_{11}$ also has norm 1.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Hilbert-Schmidt Norm|Hilbert-Schmidt Norm]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The complete numbered problem was checked on the original 200 dpi image, printed p. 46 / PDF p. 58. No hint is printed for this exercise. The solution is independently supplied.
- **Imported input:** The Cauchy–Schwarz inequality is provided in the original problem. Its bilinear-looking version is valid over $\mathbb C$: apply Hermitian Cauchy–Schwarz to $\overline u$ and $v$.
- **Norm boundary:** This norm is the Frobenius norm, not the induced operator norm. In particular, $\|I_n\|=\sqrt n$.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
