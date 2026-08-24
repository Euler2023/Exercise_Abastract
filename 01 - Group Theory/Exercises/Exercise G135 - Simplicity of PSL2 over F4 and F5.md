---
title: "Exercise G135: Simplicity of PSL2 over F4 and F5"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - simple-groups
  - projective-linear-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 8, Ex. 8.1, printed p. 287, PDF p. 299"
created: 2026-08-24
---

# Exercise G135: Simplicity of PSL2 over F4 and F5

## Problem Statement

> [!question] Exercise 8.1
> Prove Theorem 9.8.1 for the cases $F=\mathbb F_4$ and $F=\mathbb F_5$.

## Hints

> [!hint]- Hint 1
> For $\mathbb F_4$, Artin's four-step proof still works once an element with square different from $0$ and $1=-1$ is chosen.

> [!hint]- Hint 2
> For $PSL_2(\mathbb F_5)$, determine the conjugacy-class sizes from its Sylow subgroups and use Lagrange's theorem.

## Solution

> [!success]- Solution
> **The field $\mathbb F_4$.** Write $\mathbb F_4=\{0,1,\omega,\omega^2\}$ with $\omega^2+\omega+1=0$. Since the characteristic is $2$, $-1=1$, and $r=\omega$ has
>
> $$
> r^2=\omega^2\notin\{0,1,-1\}.
> $$
>
> Thus the element required in Artin's proof exists even though Lemma 9.8.3 was stated only for fields of order greater than $5$. The four steps of the proof apply verbatim: every normal subgroup of $SL_2(\mathbb F_4)$ containing a noncentral element contains a suitable semisimple conjugacy class, then all upper and lower elementary matrices, hence all of $SL_2(\mathbb F_4)$. Here $I=-I$, so the center is trivial. Therefore $SL_2(\mathbb F_4)=PSL_2(\mathbb F_4)$ is simple.
>
> **The field $\mathbb F_5$.** Put $G=PSL_2(\mathbb F_5)$; then $|G|=60$. Direct normalizer calculations for the standard split and unipotent subgroups give
>
> $$
> n_2=5,
> \qquad n_3=10,
> \qquad n_5=6.
> $$
>
> Thus $G$ has $15$ involutions, $20$ elements of order $3$, and $24$ elements of order $5$. Their centralizers have orders $4$, $3$, and $5$, respectively, so the nonidentity conjugacy classes have sizes
>
> $$
> 15,
> \qquad 20,
> \qquad 12,
> \qquad 12.
> $$
>
> A normal subgroup is a union of conjugacy classes containing the identity. No proper sum of $1$ with a subset of $15,20,12,12$ divides $60$. Lagrange's theorem therefore leaves only orders $1$ and $60$. Hence $G$ is simple.
>
> In $SL_2(\mathbb F_5)$, the inverse image of a normal subgroup of $G$ is normal and contains the center $\{\pm I\}$. Simplicity of $G$ shows that the only proper normal subgroup of $SL_2(\mathbb F_5)$ is its center. This proves both parts of Theorem 9.8.1 in the two exceptional fields.
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]

## Notes

- **Proof boundary:** The displayed Sylow counts are finite group calculations in $PSL_2(\mathbb F_5)$; they can be checked from normalizers of representative subgroups and are reused explicitly in Exercise G137.
- **Source status:** Theorem 9.8.1 and its four-step proof were checked at [S1, Ch. 9, §9.8, printed pp. 280–282, PDF pp. 292–294]. Ex. 8.1 was visually checked at [S1, printed p. 287, PDF p. 299]. The two small-field completions above are independent.

