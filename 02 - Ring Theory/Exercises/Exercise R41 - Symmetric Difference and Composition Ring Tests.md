---
title: "Exercise R41: Symmetric Difference and Composition Ring Tests"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - ring-axioms
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §1, Ex. 1.7, printed p. 354, PDF p. 366"
created: 2026-08-27
---

# Exercise R41: Symmetric Difference and Composition Ring Tests

## Problem Statement

> [!question] Exercise 1.7
> Decide whether the given structure forms a ring. If it is not a ring, determine which ring axioms hold and which fail.
>
> **(a)** $U$ is an arbitrary set, and $R$ is the set of subsets of $U$. Define $A+B=(A\cup B)-(A\cap B)$ and $A\cdot B=A\cap B$.
>
> **(b)** $R$ is the set of continuous functions $\mathbb{R}\to\mathbb{R}$. Define $[f+g](x)=f(x)+g(x)$ and $[f\circ g](x)=f(g(x))$.

## Hints

> [!hint]- Hint 1
> In (a), identify subsets with their characteristic functions into $\mathbb{F}_2$.

> [!hint]- Hint 2
> In (b), test both distributive laws using a nonlinear function.

## Solution

> [!success]- Solution
> **(a)** Under $A\mapsto1_A$, symmetric difference becomes addition in $\mathbb{F}_2$ and intersection becomes multiplication. Hence all ring axioms hold; the additive zero is $\varnothing$, the multiplicative identity is $U$, and every element satisfies $A+A=\varnothing$ and $A^2=A$.
>
> **(b)** Pointwise addition makes the functions an abelian group. Composition is associative and has identity $\operatorname{id}_{\mathbb R}$. Right distributivity holds:
>
> $$
> (f+g)\circ h=f\circ h+g\circ h.
> $$
>
> Left distributivity generally fails because $f\circ(g+h)$ need not equal $f\circ g+f\circ h$; take $f(x)=x^2$ and $g=h=1$. Composition is also noncommutative. Thus this is not a ring.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]

## Notes

- **Source status:** The statement is transcribed from [S1, Ch. 11, §1, Ex. 1.7, printed p. 354, PDF p. 366]. The axiom audit is an independent derivation.

