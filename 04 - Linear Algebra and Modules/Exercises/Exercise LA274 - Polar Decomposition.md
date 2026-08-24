---
title: "Exercise LA274: Polar Decomposition"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - polar-decomposition
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Miscellaneous Ex. M.8, printed pp. 259–260, PDF pp. 271–272"
created: 2026-08-24
---

# Exercise LA274: Polar Decomposition

## Problem Statement

> [!question] Miscellaneous Problem M.8
> Let $A$ be a nonsingular complex matrix.
>
> **(a)** Prove that there is a unique positive Hermitian matrix $B$ such that $B^2=A^*A$.
>
> **(b)** Prove that $AB^{-1}$ is unitary.
>
> **(c)** Deduce that $A$ can be written $A=UP$, where $U$ is unitary and $P$ is positive Hermitian.
>
> **(d)** Prove that this decomposition is unique.
>
> **(e)** Describe the orbit space for left multiplication of $U_n$ on $GL_n(\mathbb C)$.

## Hints

> [!hint]- Hint 1
> Apply the spectral theorem to the positive Hermitian matrix $A^*A$ and take the positive square root of every eigenvalue.

> [!hint]- Hint 2
> In any decomposition $A=UP$, the equation $A^*A=P^2$ recovers $P$.

## Solution

> [!success]- Solution
> **(a)** Since $A$ is nonsingular,
>
> $$
> X^*A^*AX=\lVert AX\rVert^2>0
> $$
>
> for $X\ne0$. Thus $A^*A$ is positive Hermitian. By the spectral theorem,
>
> $$
> A^*A=V\operatorname{diag}(d_1,\ldots,d_n)V^*,
> \qquad d_i>0,
> $$
>
> with $V$ unitary. Then
>
> $$
> B=V\operatorname{diag}(\sqrt{d_1},\ldots,\sqrt{d_n})V^*
> $$
>
> is positive Hermitian and satisfies $B^2=A^*A$. If $C$ is another positive Hermitian square root, then $C$ commutes with $C^2=A^*A$ and preserves every eigenspace of $A^*A$. On the $d$-eigenspace, the positive Hermitian operator $C$ has eigenvalues whose positive squares equal $d$, so it equals $\sqrt d,I$. Hence $C=B$.
>
> **(b)** Set $U=AB^{-1}$. Since $B^*=B$,
>
> $$
> U^*U=B^{-1}A^*AB^{-1}=B^{-1}B^2B^{-1}=I.
> $$
>
> Therefore $U$ is unitary.
>
> **(c)** We have the polar decomposition
>
> $$
> \boxed{A=UP},\qquad P=B=(A^*A)^{1/2},\qquad U=AP^{-1}.
> $$
>
> **(d)** If $A=UP=U'P'$ with $U,U'$ unitary and $P,P'$ positive Hermitian, then
>
> $$
> A^*A=P^2=(P')^2.
> $$
>
> Uniqueness of the positive square root gives $P=P'$, and then $U=AP^{-1}=U'$.
>
> **(e)** Left multiplication by $U_n$ changes only the unitary factor: $W(UP)=(WU)P$. Thus every orbit contains the unique positive Hermitian matrix $P=(A^*A)^{1/2}$. Consequently,
>
> $$
> U_n\backslash GL_n(\mathbb C)\cong
> \{P:P=P^*,\ P>0\}.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]

## Notes

- Positivity is essential for uniqueness of the square root.
- **Source status:** All five parts were visually verified at [S1, Ch. 8, M.8, printed pp. 259–260, PDF pp. 271–272]. The solution is an independent derivation.

