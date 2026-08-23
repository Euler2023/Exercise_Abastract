---
title: "Exercise LA104: Coordinate Synthesis Is Linear"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - linear-transformations
  - spanning-sets
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §1, Ex. 1.2, printed p. 125, PDF p. 137"
created: 2026-08-23
---

# Exercise LA104: Coordinate Synthesis Is Linear

## Problem Statement

> [!question] Exercise 1.2
> Let $v_1,\ldots,v_n$ be elements of a vector space $V$. Prove that the map $\varphi:F^n\to V$ defined by $\varphi(X)=v_1x_1+\cdots+v_nx_n$ is a linear transformation.

## Hints

> [!hint]- Hint 1
> Compute $\varphi(cX+dY)$ coordinate by coordinate.

## Solution

> [!success]- Solution
> If $X=(x_i)$ and $Y=(y_i)$, then
>
> $$
> \varphi(cX+dY)=\sum_i v_i(cx_i+dy_i)=c\varphi(X)+d\varphi(Y).
> $$
>
> Thus $\varphi$ is linear. Its image is $\operatorname{span}(v_1,\ldots,v_n)$, and its kernel records all linear relations among the $v_i$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Independence|Linear Independence]]

## Notes

- **Source status:** The statement is from [S1, Ch. 4, §1, Ex. 1.2, printed p. 125, PDF p. 137]; the solution is independent.

