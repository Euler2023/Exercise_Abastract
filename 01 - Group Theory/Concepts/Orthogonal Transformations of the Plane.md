---
title: Orthogonal Transformations of the Plane
aliases:
  - The Orthogonal Group O2
  - Orthogonal Operators on R2
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
  - linear-algebra
  - orthogonal-groups
created: 2026-08-10
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, Section 1 and Ch. 6, Sections 2–4"
source_status: partially-verified
status: not-started
---

# Orthogonal Transformations of the Plane

## Definition

> [!info] Definition (Orthogonal Transformation)
> A linear operator $q:\mathbb R^2\to\mathbb R^2$ is **orthogonal** if it preserves the inner product:
> $$\langle q(u),q(v)\rangle=\langle u,v\rangle$$
> for all $u,v\in\mathbb R^2$.

In matrix form this is
$$q^tq=I.$$
The orthogonal transformations form the group $O_2$.

## Rotations and Reflections

Every element of $O_2$ is either a rotation
$$
\rho_\theta=
\begin{pmatrix}
\cos\theta&-\sin\theta\\
\sin\theta&\cos\theta
\end{pmatrix},
$$
or a reflection through a line passing through the origin. Using the standard horizontal reflection
$$
r=
\begin{pmatrix}
1&0\\
0&-1
\end{pmatrix},
$$
every reflection has the form $\rho_\theta r$.

The determinant distinguishes the two cases:
$$\det(\rho_\theta)=1,
\qquad
\det(\rho_\theta r)=-1.$$

Thus
$$SO_2=\{\rho_\theta:\theta\in\mathbb R\}$$
is the subgroup of orientation-preserving orthogonal transformations.

## Eigenvalue Characterization of Reflections

> [!abstract] Proposition
> A linear operator $T$ on $\mathbb R^2$ is a reflection if and only if it has eigenvalues $1$ and $-1$ and the corresponding eigenspaces are orthogonal.
>
> **Proof.** Reflection about a line $L$ fixes $L$ and negates $L^\perp$, producing the two orthogonal eigenspaces. Conversely, if $u\perp v$ with $T(u)=u$ and $T(v)=-v$, then every vector is uniquely $au+bv$ and
> $$T(au+bv)=au-bv.$$
> Hence $T$ is reflection about $\operatorname{span}(u)$. $\square$

## Group Structure

The fundamental relations are
$$\rho_\theta\rho_\eta=\rho_{\theta+\eta},
\qquad r^2=1,
\qquad r\rho_\theta r=\rho_{-\theta}.$$

Therefore $O_2$ has the semidirect-product structure
$$O_2\cong SO_2\rtimes C_2,$$
where the nontrivial element of $C_2$ acts on rotations by inversion.

## Key Properties

1. Orthogonal transformations preserve lengths, angles, orthogonality, and area magnitude.
2. Every $q\in O_2$ satisfies $q^{-1}=q^t$ and $\det q=\pm1$.
3. The orientation-preserving subgroup $SO_2$ is abelian and isomorphic to the circle group.
4. Every orientation-reversing element of $O_2$ is an involution and a reflection.
5. Every finite subgroup of $O_2$ is cyclic or dihedral.

The final classification is **proved in the source** as Artin's Theorem 6.4.1. [S1, Ch. 6, printed p. 163, PDF p. 175]

## Examples

> [!example] Quarter-Turn
> $$
> \rho_{\pi/2}=
> \begin{pmatrix}0&-1\\1&0\end{pmatrix}
> $$
> has determinant $1$ and complex eigenvalues $i,-i$.

> [!example] Reflection in the Line $y=x$
> This reflection interchanges the coordinates:
> $$
> \begin{pmatrix}x\\y\end{pmatrix}
> \longmapsto
> \begin{pmatrix}y\\x\end{pmatrix}.
> $$
> Its eigenvectors $(1,1)^t$ and $(1,-1)^t$ have eigenvalues $1$ and $-1$ and are orthogonal.

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetry Groups and Plane Isometries|Symmetry Groups and Plane Isometries]]
- [[01 - Group Theory/Concepts/Rotations Reflections and Glide Reflections|Rotations, Reflections, and Glide Reflections]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```


## Source and Proof Status

Artin proves that isometries fixing the origin are precisely orthogonal linear operators and classifies finite subgroups of $O_2$. [S1, Ch. 6, Thms. 6.2.3 and 6.4.1, printed pp. 156–157 and 163, PDF pp. 168–169 and 175] The eigenvalue characterization is proved directly above.

