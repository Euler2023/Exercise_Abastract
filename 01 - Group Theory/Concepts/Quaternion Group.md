---
title: Quaternion Group
topic: group-theory
tags:
  - concept
  - group-theory
  - quaternion-group
created: 2026-08-12
---

# Quaternion Group

## Definition

> [!info] Quaternion group
> The quaternion group is
> $$
> Q_8=\{1,-1,i,-i,j,-j,k,-k\},
> $$
> with multiplication determined by
> $$
> i^2=j^2=k^2=ijk=-1.
> $$
> Equivalently,
> $$
> Q_8=\langle x,y\mid x^4=1,\ x^2=y^2,\ xyx^{-1}=y^{-1}\rangle.
> $$

## Intuition

The quotient by the central subgroup $\{1,-1\}$ is the Klein four-group, but the lifts of its two independent involutions have order $4$ and anticommute. Thus $Q_8$ is a non-split central extension
$$
1\longrightarrow C_2\longrightarrow Q_8\longrightarrow C_2^2\longrightarrow1.
$$

## Key Properties

- $|Q_8|=8$ and $Q_8$ is nonabelian.
- Its center and commutator subgroup are both $\{1,-1\}$.
- It has a unique element of order $2$, namely $-1$.
- Its three subgroups of order $4$ are cyclic and normal.
- Every subgroup of $Q_8$ is normal.
- Although $Q_8/\{1,-1\}\cong C_2^2$, one does not have $Q_8\cong C_2^3$ or $C_4\rtimes C_2$ with a complementary subgroup of order $2$.

## Examples

> [!example] Matrix model
> Over $\mathbb C$, take
> $$
> x=\begin{pmatrix}i&0\\0&-i\end{pmatrix},
> \qquad
> y=\begin{pmatrix}0&1\\-1&0\end{pmatrix}.
> $$
> Then $x^2=y^2=-I$ and $xyx^{-1}=y^{-1}$, so the subgroup they generate is isomorphic to $Q_8$.

> [!example] Galois realization
> Exercise Gal76 constructs a degree-eight Galois extension $E/\mathbb Q$ with an intermediate biquadratic field $M$. The two sign changes of $M$ lift to order-four automorphisms of $E$, and their common square is the nontrivial element of $\operatorname{Gal}(E/M)$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[05 - Galois Theory/Concepts/Galois Correspondence|Galois Correspondence]]

## Exercises

- [[05 - Galois Theory/Exercises/Exercise Gal76 - A Quaternion Galois Extension|Exercise Gal76]]

## Source and Proof Status

The presentation and elementary group properties are standard. The Galois realization is the subject of J. S. Milne, *Fields and Galois Theory*, v5.10, Exercise 3-3, printed p. 46, PDF p. 46; the complete proof in Exercise Gal76 is independently derived.
