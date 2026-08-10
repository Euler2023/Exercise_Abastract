---
title: "Exercise G14: Identity and Inverses in Subgroups"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - subgroups
  - proof
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 2, Ex. 2.5"
created: 2026-08-10
---

# Exercise G14: Identity and Inverses in Subgroups

## Problem Statement

> [!question] Exercise
> In the definition of a subgroup, the identity element of $H$ is required to be the identity element of $G$. One might instead require only that $H$ have an identity element, without initially requiring it to be the same as the identity of $G$.
>
> Prove that if $H$ has an identity at all under the operation inherited from $G$, then it is the identity of $G$. Prove the analogous statement for inverses.

## Hints

> [!hint]- Hint 1
> Choose $h\in H$. From $e_Hh=h$, multiply in $G$ by $h^{-1}$.

> [!hint]- Hint 2
> Once $e_H=e_G$ is known, compare an inverse of $h$ in $H$ with the unique inverse of $h$ in $G$.

## Solution

> [!success]- Solution
> Let $e_G$ be the identity of $G$, and suppose $H$ has an identity element $e_H$ for the operation inherited from $G$.
>
> Since $H$ is nonempty, choose $h\in H$. The identity property in $H$ gives
> $$e_Hh=h.$$
> This equation also holds in $G$. Multiplying on the right by the inverse $h^{-1}$ computed in $G$, we obtain
> $$e_H=e_H(hh^{-1})=(e_Hh)h^{-1}=hh^{-1}=e_G.$$
> Thus any identity possessed by $H$ must equal the identity of $G$.
>
> Now let $h\in H$, and suppose $k\in H$ is an inverse of $h$ relative to the group law on $H$. Then
> $$hk=kh=e_H.$$
> Since $e_H=e_G$, these equations become
> $$hk=kh=e_G.$$
> Hence $k$ is an inverse of $h$ in $G$. By uniqueness of inverses in $G$,
> $$k=h^{-1}.$$
> Therefore an inverse computed in $H$ is necessarily the same as the inverse computed in $G$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[01 - Group Theory/Exercises/Exercise G1 - Uniqueness of Identity|Exercise G1: Uniqueness of Identity]]
- [[01 - Group Theory/Exercises/Exercise G2 - Uniqueness of Inverses|Exercise G2: Uniqueness of Inverses]]

## Notes

This proves that the usual subgroup definition does not add an independent requirement when it specifies the identity and inverses inherited from $G$.

**Source status:** Exercise statement from [S1, Ch. 2, Section 2, Ex. 2.5]. The proof uses only the group axioms and uniqueness of inverses.
