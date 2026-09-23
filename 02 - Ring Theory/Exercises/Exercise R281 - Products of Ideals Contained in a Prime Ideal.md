---
title: "Exercise R281: Products of Ideals Contained in a Prime Ideal"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - prime-ideals
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, Exercise 2, printed p. 443, PDF p. 458"
created: 2026-09-22
---

# Exercise R281: Products of Ideals Contained in a Prime Ideal

## Problem Statement

> [!question] Lang, Chapter X, Exercise 2
> Let $\mathfrak p$ be a prime ideal, and $\mathfrak a,\mathfrak b$ ideals of $A$. If $\mathfrak a\mathfrak b\subset\mathfrak p$, show that $\mathfrak a\subset\mathfrak p$ or $\mathfrak b\subset\mathfrak p$.

## Hints

> [!hint]- Hint 1
> If $\mathfrak a$ is not contained in $\mathfrak p$, choose one element of $\mathfrak a\setminus\mathfrak p$.

> [!hint]- Hint 2
> For that fixed element $a$, apply the defining property of a prime ideal to $ab$ for every $b\in\mathfrak b$.

## Solution

> [!success]- Independently derived solution
> Work in the commutative ring $A$ of the chapter. If $\mathfrak a\subseteq\mathfrak p$, the first alternative already holds. Otherwise choose $a\in\mathfrak a\setminus\mathfrak p$.
>
> For every $b\in\mathfrak b$, the element $ab$ belongs to the product ideal $\mathfrak a\mathfrak b$, hence to $\mathfrak p$. Since $\mathfrak p$ is prime and $a\notin\mathfrak p$, we must have $b\in\mathfrak p$. This holds for every $b\in\mathfrak b$, so $\mathfrak b\subseteq\mathfrak p$.
>
> Equivalently, if neither ideal were contained in $\mathfrak p$, elements $a\in\mathfrak a\setminus\mathfrak p$ and $b\in\mathfrak b\setminus\mathfrak p$ would give $ab\in\mathfrak p$, contradicting primality.

## Related Concepts

- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Primary Ideals and Primary Decomposition|Primary Ideals and Primary Decomposition]]

## Notes

- **Source status:** The complete statement was visually checked at [S2, Ch. X, Ex. 2, printed p. 443, PDF p. 458]. The source states the exercise; the proof above is independent.
- **Conventions:** The printed inclusion symbol denotes containment and does not require proper containment. A prime ideal is proper. No finite-generation or Noetherian hypothesis is used.
- **Finite products:** Induction gives the useful extension: if $\mathfrak a_1\cdots\mathfrak a_r\subseteq\mathfrak p$ for $r\ge1$, at least one $\mathfrak a_i$ is contained in $\mathfrak p$.
