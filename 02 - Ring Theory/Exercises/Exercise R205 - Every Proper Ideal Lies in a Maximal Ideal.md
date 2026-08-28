---
title: "Exercise R205: Every Proper Ideal Lies in a Maximal Ideal"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - maximal-ideals
  - zorns-lemma
source: "Michael Artin, Algebra, 2nd ed., Appendix, Background Material, Section A.3, Zorn's Lemma, Ex. A.13, printed p. 522, PDF p. 534"
created: 2026-08-28
---

# Exercise R205: Every Proper Ideal Lies in a Maximal Ideal

## Problem Statement

> [!question] Exercise A.13
> Use Zorn's Lemma to prove that every ideal $I$ of a ring $R$ that is not $R$ itself is contained in a maximal ideal.

## Hints

> [!hint]- Hint 1
> Order the proper ideals containing $I$ by inclusion and use the union of a chain as an upper bound.

## Solution

> [!success]- Solution
> Let
>
> $$
> \mathcal P=\{J\triangleleft R:I\subseteq J\ne R\},
> $$
>
> ordered by inclusion. It is nonempty because $I\in\mathcal P$.
>
> Let $\mathcal C$ be a chain in $\mathcal P$ and put $U=\bigcup_{J\in\mathcal C}J$. If $x,y\in U$, they lie in two members of the chain; one of those ideals contains the other, so it contains both $x$ and $y$ and hence $x-y$. Multiplication by arbitrary elements of $R$ is handled inside the member containing $x$. Thus $U$ is an ideal containing $I$.
>
> Moreover $U\ne R$: if $1\in U$, then $1$ would belong to one $J\in\mathcal C$, forcing $J=R$, contrary to $J\in\mathcal P$. Therefore $U\in\mathcal P$ and is an upper bound for the chain.
>
> Zorn's Lemma gives a maximal element $M$ of $\mathcal P$. If there were an ideal $J$ with $M\subsetneq J\subsetneq R$, then $J\in\mathcal P$, contradicting maximality. Hence the only ideal properly containing $M$ is $R$, so $M$ is a maximal ideal containing $I$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Partially Ordered Sets and Zorns Lemma|Partially Ordered Sets and Zorn's Lemma]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]

## Notes

- **Routing:** Ring Theory is primary because Zorn's Lemma is applied to the inclusion poset of proper ideals.
- **Convention:** As in Artin, rings have an identity and maximal ideals are proper.
- **Source status:** [S1, Appendix, §A.3, Ex. A.13, printed p. 522, PDF p. 534]. The Zorn argument is independent.
