---
title: "Exercise G96: Compatible Group Partitions Are Coset Partitions"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - quotient-groups
  - partitions
  - normal-subgroups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 12, Ex. 12.3, printed p. 75, PDF p. 87"
created: 2026-08-23
---

# Exercise G96: Compatible Group Partitions Are Coset Partitions

## Problem Statement

> [!question] Exercise 12.3
> Let $P$ be a partition of $G$ such that the product of any two blocks lies in one block. If $N$ is the block containing $1$, prove $N\triangleleft G$ and $P$ is its coset partition.

## Hints

> [!hint]- Hint 1
> First prove $NN\subseteq N$ and that inverses of elements of $N$ remain in $N$.

> [!hint]- Hint 2
> Compare the block containing $g$ with $gN$ and $Ng$.

## Solution

> [!success]- Solution
> Because $NN$ contains $1$, compatibility forces $NN\subseteq N$. If $n\in N$ and $n^{-1}$ lies in a block $B$, then $NB$ contains $nn^{-1}=1$, so $NB\subseteq N$; since $1\in N$, this gives $B\subseteq N$ and $n^{-1}\in N$. Thus $N$ is a subgroup.
> 
> Let $A$ be the block containing $g$. Compatibility gives $AN\subseteq A$ and $NA\subseteq A$, because both product sets contain $g$. Hence $gN,Ng\subseteq A$. Conversely, for $a\in A$, compatibility applied to the blocks containing $g^{-1}$ and $a$ shows $g^{-1}a\in N$, so $a\in gN$. Thus
> 
> $$
> A=gN=Ng.
> $$
> 
> Every block is therefore a left and right coset of $N$, and equality $gN=Ng$ for all $g$ proves $N\triangleleft G$.

## Related Concepts

- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §12, Ex. 12.3, printed p. 75, PDF p. 87]. The solution is an independent derivation for this vault, not a solution printed in Artin.
