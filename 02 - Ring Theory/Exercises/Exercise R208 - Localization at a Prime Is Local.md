---
title: "Exercise R208: Localization at a Prime Is Local"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - localization
  - local-rings
  - prime-ideals
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, Rings, Exercise 3, printed p. 115, PDF p. 130"
created: 2026-08-28
---

# Exercise R208: Localization at a Prime Is Local

## Problem Statement

> [!question] Exercise 3
> Let $\mathfrak p$ be a prime ideal of $A$. Show that $A_{\mathfrak p}$ has a unique maximal ideal, consisting of all elements $a/s$ with $a\in\mathfrak p$ and $s\notin\mathfrak p$.

## Hints

> [!hint]- Hint 1
> Show that a fraction with numerator outside $\mathfrak p$ is a unit in $A_{\mathfrak p}$.

> [!hint]- Hint 2
> The set of nonunits in a commutative ring is an ideal exactly when the ring is local.

## Solution

> [!success]- Solution
> Put $S=A\setminus\mathfrak p$, so $A_{\mathfrak p}=S^{-1}A$. The extended ideal
>
> $$
> \mathfrak pA_{\mathfrak p}
> =\left\{\frac as:a\in\mathfrak p,\ s\notin\mathfrak p\right\}
> $$
>
> is proper. Indeed, if $1=a/s$ with $a\in\mathfrak p$ and $s\in S$, equality in the localization would give some $u\in S$ with $u(s-a)=0$, hence $us=ua\in\mathfrak p$. But $u,s\notin\mathfrak p$, contradicting primeness.
>
> If $a/s\notin\mathfrak pA_{\mathfrak p}$, then $a\notin\mathfrak p$, so $a\in S$ and
>
> $$
> \frac as\frac sa=1.
> $$
>
> Thus every element outside $\mathfrak pA_{\mathfrak p}$ is a unit. Conversely, an element of the proper ideal $\mathfrak pA_{\mathfrak p}$ cannot be a unit. Hence this ideal is precisely the set of nonunits.
>
> Every proper ideal contains no units, so every proper ideal of $A_{\mathfrak p}$ is contained in $\mathfrak pA_{\mathfrak p}$. Therefore $\mathfrak pA_{\mathfrak p}$ is the unique maximal ideal, and $A_{\mathfrak p}$ is local.

## Related Concepts

- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]

## Notes

- **General-ring boundary:** The localization equality relation is used in its general form, so the proof does not assume that $A$ is a domain.
- **Source status:** The statement was visually checked at [S2, Ch. II, Ex. 3, printed p. 115, PDF p. 130]. The proof is independent.
