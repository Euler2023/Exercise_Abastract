---
title: "Exercise G205: Small-Degree Actions Force Normal Subgroups"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 4, Ex. 4.7, printed p. 223, PDF p. 235"
created: 2026-08-27
---

# Exercise G205: Small-Degree Actions Force Normal Subgroups

## Problem Statement

> [!question] Exercise 4.7
> Let $G$ be a group of order $n$ that operates nontrivially on a set of order $r$. Prove that if $n>r!$, then $G$ has a proper normal subgroup.

## Hints

> [!hint]- Hint 1
> Use the homomorphism $G\to S_r$ supplied by the action.

## Solution

> [!success]- Solution
> The action defines a homomorphism $\varphi:G\to S_r$. Since the action is nontrivial, $\varphi(G)\ne1$, so $\ker\varphi$ is proper. If the kernel were trivial, $G$ would embed in $S_r$, forcing $n=|G|\le r!$, contrary to the hypothesis. Thus $\ker\varphi$ is nontrivial as well as proper, and it is normal because it is a kernel. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Source status:** [S1, Ch. 7, §4, Ex. 4.7, printed p. 223, PDF p. 235]; problem checked against the source PDF; solution independently derived for this vault.

