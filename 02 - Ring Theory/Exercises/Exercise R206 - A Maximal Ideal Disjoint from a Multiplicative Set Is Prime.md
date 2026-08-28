---
title: "Exercise R206: A Maximal Ideal Disjoint from a Multiplicative Set Is Prime"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - prime-ideals
  - localization
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, Rings, Exercise 1, printed p. 114, PDF p. 129"
created: 2026-08-28
---

# Exercise R206: A Maximal Ideal Disjoint from a Multiplicative Set Is Prime

## Problem Statement

> [!question] Exercise 1
> Suppose that $1\ne0$ in the commutative ring $A$. Let $S$ be a multiplicative subset of $A$ not containing $0$. Let $\mathfrak p$ be a maximal element in the set of ideals of $A$ whose intersection with $S$ is empty. Show that $\mathfrak p$ is prime.

## Hints

> [!hint]- Hint 1
> If $a,b\notin\mathfrak p$, maximality forces both $\mathfrak p+(a)$ and $\mathfrak p+(b)$ to meet $S$.

> [!hint]- Hint 2
> Multiply one element of $S\cap(\mathfrak p+(a))$ by one element of $S\cap(\mathfrak p+(b))$.

## Solution

> [!success]- Solution
> Because $1\in S$ and $\mathfrak p\cap S=\varnothing$, the ideal $\mathfrak p$ is proper. Suppose that $ab\in\mathfrak p$ while $a,b\notin\mathfrak p$. Then both $\mathfrak p+(a)$ and $\mathfrak p+(b)$ strictly contain $\mathfrak p$. By maximality, neither can remain disjoint from $S$. Hence there are
>
> $$
> s=p_1+xa\in S,
> \qquad
> t=p_2+yb\in S,
> $$
>
> with $p_1,p_2\in\mathfrak p$ and $x,y\in A$. Their product is
>
> $$
> st=p_1p_2+p_1yb+p_2xa+xyab.
> $$
>
> Every term on the right belongs to $\mathfrak p$, so $st\in\mathfrak p$. On the other hand, multiplicative closure gives $st\in S$, contradicting $\mathfrak p\cap S=\varnothing$.
>
> Therefore $ab\in\mathfrak p$ implies $a\in\mathfrak p$ or $b\in\mathfrak p$. Since $\mathfrak p$ is proper, it is a prime ideal.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]

## Notes

- **Routing:** The argument is driven by ideal enlargement and the prime-ideal test, so Ring Theory is primary.
- **Existence boundary:** The exercise assumes the maximal element. Zorn's Lemma can be used to obtain one when every chain union remains disjoint from $S$.
- **Source status:** The statement was visually checked at [S2, Ch. II, Ex. 1, printed p. 114, PDF p. 129]. The proof is independent.

