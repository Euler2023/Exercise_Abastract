---
title: "Exercise LA315: Simple Modules and Schur's Lemma"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - simple-modules
  - schurs-lemma
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 1, Modules, Ex. 1.4, printed p. 437, PDF p. 449"
created: 2026-08-28
---

# Exercise LA315: Simple Modules and Schur's Lemma

## Problem Statement

> [!question] Exercise 1.4
> A module is called **simple** if it is not the zero module and if it has no proper submodule.
>
> **(a)** Prove that any simple $R$-module is isomorphic to an $R$-module of the form $R/M$, where $M$ is a maximal ideal.
>
> **(b)** Prove Schur's Lemma: Let $\varphi:S\to S'$ be a homomorphism of simple modules. Then $\varphi$ is either zero, or an isomorphism.

## Hints

> [!hint]- Hint 1
> For nonzero $s\in S$, study the map $R\to S$ given by $r\mapsto rs$.

> [!hint]- Hint 2
> The kernel and image of a module homomorphism are submodules.

## Solution

> [!success]- Solution
> **(a)** Choose $0\ne s\in S$. The cyclic submodule $Rs$ is nonzero, so simplicity gives $Rs=S$. Thus
>
> $$
> \pi:R\longrightarrow S,\qquad r\longmapsto rs
> $$
>
> is surjective. Let $M=\ker\pi$. The first isomorphism theorem gives $S\cong R/M$. Submodules of $R/M$ correspond to ideals between $M$ and $R$; simplicity therefore says there is no such intermediate ideal. Hence $M$ is maximal.
>
> **(b)** Both $\ker\varphi\subseteq S$ and $\operatorname{im}\varphi\subseteq S'$ are submodules. If $\varphi\ne0$, its kernel cannot be all of $S$, so it is $0$; its image is nonzero, so it is all of $S'$. Thus $\varphi$ is injective and surjective, hence an isomorphism.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Submodules|Submodules]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]

## Notes

- **Routing:** Module Theory is primary because simplicity is expressed through submodules and kernels.
- **Hypothesis:** Part (a) uses the commutative-ring convention so that the annihilator $M$ is a maximal ideal; for general left modules over noncommutative rings it is a maximal left ideal.
- **Source status:** [S1, Ch. 14, §14.1, Ex. 1.4, printed p. 437, PDF p. 449]. The proofs are independent.
