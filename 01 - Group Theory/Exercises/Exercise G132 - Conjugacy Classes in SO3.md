---
title: "Exercise G132: Conjugacy Classes in SO3"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - conjugacy-classes
  - special-orthogonal-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 4, Ex. 4.6, printed pp. 284-285, PDF pp. 296-297"
created: 2026-08-24
---

# Exercise G132: Conjugacy Classes in SO3

## Problem Statement

> [!question] Exercise 4.6
> Describe the conjugacy classes in $SO_3$ in two ways:
>
> (a) Its elements operate on $\mathbb R^3$ as rotations. Which rotations make up a conjugacy class?
>
> (b) The spin homomorphism $SU_2\to SO_3$ can be used to relate the conjugacy classes in the two groups. Do this.
>
> (c) The conjugacy classes in $SU_2$ are spheres. Describe the conjugacy classes in $SO_3$ geometrically. Be careful.

## Hints

> [!hint]- Hint 1
> Conjugation carries the rotation axis by the conjugating rotation and preserves the rotation angle.

> [!hint]- Hint 2
> Under the spin map, the latitudes with scalar coordinates $c$ and $-c$ have the same image.

## Solution

> [!success]- Solution
> **(a)** Every $R\in SO_3$ is a rotation through a uniquely determined principal angle $\alpha\in[0,\pi]$. If $Q\in SO_3$, then $QRQ^{-1}$ has the same angle and its axis is the image under $Q$ of the axis of $R$. Conversely, $SO_3$ acts transitively on oriented axes, with the usual reversal of axis changing $\alpha$ to $2\pi-\alpha$. Thus two rotations are conjugate exactly when they have the same principal angle $\alpha$.
>
> **(b)** Write an element of $SU_2$ as
>
> $$
> P=\cos\theta+\sin\theta\,u,
> \qquad \|u\|=1.
> $$
>
> Its image is rotation about $u$ through angle $2\theta$ modulo $2\pi$. The conjugacy class of $P$ is the latitude with scalar coordinate $c=\cos\theta$. Since $P$ and $-P$ have the same image, the two latitudes with coordinates $c$ and $-c$ map to the same conjugacy class in $SO_3$. Equivalently,
>
> $$
> \operatorname{tr}_{SO_3}(\varphi(P))=1+2\cos2\theta=4c^2-1.
> $$
>
> **(c)** The identity class is a point. For $0<\alpha<\pi$, choosing an oriented rotation axis identifies the class with $S^2$. For $\alpha=\pi$, the axes $u$ and $-u$ give the same half-turn, so the class is
>
> $$
> S^2/(u\sim -u)=\mathbb{RP}^2.
> $$
>
> This exceptional endpoint is the reason for Artin's warning “Be careful.”
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2, Quaternions, and the Spin Cover]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]

## Notes

- The trace also classifies conjugacy in $SO_3$, because $\operatorname{tr}R=1+2\cos\alpha$ with $\alpha\in[0,\pi]$.
- **Source status:** The spin homomorphism, latitude conjugacy classes, and Ex. 4.6 were checked at [S1, Ch. 9, §9.4 and Ex. 4.6, printed pp. 269–271 and 284–285, PDF pp. 281–283 and 296–297]. The classification and endpoint topology are independently derived.
