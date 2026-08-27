---
title: "Exercise G189: Automorphism Groups of Five Small Groups"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - automorphisms
  - finite-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Miscellaneous Ex. M.3, printed p. 193, PDF p. 205"
created: 2026-08-27
---

# Exercise G189: Automorphism Groups of Five Small Groups

## Problem Statement

> [!question] Miscellaneous Exercise M.3
> Determine the groups of automorphisms of (a) $C_4$, (b) $C_6$, (c) $C_2\times C_2$, (d) $D_4$, (e) the quaternion group $H$.

## Hints

> [!hint]- Hint 1
> For $C_n$, choose the image of a generator. For $C_2^2$, choose an ordered basis over $\mathbb F_2$.

> [!hint]- Hint 2
> In $D_4=\langle r,s\rangle$, $r$ must map to $r^{\pm1}$ and $s$ to one of four reflections. In $Q_8$, permute the three pairs $\{\pm i\},\{\pm j\},\{\pm k\}$.

## Solution

> [!success]- Solution
> **(a)** $\operatorname{Aut}(C_4)\cong(\mathbb Z/4\mathbb Z)^\times=\{1,3\}\cong C_2$.
>
> **(b)** $\operatorname{Aut}(C_6)\cong(\mathbb Z/6\mathbb Z)^\times=\{1,5\}\cong C_2$.
>
> **(c)** Viewing $C_2\times C_2$ as $\mathbb F_2^2$ gives
>
> $$
> \operatorname{Aut}(C_2^2)=GL_2(\mathbb F_2)\cong S_3.
> $$
>
> **(d)** An automorphism of $D_4=\langle r,s:r^4=s^2=1,srs=r^{-1}\rangle$ sends $r$ to $r$ or $r^{-1}$ and sends $s$ to any of $s,rs,r^2s,r^3s$. All eight choices work. Their composition law is dihedral, so
>
> $$
> \operatorname{Aut}(D_4)\cong D_4.
> $$
>
> **(e)** An automorphism of $Q_8$ permutes the three unordered pairs $\{\pm i\},\{\pm j\},\{\pm k\}$, giving a surjection to $S_3$. The kernel independently changes the signs of two generators and is $V_4$. Hence
>
> $$
> \operatorname{Aut}(Q_8)\cong V_4\rtimes S_3\cong S_4.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Concepts/Quaternion Group|Quaternion Group]]

## Notes

- The source was visually checked to read $C_6$ in part (b); OCR can resemble $C_8$ here.
- **Source status:** [S1, Ch. 6, M.3, printed p. 193, PDF p. 205]; independent calculations.

