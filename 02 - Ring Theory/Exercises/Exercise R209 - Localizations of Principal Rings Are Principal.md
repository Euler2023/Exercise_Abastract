---
title: "Exercise R209: Localizations of Principal Rings Are Principal"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - localization
  - principal-ideal-domains
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, Rings, Exercise 4, printed p. 115, PDF p. 130"
created: 2026-08-28
---

# Exercise R209: Localizations of Principal Rings Are Principal

## Problem Statement

> [!question] Exercise 4
> Let $A$ be a principal ring and $S$ a multiplicative subset with $0\notin S$. Show that $S^{-1}A$ is principal.

## Hints

> [!hint]- Hint 1
> Contract an ideal $J\triangleleft S^{-1}A$ to $I=\{a\in A:a/1\in J\}$.

## Solution

> [!success]- Solution
> Let $J$ be an ideal of $S^{-1}A$ and contract it to
>
> $$
> I=\left\{a\in A:\frac a1\in J\right\}.
> $$
>
> This is an ideal of $A$. Since $A$ is principal, $I=(d)$ for some $d\in A$.
>
> We claim that $J=(d/1)$. First, $d/1\in J$, so $(d/1)\subseteq J$. Conversely, if $a/s\in J$, then
>
> $$
> \frac a1=\frac s1\frac as\in J.
> $$
>
> Hence $a\in I=(d)$, say $a=dc$. Therefore
>
> $$
> \frac as=\frac d1\frac cs\in\left(\frac d1\right).
> $$
>
> Thus every ideal of $S^{-1}A$ is principal. Since a localization of an integral domain at a set avoiding $0$ remains an integral domain, $S^{-1}A$ is a principal ring.

## Related Concepts

- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[02 - Ring Theory/Exercises/Exercise R114 - Laurent Polynomial Rings Are Principal Ideal Domains|Exercise R114]]

## Notes

- **Terminology:** Lang's “principal ring” here is an integral domain in which every ideal is principal.
- **Source status:** The statement was visually checked at [S2, Ch. II, Ex. 4, printed p. 115, PDF p. 130]. The contraction-extension proof is independent.

