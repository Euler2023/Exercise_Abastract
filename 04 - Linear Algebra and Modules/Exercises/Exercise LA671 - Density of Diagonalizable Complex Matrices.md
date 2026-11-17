---
title: "Exercise LA671: Density of Diagonalizable Complex Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 2, Section 2.6, Exercise 4, printed p. 46, PDF p. 58"
source_refs:
  - "S10/ch-2/sec-6/ex-4"
created: 2026-11-17
---

# Exercise LA671: Density of Diagonalizable Complex Matrices

## Problem Statement

> [!question] Original Chapter 2, Exercise 4
> Using Theorem A.4, show that every $n\times n$ complex matrix $A$ is the limit of a sequence of diagonalizable matrices.
>
> *Hint:* If an $n\times n$ matrix has $n$ distinct eigenvalues, it is necessarily diagonalizable.

## Hints

> [!hint]- Hint 1
> Put $A$ into upper triangular form. Perturb its diagonal while leaving its entries above the diagonal fixed.

> [!hint]- Hint 2
> If the original diagonal entries are $\lambda_1,\ldots,\lambda_n$, consider $\lambda_j+jt$. Only finitely many values of $t$ can make two of these entries equal.

## Solution

> [!success]- Solution
> **Proof scope:** Independent approximation argument using the triangularization assertion in Hall's Theorem A.4 as a named linear algebra input.
>
> **Named input.** Every complex square matrix is similar to an upper triangular matrix. This is the first assertion of Theorem A.4, which is stated without proof in the inspected appendix. [S10, Appendix A, Theorem A.4, printed p. 412, PDF p. 416]
>
> Accordingly, write $A=STS^{-1}$, where $S$ is invertible and $T$ is upper triangular with diagonal entries $\lambda_1,\ldots,\lambda_n$. Let
> $$
> D=\operatorname{diag}(1,2,\ldots,n),\qquad
> F=\left\{\frac{\lambda_j-\lambda_i}{i-j}:1\le i<j\le n\right\}.
> $$
> This is a finite set. For each positive integer $m$, choose a real number $t_m\in(0,1/m)$ outside $F$. Such a choice exists because a nonempty real interval cannot be exhausted by a finite set. Define
> $$
> T_m=T+t_mD,\qquad A_m=ST_mS^{-1}.
> $$
> The matrix $T_m$ is upper triangular with diagonal entries
> $$
> \mu_{j,m}=\lambda_j+jt_m,\qquad 1\le j\le n.
> $$
> If $\mu_{i,m}=\mu_{j,m}$ for $i<j$, then $t_m=(\lambda_j-\lambda_i)/(i-j)\in F$, contradicting the choice of $t_m$. Thus all $n$ diagonal entries are distinct. Since the determinant of a triangular matrix is the product of its diagonal entries,
> $$
> \det(zI-T_m)=\prod_{j=1}^{n}(z-\mu_{j,m}),
> $$
> and $T_m$ has $n$ distinct eigenvalues.
>
> For completeness, eigenvectors for distinct eigenvalues are independent. Choose a nonzero eigenvector $v_j$ for each $\mu_{j,m}$. If $\sum_j c_jv_j=0$, apply $\prod_{\ell\ne j}(T_m-\mu_{\ell,m}I)$ to obtain
> $$
> c_j\prod_{\ell\ne j}(\mu_{j,m}-\mu_{\ell,m})v_j=0.
> $$
> Every factor is nonzero, so $c_j=0$. This holds for every $j$, proving independence. Hence $T_m$ is diagonalizable, and similarity makes $A_m$ diagonalizable as well.
>
> Finally,
> $$
> A_m-A=t_mSDS^{-1}\longrightarrow0,
> $$
> because $SDS^{-1}$ is fixed and $t_m\to0$. This is entrywise convergence and therefore convergence in the usual finite-dimensional matrix topology. The required sequence has been constructed.
>
> For example,
> $$
> A_m=\begin{pmatrix}1/m&1\\0&2/m\end{pmatrix}
> \longrightarrow
> \begin{pmatrix}0&1\\0&0\end{pmatrix}.
> $$
> The eigenvalues of $A_m$ are $1/m$ and $2/m$, so every $A_m$ is diagonalizable. The nonzero limit has square zero and cannot be diagonalizable: a diagonalizable matrix whose only eigenvalue is zero would be zero.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]

## Notes

- **Source status:** The complete exercise, printed hint, and Theorem A.4 were checked on the original 200 dpi page images. The approximation proof is independently supplied; the appendix's triangularization assertion is an imported input.
- **Field boundary:** The sequence is diagonalizable over $\mathbb C$. The argument uses complex triangularization and does not assert density of matrices diagonalizable over $\mathbb R$ in all real matrices.
- **Topological boundary:** The example shows that the set of diagonalizable complex matrices is dense but need not contain the limits of its convergent sequences.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
