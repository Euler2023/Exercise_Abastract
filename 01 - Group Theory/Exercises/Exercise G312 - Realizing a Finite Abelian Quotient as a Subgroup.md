---
title: "Exercise G312: Realizing a Finite Abelian Quotient as a Subgroup"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - abelian-groups
  - quotient-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 43, printed p. 79, PDF p. 94"
created: 2026-08-28
---

# Exercise G312: Realizing a Finite Abelian Quotient as a Subgroup

## Problem Statement

> [!question] Exercise 43
> Let $H$ be a subgroup of a finite abelian group $G$. Show that $G$ has a subgroup isomorphic to $G/H$.

## Hints

> [!hint]- Hint 1
> Use the character group $\widehat G=\operatorname{Hom}(G,\mathbb Q/\mathbb Z)$ and the annihilator of $H$.

## Solution

> [!success]- Solution
> For a finite abelian group $A$, its character group
>
> $$
> \widehat A=\operatorname{Hom}(A,\mathbb Q/\mathbb Z)
> $$
>
> is isomorphic to $A$: this is immediate for a cyclic group and then follows for finite direct products from the structure theorem. Inside $\widehat G$, consider the annihilator
>
> $$
> H^\perp=\{\chi\in\widehat G:\chi(H)=0\}.
> $$
>
> A character of $G$ is trivial on $H$ exactly when it factors uniquely through $G/H$. Hence
>
> $$
> H^\perp\cong\widehat{G/H}\cong G/H.
> $$
>
> Choose an isomorphism $\psi:G\to\widehat G$. Then $\psi^{-1}(H^\perp)$ is a subgroup of $G$ isomorphic to $G/H$, as required.

## Related Concepts

- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Imported result:** The finite abelian structure theorem, equivalently finite abelian self-duality, is used explicitly. The resulting subgroup is not canonical because the isomorphism $G\cong\widehat G$ is not canonical.
- **Source status:** [S2, Ch. I, Ex. 43, printed p. 79, PDF p. 94]. The character-duality proof is independent.

