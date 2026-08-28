---
title: "Exercise R202: Translation and Trichotomy for the Natural Order"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - natural-numbers
  - order-relations
source: "Michael Artin, Algebra, 2nd ed., Appendix, Background Material, Section A.2, The Integers, Ex. A.10, printed p. 521, PDF p. 533"
created: 2026-08-28
---

# Exercise R202: Translation and Trichotomy for the Natural Order

## Problem Statement

> [!question] Exercise A.10
> The relation $<$ on $\mathbb N$ can be defined by the rule $a<b$ if $b=a+n$ for some $n$. Assume that properties of addition have been proved.
>
> **(a)** Prove that if $a<b$, then $a+n<b+n$ for all $n$.
>
> **(b)** Prove that the relation $<$ is transitive.
>
> **(c)** Prove that if $a$ and $b$ are natural numbers, then $a<b$, or $a=b$, or $b<a$.

## Hints

> [!hint]- Hint 1
> For (c), induct on one of the numbers and use the fact that every number other than $1$ is a successor.

## Solution

> [!success]- Solution
> **(a)** If $b=a+m$, then associativity and commutativity of addition give
>
> $$
> b+n=(a+m)+n=(a+n)+m.
> $$
>
> Thus $a+n<b+n$, with the same witness $m$.
>
> **(b)** If $b=a+m$ and $c=b+n$, then
>
> $$
> c=(a+m)+n=a+(m+n),
> $$
>
> so $a<c$.
>
> **(c)** Fix $a$ and induct on $b$. If $b=1$, then either $a=1$, or Exercise A.8 writes $a=m'=1+m$, so $1<a$.
>
> Suppose trichotomy holds for $a$ and $b$, and consider $b'=b+1$. If $a<b$, then transitivity and $b<b'$ give $a<b'$. If $a=b$, then $a<b'$. Finally, if $b<a$, write $a=b+n$. If $n=1$, then $a=b'$. If $n\ne1$, Exercise A.8 writes $n=1+m$, and
>
> $$
> a=b+(1+m)=b'+m,
> $$
>
> so $b'<a$. These cases prove trichotomy for $b'$, completing the induction.

## Related Concepts

- [[02 - Ring Theory/Concepts/Mathematical Induction and Peano Arithmetic|Mathematical Induction and Peano Arithmetic]]

## Notes

- **Routing:** Ring Theory is the nearest primary home because the order is derived from the additive structure of $\mathbb N$.
- **Convention:** Artin's natural numbers begin with $1$, so the witness in $b=a+n$ is automatically positive and defines strict inequality.
- **Source status:** [S1, Appendix, §A.2, Ex. A.10, printed p. 521, PDF p. 533]. The proofs are independent.
