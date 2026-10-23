---
title: 'Exercise G334: Closed Normal Quotients of Profinite Groups'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §1, Exercise 4, printed p. 265, PDF p. 284
source_refs:
- S4/ch-IV/sec-1/ex-4
created: '2026-10-23'
---

# Exercise G334: Closed Normal Quotients of Profinite Groups

## Problem Statement

> [!question] Neukirch IV.1.4
> Every quotient $G/H$ of a profinite group $G$ by a closed normal subgroup $H$ is a profinite group.

## Hints

> [!hint]- Hint 1
> The quotient group is compact and Hausdorff. Show that its identity has a basis of open normal subgroups.

> [!hint]- Hint 2
> If $O$ is an open set containing $H$, take an open normal subgroup $N\subseteq O$. Then $HN/H$ is an open normal subgroup of the quotient contained in the prescribed quotient neighborhood.

## Solution

> [!success]- Independent derivation
> Let $q:G\to G/H$ be the quotient map. A continuous image of a compact space is compact, so the quotient is compact. The quotient by a closed normal subgroup is Hausdorff: if $g\notin H$, closedness and continuity of multiplication provide small neighborhoods separating $gH$ from $H$, and translation then separates any two distinct cosets.
>
> If $W$ is a neighborhood of the quotient identity, then $q^{-1}(W)$ is a neighborhood containing $H$. Choose a basic open normal subgroup $N\subseteq q^{-1}(W)$ of $G$. Since $q^{-1}(W)$ is $H$-saturated, $HN\subseteq q^{-1}(W)$. The subgroup $HN$ is normal and is open because it contains the open subgroup $N$. Hence $HN/H=q(N)$ is an open normal subgroup of the quotient. Here the quotient map is open because $q^{-1}(q(U))=UH$ is a union of translates of an open set.
>
> Thus $G/H$ is a compact Hausdorff group with a neighborhood basis of open normal subgroups, as required by the definition of a profinite group used in this section.

## Related Concepts

- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §1, Exercise 4, printed p. 265, PDF p. 284]. An independent proof using the quotient topology.
- **Boundary:** Closedness of $H$ is essential: the quotient by a nonclosed normal subgroup need not be Hausdorff.
