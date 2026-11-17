---
title: "Exercise LA669: Orthonormal Basis Invariance and the Eigenvalue Bound"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 2, Section 2.6, Exercise 2, printed p. 46, PDF p. 58"
source_refs:
  - "S10/ch-2/sec-6/ex-2"
created: 2026-11-17
---

# Exercise LA669: Orthonormal Basis Invariance and the Eigenvalue Bound

## Problem Statement

> [!question] Original Chapter 2, Exercise 2
> Show that for $X\in M_n(\mathbb C)$ and any orthonormal basis $\{u_1,\ldots,u_n\}$ of $\mathbb C^n$, $\|X\|^2=\sum_{j,k=1}^{n}|\langle u_j,Xu_k\rangle|^2$, where $\|\cdot\|$ is as in Definition 2.2. Now show that if $v$ is an eigenvector for $X$ with eigenvalue $\lambda$, then $|\lambda|\le\|X\|$.

## Hints

> [!hint]- Hint 1
> Let $Q$ have columns $u_1,\ldots,u_n$. The matrix with entries $\langle u_j,Xu_k\rangle$ is $Q^*XQ$.

> [!hint]- Hint 2
> For the eigenvalue bound, choose an orthonormal basis whose first vector is $v/\|v\|_2$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Use Hall's convention $\langle z,w\rangle=z^*w$, conjugate linear in the first variable. For every matrix $Z$,
> $$
> \|Z\|^2=\sum_{j,k}|Z_{jk}|^2=\operatorname{tr}(Z^*Z).
> $$
> If $Q=(u_1\ \cdots\ u_n)$, orthonormality gives $Q^*Q=QQ^*=I$, and
> $$
> (Q^*XQ)_{jk}=\langle u_j,Xu_k\rangle.
> $$
> For square matrices $B,C$, finite summation gives
> $$
> \operatorname{tr}(BC)=\sum_{j,k}B_{jk}C_{kj}
> =\sum_{k,j}C_{kj}B_{jk}=\operatorname{tr}(CB).
> $$
> Therefore
> $$
> \begin{aligned}
> \sum_{j,k}|\langle u_j,Xu_k\rangle|^2
> &=\operatorname{tr}\big((Q^*XQ)^*(Q^*XQ)\big)\\
> &=\operatorname{tr}(Q^*X^*XQ)
> =\operatorname{tr}(X^*XQQ^*)\\
> &=\operatorname{tr}(X^*X)=\|X\|^2.
> \end{aligned}
> $$
> This proves invariance under any orthonormal change of basis.
>
> Now let $Xv=\lambda v$ with $v\ne0$. By the Gram–Schmidt basis-extension theorem, the unit vector $u_1=v/\|v\|_2$ extends to an orthonormal basis. Since $Xu_1=\lambda u_1$,
> $$
> \langle u_1,Xu_1\rangle=\lambda.
> $$
> The established basis formula expresses $\|X\|^2$ as a sum of nonnegative terms including $|\lambda|^2$. Hence $|\lambda|^2\le\|X\|^2$, and taking square roots gives $|\lambda|\le\|X\|$.
>
> For example, $X=\operatorname{diag}(3,4)$ has $\|X\|=5$, and both eigenvalue moduli are at most 5. The bound is an inequality; it need not be sharp.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Hilbert-Schmidt Norm|Hilbert-Schmidt Norm]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

- **Source status:** The complete numbered problem was checked on the original 200 dpi image, printed p. 46 / PDF p. 58. No hint is printed for this exercise. The solution is independently supplied.
- **Imported input:** Gram–Schmidt extends a nonzero normalized vector to an orthonormal basis; no diagonalizability of $X$ is assumed.
- **Convention:** The existing Inner Product Spaces note uses first-variable linearity. Hall uses first-variable conjugate linearity. This changes coordinate conventions, while the norm and absolute-square assertions here are unchanged.
- **Routing:** The proof uses a unitary basis change, trace, and a matrix eigenvector.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
