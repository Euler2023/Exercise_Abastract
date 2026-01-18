---
title: "Exercise G1: Prove Uniqueness of Identity"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - proof
source: "Dummit & Foote, Ch. 1"
created: 2025-01-19
---

# Exercise G1: Uniqueness of Identity

## Problem Statement

> [!question] Exercise
> Let $(G, \cdot)$ be a [[01 - Group Theory/Concepts/Group Definition|group]]. Prove that the identity element $e$ is unique.

## Hints

> [!hint]- Hint 1
> Suppose there are two identity elements $e$ and $e'$.

> [!hint]- Hint 2
> Use the definition of identity: $e \cdot a = a \cdot e = a$ for all $a \in G$.

## Solution

> [!success]- Solution
> ### Approach
> We use a standard uniqueness argument: assume two identities exist and show they must be equal.
>
> ### Proof
> Suppose $e$ and $e'$ are both identity elements in $G$.
>
> By definition of $e'$ being an identity:
> $$e \cdot e' = e$$
>
> By definition of $e$ being an identity:
> $$e \cdot e' = e'$$
>
> Therefore:
> $$e = e \cdot e' = e'$$
>
> Hence the identity element is unique. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]

## Notes

This is a fundamental result that justifies speaking of "the" identity element of a group, rather than "an" identity element.
