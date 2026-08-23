---
title: "Exercise LA188: Fibonacci and Averaging Recurrences by Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - recurrences
  - fibonacci-numbers
  - eigenvalues
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, Miscellaneous Problems, Ex. M.5, printed pp. 152–153, PDF pp. 164–165"
created: 2026-08-24
---

# Exercise LA188: Fibonacci and Averaging Recurrences by Matrices

## Problem Statement

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

## Hints

> [!hint]- Hint 1
> Diagonalize the companion matrix, or solve the characteristic equations of the recurrences.

## Solution

> [!success]- Solution
> (a) We solve the intended corrected statement. The characteristic equation $r^2=r+1$ has roots
>
> $$
> \phi=\frac{1+\sqrt5}{2},\qquad \psi=\frac{1-\sqrt5}{2}.
> $$
>
> Thus $f_n=C\phi^n+D\psi^n$. The initial conditions give $C=1/\sqrt5$ and $D=-1/\sqrt5$, proving the stated formula.
>
> (b) The characteristic equation is
>
> $$
> r^2=\frac12(r+1),
> $$
>
> whose roots are $1$ and $-1/2$. Hence
>
> $$
> a_n=C+D\left(-\frac12\right)^n.
> $$
>
> From $a_0=C+D$ and $a_1=C-D/2$,
>
> $$
> C=\frac{a_0+2a_1}{3}.
> $$
>
> The second term tends to zero, so
>
> $$
> \lim_{n\to\infty}a_n=\frac{a_0+2a_1}{3}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]

## Notes

- **Source issue:** Printed p. 153/PDF p. 165 visibly omits the exponent on the first Binet term and prints exponent $2$ on the second. The note preserves that text and labels the intended correction as an inference.
- **Source status:** The matrix recurrence was checked on printed p. 152/PDF p. 164, and part (b), including its factor $1/2$, was visually checked on printed p. 153/PDF p. 165. The solution is independent.
