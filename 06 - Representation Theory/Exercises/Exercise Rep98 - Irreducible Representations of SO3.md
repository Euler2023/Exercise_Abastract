---
title: "Exercise Rep98: Irreducible Representations of SO3"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 8, Ex. 8.5, printed p. 320, PDF p. 332"
created: 2026-08-27
---

# Exercise Rep98: Irreducible Representations of SO3

## Problem Statement

> [!question] Exercise 8.5
> Use Theorem 10.9.14 to determine the irreducible representations of the rotation group $SO_3$.

## Hints

> [!hint]- Hint 1
> An $SU_2$ representation descends through $SU_2/\{\pm I\}$ exactly when $-I$ acts trivially.

## Solution

> [!success]- Solution
> Theorem 10.9.14 gives the irreducible $SU_2$-modules
>
> $$
> H_n=\operatorname{Sym}^n(\mathbb C^2),\qquad \dim H_n=n+1.
> $$
>
> The central element $-I$ acts on homogeneous degree-$n$ polynomials as $(-1)^n$. Since $SO_3\cong SU_2/\{\pm I\}$, $H_n$ descends exactly when $n$ is even. Conversely every irreducible $SO_3$ representation pulls back irreducibly to $SU_2$ and must be one of these. Thus the irreducible complex representations of $SO_3$ are
>
> $$
> H_{2m}\quad(m\ge0),
> $$
>
> of dimensions $1,3,5,7,\ldots$. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2, Quaternions, and the Spin Cover]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]

## Notes

- **Source input:** irreducibility of $H_n$ is Theorem 10.9.14; the later completeness statement is Theorem 10.9.15 and is stated without proof in the source.
- **Source status:** [S1, Ch. 10, §8, Ex. 8.5, printed p. 320, PDF p. 332].

