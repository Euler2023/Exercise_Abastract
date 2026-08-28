---
title: "Exercise LA313: Uniqueness of a Rational Module Structure"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - rational-vector-spaces
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 1, Modules, Ex. 1.2, printed p. 437, PDF p. 449"
created: 2026-08-28
---

# Exercise LA313: Uniqueness of a Rational Module Structure

## Problem Statement

> [!question] Exercise 1.2
> Let $V$ be an abelian group. Prove that if $V$ has a structure of $\mathbb Q$-module with its given law of composition as addition, then that structure is uniquely determined.

## Hints

> [!hint]- Hint 1
> In any such structure, multiplication by a nonzero integer $n$ must be an automorphism of the additive group.

## Solution

> [!success]- Solution
> Suppose a $\mathbb Q$-module structure exists. For every nonzero integer $n$, the additive endomorphism
>
> $$
> [n]:V\to V,\qquad v\mapsto nv
> $$
>
> is invertible, because scalar multiplication by $1/n$ is its inverse. Thus, for each $v\in V$, there is a unique element $w$ satisfying $nw=v$.
>
> Now let $q=m/n\in\mathbb Q$, with $n\ne0$. The module axioms force $qv$ to be the unique element $u$ such that
>
> $$
> nu=mv.
> $$
>
> This equation depends only on the given abelian-group law. Therefore every rational scalar action is forced, and two $\mathbb Q$-module structures with the same addition coincide.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]

## Notes

- **Routing:** Module Theory is primary because the question concerns uniqueness of scalar multiplication on a fixed additive group.
- **Existence boundary:** Such a structure exists exactly when the abelian group is uniquely divisible; the exercise asks only for uniqueness when it exists.
- **Source status:** [S1, Ch. 14, §14.1, Ex. 1.2, printed p. 437, PDF p. 449]. The proof is independent.
