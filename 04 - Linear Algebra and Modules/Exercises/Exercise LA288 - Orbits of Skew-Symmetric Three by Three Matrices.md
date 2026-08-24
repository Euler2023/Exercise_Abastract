---
title: "Exercise LA288: Orbits of Skew-Symmetric Three by Three Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - skew-symmetric-matrices
  - group-actions
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 4, Ex. 4.1, printed p. 284, PDF p. 296"
created: 2026-08-24
---

# Exercise LA288: Orbits of Skew-Symmetric Three by Three Matrices

## Problem Statement

> [!question] Exercise 4.1
> Let $W$ be the space of real skew-symmetric $3\times3$ matrices. Describe the orbits for the operation $P*A=PAP^{\mathsf T}$ of $SO_3$ on $W$.

## Hints

> [!hint]- Hint 1
> Identify a vector $a\in\mathbb R^3$ with the matrix $[a]_{\times}$ of the map $x\mapsto a\times x$.

> [!hint]- Hint 2
> Prove $P[a]_{\times}P^{\mathsf T}=[Pa]_{\times}$ for $P\in SO_3$.

## Solution

> [!success]- Solution
> Every $A\in W$ has a unique expression
>
> $$
> A=[a]_{\times}=
> \begin{pmatrix}
> 0&-a_3&a_2\\
> a_3&0&-a_1\\
> -a_2&a_1&0
> \end{pmatrix}
> \qquad(a\in\mathbb R^3).
> $$
>
> For $x\in\mathbb R^3$ and $P\in SO_3$, preservation of the oriented cross product gives
>
> $$
> P[a]_{\times}P^{\mathsf T}x
> =P\bigl(a\times P^{\mathsf T}x\bigr)
> =(Pa)\times x
> =[Pa]_{\times}x.
> $$
>
> Thus this action is equivalent to the standard action of $SO_3$ on $\mathbb R^3$. The origin is one orbit, and for every $r>0$ the sphere
>
> $$
> \mathcal O_r=\{[a]_{\times}:\|a\|=r\}
> $$
>
> is one orbit. Equivalently, the orbits are the level sets of
>
> $$
> \sqrt{-\frac12\operatorname{tr}(A^2)}=\|a\|.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- The determinant-one hypothesis is what makes the hat map equivariant without an extra sign.
- **Source status:** Ex. 4.1 and the surrounding rotation-group discussion were checked at [S1, Ch. 9, §9.4, printed pp. 269–270 and 284, PDF pp. 281–282 and 296]. The orbit calculation is an independent derivation.

