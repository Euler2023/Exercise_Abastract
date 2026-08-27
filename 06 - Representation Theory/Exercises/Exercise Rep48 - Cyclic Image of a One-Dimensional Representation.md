---
title: "Exercise Rep48: Cyclic Image of a One-Dimensional Representation"
topic: representation-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - representation-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 1, Ex. 1.1, printed p. 314, PDF p. 326"
created: 2026-08-27
---

# Exercise Rep48: Cyclic Image of a One-Dimensional Representation

## Problem Statement

> [!question] Exercise 1.1
> Show that the image of a representation of dimension $1$ of a finite group is a cyclic group.

## Hints

> [!hint]- Hint 1
> Regard the representation as a homomorphism $G\to\mathbb C^\times$.

> [!hint]- Hint 2
> Every finite subgroup of the multiplicative group of a field is cyclic.

## Solution

> [!success]- Solution
> Let $\rho:G\to GL_1(\mathbb C)=\mathbb C^\times$ and put $H=\rho(G)$. Since $G$ is finite, $H$ is finite. If $m$ is the exponent of $H$, every element of $H$ is a root of $X^m-1$. Thus $|H|\le m$. On the other hand, the exponent of a finite group divides its order, so $m\le |H|$. Hence $m=|H|$, and some element of $H$ has order $|H|$. That element generates $H$, so the image is cyclic. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

- **Source status:** the statement was checked at [S1, Ch. 10, §1, Ex. 1.1, printed p. 314, PDF p. 326]; the proof is an independent derivation.

