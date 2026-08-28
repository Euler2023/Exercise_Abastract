---
title: "Exercise R219: The Unique Prime Ideal Is Principal"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - dedekind-rings
  - prime-ideals
  - principal-ideals
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, Rings, Exercise 15, printed p. 116, PDF p. 131"
created: 2026-08-28
---

# Exercise R219: The Unique Prime Ideal Is Principal

## Problem Statement

> [!question] Exercise 15
> Suppose the Dedekind ring $\mathfrak o$ has only one nonzero prime ideal $\mathfrak p$. Let
>
> $$
> t\in\mathfrak p,
> \qquad
> t\notin\mathfrak p^2.
> $$
>
> Show that $\mathfrak p=(t)$ is principal.

## Hints

> [!hint]- Hint 1
> Factor the principal ideal $(t)$ by Exercise II.14.

## Solution

> [!success]- Solution
> Since $t\notin\mathfrak p^2$, in particular $t\ne0$. By unique factorization of nonzero ideals and the assumption that $\mathfrak p$ is the only nonzero prime ideal, there is an integer $n\ge0$ such that
>
> $$
> (t)=\mathfrak p^n.
> $$
>
> Because $t\in\mathfrak p$, we have $(t)\subseteq\mathfrak p$, so $n\ge1$. If $n\ge2$, then
>
> $$
> (t)=\mathfrak p^n\subseteq\mathfrak p^2,
> $$
>
> which would imply $t\in\mathfrak p^2$, contrary to the hypothesis. Hence $n=1$, and therefore
>
> $$
> \mathfrak p=(t).
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]

## Notes

- **Source convention:** Throughout Exercises II.13-II.19, Lang uses “ideal” and “prime ideal” to mean nonzero unless otherwise specified.
- **Source status:** The statement was visually checked at [S2, Ch. II, Ex. 15, printed p. 116, PDF p. 131]. The proof is independent and uses II.14.

