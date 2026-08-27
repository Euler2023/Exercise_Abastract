---
title: "Exercise G220: A Normal Subgroup of Minimal Prime Order Is Central"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 6, Ex. 6.4, printed p. 224, PDF p. 236"
created: 2026-08-27
---

# Exercise G220: A Normal Subgroup of Minimal Prime Order Is Central

## Problem Statement

> [!question] Exercise 6.4
> Let $H\trianglelefteq G$ have prime order $p$, where $p$ is the smallest prime dividing $|G|$. Prove $H\subseteq Z(G)$.

## Hints

> [!hint]- Hint 1
> Use the conjugation map to $\operatorname{Aut}(C_p)$.

## Solution

> [!success]- Solution
> Conjugation defines $G\to\operatorname{Aut}(H)$, whose target has order $p-1$. Every prime divisor of $p-1$ is smaller than $p$ and hence does not divide $|G|$. The image order divides both $|G|$ and $p-1$, so the image is trivial. Thus every element of $G$ centralizes $H$, and $H\subseteq Z(G)$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Source status:** [S1, Ch. 7, §6, Ex. 6.4, printed p. 224, PDF p. 236]; source PDF checked; solution independently derived.

