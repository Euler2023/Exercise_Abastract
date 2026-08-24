---
title: "Exercise G128: Conjugacy Classes under a Surjective Homomorphism"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - conjugacy-classes
  - homomorphisms
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, Ex. 2.16, printed p. 222, PDF p. 234"
created: 2026-08-24
---

# Exercise G128: Conjugacy Classes under a Surjective Homomorphism

## Problem Statement

> [!question] Exercise 2.16
> Let $\varphi:G\to G'$ be a surjective group homomorphism, let $C$ denote the conjugacy class of an element $x$ of $G$, and let $C'$ denote the conjugacy class in $G'$ of its image $\varphi(x)$. Prove that $\varphi$ maps $C$ surjectively to $C'$, and that $|C'|$ divides $|C|$.

## Hints

> [!hint]- Hint 1
> Lift a conjugating element of $G'$ to $G$.

> [!hint]- Hint 2
> Compare $Z_G(x)$ with the inverse image of $Z_{G'}(\varphi(x))$.

## Solution

> [!success]- Solution
> For $g\in G$,
>
> $$
> \varphi(gxg^{-1})=\varphi(g)\varphi(x)\varphi(g)^{-1},
> $$
>
> so $\varphi(C)\subseteq C'$. Conversely, every element of $C'$ has the form $g'\varphi(x)g'^{-1}$. Surjectivity gives $g'=\varphi(g)$ for some $g\in G$, so this element is the image of $gxg^{-1}\in C$. Hence $\varphi(C)=C'$.
>
> For finite groups, put
>
> $$
> H=\varphi^{-1}\bigl(Z_{G'}(\varphi(x))\bigr).
> $$
>
> Then $Z_G(x)\le H$, and surjectivity gives
>
> $$
> |C'|=[G':Z_{G'}(\varphi(x))]=[G:H].
> $$
>
> Therefore
>
> $$
> |C|=[G:Z_G(x)]=[G:H][H:Z_G(x)]=|C'|[H:Z_G(x)],
> $$
>
> proving $|C'|\mid|C|$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]

## Notes

- The divisibility assertion is a finite-cardinality statement; the surjectivity of classes holds without finiteness.
- **Source status:** [S1, Ch. 7, §2, Ex. 2.16, printed p. 222, PDF p. 234]; independent proof.

