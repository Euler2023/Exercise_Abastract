---
title: "Exercise G262: Third Isomorphism Theorem from a Composite Quotient"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Miscellaneous Problems, Ex. M.6, printed p. 227, PDF p. 239"
created: 2026-08-27
---

# Exercise G262: Third Isomorphism Theorem from a Composite Quotient

## Problem Statement

> [!question] Exercise M.6
> Let $N\subseteq H$ be normal subgroups of $G$, put $\bar H=H/N$ and $\bar G=G/N$. Prove $\bar H\trianglelefteq\bar G$ and $G/H\cong\bar G/\bar H$.

## Hints

> [!hint]- Hint 1
> Factor the quotient map $G\to G/H$ through $G/N$.

## Solution

> [!success]- Solution
> For $gN\in\bar G$, $(gN)(H/N)(gN)^{-1}=gHg^{-1}/N=H/N$, so $\bar H$ is normal. The map $G/N\to G/H$ defined by $gN\mapsto gH$ is well defined because $N\subseteq H$, is onto, and has kernel $H/N=\bar H$. The First Isomorphism Theorem yields
>
> $$
> (G/N)/(H/N)\cong G/H.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]

## Notes

- **Source status:** [S1, Ch. 7, Misc., Ex. M.6, printed p. 227, PDF p. 239]; source PDF checked; solution independently derived.
