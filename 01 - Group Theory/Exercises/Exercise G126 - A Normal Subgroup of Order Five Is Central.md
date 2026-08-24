---
title: "Exercise G126: A Normal Subgroup of Order Five Is Central"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - normal-subgroups
  - center
  - automorphisms
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, Ex. 2.13, printed p. 221, PDF p. 233"
created: 2026-08-24
---

# Exercise G126: A Normal Subgroup of Order Five Is Central

## Problem Statement

> [!question] Exercise 2.13
> Let $N$ be a normal subgroup of a group $G$. Suppose that $|N|=5$ and that $|G|$ is an odd integer. Prove that $N$ is contained in the center of $G$.

## Hints

> [!hint]- Hint 1
> Conjugation defines a homomorphism $G\to\operatorname{Aut}(N)$, and $\operatorname{Aut}(C_5)$ has order $4$.

## Solution

> [!success]- Solution
> Since $N$ has prime order, $N\cong C_5$ and $|\operatorname{Aut}(N)|=4$. Normality lets $G$ act on $N$ by conjugation, giving a homomorphism
>
> $$
> \theta:G\longrightarrow\operatorname{Aut}(N).
> $$
>
> The order of $\operatorname{im}\theta$ divides both the odd integer $|G|$ and $4$. Hence the image is trivial. Therefore $gng^{-1}=n$ for every $g\in G$ and $n\in N$, which says exactly that $N\subseteq Z(G)$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]

## Notes

- The oddness hypothesis kills every possible nontrivial conjugation automorphism at once.
- **Source status:** [S1, Ch. 7, §2, Ex. 2.13, printed p. 221, PDF p. 233]; independent proof.

