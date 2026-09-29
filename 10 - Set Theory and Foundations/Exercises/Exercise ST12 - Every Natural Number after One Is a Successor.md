---
title: "Exercise ST12: Every Natural Number after One Is a Successor"
topic: set-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - set-theory
  - peano-axioms
  - induction
source: "Michael Artin, Algebra, 2nd ed., Appendix, Background Material, Section A.2, The Integers, Ex. A.8, printed p. 521, PDF p. 533"
created: 2026-08-28
---

# Exercise ST12: Every Natural Number after One Is a Successor

## Problem Statement

> [!question] Exercise A.8
> Prove that every natural number $n$ except $1$ has the form $m'$ for some natural number $m$.

## Hints

> [!hint]- Hint 1
> Apply the induction axiom to the set consisting of $1$ together with all successors.

## Solution

> [!success]- Solution
> Let
>
> $$
> S=\{1\}\cup\{m':m\in\mathbb N\}.
> $$
>
> By definition $1\in S$. If $n\in S$, then its successor $n'$ belongs to the second set in the union, so $n'\in S$. The induction axiom therefore gives $S=\mathbb N$.
>
> Hence every natural number is either $1$ or a successor. In particular, if $n\ne1$, there is an $m\in\mathbb N$ such that $n=m'$.

## Related Concepts

- [[10 - Set Theory and Foundations/Concepts/Mathematical Induction and Peano Arithmetic|Mathematical Induction and Peano Arithmetic]]

## Notes

- **Routing:** The proof uses the Peano successor and induction axioms directly, so the exercise belongs to Set Theory and Foundations.
- **Notation:** The prime in $m'$ denotes the Peano successor, not differentiation or factorial.
- **Source status:** [S1, Appendix, §A.2, Ex. A.8, printed p. 521, PDF p. 533]. The proof is independent from the stated Peano axioms.
