---
title: "Exercise LA333: Gaussian Modules as Abelian Groups with a Complex Structure"
topic: module-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - module-theory
  - gaussian-integers
  - endomorphisms
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 7, Structure of Abelian Groups, Ex. 7.9, printed p. 439, PDF p. 451"
created: 2026-08-28
---

# Exercise LA333: Gaussian Modules as Abelian Groups with a Complex Structure

## Problem Statement

> [!question] Exercise 7.9
> Show that the following concepts are equivalent:
>
> - an $R$-module, where $R=\mathbb Z[i]$;
> - an abelian group $V$, with a homomorphism $\varphi:V\to V$ such that $\varphi\circ\varphi=-\operatorname{identity}$.

## Hints

> [!hint]- Hint 1
> In one direction take $\varphi(v)=iv$; in the other define $(a+bi)v=av+b\varphi(v)$.

## Solution

> [!success]- Solution
> If $V$ is a $\mathbb Z[i]$-module, define
>
> $$
> \varphi(v)=iv.
> $$
>
> It is an additive homomorphism and
>
> $$
> \varphi^2(v)=i^2v=-v.
> $$
>
> Conversely, suppose $V$ is an abelian group with an endomorphism $\varphi$ satisfying $\varphi^2=-I$. Define
>
> $$
> (a+bi)\cdot v=av+b\varphi(v)
> $$
>
> for $a,b\in\mathbb Z$. Additivity is immediate. For multiplication,
>
> $$
> (aI+b\varphi)(cI+d\varphi)
> =(ac-bd)I+(ad+bc)\varphi,
> $$
>
> exactly matching $(a+bi)(c+di)$. Thus this is a $\mathbb Z[i]$-module structure. The two constructions are inverse, proving the equivalence.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]

## Notes

- **Routing:** Module Theory is primary because adjoining the scalar $i$ is equivalent to choosing an endomorphism satisfying $x^2+1$.
- **Source status:** [S1, Ch. 14, §14.7, Ex. 7.9, printed p. 439, PDF p. 451]. The equivalence is independent.
