---
title: Classical Linear Groups
aliases:
  - Classical Matrix Groups
  - 经典线性群
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
  - matrix-groups
  - classical-groups
created: 2026-08-10
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 1, printed pp. 261–262, PDF pp. 273–274"
---

# Classical Linear Groups

## Definition

Let $F$ be a field. The **general linear group** is
$$
GL_n(F)=\{P\in M_n(F):\det P\ne0\}.
$$
A **linear group** or **matrix group** is a subgroup of some $GL_n(F)$.

Artin calls the following families the **classical linear groups**:

| Group | Defining equation | Preserved object |
|---|---|---|
| $SL_n(\mathbb R)$ | $\det P=1$ | volume and orientation |
| $O_n$ | $P^{\mathsf T}P=I$ | Euclidean dot product |
| $SO_n$ | $P^{\mathsf T}P=I$, $\det P=1$ | dot product and orientation |
| $U_n$ | $P^*P=I$ | standard Hermitian product |
| $SU_n$ | $P^*P=I$, $\det P=1$ | Hermitian product and complex volume |
| $SP_{2n}(\mathbb R)$ | $P^{\mathsf T}JP=J$ | standard symplectic form |
| $O_{p,q}$ | $P^{\mathsf T}I_{p,q}P=I_{p,q}$ | a form of signature $(p,q)$ |

Here
$$
J=\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix},
\qquad
I_{p,q}=\operatorname{diag}(I_p,-I_q).
$$

## Real and Complex Versions

Unless explicitly stated otherwise, Artin uses $GL_n$, $SL_n$, $O_n$, and $SP_{2n}$ for the **real** groups in Chapter 9. Their complex analogues are defined by the same polynomial equations over $\mathbb C$.

The complex orthogonal group and the unitary group must not be confused:
$$
O_n(\mathbb C):P^{\mathsf T}P=I,
\qquad
U_n:P^*P=I.
$$
Complex transpose does not conjugate entries, whereas conjugate transpose does.

## Realification of Complex Matrices

Writing $A=B+iC$ with real $B,C$, define
$$
\rho(A)=
\begin{pmatrix}
B&-C\\
C&B
\end{pmatrix}.
$$
Then
$$
\rho(A_1A_2)=\rho(A_1)\rho(A_2),
\qquad
\rho(I)=I,
$$
and $\rho(A)=0$ only when $A=0$. Hence $\rho$ embeds $GL_n(\mathbb C)$ into $GL_{2n}(\mathbb R)$. This is the matrix form of regarding $\mathbb C^n$ as a $2n$-dimensional real vector space.

## Key Properties

1. Each defining equation is preserved by products and inverses, so it defines a group.
2. Orthogonal and unitary matrices have columns forming orthonormal bases for the corresponding products.
3. Lorentz and symplectic matrices have analogous column relations for indefinite or skew-symmetric forms.
4. The topology inherited from the ambient matrix space distinguishes compact, connected, and disconnected classical groups.
5. Every real symplectic matrix has determinant $1$; the equation alone first gives only $(\det P)^2=1$, and connectedness eliminates the negative sign.

## Examples

> [!example] The Circle Group
> The real group $SO_2$ consists of
> $$
> \begin{pmatrix}
> \cos\theta&-\sin\theta\\
> \sin\theta&\cos\theta
> \end{pmatrix},
> $$
> so $SO_2$ is isomorphic and homeomorphic to the unit circle.

> [!example] A Lorentz Boost
> For every $t\in\mathbb R$,
> $$
> \begin{pmatrix}
> \cosh t&0&0&\sinh t\\
> 0&1&0&0\\
> 0&0&1&0\\
> \sinh t&0&0&\cosh t
> \end{pmatrix}\in O_{3,1}.
> $$
> Its entries become arbitrarily large, so $O_{3,1}$ is not bounded.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Indefinite Bilinear Forms and Lorentz Groups|Indefinite Bilinear Forms and Lorentz Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Exercises

- [[04 - Linear Algebra and Modules/Exercises/Exercise LA2 - Complex General Linear and Orthogonal Groups|Exercise LA2]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA3 - Columns of Lorentz Matrices|Exercise LA3]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA4 - Orthogonal and Lorentz Groups Are Not Continuously Isomorphic|Exercise LA4]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA5 - Four Components of O11|Exercise LA5]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA6 - Comparing SP2 SL2 SP4 and SL4|Exercise LA6]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA7 - Block Symplectic Matrices|Exercise LA7]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA8 - Structure of the Symplectic Group|Exercise LA8]]

## Source and Proof Status

The definitions and Artin's real-group convention are **stated in the source**. [S1, Ch. 9, §9.1, formulas (9.1.1)–(9.1.5), printed pp. 261–262, PDF pp. 273–274] The realification calculation and examples above are independently derived.
