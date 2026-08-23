---
title: "Exercise LA174: Four Constant-Coefficient Matrix Differential Systems"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - differential-equations
  - eigenvalues
  - diagonalization
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §3, Ex. 3.3, printed p. 151, PDF p. 163"
created: 2026-08-24
---

# Exercise LA174: Four Constant-Coefficient Matrix Differential Systems

## Problem Statement

> [!question] Exercise 3.3
> Solve $dX/dt=AX$ for the following matrices:
>
> $$
> \text{(a) }\begin{pmatrix}2&1\\1&2\end{pmatrix},\quad
> \text{(b) }\begin{pmatrix}1&i\\-i&1\end{pmatrix},\quad
> \text{(c) }\begin{pmatrix}1&2&3\\0&0&4\\0&0&-1\end{pmatrix},\quad
> \text{(d) }\begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> For an eigenpair $Av=\lambda v$, the vector-valued function $e^{\lambda t}v$ is a solution.

## Solution

> [!success]- Solution
> Arbitrary constants below are complex; impose conjugacy conditions to obtain real solutions when $A$ is real.
>
> (a) Eigenpairs are $3,(1,1)^t$ and $1,(1,-1)^t$, so
>
> $$
> X(t)=c_1e^{3t}\begin{pmatrix}1\\1\end{pmatrix}
> +c_2e^t\begin{pmatrix}1\\-1\end{pmatrix}.
> $$
>
> (b) Eigenpairs are $0,(1,i)^t$ and $2,(1,-i)^t$, so
>
> $$
> X(t)=c_1\begin{pmatrix}1\\i\end{pmatrix}
> +c_2e^{2t}\begin{pmatrix}1\\-i\end{pmatrix}.
> $$
>
> (c) Eigenvectors for $1,0,-1$ may be chosen as $(1,0,0)^t$, $(-2,1,0)^t$, and $(5,-8,2)^t$. Thus
>
> $$
> X(t)=c_1e^t\begin{pmatrix}1\\0\\0\end{pmatrix}
> +c_2\begin{pmatrix}-2\\1\\0\end{pmatrix}
> +c_3e^{-t}\begin{pmatrix}5\\-8\\2\end{pmatrix}.
> $$
>
> (d) Let $\omega=e^{2\pi i/3}$. The eigenpairs are
>
> $$
> 1,\begin{pmatrix}1\\1\\1\end{pmatrix};\qquad
> \omega,\begin{pmatrix}1\\\omega^2\\\omega\end{pmatrix};\qquad
> \omega^2,\begin{pmatrix}1\\\omega\\\omega^2\end{pmatrix}.
> $$
>
> Hence
>
> $$
> X(t)=c_1e^t\begin{pmatrix}1\\1\\1\end{pmatrix}
> +c_2e^{\omega t}\begin{pmatrix}1\\\omega^2\\\omega\end{pmatrix}
> +c_3e^{\omega^2t}\begin{pmatrix}1\\\omega\\\omega^2\end{pmatrix}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]

## Notes

- **Source status:** All four matrices, including the signs of the imaginary entries in (b), were visually checked at [S1, Ch. 5, §3, Ex. 3.3, printed p. 151, PDF p. 163]. The solutions are independently computed.

