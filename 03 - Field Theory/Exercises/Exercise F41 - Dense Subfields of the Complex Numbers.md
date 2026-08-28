---
title: "Exercise F41: Dense Subfields of the Complex Numbers"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - subfields
  - density
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 1, Examples of Fields, Ex. 1.3, printed p. 472, PDF p. 484"
created: 2026-08-28
---

# Exercise F41: Dense Subfields of the Complex Numbers

## Problem Statement

> [!question] Exercise 1.3
> Which subfields of $\mathbb C$ are dense subsets of $\mathbb C$?

## Hints

> [!hint]- Hint 1
> Every subfield of $\mathbb C$ contains $\mathbb Q$.
>
> [!hint]- Hint 2
> If a field contains one nonreal number $z$, it contains every number $r+sz$ with $r,s\in\mathbb Q$.

## Solution

> [!success]- Solution
> A subfield $K\subseteq\mathbb C$ is dense in $\mathbb C$ exactly when it is not contained in $\mathbb R$.
>
> If $K\subseteq\mathbb R$, then its closure in $\mathbb C$ is contained in the closed set $\mathbb R$, so $K$ cannot be dense in $\mathbb C$.
>
> Conversely, suppose $K$ contains a nonreal element $z=a+bi$ with $b\ne0$. Since $\mathbb Q\subseteq K$, the set
>
> $$
> \mathbb Q+\mathbb Qz=\{r+sz:r,s\in\mathbb Q\}
> $$
>
> lies in $K$. The real-linear map
>
> $$
> \mathbb R^2\longrightarrow\mathbb C,
> \qquad (r,s)\longmapsto r+sz,
> $$
>
> is an isomorphism because $\operatorname{Im}z\ne0$. Since $\mathbb Q^2$ is dense in $\mathbb R^2$, its image $\mathbb Q+\mathbb Qz$ is dense in $\mathbb C$. Hence $K$ is dense as well.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Definition|Field Definition]]
- [[01 - Group Theory/Concepts/Discrete and Dense Subgroups|Discrete and Dense Subgroups]]

## Notes

- **Routing:** Field Theory is primary because the classification is by the position of a subfield inside $\mathbb C$; topological density supplies the test.
- **Source status:** [S1, Ch. 15, §15.1, Ex. 1.3, printed p. 472, PDF p. 484]. The classification is independent.
