---
title: "Exercise G24: Subgroups and Quotients of Dihedral Groups"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - dihedral-groups
  - normal-subgroups
  - quotient-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 4, Ex. 4.2, printed p. 188, PDF p. 200"
created: 2026-08-10
---

# Exercise G24: Subgroups and Quotients of Dihedral Groups

## Problem Statement

> [!question] Exercise
> **(a)** List all subgroups of $D_4$ and determine which are normal.
>
> **(b)** List the proper normal subgroups $N$ of $D_{15}$ and identify $D_{15}/N$.
>
> **(c)** List the subgroups of $D_6$ that do not contain $x^3$.

Throughout,
$$D_n=\langle x,y\mid x^n=1,\ y^2=1,\ yxy=x^{-1}\rangle$$
has order $2n$.

## Hints

> [!hint]- Hint 1
> Every subgroup of $D_n$ either lies in the rotation subgroup $\langle x\rangle$ or has the form $\langle x^d,x^ky\rangle$ for a divisor $d$ of $n$.

> [!hint]- Hint 2
> A subgroup of index $2$ is normal. For $D_{15}$, all reflections are conjugate.

> [!hint]- Hint 3
> In $D_6$, the subgroup $\langle x^d,x^ky\rangle$ contains $x^3$ exactly when $\langle x^d\rangle$ does.

## Solution

> [!success]- Solution
> ### (a) Subgroups of $D_4$
> The complete list is:
>
> **Order $1$**
> $$\{1\}.$$
>
> **Order $2$**
> $$\langle x^2\rangle,$$
> and the four reflection subgroups
> $$\langle y\rangle,\quad\langle xy\rangle,\quad
> \langle x^2y\rangle,\quad\langle x^3y\rangle.$$
>
> **Order $4$**
> $$\langle x\rangle,$$
> together with the two Klein four groups
> $$\langle x^2,y\rangle=\{1,x^2,y,x^2y\},$$
> $$\langle x^2,xy\rangle=\{1,x^2,xy,x^3y\}.$$
>
> **Order $8$**
> $$D_4.$$
>
> This list is exhaustive: a subgroup contained in $\langle x\rangle$ is one of its cyclic subgroups; a subgroup containing a reflection is obtained by adjoining that reflection to its rotational part.
>
> The normal subgroups are
> $$\{1\},\quad \langle x^2\rangle,\quad \langle x\rangle,
> \quad\langle x^2,y\rangle,\quad\langle x^2,xy\rangle,\quad D_4.$$
> Here $\langle x^2\rangle$ is central, and each order-$4$ subgroup has index $2$. None of the four reflection subgroups is normal; conjugation by $x$ carries each reflection to a different reflection of the same parity class.
>
> ### (b) Proper normal subgroups of $D_{15}$
> Every subgroup of the cyclic rotation group $\langle x\rangle$ is characteristic in $\langle x\rangle$ and hence normal in $D_{15}$. These give
> $$\{1\},\qquad \langle x^5\rangle,
> \qquad\langle x^3\rangle,qquad\langle x\rangle.$$
> Their orders are $1,3,5,15$, respectively.
>
> There are no other proper normal subgroups. Because $15$ is odd, all reflections are conjugate; a normal subgroup containing one reflection would contain them all, and the reflections generate $D_{15}$.
>
> The quotients are
> $$D_{15}/\{1\}\cong D_{15},$$
> $$D_{15}/\langle x^5\rangle\cong D_5,$$
> $$D_{15}/\langle x^3\rangle\cong D_3\cong S_3,$$
> $$D_{15}/\langle x\rangle\cong C_2.$$
> In general, quotienting by a rotational subgroup leaves the image of $y$ as a reflection and reduces the order of the image of $x$.
>
> ### (c) Subgroups of $D_6$ not containing $x^3$
> The complete list consists of ten subgroups.
>
> First, two purely rotational subgroups:
> $$\{1\},\qquad \langle x^2\rangle=\{1,x^2,x^4\}.$$
>
> Next, the six reflection subgroups
> $$\langle x^ky\rangle=\{1,x^ky\},
> \qquad k=0,1,2,3,4,5.$$
>
> Finally, two subgroups of order $6$:
> $$\langle x^2,y\rangle
> =\{1,x^2,x^4,y,x^2y,x^4y\},$$
> $$\langle x^2,xy\rangle
> =\{1,x^2,x^4,xy,x^3y,x^5y\}.$$
>
> None contains $x^3$. Conversely, the general subgroup form shows that any omitted nontrivial rotational subgroup, or any omitted dihedral subgroup, has rotational part containing $x^3$. Hence the list is exhaustive. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

For a divisor $d\mid n$, the subgroup $\langle x^d,x^ky\rangle$ has rotational part $\langle x^d\rangle$ and order $2n/d$. Varying $k$ modulo $d$ gives the distinct subgroups with that rotational part.

**Source status:** Artin proves the presentation of $D_n$ in [S1, Ch. 6, Prop. 6.4.3, printed p. 164, PDF p. 176]. The subgroup classifications and quotient identifications are complete derivations in this note.

