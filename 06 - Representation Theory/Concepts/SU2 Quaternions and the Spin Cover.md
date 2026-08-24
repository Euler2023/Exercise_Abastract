---
title: SU2, Quaternions, and the Spin Cover
aliases:
  - Unit Quaternions and SU2
  - Spin Double Cover of SO3
topic: representation-theory
tags:
  - concept
  - representation-theory
  - special-unitary-group
  - quaternions
  - spin-representation
created: 2026-08-24
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, §§9.3–9.4, printed pp. 266–271, PDF pp. 278–283"
source_status: verified
status: not-started
---

# SU2, Quaternions, and the Spin Cover

## Definition

The special unitary group in dimension two is

$$
SU_2=\{P\in M_2(\mathbb C):P^*P=I,\ \det P=1\}.
$$

Every element has a unique form

$$
P=
\begin{pmatrix}
\alpha&-\overline\beta\\
\beta&\overline\alpha
\end{pmatrix},
\qquad
|\alpha|^2+|\beta|^2=1.
$$

Writing $\alpha=x_0+ix_1$ and $\beta=x_2-ix_3$ identifies $SU_2$ with the unit sphere $S^3\subset\mathbb R^4$ and with the group of unit quaternions

$$
x_0+x_1i+x_2j+x_3k,
\qquad
x_0^2+x_1^2+x_2^2+x_3^2=1.
$$

## Intuition

A unit quaternion has a scalar coordinate and a three-dimensional imaginary coordinate. Conjugation preserves the scalar coordinate and rotates the imaginary part. This is why a three-dimensional rotation is encoded by a point of $S^3$, and why two antipodal quaternions encode the same rotation.

## Quaternion Product

For scalar-vector pairs $(x_0,x)$ and $(y_0,y)$, quaternion multiplication is

$$
(x_0,x)(y_0,y)
=(x_0y_0-x\cdot y,\ x_0y+y_0x+x\times y).
$$

The norm is multiplicative, so the unit quaternions form a group.

## The Spin Homomorphism

Let $\operatorname{Im}\mathbb H=\operatorname{span}_{\mathbb R}\{i,j,k\}\cong\mathbb R^3$. For $P\in SU_2$, define

$$
\varphi(P)(x)=PxP^{-1}
\qquad(x\in\operatorname{Im}\mathbb H).
$$

This map preserves the Euclidean inner product on the imaginary quaternions and depends continuously on $P$, hence

$$
\varphi:SU_2\longrightarrow SO_3.
$$

If

$$
P=\cos\theta+\sin\theta\,u,
\qquad
u\in\operatorname{Im}\mathbb H,
\qquad
\|u\|=1,
$$

then $\varphi(P)$ is rotation about the axis $u$ through angle $2\theta$. It follows that $\varphi$ is surjective and

$$
\ker\varphi=\{I,-I\}.
$$

Thus $SU_2$ is the spin double cover of $SO_3$.

## Conjugacy Classes

Conjugation fixes the scalar coordinate of a unit quaternion and rotates its imaginary coordinate. Therefore the conjugacy classes in $SU_2$ are the latitudes

$$
\{x_0+x:x_0=c,\ \|x\|^2=1-c^2\}.
$$

For $-1<c<1$ these are $2$-spheres; for $c=\pm1$ they are the singleton central classes $\{\pm I\}$.

Under the spin map, the latitudes $c$ and $-c$ have the same image. In $SO_3$, the conjugacy class of a rotation through $0<\alpha<\pi$ is $S^2$, whereas the class of half-turns is $\mathbb{RP}^2$ because the axes $u$ and $-u$ define the same half-turn.

## Examples

> [!example] A Longitude
> For any unit imaginary quaternion $u$,
>
> $$
> \{\cos\theta+\sin\theta\,u:\theta\in\mathbb R\}
> $$
>
> is a circle subgroup of $SU_2$. Its image consists of all rotations about the axis $u$.

> [!example] Centralizer of a Noncentral Element
> If $P=\cos\theta+\sin\theta\,u$ is not central, then its centralizer in $SU_2$ is the longitude through $u$.

## Related Concepts

- [[01 - Group Theory/Concepts/Quaternion Group|Quaternion Group]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The matrix and quaternion models of $SU_2$, its topology as $S^3$, the conjugation representation, the kernel $\{\pm I\}$, and the rotation-angle calculation are stated or derived by Artin. [S1, Ch. 9, §§9.3–9.4, printed pp. 266–271, PDF pp. 278–283] The organization, compact quaternion product formula, and endpoint description of the $SO_3$ conjugacy classes are independent exposition.

