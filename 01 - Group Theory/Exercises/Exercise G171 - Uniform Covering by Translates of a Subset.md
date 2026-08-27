---
title: "Exercise G171: Uniform Covering by Translates of a Subset"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - group-actions
  - counting
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 10, Ex. 10.2, printed p. 192, PDF p. 204"
created: 2026-08-27
---

# Exercise G171: Uniform Covering by Translates of a Subset

## Problem Statement

> [!question] Exercise 10.2
> Let $S$ be a finite set on which a group $G$ operates transitively, and let $U$ be a subset of $S$. Prove that the subsets $gU$ cover $S$ evenly, that is, that every element of $S$ is in the same number of sets $gU$.

## Hints

> [!hint]- Hint 1
> For fixed $s\in S$, count pairs $(g,u)$ with $gu=s$.

> [!hint]- Hint 2
> In a transitive action all point stabilizers have the same order.

## Solution

> [!success]- Solution
> Fix $s\in S$. The number of translates $gU$ containing $s$, counted with $g\in G$, equals the number of pairs $(g,u)\in G\times U$ satisfying $gu=s$.
>
> For each fixed $u\in U$, transitivity gives some $g_0$ with $g_0u=s$, and all solutions are the coset $g_0G_u$. Thus there are $|G_u|$ solutions. Since the action is transitive, the stabilizers $G_u$ are conjugate and all have the same order $c$. Hence the total number is
>
> $$
> \sum_{u\in U}|G_u|=|U|c,
> $$
>
> independent of $s$. Therefore every element of $S$ lies in the same number of translates $gU$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy and stabilizers]]

## Notes

- If repeated translates are identified as sets rather than indexed by $g$, divide the common multiplicity by the setwise stabilizer of $U$; it remains independent of $s$.
- **Source status:** [S1, Ch. 6, §10, Ex. 10.2, printed p. 192, PDF p. 204]; independent double count.

