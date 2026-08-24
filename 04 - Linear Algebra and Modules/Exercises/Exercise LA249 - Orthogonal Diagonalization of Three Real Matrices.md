---
title: "Exercise LA249: Orthogonal Diagonalization of Three Real Matrices"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - symmetric-matrices
  - orthogonal-diagonalization
  - source-issue
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.13, printed p. 257, PDF p. 269"
created: 2026-08-24
---

# Exercise LA249: Orthogonal Diagonalization of Three Real Matrices

## Problem Statement

> [!question] Exercise 6.13
> Find a real orthogonal matrix $P$ so that $P^{\mathsf T}AP$ is diagonal, when $A$ is the matrix
>
> $$
> \text{(a) }\begin{pmatrix}1&2\\2&1\end{pmatrix},
> \quad
> \text{(b) }\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix},
> \quad
> \text{(c) }\begin{pmatrix}1&0&1\\0&1&0\\1&0&0\end{pmatrix}.
> $$

> [!warning] Source issue
> The printed line begins “6.13. 5. Find…”. The isolated “5.” has no mathematical role and appears to be a typesetting artifact. The matrices above preserve the actual displayed data.

## Hints

> [!hint]- Hint 1
> Use normalized eigenvectors as the columns of $P$.

## Solution

> [!success]- Solution
> **(a)** Take
>
> $$
> P_a=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},
> \qquad
> P_a^{\mathsf T}AP_a=\operatorname{diag}(3,-1).
> $$
>
> **(b)** An orthonormal eigenbasis is
>
> $$
> u_1=\frac{(1,1,1)^{\mathsf T}}{\sqrt3},
> \quad
> u_2=\frac{(1,-1,0)^{\mathsf T}}{\sqrt2},
> \quad
> u_3=\frac{(1,1,-2)^{\mathsf T}}{\sqrt6}.
> $$
>
> With $P_b=(u_1\ u_2\ u_3)$, one has $P_b^{\mathsf T}AP_b=\operatorname{diag}(3,0,0)$.
>
> **(c)** Put
>
> $$
> \phi=\frac{1+\sqrt5}{2},
> \qquad
> \psi=\frac{1-\sqrt5}{2}.
> $$
>
> The mutually orthogonal eigenvectors $(\phi,0,1)^{\mathsf T}$, $(0,1,0)^{\mathsf T}$, and $(\psi,0,1)^{\mathsf T}$ have eigenvalues $\phi,1,\psi$. Thus, with
>
> $$
> P_c=\begin{pmatrix}
> \phi/\sqrt{\phi^2+1}&0&\psi/\sqrt{\psi^2+1}\\
> 0&1&0\\
> 1/\sqrt{\phi^2+1}&0&1/\sqrt{\psi^2+1}
> \end{pmatrix},
> $$
>
> we obtain $P_c^{\mathsf T}AP_c=\operatorname{diag}(\phi,1,\psi)$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- The source artifact is recorded rather than silently removed.
- **Source status:** The stray “5.” and all three matrices were visually verified at [S1, Ch. 8, §6, Ex. 6.13, printed p. 257, PDF p. 269]. The diagonalizations are independent.

