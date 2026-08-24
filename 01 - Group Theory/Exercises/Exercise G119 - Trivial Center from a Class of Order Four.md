---
title: "Exercise G119: Trivial Center from a Class of Order Four"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - conjugacy-classes
  - center
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, Ex. 2.3, printed p. 221, PDF p. 233"
created: 2026-08-24
---

# Exercise G119: Trivial Center from a Class of Order Four

## Problem Statement

> [!question] Exercise 2.3
> A group $G$ of order $12$ contains a conjugacy class of order $4$. Prove that the center of $G$ is trivial.

## Hints

> [!hint]- Hint 1
> If the class is $C(x)$, compute $|Z_G(x)|$ and use $Z(G)\le Z_G(x)$.

## Solution

> [!success]- Solution
> For an element $x$ in the given class,
>
> $$
> |Z_G(x)|=\frac{12}{4}=3.
> $$
>
> The center $Z(G)$ is contained in every centralizer, so $|Z(G)|$ divides $3$. If $|Z(G)|=3$, then $Z(G)=Z_G(x)$. Since $x\in Z_G(x)$, this would imply $x\in Z(G)$, whose conjugacy class would then have order $1$, a contradiction. Thus $|Z(G)|=1$ and $Z(G)=\{1\}$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]

## Notes

- The decisive inclusions are $Z(G)\le Z_G(x)$ and $\langle x\rangle\le Z_G(x)$.
- **Source status:** [S1, Ch. 7, §2, Ex. 2.3, printed p. 221, PDF p. 233]; independent proof.

