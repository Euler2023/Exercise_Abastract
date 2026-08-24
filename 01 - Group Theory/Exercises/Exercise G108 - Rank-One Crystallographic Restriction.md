---
title: "Exercise G108: Rank-One Crystallographic Restriction"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - crystallographic-groups
  - point-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 5, Ex. 5.2, printed p. 188, PDF p. 200"
created: 2026-08-24
---

# Exercise G108: Rank-One Crystallographic Restriction

## Problem Statement

> [!question] Exercise 5.2
> What is the crystallographic restriction for a discrete group of isometries whose translation group $L$ has the form $\mathbb Za$ with $a\ne0$?

## Hints

> [!hint]- Hint 1
> The orthogonal part of every element normalizes the translation group, so it must send the generator $a$ to another generator of $\mathbb Za$.

> [!hint]- Hint 2
> Combine $q(a)=\pm a$ with orthogonality to list all possible matrices in a basis adapted to the line $\mathbb Ra$.

## Solution

> [!success]- Solution
> Let $G$ be the discrete isometry group and let $\overline G$ be its point group, the image under the map taking an isometry to its orthogonal part. Because the translation subgroup $L=\mathbb Za$ is normal in $G$, every $q\in\overline G$ satisfies $q(L)=L$. In particular, $q(a)$ must be a generator of the infinite cyclic group $L$, so
>
> $$
> q(a)=a\quad\text{or}\quad q(a)=-a.
> $$
>
> Let $u=a/\lVert a\rVert$ and choose a unit vector $v\perp u$. Orthogonality then forces $q(v)=\pm v$. Relative to $(u,v)$, every point-group element is therefore one of
>
> $$
> \begin{pmatrix}1&0\\0&1\end{pmatrix},\quad
> \begin{pmatrix}1&0\\0&-1\end{pmatrix},\quad
> \begin{pmatrix}-1&0\\0&1\end{pmatrix},\quad
> \begin{pmatrix}-1&0\\0&-1\end{pmatrix}.
> $$
>
> These four operators form $D_2\cong C_2\times C_2$. Hence
>
> $$
> \overline G\le D_2.
> $$
>
> Equivalently, the only possible nontrivial rotational part is a half-turn: a rotation in such a group has order at most $2$, and $[G:L]=|\overline G|$ divides $4$. This is the rank-one crystallographic restriction. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Discrete Isometry Groups and Frieze Groups|Discrete Isometry Groups and Frieze Groups]]
- [[01 - Group Theory/Concepts/Orthogonal Transformations of the Plane|Orthogonal Transformations of the Plane]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- This is weaker than the rank-two crystallographic restriction, where rotation orders $1,2,3,4,6$ may occur.
- **Source status:** The problem is from [S1, Ch. 6, §5, Ex. 5.2, printed p. 188, PDF p. 200]. The solution is an independent derivation using the normality of the translation subgroup.

