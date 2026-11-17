---
title: "Daily Exercise List: 2026-11-16"
date: 2026-11-16
type: daily-exercise-list
tags:
  - daily-exercise-list
---

# Daily Exercise List: 2026-11-16

## Random Review

<!-- exercise-manager:exercises:start -->
1. [ ] [[04 - Linear Algebra and Modules/Exercises/Exercise LA94 - Successive Intersection Criterion for Direct Sums|Exercise LA94: Successive-Intersection Criterion for Direct Sums]] <!-- exercise-manager:unit c610d5c32a0e9926ca0b81eb0bd3cebbb29a0b1e984a0f500028e6a6b3f7f320 -->

   **Source:** Michael Artin, Algebra, 2nd ed., Ch. 3, Section 5, Ex. 5.3, printed p. 100, PDF p. 112

   > [!question] Exercise 5.3
   > Let $W_1,\ldots,W_k\le V$ and suppose $V=\sum_iW_i$. Assume
   >
   > $$
   > W_1\cap W_2=0,
   > \quad (W_1+W_2)\cap W_3=0,
   > \quad\ldots,\quad
   > (W_1+\cdots+W_{k-1})\cap W_k=0.
   > $$
   >
   > Prove that $V=W_1\oplus\cdots\oplus W_k$.

2. [ ] [[04 - Linear Algebra and Modules/Exercises/Exercise LA178 - Eigenvectors under Inversion and Exponentiation|Exercise LA178: Eigenvectors under Inversion and Exponentiation]] <!-- exercise-manager:unit 1b00f06195ada493543c61372c7f9990ce26b71a8627a185b4a069ed5ba0425e -->

   **Source:** Michael Artin, Algebra, 2nd ed., Ch. 5, §4, Ex. 4.3, printed p. 152, PDF p. 164

   > [!question] Exercise 4.3
   > Let $X$ be an eigenvector of an $n\times n$ matrix $A$, with eigenvalue $\lambda$.
   >
   > (a) Prove that if $A$ is invertible, then $X$ is an eigenvector for $A^{-1}$ with eigenvalue $\lambda^{-1}$.
   >
   > (b) Prove that $X$ is an eigenvector for $e^A$ with eigenvalue $e^\lambda$.

3. [ ] [[04 - Linear Algebra and Modules/Exercises/Exercise LA188 - Fibonacci and Averaging Recurrences by Matrices|Exercise LA188: Fibonacci and Averaging Recurrences by Matrices]] <!-- exercise-manager:unit 58717797d660cb471e1f116a08dfdf8ac8004fabd8b6cdfcffbe2c5451064849 -->

   **Source:** Michael Artin, Algebra, 2nd ed., Ch. 5, Miscellaneous Problems, Ex. M.5, printed pp. 152–153, PDF pp. 164–165

   > [!question] Miscellaneous Problem M.5
   > The Fibonacci numbers satisfy $f_n=f_{n-1}+f_{n-2}$, with $f_0=0$, $f_1=1$, equivalently
   >
   > $$
   > \begin{pmatrix}0&1\\1&1\end{pmatrix}
   > \begin{pmatrix}f_{n-2}\\f_{n-1}\end{pmatrix}
   > =\begin{pmatrix}f_{n-1}\\f_n\end{pmatrix}.
   > $$
   >
   > (a) Prove
   >
   > $$
   > f_n=\frac1\alpha\left[
   > \left(\frac{1+\alpha}{2}\right)-
   > \left(\frac{1-\alpha}{2}\right)^2
   > \right],\qquad \alpha=\sqrt5.
   > $$
   >
   > (b) If $a_n=\frac12(a_{n-1}+a_{n-2})$, compute $\lim a_n$ in terms of $a_0,a_1$.
   
   > [!warning] Source issue
   > The displayed formula above is the literal printed statement. Its right side is independent of $n$, so it cannot equal the Fibonacci number $f_n$ for all $n$. The intended statement is almost certainly Binet's formula
   >
   > $$
   > f_n=\frac1\alpha\left[
   > \left(\frac{1+\alpha}{2}\right)^n-
   > \left(\frac{1-\alpha}{2}\right)^n
   > \right].
   > $$
<!-- exercise-manager:exercises:end -->

## Systematic Progress

<!-- exercise-manager:systematic:start -->
1. [ ] [[04 - Linear Algebra and Modules/Exercises/Exercise LA223 - Diagonalization by Row and Column Operations|Exercise LA223: Diagonalization by Row and Column Operations]] <!-- exercise-manager:systematic-unit 52b9be2f54f8e3de3d07e8ac46199ee055fef7950af2e98e81e261df2c764a96 -->

   **Source:** Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.14, printed p. 255, PDF p. 267

   > [!question] Exercise 4.14
   > The matrix form of Theorem 8.4.10 asserts that if $A$ is a real symmetric matrix, there exists an invertible matrix $P$ such that $P^{\mathsf T}AP$ is diagonal. Prove this by row and column operations.

2. [ ] [[04 - Linear Algebra and Modules/Exercises/Exercise LA224 - Projection onto a Plane in R3|Exercise LA224: Projection onto a Plane in R3]] <!-- exercise-manager:systematic-unit 626d0250f17be15493f76abc919816ed3f900b715bfa3f6b09d24bca0ce10cc6 -->

   **Source:** Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.15, printed p. 255, PDF p. 267

   > [!question] Exercise 4.15
   > Let $W$ be the subspace of $\mathbb R^3$ spanned by the vectors $(1,1,0)^{\mathsf T}$ and $(0,1,1)^{\mathsf T}$. Determine the orthogonal projection of the vector $(1,0,0)^{\mathsf T}$ to $W$.

3. [ ] [[04 - Linear Algebra and Modules/Exercises/Exercise LA225 - Projection onto Skew-Symmetric Matrices|Exercise LA225: Projection onto Skew-Symmetric Matrices]] <!-- exercise-manager:systematic-unit f55d10a167c59ead464f294d6fb50c89d4bfd4bd53a1b264e77e34c245b62426 -->

   **Source:** Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.16, printed p. 255, PDF p. 267

   > [!question] Exercise 4.16
   > Let $V$ be the real vector space of $3\times3$ matrices with the bilinear form $(A,B)=\operatorname{trace}(A^{\mathsf T}B)$, and let $W$ be the subspace of skew-symmetric matrices. Compute the orthogonal projection to $W$ of the matrix
   >
   > $$
   > M=\begin{pmatrix}1&2&0\\0&0&1\\1&3&0\end{pmatrix}.
   > $$
<!-- exercise-manager:systematic:end -->

<!-- Continue the source in order here. This section is preserved on re-export. -->

## Notes
