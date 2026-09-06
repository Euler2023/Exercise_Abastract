---
title: "Exercise F73: Unique Frobenius Roots in a Finite Field"
topic: field-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 12, printed p. 253, PDF p. 268"
created: 2026-09-06
---

# Exercise F73: Unique Frobenius Roots in a Finite Field

## Problem Statement

> [!question] Lang, Chapter V, Exercise 12
> Let $K$ be a finite field with $p^n$ elements. Show that every element of $K$ has a unique $p$-th root in $K$.

## Hints

> [!hint]- Hint 1
> The Frobenius map is injective, and an injection of a finite set into itself is surjective.

## Solution

> [!success]- Solution and proof status
> For $x,y\in K$, if $x^p=y^p$, then $(x-y)^p=0$. A field has no nonzero nilpotents, so $x=y$. Thus $F:x\mapsto x^p$ is injective and, since $K$ is finite, bijective. Every $a\in K$ consequently has exactly one $p$th root in $K$.
>
> Explicitly, the root is $a^{p^{n-1}}$, because every element of $K$ satisfies $a^{p^n}=a$: for $a\ne0$ this follows from Lagrange's theorem in the multiplicative group of order $p^n-1$, and it also holds for $a=0$.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]

## Notes

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 12, printed p. 253, PDF p. 268]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
