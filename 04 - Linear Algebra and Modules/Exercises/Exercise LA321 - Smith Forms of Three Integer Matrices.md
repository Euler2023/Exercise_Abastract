---
title: "Exercise LA321: Smith Forms of Three Integer Matrices"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - smith-normal-form
  - lattices
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 4, Diagonalizing Integer Matrices, Ex. 4.1, printed p. 438, PDF p. 450"
created: 2026-08-28
---

# Exercise LA321: Smith Forms of Three Integer Matrices

## Problem Statement

> [!question] Exercise 4.1
> **(a)** Reduce each matrix to diagonal form by integer row and column operations:
>
> $$
> \begin{pmatrix}3&1\\-1&2\end{pmatrix},
> \qquad
> \begin{pmatrix}4&7&2\\2&4&6\end{pmatrix},
> \qquad
> \begin{pmatrix}3&1&-4\\2&-3&1\\-4&6&-2\end{pmatrix}.
> $$
>
> **(b)** For the first matrix, let $V=\mathbb Z^2$ and let $L=AV$. Draw the sublattice $L$, and find bases of $V$ and $L$ that exhibit the diagonalization.
>
> **(c)** Determine integer matrices $Q^{-1}$ and $P$ that diagonalize the second matrix.

## Hints

> [!hint]- Hint 1
> The invariant factors are determined by gcds of entries, minors, and the determinant.

> [!hint]- Hint 2
> For the second matrix, try column combinations $2C_1-C_2$, $-7C_1+4C_2$, and $17C_1-10C_2+C_3$.

## Solution

> [!success]- Solution
> **(a)** Integer row and column operations give the Smith forms
>
> $$
> \begin{pmatrix}3&1\\-1&2\end{pmatrix}sim
> \begin{pmatrix}1&0\\0&7\end{pmatrix},
> $$
>
> $$
> \begin{pmatrix}4&7&2\\2&4&6\end{pmatrix}sim
> \begin{pmatrix}1&0&0\\0&2&0\end{pmatrix},
> $$
>
> and
>
> $$
> \begin{pmatrix}3&1&-4\\2&-3&1\\-4&6&-2\end{pmatrix}sim
> \begin{pmatrix}1&0&0\\0&11&0\\0&0&0\end{pmatrix}.
> $$
>
> For the third matrix, the gcd of the entries is $1$, the gcd of its $2\times2$ minors is $11$, and its determinant is $0$ while its rank is $2$; these invariants certify the displayed Smith form.
>
> **(b)** For the first matrix one may take
>
> $$
> P=\begin{pmatrix}0&1\\1&-3\end{pmatrix},
> \qquad
> Q^{-1}=Q=\begin{pmatrix}1&0\\2&-1\end{pmatrix},
> $$
>
> for which
>
> $$
> Q^{-1}AP=\operatorname{diag}(1,7).
> $$
>
> Thus a domain basis is
>
> $$
> p_1=(0,1)^{\mathsf T},\qquad p_2=(1,-3)^{\mathsf T},
> $$
>
> an ambient codomain basis is
>
> $$
> q_1=(1,2)^{\mathsf T},\qquad q_2=(0,-1)^{\mathsf T},
> $$
>
> and the corresponding basis of $L$ is $q_1,7q_2$. The original and diagonalized bases are shown below.
>
> ![[Attachments/artin-algebra-2e-ch14-ex-4.1-index-seven-sublattice.png]]
>
> **(c)** For the second matrix, no row operations are needed:
>
> $$
> Q^{-1}=I_2,
> \qquad
> P=\begin{pmatrix}
> 2&-7&17\\
> -1&4&-10\\
> 0&0&1
> \end{pmatrix}.
> $$
>
> The determinant of $P$ is $1$, and direct multiplication gives
>
> $$
> Q^{-1}AP=
> \begin{pmatrix}1&0&0\\0&2&0\end{pmatrix}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- **Routing:** Linear Algebra is primary because unimodular basis changes and invariant factors perform all computations.
- **Source figure:** The exercise asks for a new sketch but supplies no source diagram. The attached TikZ/PDF/PNG asset is an independent construction from the verified matrix on [S1, Ch. 14, §14.4, Ex. 4.1, printed p. 438, PDF p. 450].
- **Computational verification:** All displayed transformation matrices and Smith invariants were checked by exact integer arithmetic.
