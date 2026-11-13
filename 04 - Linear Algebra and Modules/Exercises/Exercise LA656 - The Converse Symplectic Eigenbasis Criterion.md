---
title: "Exercise LA656: The Converse Symplectic Eigenbasis Criterion"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 1, Section 1.6, Exercise 6, printed p. 27, PDF p. 39"
source_refs:
  - "S10/ch-1/sec-6/ex-6"
created: 2026-11-12
---

# Exercise LA656: The Converse Symplectic Eigenbasis Criterion

## Problem Statement

> [!question] Original Chapter 1, Exercise 6
> Suppose $U$ belongs to $M_{2n}(\mathbb C)$ and $U$ has an orthonormal basis of eigenvectors satisfying the conditions in Theorem 1.6. Show that $U$ belongs to $Sp(n)$.
>
> Hint: Start by showing that $U$ is unitary. Then show that $\omega(Uz,Uw)=\omega(z,w)$ if $z$ and $w$ belong to the basis $u_1,\ldots,u_n,v_1,\ldots,v_n$.

## Hints

> [!hint]- Hint 1
> The specified eigenvalues all have modulus one.

> [!hint]- Hint 2
> For the bilinear form, compute the pairings between two $u$ vectors, two $v$ vectors, and a $u$ vector with a $v$ vector separately.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The hypotheses from Theorem 1.6 are an orthonormal basis $u_1,\ldots,u_n,v_1,\ldots,v_n$, with $Ju_j=v_j$, and real $\theta_j$ such that
> $$
> Uu_j=e^{i\theta_j}u_j,\qquad Uv_j=e^{-i\theta_j}v_j,
> $$
> $$
> \omega(u_j,u_k)=\omega(v_j,v_k)=0,\qquad \omega(u_j,v_k)=\delta_{jk}.
> $$
> Here $J(\alpha,\beta)=(-\overline\beta,\overline\alpha)$, $\omega(z,w)=z^{\mathrm{tr}}\Omega w$, and $Sp(n)=U(2n)\cap Sp(n;\mathbb C)$. [S10, Theorem 1.6, printed pp. 14–15, PDF pp. 26–27]
>
> For $z=\sum a_ju_j+\sum b_jv_j$ and $w=\sum c_ju_j+\sum d_jv_j$, orthonormality and the modulus-one eigenvalues give
> $$
> \langle Uz,Uw\rangle
> =\sum_j\overline{a_j}c_j+\sum_j\overline{b_j}d_j
> =\langle z,w\rangle.
> $$
> Thus $U$ is unitary. Because $\omega$ is complex bilinear,
> $$
> \omega(Uu_j,Uu_k)=0,\qquad \omega(Uv_j,Uv_k)=0,
> $$
> $$
> \omega(Uu_j,Uv_k)=e^{i(\theta_j-\theta_k)}\delta_{jk}=\delta_{jk}.
> $$
> The reversed mixed pairings agree by skew symmetry. Expanding arbitrary $z,w$ in this basis now gives $\omega(Uz,Uw)=\omega(z,w)$, so $U\in Sp(n;\mathbb C)$. Together with unitarity this proves $U\in Sp(n)$.
>
> For $n=1$, the diagonal matrix $\operatorname{diag}(e^{i\theta},e^{-i\theta})$ with the standard basis satisfies all the conditions.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** The complete numbered exercise and printed hints were checked on the original 200 dpi page image. The solution is independently supplied; the exercise statement is not a source-written proof.
- **Proof provenance:** The source leaves this converse to Exercise 6; the calculation above supplies it independently. No proof of the forward eigenbasis theorem is being claimed here.
- **Notation:** The alternating form is complex bilinear, whereas the Hermitian inner product is conjugate linear in its first entry.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
