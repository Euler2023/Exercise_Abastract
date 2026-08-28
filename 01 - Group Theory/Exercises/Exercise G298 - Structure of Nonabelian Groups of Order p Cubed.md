---
title: "Exercise G298: Structure of Nonabelian Groups of Order p Cubed"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - finite-p-groups
  - normal-subgroups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 25, printed p. 77, PDF p. 92"
created: 2026-08-28
---

# Exercise G298: Structure of Nonabelian Groups of Order p Cubed

## Problem Statement

> [!question] Exercise 25
> Let $G$ be a nonabelian group of order $p^3$, let $Z=Z(G)$, and let $C$ be a cyclic group of order $p$.
>
> (a) Show that $Z\cong C$ and $G/Z\cong C\times C$.
>
> (b) Show that every subgroup of $G$ of order $p^2$ contains $Z$ and is normal.
>
> (c) Suppose $x^p=1$ for all $x\in G$. Show that $G$ contains a normal subgroup $H\cong C\times C$.

## Hints

> [!hint]- Hint 1
> Use the nontrivial center of a finite $p$-group and the fact that $G/Z(G)$ cannot be cyclic when $G$ is nonabelian.

## Solution

> [!success]- Solution
> **(a)** The class equation gives $|Z|>1$. If $|Z|\ge p^2$, then $G/Z$ is cyclic (or trivial), which would make $G$ abelian. Hence $|Z|=p$, so $Z\cong C$. The quotient has order $p^2$ and is abelian by Exercise 24. It cannot be cyclic, again because a cyclic $G/Z(G)$ forces $G$ abelian. Therefore $G/Z\cong C\times C$.
>
> **(b)** Let $K\le G$ have order $p^2$. If $K\cap Z=1$, then $|KZ|=p^3$ and $G=KZ$. But $K$ is abelian by Exercise 24 and $Z$ is central, so $G$ would be abelian. Thus $Z\le K$. Also $[G:K]=p$, and every index-$p$ subgroup of a finite $p$-group is normal. Hence $K\trianglelefteq G$.
>
> **(c)** Choose $x\notin Z$. Then $H=\langle x,Z\rangle$ has order $p^2$: its image in $G/Z$ is a nontrivial cyclic subgroup. By the exponent hypothesis, every nonidentity element of $H$ has order $p$, so $H\cong C\times C$. Part (b) gives $H\trianglelefteq G$.

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Class Equation]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]

## Notes

- **Imported result:** The standard fact that an index-$p$ subgroup of a finite $p$-group is normal is used in part (b).
- **Source status:** [S2, Ch. I, Ex. 25, printed p. 77, PDF p. 92]. The derivation is independent.

