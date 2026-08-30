---
title: "Exercise G95: A Heisenberg Quotient and Center"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - quotient-groups
  - matrix-groups
  - heisenberg-groups
  - center
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 12, Ex. 12.2, printed p. 75, PDF p. 87"
created: 2026-08-23
---

# Exercise G95: A Heisenberg Quotient and Center

## Problem Statement

> [!question] Exercise 12.2
> Let
> 
> $$
> H=\left\{\begin{bmatrix}1&a&b\\0&1&c\\0&0&1\end{bmatrix}:a,b,c\in\mathbb R\right\},\quad
> K=\left\{\begin{bmatrix}1&0&b\\0&1&0\\0&0&1\end{bmatrix}:b\in\mathbb R\right\}.
> $$
> 
> Show $H\le GL_3$, $K\triangleleft H$, identify $H/K$, and determine $Z(H)$.

## Hints

> [!hint]- Hint 1
> Project to the $(a,c)$ coordinates.

> [!hint]- Hint 2
> Compute the commutator using the cross term $ac'$.

## Solution

> [!success]- Solution
> Write an element as $(a,b,c)$. Multiplication is
> 
> $$
> (a,b,c)(a',b',c')=(a+a',\ b+b'+ac',\ c+c'),
> $$
> 
> and the inverse is $(-a,-b+ac,-c)$, proving $H$ is a subgroup.
> 
> The map
> 
> $$
> \pi:H\to\mathbb R^2,\qquad(a,b,c)\mapsto(a,c)
> $$
> 
> is a surjective homomorphism to the additive group, with kernel $K$. Thus
> 
> $$
> H/K\cong(\mathbb R^2,+).
> $$
> 
> Comparing $(a,b,c)(a',b',c')$ with the reverse product shows that a central element must satisfy $ac'=a'c$ for all $a',c'$, hence $a=c=0$. Therefore
> 
> $$
> Z(H)=K.
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Heisenberg Group|Heisenberg Group]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §12, Ex. 12.2, printed p. 75, PDF p. 87]. The solution is an independent derivation for this vault, not a solution printed in Artin.
- **Terminology:** Artin's exercise does not name $H$. Hall explicitly identifies the same matrix group as the Heisenberg group. [S10, Ch. 1, §1.2.6, printed pp. 11-12, PDF pp. 23-24]
