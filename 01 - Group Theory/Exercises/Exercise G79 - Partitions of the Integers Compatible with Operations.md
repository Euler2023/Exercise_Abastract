---
title: "Exercise G79: Partitions of the Integers Compatible with Operations"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - partitions
  - congruence-relations
  - integers
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 8, Ex. 8.13, printed p. 73, PDF p. 85"
created: 2026-08-23
---

# Exercise G79: Partitions of the Integers Compatible with Operations

## Problem Statement

> [!question] Exercise 8.13
> A partition is compatible with an operation when the product of any two blocks lies in one block.
> 
> **(a)** For the partition $\mathbb Z=\mathrm{Pos}\cup\mathrm{Neg}\cup\{0\}$, discuss compatibility with $+$ and $\times$.
> 
> **(b)** Describe all partitions of $\mathbb Z$ compatible with addition.

## Hints

> [!hint]- Hint 1
> Positive plus negative integers can have any sign.

> [!hint]- Hint 2
> For addition, study the block containing $0$.

## Solution

> [!success]- Solution
> **(a)** The partition is not compatible with addition because $\mathrm{Pos}+\mathrm{Neg}$ contains positive, negative, and zero values. It is compatible with multiplication: the usual sign table places each product of two sign blocks in a single sign block.
> 
> **(b)** Let $N$ be the block containing $0$. Compatibility shows that $N$ is closed under addition. If $a\in N$ and $-a$ lies in a block $B$, then $N+B$ contains $a+(-a)=0$, so compatibility forces $N+B\subseteq N$ and hence $-a\in N$. Thus $N\le\mathbb Z$, so $N=n\mathbb Z$ for some $n\ge0$.
> 
> The same compatibility argument shows every other block is a coset of $N$. Therefore the compatible partitions are exactly the congruence-class partitions modulo $n$ (including $n=0$, which gives singleton blocks, and $n=1$, which gives one block).

## Related Concepts

- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §8, Ex. 8.13, printed p. 73, PDF p. 85]. The solution is an independent derivation for this vault, not a solution printed in Artin.
