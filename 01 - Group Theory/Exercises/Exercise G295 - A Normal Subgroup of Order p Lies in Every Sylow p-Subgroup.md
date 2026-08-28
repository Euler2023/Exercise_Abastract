---
title: "Exercise G295: A Normal Subgroup of Order p Lies in Every Sylow p-Subgroup"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - sylow-theory
  - normal-subgroups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 22, printed p. 77, PDF p. 92"
created: 2026-08-28
---

# Exercise G295: A Normal Subgroup of Order p Lies in Every Sylow p-Subgroup

## Problem Statement

> [!question] Exercise 22
> Let $H\trianglelefteq G$ be a subgroup of a finite group, with $|H|=p$. Prove that $H$ is contained in every Sylow $p$-subgroup of $G$.

## Hints

> [!hint]- Hint 1
> For a Sylow $p$-subgroup $P$, normality of $H$ makes $HP$ a subgroup.

## Solution

> [!success]- Solution
> Let $P$ be any Sylow $p$-subgroup. Since $H$ is normal, $HP\le G$, and
>
> $$
> |HP|=\frac{|H||P|}{|H\cap P|}.
> $$
>
> If $H\nsubseteq P$, then the prime-order group $H$ has $H\cap P=1$, so $|HP|=p|P|$. This is a larger power of $p$ dividing $|G|$, contradicting the Sylow maximality of $P$. Hence $H\le P$. Because $P$ was arbitrary, $H$ lies in every Sylow $p$-subgroup.

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **Source status:** [S2, Ch. I, Ex. 22, printed p. 77, PDF p. 92]. The proof is independently derived.

