---
title: "Exercise Rep60: Five Character Tables"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 4, Ex. 4.3, printed pp. 315–316, PDF pp. 327–328"
created: 2026-08-27
---

# Exercise Rep60: Five Character Tables

## Problem Statement

> [!question] Exercise 4.3
> Determine the character tables for **(a)** the Klein four group, **(b)** the quaternion group, **(c)** the dihedral group $D_4$, **(d)** the dihedral group $D_6$, and **(e)** a nonabelian group of order $21$ (see Proposition 7.7.7).

## Hints

> [!hint]- Hint 1
> Use all characters of the abelianizations, then column orthogonality.

## Solution

> [!success]- Solution
> For $V_4=\{1,a,b,c\}$ the four rows are
>
> $$
> \begin{array}{c|rrrr} &1&a&b&c\\\hline
> 1&1&1&1&1\\ \alpha&1&1&-1&-1\\ \beta&1&-1&1&-1\\ \alpha\beta&1&-1&-1&1
> \end{array}.
> $$
>
> For $Q_8$, with classes $1,-1,\{\pm i\},\{\pm j\},\{\pm k\}$, the four linear rows have the $V_4$ sign patterns and value $1$ at $-1$; the remaining row is $(2,-2,0,0,0)$.
>
> For $D_4=\langle r,s\rangle$, on classes $1,r^2,\{r,r^3\},\{s,r^2s\},\{rs,r^3s\}$, the four linear rows are obtained by independently choosing $r,s\mapsto\pm1$, and the two-dimensional row is $(2,-2,0,0,0)$.
>
> For $D_6$, order the classes as $1,r^3,\{r,r^5\},\{r^2,r^4\}$ and the two reflection classes. The four linear characters again send $r,s$ independently to $\pm1$. The two remaining rows are
>
> $$
> (2,-2,1,-1,0,0),\qquad(2,2,-1,-1,0,0).
> $$
>
> For $G=C_7\rtimes C_3$, let $yxy^{-1}=x^2$, $\omega=e^{2\pi i/3}$, $\zeta=e^{2\pi i/7}$, $a=\zeta+\zeta^2+\zeta^4$, and $b=\overline a$. On classes $1$, $\{x,x^2,x^4\}$, $\{x^3,x^5,x^6\}$, $yC_7$, and $y^2C_7$, the table is
>
> $$
> \begin{array}{c|ccccc}
> &1&x&x^3&y&y^2\\\hline
> 1&1&1&1&1&1\\
> \lambda&1&1&1&\omega&\omega^2\\
> \lambda^2&1&1&1&\omega^2&\omega\\
> \psi&3&a&b&0&0\\
> \overline\psi&3&b&a&0&0
> \end{array}.
> $$
>
> Direct weighted inner products verify that every displayed table is orthonormal and that the degree squares equal the group order. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[01 - Group Theory/Concepts/Quaternion Group|Quaternion Group]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]

## Notes

- **Source status:** the multipart statement crosses [S1, Ch. 10, §4, Ex. 4.3, printed pp. 315–316, PDF pp. 327–328]; tables are independently derived.

