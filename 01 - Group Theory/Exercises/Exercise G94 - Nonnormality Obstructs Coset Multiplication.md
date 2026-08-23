---
title: "Exercise G94: Nonnormality Obstructs Coset Multiplication"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - quotient-groups
  - normal-subgroups
  - cosets
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 12, Ex. 12.1, printed p. 74, PDF p. 86"
created: 2026-08-23
---

# Exercise G94: Nonnormality Obstructs Coset Multiplication

## Problem Statement

> [!question] Exercise 12.1
> Show that if $H\le G$ is not normal, there are left cosets $aH,bH$ whose product set is not a coset.

## Hints

> [!hint]- Hint 1
> Prove the contrapositive using the product $H(gH)$.

## Solution

> [!success]- Solution
> Assume every product of two left cosets is a left coset. For any $g\in G$, the set
> 
> $$
> H(gH)=HgH
> $$
> 
> is then a left coset. It contains $g$, so it must be $gH$. Hence $HgH=gH$, and multiplying by $g^{-1}$ on the left gives
> 
> $$
> g^{-1}Hg\subseteq H.
> $$
> 
> Replacing $g$ by $g^{-1}$ gives the reverse inclusion, so $g^{-1}Hg=H$ for all $g$. Thus $H$ is normal. The contrapositive proves the claim.

## Related Concepts

- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §12, Ex. 12.1, printed p. 74, PDF p. 86]. The solution is an independent derivation for this vault, not a solution printed in Artin.
