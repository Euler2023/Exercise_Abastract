---
title: "Exercise Rep14: SL2C Action on Hermitian Matrices and Lorentz Space"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - lorentz-group
  - hermitian-forms
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 4, Ex. 4.8, printed p. 285, PDF p. 297"
created: 2026-08-24
---

# Exercise Rep14: SL2C Action on Hermitian Matrices and Lorentz Space

## Problem Statement

> [!question] Exercise 4.8
> Let $W$ be the real vector space of Hermitian $2\times2$ matrices.
>
> (a) Prove that the rule $P*A=PAP^*$ defines an operation of $SL_2(\mathbb C)$ on $W$.
>
> (b) Prove that the function $(A,A')=\det(A+A')-\det A-\det A'$ is a bilinear form on $W$, and that its signature is $(3,1)$.
>
> (c) Use (a) and (b) to define a homomorphism $\psi:SL_2(\mathbb C)\to O_{3,1}$, whose kernel is $\{\pm I\}$.
>
> [!warning] Source issue
> With Artin's convention that the signature $(p,q)$ counts positive and negative squares, the displayed bilinear form has signature $(1,3)$, not $(3,1)$. Its negative has signature $(3,1)$ and the same preserving group. The printed statement is retained above; the solution makes this sign correction explicit.

## Hints

> [!hint]- Hint 1
> Write $A=\begin{pmatrix}r&z\\\overline z&s\end{pmatrix}$ and introduce $u=(r+s)/2$, $v=(r-s)/2$, and $z=x+iy$.

> [!hint]- Hint 2
> The determinant becomes $u^2-v^2-x^2-y^2$.

## Solution

> [!success]- Solution
> **(a)** If $A=A^*$ and $P\in SL_2(\mathbb C)$, then
>
> $$
> (PAP^*)^*=PAP^*,
> $$
>
> so $PAP^*\in W$. Also $I*A=A$ and
>
> $$
> P*(Q*A)=P(QAQ^*)P^*=(PQ)A(PQ)^*=(PQ)*A.
> $$
>
> Hence this is an action.
>
> **(b)** Write
>
> $$
> A=
> \begin{pmatrix}
> u+v&x+iy\\
> x-iy&u-v
> \end{pmatrix}.
> $$
>
> Then
>
> $$
> \det A=u^2-v^2-x^2-y^2.
> $$
>
> Polarization gives
>
> $$
> (A,A')=2(uu'-vv'-xx'-yy').
> $$
>
> This is bilinear and has signature $(1,3)$. Thus $-(A,A')$ has signature $(3,1)$ and is preserved by exactly the same linear maps.
>
> **(c)** Because $\det P=1$,
>
> $$
> \det(PAP^*)=\det P\det A\,\overline{\det P}=\det A.
> $$
>
> Therefore the action preserves the polarized form and its negative, giving
>
> $$
> \psi:SL_2(\mathbb C)\longrightarrow O_{3,1}.
> $$
>
> If $P$ is in the kernel, then $PAP^*=A$ for every Hermitian $A$. Taking $A=I$ gives $PP^*=I$, so $PAP^{-1}=A$ for all Hermitian $A$. Hermitian matrices span $M_2(\mathbb C)$ over $\mathbb C$, hence $P$ is scalar. Since $\det P=1$, $P=\pm I$. Both scalars act trivially, so
>
> $$
> \ker\psi=\{\pm I\}.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Indefinite Bilinear Forms and Lorentz Groups|Indefinite Bilinear Forms and Lorentz Groups]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Notes

- **Source issue:** Direct coordinate calculation contradicts the printed signature. Negating the form repairs the convention without changing the orthogonal group or kernel.
- **Source status:** Ex. 4.8 was checked at [S1, Ch. 9, §9.4, printed p. 285, PDF p. 297]. Artin's signature convention was checked against the book's discussion of real symmetric forms. The action, polarization, signature calculation, and kernel proof are independent.

