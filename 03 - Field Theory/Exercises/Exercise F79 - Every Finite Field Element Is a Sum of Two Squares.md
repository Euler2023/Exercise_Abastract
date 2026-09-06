---
title: "Exercise F79: Every Finite Field Element Is a Sum of Two Squares"
topic: field-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 18, printed p. 254, PDF p. 269"
created: 2026-09-06
---

# Exercise F79: Every Finite Field Element Is a Sum of Two Squares

## Problem Statement

> [!question] Lang, Chapter V, Exercise 18
> Show that every element of a finite field can be written as a sum of two squares in that field.

## Hints

> [!hint]- Hint 1
> In odd characteristic the set of squares, including zero, has $(q+1)/2$ elements.

## Solution

> [!success]- Solution and proof status
> Let $K$ have $q$ elements. In characteristic two, the square map is bijective by the injectivity of Frobenius, so every $a$ is $x^2+0^2$.
>
> Suppose the characteristic is odd. The nonzero square map has fibers $\{x,-x\}$, each of size two. Hence
> $$
> S=\{x^2:x\in K\},\qquad |S|=(q+1)/2.
> $$
> For a given $a\in K$, the translated set $a-S$ has the same size. Since $|S|+|a-S|=q+1>q$, the two sets intersect. Choose $s=a-t$ with $s,t\in S$; writing $s=x^2$, $t=y^2$ gives $a=x^2+y^2$.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 18, printed p. 254, PDF p. 269]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
