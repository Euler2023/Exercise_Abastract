---
title: "Exercise G198: Classification of Groups of Order Eight"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 3, Ex. 3.4, printed p. 222, PDF p. 234"
created: 2026-08-27
---

# Exercise G198: Classification of Groups of Order Eight

## Problem Statement

> [!question] Exercise 3.4
> Classify groups of order $8$.

## Hints

> [!hint]- Hint 1
> Separate the abelian case. In the nonabelian case, choose an element of maximal order.

## Solution

> [!success]- Solution
> The abelian classification gives
>
> $$
> C_8,\qquad C_4\times C_2,\qquad C_2\times C_2\times C_2.
> $$
>
> Now let $G$ be nonabelian. It has an element $a$ of order $4$: otherwise every nonidentity element has order $2$, and $(xy)^2=1$ would imply $xy=yx$ for all $x,y$. The subgroup $A=\langle a\rangle$ has index $2$, hence is normal. Choose $b\notin A$. Conjugation by $b$ induces a nontrivial automorphism of $A$, so $bab^{-1}=a^{-1}$. Also $b^2\in A$ and commutes with $b$; the relation forces $b^2\in\{1,a^2\}$. If $b^2=1$, the presentation is that of the dihedral group $D_4$; if $b^2=a^2$, it is that of the quaternion group $Q_8$. These five groups are pairwise nonisomorphic, distinguished by abelianity and element orders. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Concepts/Quaternion Group|Quaternion Group]]

## Notes

- **Source status:** [S1, Ch. 7, §3, Ex. 3.4, printed p. 222, PDF p. 234]; problem checked against the source PDF; solution independently derived for this vault.
