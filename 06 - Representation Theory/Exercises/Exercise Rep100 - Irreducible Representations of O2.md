---
title: "Exercise Rep100: Irreducible Representations of O2"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 8, Ex. 8.7, printed p. 320, PDF p. 332"
created: 2026-08-27
---

# Exercise Rep100: Irreducible Representations of O2

## Problem Statement

> [!question] Exercise 8.7
> Using the results of Exercise 8.6, determine the irreducible representations of the orthogonal group $O_2$.

## Hints

> [!hint]- Hint 1
> A reflection sends the circle character $\chi_k$ to $\chi_{-k}$.

## Solution

> [!success]- Solution
> Write $O_2=S^1\rtimes\langle s\rangle$, with $srs=r^{-1}$. The character $\chi_0$ of $S^1$ extends in two ways, giving the trivial and determinant characters of $O_2$. For each $k\ge1$, the pair $\chi_k,\chi_{-k}$ is interchanged by $s$ and produces a two-dimensional irreducible representation
>
> $$
> \rho_k(r_\theta)=\begin{pmatrix}e^{ik\theta}&0\\0&e^{-ik\theta}\end{pmatrix},
> \qquad
> \rho_k(s)=\begin{pmatrix}0&1\\1&0\end{pmatrix}.
> $$
>
> Any irreducible representation restricts to a sum of circle weights, and reflection pairs opposite nonzero weights; irreducibility leaves exactly one such pair, or the zero weight with one of the two extensions. Thus this list is complete. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]

## Notes

- **Source status:** [S1, Ch. 10, §8, Ex. 8.7, printed p. 320, PDF p. 332].

