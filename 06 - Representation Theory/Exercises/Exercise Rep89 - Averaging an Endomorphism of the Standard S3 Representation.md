---
title: "Exercise Rep89: Averaging an Endomorphism of the Standard S3 Representation"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 7, Ex. 7.2, printed p. 319, PDF p. 331"
created: 2026-08-27
---

# Exercise Rep89: Averaging an Endomorphism of the Standard S3 Representation

## Problem Statement

> [!question] Exercise 7.2
> Let $A$ be the standard representation (10.1.3) of $S_3$, and let $B=\begin{pmatrix}1&1\\0&0\end{pmatrix}$. Use the averaging process to produce a $G$-invariant linear operator from left multiplication by $B$.

## Hints

> [!hint]- Hint 1
> Average the conjugates $A_g^{-1}BA_g$ and use irreducibility.

## Solution

> [!success]- Solution
> The averaged operator is
>
> $$
> \overline B=\frac16\sum_{g\in S_3}A_g^{-1}BA_g.
> $$
>
> It commutes with every $A_h$, so Schur's lemma makes it scalar because the standard representation is irreducible. Trace is invariant under conjugation, hence $\operatorname{tr}\overline B=\operatorname{tr}B=1$. On a two-dimensional space this forces
>
> $$
> \overline B=\frac12I_2.
> $$
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Exercises/Exercise Rep1 - Schurs Lemma|Exercise Rep1: Schur's Lemma]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]

## Notes

- The source matrix was visually checked at [S1, Ch. 10, §7, Ex. 7.2, printed p. 319, PDF p. 331].

