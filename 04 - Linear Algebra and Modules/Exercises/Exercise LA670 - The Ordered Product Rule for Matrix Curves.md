---
title: "Exercise LA670: The Ordered Product Rule for Matrix Curves"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 2, Section 2.6, Exercise 3, printed p. 46, PDF p. 58"
source_refs:
  - "S10/ch-2/sec-6/ex-3"
created: 2026-11-17
---

# Exercise LA670: The Ordered Product Rule for Matrix Curves

## Problem Statement

> [!question] Original Chapter 2, Exercise 3
> *The product rule.* Recall that a matrix-valued function $A(t)$ is said to be smooth if each $A_{jk}(t)$ is smooth. The derivative of such a function is defined as
> $$
> \left(\frac{dA}{dt}\right)_{jk}=\frac{dA_{jk}}{dt}
> $$
> or, equivalently,
> $$
> \frac{d}{dt}A(t)=\lim_{h\to0}\frac{A(t+h)-A(t)}h.
> $$
> Let $A(t)$ and $B(t)$ be two such functions. Prove that $A(t)B(t)$ is again smooth and that
> $$
> \frac{d}{dt}[A(t)B(t)]
> =\frac{dA}{dt}B(t)+A(t)\frac{dB}{dt}.
> $$

## Hints

> [!hint]- Hint 1
> Each entry of the product is a finite sum $\sum_\ell A_{j\ell}(t)B_{\ell k}(t)$.

> [!hint]- Hint 2
> Apply the scalar product rule to each summand, keeping the factors in their original order.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $A,B:J\to M_n(\mathbb C)$ be smooth on an open real interval $J$. The entry
> $$
> (AB)_{jk}(t)=\sum_{\ell=1}^{n}A_{j\ell}(t)B_{\ell k}(t)
> $$
> is a finite sum of products of smooth complex-valued functions. Scalar multiplication is bilinear in real and imaginary parts, so scalar smoothness rules imply that every entry of $AB$ is smooth. Applying the scalar product rule and differentiating the finite sum,
> $$
> \begin{aligned}
> \frac d{dt}(AB)_{jk}
> &=\sum_{\ell=1}^{n}\left(A'_{j\ell}B_{\ell k}+A_{j\ell}B'_{\ell k}\right)\\
> &=(A'B+AB')_{jk}.
> \end{aligned}
> $$
> Equality of all entries proves $(AB)'=A'B+AB'$.
>
> The limit formulation gives the same ordered identity. Subtract and add $A(t)B(t+h)$:
> $$
> \begin{aligned}
> \frac{A(t+h)B(t+h)-A(t)B(t)}h
> &=\frac{A(t+h)-A(t)}h B(t+h)\\
> &\quad+A(t)\frac{B(t+h)-B(t)}h.
> \end{aligned}
> $$
> As $h\to0$, $B(t+h)\to B(t)$, and matrix multiplication is continuous because its entries are finite polynomial expressions. The right side tends to $A'(t)B(t)+A(t)B'(t)$.
>
> For a noncommuting check, let $A(t)=tE_{12}$ and $B(t)=tE_{21}$ in dimension two. Then $AB=t^2E_{11}$ and both the direct derivative and the correct rule give $2tE_{11}$. Replacing $AB'$ by $B'A$ would instead give $t(E_{11}+E_{22})$, which is wrong for $t\ne0$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Notes

- **Source status:** The complete numbered problem was checked on the original 200 dpi image, printed p. 46 / PDF p. 58. No hint is printed for this exercise. The solution is independently supplied.
- **Imported inputs:** Scalar differentiation rules for finite sums and products; these apply entrywise to real and imaginary parts.
- **Method boundary:** The argument needs differentiability for the derivative formula and smoothness for the full smoothness conclusion. It does not permit exchanging noncommuting factors.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
