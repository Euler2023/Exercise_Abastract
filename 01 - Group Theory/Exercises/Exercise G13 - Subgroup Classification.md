---
title: "Exercise G13: Subgroup Classification"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - subgroups
  - matrix-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 2, Ex. 2.4"
created: 2026-08-10
---

# Exercise G13: Subgroup Classification

## Problem Statement

> [!question] Exercise
> In which of the following cases is $H$ a subgroup of $G$?
>
> **(a)** $G=GL_n(\mathbb C)$ and $H=GL_n(\mathbb R)$.
>
> **(b)** $G=\mathbb R^{\times}$ and $H=\{1,-1\}$.
>
> **(c)** $G=\mathbb Z^{+}$ and $H$ is the set of positive integers. Here $\mathbb Z^{+}$ denotes the additive group of integers.
>
> **(d)** $G=\mathbb R^{\times}$ and $H$ is the set of positive real numbers.
>
> **(e)** $G=GL_2(\mathbb R)$ and $H$ is the set of matrices
> $$
> \begin{pmatrix}
> a&0\\
> 0&0
> \end{pmatrix},
> \qquad a\ne0.
> $$

## Hints

> [!hint]- Hint 1
> First check that $H$ is actually a subset of $G$. Then test identity, closure, and inverses.

> [!hint]- Hint 2
> In part (c), remember that the identity of an additive group is $0$.

> [!hint]- Hint 3
> In part (e), compute the determinant before checking any group axiom.

## Solution

> [!success]- Solution
> ### (a) $GL_n(\mathbb R)\le GL_n(\mathbb C)$: Yes
> Every invertible real matrix is also an invertible complex matrix. The identity matrix is real, products of real matrices are real, and the inverse of an invertible real matrix again has real entries. Therefore
> $$GL_n(\mathbb R)\le GL_n(\mathbb C).$$
>
> ### (b) $\{1,-1\}\le\mathbb R^{\times}$: Yes
> The identity $1$ belongs to $H$, and
> $$1\cdot1=1,\quad1\cdot(-1)=-1,\quad(-1)^2=1.$$
> Moreover, $1^{-1}=1$ and $(-1)^{-1}=-1$. Hence $H$ is a subgroup.
>
> ### (c) Positive integers in $\mathbb Z^{+}$: No
> The operation is addition, whose identity is $0$. The set of positive integers does not contain $0$, and it does not contain the additive inverse $-n$ of a positive integer $n$. Thus it is not a subgroup.
>
> ### (d) Positive reals in $\mathbb R^{\times}$: Yes
> The identity $1$ is positive. A product of positive real numbers is positive, and if $a>0$, then $a^{-1}>0$. Therefore the positive reals form a subgroup of $\mathbb R^{\times}$.
>
> ### (e) The displayed matrices in $GL_2(\mathbb R)$: No
> Every displayed matrix has determinant
> $$a\cdot0-0\cdot0=0.$$
> Hence none of these matrices is invertible. In particular, $H$ is not even a subset of $GL_2(\mathbb R)$, so it cannot be a subgroup.
>
> Therefore $H$ is a subgroup precisely in cases **(a)**, **(b)**, and **(d)**. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

Part (e) emphasizes that the condition $H\subseteq G$ must be checked before applying any subgroup criterion.

**Source status:** Exercise statement from [S1, Ch. 2, Section 2, Ex. 2.4]. Each classification is justified directly from the subgroup axioms.
