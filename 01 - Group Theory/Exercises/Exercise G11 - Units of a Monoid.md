---
title: "Exercise G11: Units of a Monoid"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - monoids
  - proof
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 2, Ex. 2.2, printed p. 69, PDF p. 81"
created: 2026-08-10
---

# Exercise G11: Units of a Monoid

## Problem Statement

> [!question] Exercise
> Let $S$ be a set with an associative law of composition and an identity element. Prove that the subset $S^{\times}$ consisting of the invertible elements of $S$ is a group.

## Hints

> [!hint]- Hint 1
> Associativity is inherited from $S$. Check that the identity belongs to $S^{\times}$.

> [!hint]- Hint 2
> If $a,b\in S^{\times}$, use
> $$(ab)^{-1}=b^{-1}a^{-1}$$
> to prove closure.

## Solution

> [!success]- Solution
> A set with an associative operation and identity is a **monoid**. An element $a\in S$ is invertible if there exists $a^{-1}\in S$ such that
> $$aa^{-1}=a^{-1}a=e.$$
> Let $S^{\times}$ denote the set of all invertible elements.
>
> We verify the group axioms.
>
> ### Closure
> Let $a,b\in S^{\times}$. Then
> $$(ab)(b^{-1}a^{-1})=a(bb^{-1})a^{-1}=e$$
> and
> $$(b^{-1}a^{-1})(ab)=b^{-1}(a^{-1}a)b=e.$$
> Hence $ab$ is invertible with inverse $b^{-1}a^{-1}$, so $ab\in S^{\times}$.
>
> ### Associativity
> The operation on $S^{\times}$ is the restriction of the associative operation on $S$, so it remains associative.
>
> ### Identity
> The identity $e$ is invertible because $ee=e$. Thus $e\in S^{\times}$, and it remains an identity on the subset.
>
> ### Inverses
> If $a\in S^{\times}$, then $a^{-1}$ is also invertible, with inverse $a$. Therefore $a^{-1}\in S^{\times}$.
>
> All group axioms hold, so $S^{\times}$ is a group. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Semigroups Monoids and Units|Semigroups, Monoids, and Units]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[01 - Group Theory/Exercises/Exercise G8 - Inverse Identities|Exercise G8: Inverse Identities]]

## Notes

The group $S^{\times}$ is called the **group of units** of the monoid $S$. For example, the units of the multiplicative monoid $\mathbb Z$ are $\{1,-1\}$.

**Source status:** Exercise statement from [S1, Ch. 2, §2, Ex. 2.2, printed p. 69, PDF p. 81]. The proof is complete from the monoid axioms and the inverse-of-a-product calculation.
