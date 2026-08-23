---
title: "Exercise G65: Four Plane Relations and Their Axioms"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - equivalence-relations
  - real-relations
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 7, Ex. 7.5, printed p. 72, PDF p. 84"
created: 2026-08-23
---

# Exercise G65: Four Plane Relations and Their Axioms

## Problem Statement

> [!question] Exercise 7.5
> For relations on $\mathbb R$ defined by **(a)** $\{(s,s)\}$, **(b)** the empty set, **(c)** $xy+1=0$, and **(d)** $x^2y-xy^2-x+y=0$, determine which equivalence axioms hold.

## Hints

> [!hint]- Hint 1
> Factor the equation in (d) as $(x-y)(xy-1)=0$.

## Solution

> [!success]- Solution
> **(a)** Equality is reflexive, symmetric, and transitive, hence an equivalence relation.
> 
> **(b)** The empty relation is symmetric and transitive vacuously, but not reflexive on the nonempty set $\mathbb R$.
> 
> **(c)** The relation $xy=-1$ is symmetric but not reflexive. It is not transitive: from $y=-1/x$ and $z=-1/y=x$, transitivity would require $x^2=-1$, impossible over $\mathbb R$.
> 
> **(d)** The equation factors as
> 
> $$
> (x-y)(xy-1)=0.
> $$
> 
> Thus $x\sim y$ when $y=x$ or $y=1/x$. It is reflexive and symmetric. It is transitive because composing the involution $x\mapsto1/x$ with itself gives the identity (and $0$ is related only to itself). Hence it is an equivalence relation.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §7, Ex. 7.5, printed p. 72, PDF p. 84]. The solution is an independent derivation for this vault, not a solution printed in Artin.
