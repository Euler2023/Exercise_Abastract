---
title: "Exercise G67: Left and Right Cosets of a Subgroup of $A_4$"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - cosets
  - alternating-groups
  - finite-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 8, Ex. 8.1, printed p. 72, PDF p. 84"
created: 2026-08-23
---

# Exercise G67: Left and Right Cosets of a Subgroup of $A_4$

## Problem Statement

> [!question] Exercise 8.1
> Let $H=\langle(123)\rangle\le A_4$. Exhibit all left and right cosets explicitly.

## Hints

> [!hint]- Hint 1
> There are four cosets because $|A_4|/|H|=4$.

## Solution

> [!success]- Solution
> Here $H=\{1,(123),(132)\}$. The left cosets are
> 
> $$
> \begin{aligned}
> H&=\{1,(123),(132)\},\\
> (234)H&=\{(234),(13)(24),(142)\},\\
> (243)H&=\{(243),(143),(12)(34)\},\\
> (124)H&=\{(124),(14)(23),(134)\}.
> \end{aligned}
> $$
> 
> The right cosets are
> 
> $$
> \begin{aligned}
> H&=\{1,(123),(132)\},\\
> H(234)&=\{(234),(12)(34),(134)\},\\
> H(243)&=\{(243),(124),(13)(24)\},\\
> H(143)&=\{(143),(14)(23),(142)\}.
> \end{aligned}
> $$
> 
> They differ because $H$ is not normal in $A_4$.

## Related Concepts

- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §8, Ex. 8.1, printed p. 72, PDF p. 84]. The solution is an independent derivation for this vault, not a solution printed in Artin.
