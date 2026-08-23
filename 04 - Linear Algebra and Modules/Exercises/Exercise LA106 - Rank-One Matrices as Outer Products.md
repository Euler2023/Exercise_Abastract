---
title: "Exercise LA106: Rank-One Matrices as Outer Products"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - rank-one-matrices
  - outer-products
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §1, Ex. 1.4, printed p. 125, PDF p. 137"
created: 2026-08-23
---

# Exercise LA106: Rank-One Matrices as Outer Products

## Problem Statement

> [!question] Exercise 1.4
> Prove that every $m\times n$ matrix $A$ of rank $1$ has the form $A=XY^t$, where $X,Y$ are $m$- and $n$-dimensional column vectors. How uniquely determined are these vectors?

## Hints

> [!hint]- Hint 1
> Choose one nonzero column $X$ of $A$; every other column is a scalar multiple of it.

## Solution

> [!success]- Solution
> Choose a nonzero column $X$ of $A$. Rank one means that every column of $A$ equals $y_jX$ for a unique scalar $y_j$. With $Y=(y_1,\ldots,y_n)^t$, the $j$th column of $XY^t$ is $y_jX$, so $A=XY^t$.
>
> If also $A=X'Y'^t$ with all four vectors nonzero, then $X'$ spans the same one-dimensional column space as $X$. Thus $X'=cX$ for a unique $c\ne0$, and comparison gives $Y'=c^{-1}Y$. This reciprocal rescaling is the only ambiguity.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** [S1, Ch. 4, §1, Ex. 1.4, printed p. 125, PDF p. 137]; independent solution.

