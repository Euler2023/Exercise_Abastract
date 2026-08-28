---
title: "Exercise R211: Localizing a UFD at a Prime Gives a PID"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - localization
  - principal-ideal-domains
  - unique-factorization-domains
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, Rings, Exercise 6, printed p. 115, PDF p. 130"
created: 2026-08-28
---

# Exercise R211: Localizing a UFD at a Prime Gives a PID

## Problem Statement

> [!question] Exercise 6
> Let $A$ be a factorial ring and $p$ a prime element. Show that the local ring $A_{(p)}$ is principal.

## Hints

> [!hint]- Hint 1
> In $A_{(p)}$, every prime not associate to $p$ becomes a unit.

> [!hint]- Hint 2
> Choose in a nonzero ideal an element with the least exponent of $p$.

## Solution

> [!success]- Solution
> The ring $A_{(p)}$ is obtained by inverting $S=A\setminus(p)$. A prime $q$ of $A$ has $(q)\cap S=\varnothing$ exactly when $q$ is associate to $p$: if $q$ is not associate to $p$, then $q\notin(p)$ and hence $q\in S$. By Exercise II.5, $A_{(p)}$ is factorial and, up to associates, $p$ is its only prime element.
>
> Consequently every nonzero element of $A_{(p)}$ has the form
>
> $$
> u p^n,
> $$
>
> where $u$ is a unit and $n\ge0$. Let $I\ne(0)$ be an ideal. Among the exponents occurring in nonzero elements of $I$, choose the least one, say $n$. Then $up^n\in I$ for some unit $u$, so $p^n\in I$ and $(p^n)\subseteq I$.
>
> Every nonzero $y\in I$ has the form $vp^m$ with $m\ge n$ by minimality. Hence $y\in(p^n)$. The zero element is also in $(p^n)$, so $I\subseteq(p^n)$. Thus $I=(p^n)$.
>
> Every ideal is principal, and therefore $A_{(p)}$ is a principal ring.

## Related Concepts

- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]

## Notes

- **Structural interpretation:** This localization is a discrete valuation ring in the elementary sense that every nonzero ideal is a power of its unique maximal ideal $(p)$.
- **Source status:** The statement was visually checked at [S2, Ch. II, Ex. 6, printed p. 115, PDF p. 130]. The proof is independent and uses the result of Exercise II.5.
