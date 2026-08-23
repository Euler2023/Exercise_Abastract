---
title: "Exercise LA98: Independent Sets in Countably Spanned Spaces"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - infinite-dimensional-spaces
  - linear-independence
  - countability
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 6, Ex. 6.4, printed p. 101, PDF p. 113"
created: 2026-08-23
---

# Exercise LA98: Independent Sets in Countably Spanned Spaces

## Problem Statement

> [!question] Exercise 6.4
> Let $V$ be spanned by a countably infinite set. Prove that every independent subset of $V$ is finite or countably infinite.

## Hints

> [!hint]- Hint 1
> Write $V_n=\operatorname{Span}(s_1,\ldots,s_n)$.

> [!hint]- Hint 2
> An independent set meets $V_n$ in at most $n$ elements.

## Solution

> [!success]- Solution
> Let $V=\operatorname{Span}(s_1,s_2,\ldots)$ and set $V_n=\operatorname{Span}(s_1,\ldots,s_n)$. Every vector is a finite linear combination, so
> 
> $$
> V=\bigcup_{n\ge1}V_n.
> $$
> 
> If $L\subseteq V$ is independent, then $L\cap V_n$ is an independent subset of a space of dimension at most $n$, hence has at most $n$ elements. Therefore
> 
> $$
> L=\bigcup_{n\ge1}(L\cap V_n)
> $$
> 
> is a countable union of finite sets. It is consequently finite or countably infinite.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Linear Independence|Linear Independence]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §6, Ex. 6.4, printed p. 101, PDF p. 113]. The solution is an independent derivation for this vault, not a solution printed in Artin.
