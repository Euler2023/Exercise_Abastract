---
title: "Exercise R203: Complete Induction from Ordinary Induction"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - complete-induction
  - peano-axioms
source: "Michael Artin, Algebra, 2nd ed., Appendix, Background Material, Section A.2, The Integers, Ex. A.11, printed p. 521, PDF p. 533"
created: 2026-08-28
---

# Exercise R203: Complete Induction from Ordinary Induction

## Problem Statement

> [!question] Exercise A.11
> Assume that basic properties of the relation $<$ on $\mathbb N$ are known (see Exercise A.10). Prove the principle of complete induction: A subset $S$ of $\mathbb N$ is equal to $\mathbb N$ if it has the following property. If $n$ is an element of $\mathbb N$ such that $m$ is in $S$ for every $m<n$, then $n$ is in $S$.

## Hints

> [!hint]- Hint 1
> Apply ordinary induction to the assertion that every number up to $n$ lies in $S$.

## Solution

> [!success]- Solution
> Let $P(n)$ be the assertion that every $m\le n$ belongs to $S$.
>
> For $n=1$, there is no natural number $m<1$. The stated complete-induction hypothesis is therefore vacuously satisfied and gives $1\in S$, so $P(1)$ holds.
>
> Assume $P(n)$. Every natural number $m<n'$ satisfies $m\le n$ by trichotomy for the natural order. Hence the induction hypothesis puts every such $m$ in $S$. Applying the assumed property of $S$ to $n'$ gives $n'\in S$. Together with $P(n)$, this proves $P(n')$.
>
> Ordinary induction now yields $P(n)$ for all $n\in\mathbb N$. In particular every natural number belongs to $S$, so $S=\mathbb N$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Mathematical Induction and Peano Arithmetic|Mathematical Induction and Peano Arithmetic]]
- [[02 - Ring Theory/Exercises/Exercise R202 - Translation and Trichotomy for the Natural Order|Translation and Trichotomy for the Natural Order]]

## Notes

- **Routing:** Ring Theory is the nearest primary home because complete induction is derived from the Peano structure supporting integer arithmetic.
- **Source status:** [S1, Appendix, §A.2, Ex. A.11, printed p. 521, PDF p. 533]. The proof is independent.
