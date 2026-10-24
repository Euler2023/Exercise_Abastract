---
title: "Exercise MF21: Convolution of Sums of Squares"
topic: modular-forms
difficulty: beginner
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 1, Section 1.2, Exercise 1.2.1, printed p. 21, PDF p. 36"
source_refs:
  - "S7/ch-1/sec-2/ex-1"
created: 2026-10-24
---

# Exercise MF21: Convolution of Sums of Squares

## Problem Statement

> [!question] Original Exercise 1.2.1
> Show that $r(n,k)=\sum_{l+m=n}r(l,i)r(m,j)$ when $i+j=k$.
>
> Here the notation from Section 1.2, printed p. 11 / PDF p. 26, is
> $$
> r(n,k)=\#\{(v_1,\ldots,v_k)\in\mathbb Z^k:n=v_1^2+\cdots+v_k^2\},
> $$
> for nonnegative integers $n,k$; the sum is over nonnegative $l,m$.

## Hints

> [!hint]- Hint 1
> Split the $k$ coordinates after the first $i$ coordinates.

> [!hint]- Hint 2
> For each vector define $l$ to be the squared norm of its first block and $m$ that of its second block. Count each fiber of this partition.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution
>
> Let $A_{n,k}$ be the finite set in the definition. For $v\in A_{n,k}$ put $l=\sum_{a=1}^{i}v_a^2$ and $m=\sum_{a=i+1}^{k}v_a^2$. These are nonnegative and $l+m=n$. Splitting the coordinates defines a bijection
> $$
> A_{n,k}\longrightarrow\coprod_{l+m=n}(A_{l,i}\times A_{m,j}),\qquad
> v\longmapsto((v_1,\ldots,v_i),(v_{i+1},\ldots,v_k)).
> $$
> The inverse concatenates the two blocks, so neither multiplicities nor signs are lost. Taking cardinalities proves the formula. For zero-dimensional blocks use $r(0,0)=1$ and $r(n,0)=0$ for $n>0$; the same bijection proves these boundary cases.
>
> For example, $r(1,2)=4$, while $r(0,1)r(1,1)+r(1,1)r(0,1)=1\cdot2+2\cdot1=4$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Quadratic Forms and Theta Series|Quadratic Forms and Theta Series]]
- [[07 - Modular Forms/Concepts/Theta Functions|Theta Functions]]

## Notes

The statement is source-verified; the counting argument is an independent derivation. The equivalent product identity for theta series follows coefficientwise, without an analytic convergence assertion being needed for this finite counting proof.
