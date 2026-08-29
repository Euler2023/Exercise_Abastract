---
title: "Exercise G104: Double Cosets and Normality"
topic: group-theory
difficulty: intermediate
status: completed
tags:
  - exercise
  - group-theory
  - double-cosets
  - normal-subgroups
  - cosets
source: Michael Artin, Algebra, 2nd ed., Ch. 2, Miscellaneous Problems, Ex. M.10, printed p. 76, PDF p. 88
created: 2026-08-23
---

# Exercise G104: Double Cosets and Normality

## Problem Statement

> [!question] Exercise M.10
> Let $H\le G$. Show that the double cosets $HgH$ are the left cosets $gH$ if and only if $H$ is normal.

## Hints

> [!hint]- Hint 1
> If $H$ is normal, move $H$ across $g$.

> [!hint]- Hint 2
> Conversely use $HgH=gH$ for both $g$ and $g^{-1}$.

## Solution

> [!success]- Solution
> If $H\trianglelefteq G$, then $Hg=gH$, and hence
> 
> $$
> HgH=gHH=gH.
> $$
> 
> Conversely, suppose $HgH=gH$ for every $g\in G$. Then $Hg\subseteq gH$, so $g^{-1}Hg\subseteq H$. Applying the same inclusion to $g^{-1}$ gives $gHg^{-1}\subseteq H$, which is equivalent to $H\subseteq g^{-1}Hg$. Therefore $g^{-1}Hg=H$ for every $g$, and $H$ is normal.

## Related Concepts

- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, Misc. Problems, Ex. M.10, printed p. 76, PDF p. 88]. The solution is an independent derivation for this vault, not a solution printed in Artin.
