---
title: "Exercise G222: A Finite Group Is Not Covered by Conjugates of a Proper Subgroup"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 6, Ex. 6.6, printed p. 224, PDF p. 236; Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 16, printed p. 76, PDF p. 91"
created: 2026-08-27
---

# Exercise G222: A Finite Group Is Not Covered by Conjugates of a Proper Subgroup

## Problem Statement

> [!question] Exercise 6.6
> Let $H<G$ be a proper subgroup of a finite group. Prove **(a)** $G$ is not the union of the conjugates of $H$; **(b)** some conjugacy class is disjoint from $H$.

> [!question] Lang Exercise 16
> Let $H$ be a proper subgroup of a finite group $G$. Show that $G$ is not the union of all conjugates of $H$.

## Hints

> [!hint]- Hint 1
> Use Burnside's formula for the transitive action on $G/H$.

## Solution

> [!success]- Solution
> The average number of fixed points in the transitive action on $G/H$ is $1$. The identity fixes $[G:H]>1$ points, so some $g$ fixes none. Now $g$ fixes $xH$ exactly when $x^{-1}gx\in H$, equivalently $g\in xHx^{-1}$. Thus $g$ lies in no conjugate of $H$, proving **(a)**. If $C(g)$ met $H$, then a conjugate of $g$ would lie in $H$, contradicting **(a)**. This proves **(b)**. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes Centralizers and the Class Equation]]

## Notes

- **Source status:** [S1, Ch. 7, §6, Ex. 6.6, printed p. 224, PDF p. 236]; source PDF checked; solution independently derived.
- **Additional source:** [S2, Ch. I, Ex. 16, printed p. 76, PDF p. 91]; Lang's assertion is exactly part (a).
