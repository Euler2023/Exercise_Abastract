---
title: "Exercise LA665: The Kernel of the SU2 Rotation Homomorphism"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 1, Section 1.6, Exercise 16, printed p. 29, PDF p. 41"
source_refs:
  - "S10/ch-1/sec-6/ex-16"
created: 2026-11-12
---

# Exercise LA665: The Kernel of the SU2 Rotation Homomorphism

## Problem Statement

> [!question] Original Chapter 1, Exercise 16
> (a) Show that if a matrix $A$ commutes with every matrix $X$ of the form (1.14), then $A$ commutes with every element of $M_2(\mathbb C)$. Conclude that $A$ must be a multiple of the identity.
>
> (b) Show that the kernel of the map $U\mapsto\Phi_U$ in Proposition 1.19 is precisely the set $\{I,-I\}$.

**Source notation.** In Hall's equation (1.14),
$$
X=\begin{pmatrix}x_1&x_2+ix_3\\
x_2-ix_3&-x_1\end{pmatrix},
\qquad x_1,x_2,x_3\in\mathbb R.
$$
These matrices form the real vector space $V$ of traceless self-adjoint $2\times2$ complex matrices. For $U\in SU(2)$, the map $\Phi_U:V\to V$ is $\Phi_U(X)=UXU^{-1}$, identified with a rotation of $\mathbb R^3$ by the coordinates $x_1,x_2,x_3$. [S10, §1.4, equation (1.14) and the conjugation map, printed pp. 22–23, PDF pp. 34–35; Proposition 1.19, printed p. 24, PDF p. 36]

## Hints

> [!hint]- Hint 1
> Take the three matrices obtained from (1.14) by setting one coordinate equal to 1 and the other two equal to 0. Together with $I$, they span $M_2(\mathbb C)$ over $\mathbb C$.

> [!hint]- Hint 2
> Commutation with $\operatorname{diag}(1,-1)$ forces a matrix to be diagonal. Commutation with $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ then equates its two diagonal entries. Apply this to an element of the kernel and use its determinant.

## Solution

> [!success]- Solution
> **Proof scope:** Independent matrix calculation. The definition of the conjugation map is taken from the verified source context; the kernel conclusion of Proposition 1.19 is not used as an input.
>
> **(a) Compute the common centralizer.** Put
> $$
> H=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\quad
> K=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
> L=\begin{pmatrix}0&i\\-i&0\end{pmatrix}.
> $$
> Every one of these is a matrix of the form (1.14), so $A$ commutes with all three. It also commutes with $I$. For an arbitrary matrix $M=\begin{pmatrix}p&q\\r&s\end{pmatrix}\in M_2(\mathbb C)$, we have
> $$
> M=\frac{p+s}{2}I+\frac{p-s}{2}H
> +\frac{q+r}{2}K+\frac{q-r}{2i}L.
> $$
> Commutation is preserved under complex linear combinations, and therefore $AM=MA$ for every such $M$.
>
> To determine $A$ explicitly, write $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$. The relation $AH=HA$ gives
> $$
> \begin{pmatrix}a&-b\\c&-d\end{pmatrix}
> =\begin{pmatrix}a&b\\-c&-d\end{pmatrix},
> $$
> whence $b=c=0$. The relation $AK=KA$ then becomes
> $$
> \begin{pmatrix}0&a\\d&0\end{pmatrix}
> =\begin{pmatrix}0&d\\a&0\end{pmatrix},
> $$
> so $a=d$ and $A=aI$.
>
> **(b) Determine the kernel.** If $U\in SU(2)$ belongs to the kernel of $U\mapsto\Phi_U$, then
> $$
> UXU^{-1}=X\qquad\text{for every }X\in V.
> $$
> Equivalently, $UX=XU$ for every matrix of the form (1.14). Part (a) implies $U=aI$ for some $a\in\mathbb C$. Since $\det U=1$,
> $$
> 1=\det(aI)=a^2,
> $$
> and hence $a=1$ or $a=-1$. Conversely, both $I$ and $-I$ are unitary matrices of determinant one and commute with every $X$, so both lie in the kernel. Therefore
> $$
> \ker\Phi=\{I,-I\}.
> $$
> As a concrete check, $(-I)X(-I)^{-1}=X$, whereas for $U=\operatorname{diag}(i,-i)$ one has $UKU^{-1}=-K\ne K$. Thus a noncentral diagonal element of $SU(2)$ need not lie in the kernel.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2 Quaternions and the Spin Cover]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Source status:** Both parts and the relevant definitions were checked on the original 200 dpi page images. No hint is printed for this numbered exercise.
- **Proof dependency:** Hall's proof of Proposition 1.19 explicitly invokes this exercise for the kernel. Quoting that proposition's kernel statement here would be circular. The calculation above supplies that missing step directly.
- **Method boundary:** The result uses the complex linear span of the real space $V$. It does not claim that $V$ itself equals all of $M_2(\mathbb C)$.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
