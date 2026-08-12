---
title: Symplectic Groups
aliases:
  - Real Symplectic Group
  - SP2n
  - 辛群
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
  - matrix-groups
  - symplectic-groups
created: 2026-08-10
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 1, printed pp. 261–262, PDF pp. 273–274"
---

# Symplectic Groups

## Definition

On $\mathbb R^{2n}$ let
$$
J=\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix},
\qquad
\omega(x,y)=x^{\mathsf T}Jy.
$$
The form $\omega$ is skew-symmetric and nondegenerate. Artin's real symplectic group is
$$
SP_{2n}(\mathbb R)
=\{P\in GL_{2n}(\mathbb R):P^{\mathsf T}JP=J\}.
$$
Its elements are precisely the invertible linear maps preserving $\omega$.

## Symplectic Bases

A basis
$$
e_1,\ldots,e_n,f_1,\ldots,f_n
$$
is **symplectic** when
$$
\omega(e_i,e_j)=\omega(f_i,f_j)=0,
\qquad
\omega(e_i,f_j)=\delta_{ij}.
$$

> [!abstract] Symplectic Basis Extension
> Every nonzero vector $v$ can be chosen as the first vector of a symplectic basis.

To prove this, choose $w$ with $\omega(v,w)=1$, possible by nondegeneracy. The plane $U=\operatorname{span}(v,w)$ is nondegenerate, so
$$
\mathbb R^{2n}=U\oplus U^{\perp_\omega}.
$$
The restricted form on $U^{\perp_\omega}$ is again nondegenerate; induction completes the basis.

It follows that $SP_{2n}$ acts transitively on $\mathbb R^{2n}\setminus\{0\}$: extend any two nonzero vectors to symplectic bases and send one basis to the other.

## Useful Identities

If $P\in SP_{2n}$, then
$$
P^{-1}=-JP^{\mathsf T}J,
\qquad
PJP^{\mathsf T}=J.
$$
Taking determinants in $P^{\mathsf T}JP=J$ gives
$$
(\det P)^2=1.
$$
The stronger conclusion $\det P=1$ follows from the path-connectedness of $SP_{2n}$.

## Standard Block Matrices

The following matrices are symplectic:
$$
-J=\begin{pmatrix}0&-I\\I&0\end{pmatrix},
$$
$$
\begin{pmatrix}A^{\mathsf T}&0\\0&A^{-1}\end{pmatrix}
\quad(A\in GL_n(\mathbb R)),
$$
and
$$
\begin{pmatrix}I&B\\0&I\end{pmatrix}
\quad(B=B^{\mathsf T}).
$$
They represent, respectively, interchange of the two Lagrangian coordinate blocks, a compatible change of coordinates, and a symplectic shear.

## Low Dimension

For every real $2\times2$ matrix $P$,
$$
P^{\mathsf T}JP=(\det P)J.
$$
Therefore
$$
SP_2(\mathbb R)=SL_2(\mathbb R).
$$
This coincidence fails in dimension $4$ and higher.

## Notation Warning

Artin's $SP_{2n}$ means the noncompact real matrix group preserving a skew form. In Lie theory, $Sp(n)$ often denotes the **compact quaternionic unitary group**. These groups are related historically but are not the same object:
$$
SP_{2n}(\mathbb R)\ne Sp(n).
$$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The definition and notation are **stated in the source**. [S1, Ch. 9, §9.1, formula (9.1.4), printed pp. 261–262, PDF pp. 273–274] The symplectic-basis argument and displayed consequences are independently proved here or in the linked exercises.
