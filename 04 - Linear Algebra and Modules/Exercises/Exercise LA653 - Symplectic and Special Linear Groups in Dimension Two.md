---
title: "Exercise LA653: Symplectic and Special Linear Groups in Dimension Two"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 1, Section 1.6, Exercise 3, printed p. 27, PDF p. 39"
source_refs:
  - "S10/ch-1/sec-6/ex-3"
created: 2026-11-12
---

# Exercise LA653: Symplectic and Special Linear Groups in Dimension Two

## Problem Statement

> [!question] Original Chapter 1, Exercise 3
> Show that the symplectic group $Sp(1;\mathbb R)\subset GL(2;\mathbb R)$ is equal to $SL(2;\mathbb R)$. Show that $Sp(1;\mathbb C)=SL(2;\mathbb C)$ and that $Sp(1)=SU(2)$.

## Hints

> [!hint]- Hint 1
> Compute $A^{\mathrm{tr}}\Omega A$ for a general $2\times2$ matrix.

> [!hint]- Hint 2
> Intersect the complex identity with $U(2)$ for the compact case.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> For $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ over $\mathbb R$ or $\mathbb C$, direct multiplication gives
> $$
> A^{\mathrm{tr}}\begin{pmatrix}0&1\\-1&0\end{pmatrix}A
> =\begin{pmatrix}0&ad-bc\\bc-ad&0\end{pmatrix}
> =(\det A)\Omega.
> $$
> Thus preservation of $\Omega$ is equivalent to $\det A=1$. This proves $Sp(1;\mathbb R)=SL(2;\mathbb R)$ and $Sp(1;\mathbb C)=SL(2;\mathbb C)$. By the definition of the compact symplectic group,
> $$
> Sp(1)=Sp(1;\mathbb C)\cap U(2)=SL(2;\mathbb C)\cap U(2)=SU(2).
> $$
> For a concrete check, $\operatorname{diag}(2,\tfrac12)$ belongs to $Sp(1;\mathbb R)$ but is not unitary and therefore is not in compact $Sp(1)$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** The complete numbered exercise and printed hints were checked on the original 200 dpi page image. The solution is independently supplied; the exercise statement is not a source-written proof.
- **Notation:** The parameter 1 in $Sp(1;\mathbb R)$ corresponds to matrices of size 2. It must not be read as a one-dimensional real matrix group.
- **Routing:** The proof is a determinant computation and an intersection of matrix conditions.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
