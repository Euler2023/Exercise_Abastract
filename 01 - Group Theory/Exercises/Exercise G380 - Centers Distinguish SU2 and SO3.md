---
title: "Exercise G380: Centers Distinguish SU2 and SO3"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - group-centers
  - lie-groups
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 12, printed p. 74, PDF p. 86"
source_refs:
  - "S10/ch-3/sec-9/ex-12"
created: 2026-11-25
---

# Exercise G380: Centers Distinguish SU2 and SO3

## Problem Statement

> [!question] Original Chapter 3, Exercise 12
> Show the groups $\operatorname{SU}(2)$ and $\operatorname{SO}(3)$ are not isomorphic, even though the associated Lie algebras $\operatorname{su}(2)$ and $\operatorname{so}(3)$ are isomorphic.

## Hints

> [!hint]- Hint 1
> An isomorphism maps the center onto the center. Find a nonidentity scalar matrix in $\operatorname{SU}(2)$.

> [!hint]- Hint 2
> A central matrix in $\operatorname{SO}(3)$ commutes with the diagonal half-turns and with the rotation cyclically permuting the coordinate axes.

> [!hint]- Hint 3
> For the Lie algebras, identify the skew-symmetric matrix corresponding to $w\mapsto u\times w$ and compute the commutator of two such matrices.

## Solution

> [!success]- Solution
> **Distinguish the groups.** The scalar matrix $-I_2$ is unitary with determinant $1$, so it is a nonidentity central element of $\operatorname{SU}(2)$. More precisely, a central $A\in\operatorname{SU}(2)$ commutes with $\operatorname{diag}(i,-i)$, whose diagonal entries are distinct. Thus $A$ is diagonal. It also commutes with $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, so its diagonal entries are equal. The determinant condition gives $A=\pm I_2$.
>
> Now let $R$ be central in $\operatorname{SO}(3)$. It commutes with
> $$
> D_1=\operatorname{diag}(1,-1,-1),\qquad
> D_2=\operatorname{diag}(-1,1,-1).
> $$
> Both are in $\operatorname{SO}(3)$. The one-dimensional $+1$ eigenspaces of $D_1$ and $D_2$ must be preserved, since a matrix commuting with $D_j$ maps each eigenspace to itself. Thus $R$ preserves the first and second coordinate lines, and orthogonality implies it preserves the perpendicular third line. Hence $R$ is diagonal. The cyclic permutation matrix $C$ given by $Ce_1=e_2$, $Ce_2=e_3$, $Ce_3=e_1$ is in $\operatorname{SO}(3)$, since a three-cycle is even. The equality $RC=CR$ on the three coordinate vectors forces all diagonal entries of $R$ to be equal. With $R=rI_3$, orthogonality gives $r=\pm1$ and the determinant condition $r^3=1$ gives $r=1$.
>
> Any group isomorphism takes elements commuting with the whole group to elements commuting with the whole target group, and its inverse does the reverse. The center orders are $2$ and $1$, so these groups are not isomorphic.
>
> **Identify the Lie algebras.** For $u=(u_1,u_2,u_3)$, let $T_u$ be the real linear operator $w\mapsto u\times w$. Its matrix is
> $$
> T_u=\begin{pmatrix}
> 0&-u_3&u_2\\
> u_3&0&-u_1\\
> -u_2&u_1&0
> \end{pmatrix}.
> $$
> The map $u\mapsto T_u$ is a linear bijection onto the real skew-symmetric matrices, which form $\operatorname{so}(3)$ by Proposition 3.24 [S10, printed pp. 58–59, PDF pp. 70–71]. The vector triple-product identity gives
> $$
> \begin{aligned}
> [T_u,T_v]w
> &=u\times(v\times w)-v\times(u\times w)\\
> &=v(u\cdot w)-u(v\cdot w)\\
> &=(u\times v)\times w.
> \end{aligned}
> $$
> Thus $[T_u,T_v]=T_{u\times v}$. Composing $u\mapsto T_u$ with the bracket-preserving map from $\operatorname{su}(2)$ to $(\mathbb R^3,\times)$ proved in Exercise 10 gives the desired Lie algebra isomorphism.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU(2), Quaternions, and the Spin Cover]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]

## Notes

- **Source status.** The original exercise was checked at 200 dpi on printed p. 74 / PDF p. 86. The center argument is supplied independently. Hall obtains the same Lie algebra isomorphism using matched bases in Example 3.27 and the differential of the covering homomorphism in Example 3.29 [S10, printed pp. 59–60 and 62, PDF pp. 71–72 and 74].
- **Proof input.** The Lie algebra calculation uses the cross-product isomorphism from [[06 - Representation Theory/Exercises/Exercise Rep172 - The Cross Product Model of su2|Hall Chapter 3, Exercise 10]] and the vector triple-product identity, which follows by expanding its three coordinates.
- **Routing.** The obstruction is a group-isomorphism invariant. The Lie algebra calculation explains why the corresponding infinitesimal invariant agrees.
- **Archive navigation.** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].

